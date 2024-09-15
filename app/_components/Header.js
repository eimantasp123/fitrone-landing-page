"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";
import Navigation from "./Navigation";
import MobileMenuButton from "./ui/MobileMenuButton";
import MobileNavigation from "./MobileNavigation";
import Logo from "./ui/Logo";
import HeaderAuth from "./HeaderAuth";

// Header component
export default function Header() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(null); // Active section state
  const [isAutomaticalScroll, setIsAutomaticalScroll] = useState(false); // Automatical scroll state
  const sections = useRef([]); // Store section references
  const scrollTimeoutRef = useRef(null); // Store scroll timeout reference
  const headerHeight = 180; // Header height

  // Handle scroll to section with smooth behavior
  const scrollToSection = useCallback(
    (sectionId) => {
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      setActiveSection(sectionId);
      setIsAutomaticalScroll(true);

      const section = document.getElementById(sectionId);
      if (!section) return;
      const sectionOffsetTop = sectionId === "home" ? 0 : section?.offsetTop - headerHeight + 60;

      window.scrollTo({
        top: sectionOffsetTop,
        behavior: "smooth",
      });

      // Set timeout to disable automatical scroll
      scrollTimeoutRef.current = setTimeout(() => {
        setIsAutomaticalScroll(false);
      }, 600);
    },
    [headerHeight]
  );

  // Handle click event on navigation links
  const handleClick = useCallback(
    (href) => {
      if (href.startsWith("#")) {
        const sectionId = href.substring(1);
        if (window.location.pathname === "/") {
          scrollToSection(sectionId);
        } else {
          router.push("/");
          // Use MutationObserver to know when the layout main content is loaded
          const observer = new MutationObserver(() => {
            const mainContent = document.querySelector("#home-page");
            if (mainContent) {
              observer.disconnect(); // Stop observing once content is loaded
              scrollToSection(sectionId); // Scroll to section after content is loaded
            }
          });
          observer.observe(document.body, { childList: true, subtree: true });
        }
      } else {
        router.push(href);
        setActiveSection(null);
      }
    },
    [scrollToSection, router]
  );

  // Handle click event on mobile navigation links
  const handleMobileClick = useCallback(
    (href) => {
      setIsOpen(false);
      handleClick(href);
    },
    [handleClick]
  );

  // Use IntersectionObserver to detect active section
  useEffect(() => {
    const observerOptions = {
      rootMargin: `-${headerHeight}px 0px 0px 0px`, // Account for the sticky header
      threshold: 0.5, // Trigger when 50% of the section is visible
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id); // Set the active section when it enters view
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);
    if (!isAutomaticalScroll) {
      sections.current = document.querySelectorAll("section");
      sections.current.forEach((section) => observer.observe(section));
    }

    return () => {
      sections.current.forEach((section) => observer.unobserve(section));
    };
  }, [headerHeight, isAutomaticalScroll]);

  return (
    <header className="border-b-[1px] flex item-center h-24 lg:h-28 transition-all duration-300 ease-in  z-20  sticky top-0  bg-backgroundBlack bg-opacity-60 backdrop-blur-2xl border-stone-800">
      <div className="relative container mx-auto max-w-[1500px]  flex items-center justify-between py-4 px-6 transition-all duration-200 ease-in ">
        {/* Logo Section */}
        <Logo />

        {/* Main Menu Section */}
        <Navigation handleClick={handleClick} activeSection={activeSection} />

        {/* Right Side Buttons Section for lg screen */}
        <HeaderAuth />

        {/* Mobile Menu Button */}

        <div className="lg:hidden">
          <MobileMenuButton active={isOpen} setActive={setIsOpen} />
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`bg-neutral-900 lg:hidden z-20 absolute top-24 right-0 left-0  ${
          isOpen ? "h-dvh" : "h-0"
        } transition-all duration-500 ease-in-out overflow-y-auto custom-scrollbar `}
      >
        <MobileNavigation handleMobileClick={handleMobileClick} />
      </div>
    </header>
  );
}
