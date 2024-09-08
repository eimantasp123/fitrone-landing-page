"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Navigation from "./Navigation";
import MenuButton from "./MenuButton";
import MobileNavigation from "./MobileNavigation";
import OutlineButton from "./OutlineButton";
import LinkDefault from "./LinkDefault";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(null); // Active section state
  const [isManualScroll, setIsManualScroll] = useState(true); // Track manual scroll
  const sections = useRef([]); // Store section references
  const scrollTimeoutRef = useRef(null); // Store scroll timeout reference
  const headerHeight = 180; // Header height

  // Handle scroll to section with smooth behavior
  const scrollToSection = useCallback(
    (sectionId) => {
      clearTimeout(scrollTimeoutRef.current); // Clear timeout if exists to prevent multiple scroll events
      setActiveSection(sectionId); // Set active section

      const section = document.getElementById(sectionId);
      if (!section) return;
      const sectionOffsetTop = sectionId === "home" ? 0 : section?.offsetTop - headerHeight + 60; // Calculate the offset top of the section

      window.scrollTo({
        top: sectionOffsetTop,
        behavior: "smooth",
      });
    },
    [headerHeight]
  );

  // Handle the scroll event to update active section
  const handleActiveSection = useCallback(() => {
    if (!isManualScroll || window.location.pathname !== "/") return; // Do nothing if manual scroll is active or not on the home page

    const pageYOffset = window.pageYOffset + headerHeight;
    let newActiveSection = null;

    sections.current.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      // Check if the current section is within the section bounds
      if (pageYOffset >= sectionTop && pageYOffset <= sectionTop + sectionHeight) {
        newActiveSection = section.id;
      }
    });

    if (newActiveSection && newActiveSection !== activeSection) {
      setActiveSection(newActiveSection);
    }
  }, [activeSection, isManualScroll]);

  // Handle click event on navigation links and prevent from re-creating the function on each render
  const handleClick = useCallback(
    (href) => {
      if (href.startsWith("#")) {
        const sectionId = href.slice(1);

        // If the current route is the home page, scroll to the section
        if (window.location.pathname === "/") {
          scrollToSection(sectionId);
        } else {
          // If the current route is not the home page, navigate to the home page and scroll to the section

          setPendingSection(sectionId); // Store the pending section to scroll to after navigation
          router.push("/");
        }
      } else {
        // For normal route navigation
        setActiveSection(null); // Clear active section before navigating
        router.push(href);
      }
    },
    [scrollToSection, router]
  );

  // Handle click event on mobile navigation links and prevent from re-creating the function on each render
  const handleMobileClick = useCallback(
    (href) => {
      setIsOpen(false);
      handleClick(href);
    },
    [handleClick]
  );

  // Initialize the sections and add scroll event listener
  useEffect(() => {
    if (window.location.pathname === "/") {
      sections.current = document.querySelectorAll("section"); // Get all sections on the page
      handleActiveSection(); // Call handleActiveSection to set the initial active section
    }

    window.addEventListener("scroll", handleActiveSection); // Add scroll event listener

    // Remove scroll event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleActiveSection);
    };
  }, [handleActiveSection]);

  return (
    <header className="border-b-[1px] flex item-center h-24 lg:h-28 transition-all duration-300 ease-in  z-20  sticky top-0  bg-neutral-900 bg-opacity-60 backdrop-blur-2xl border-stone-800">
      <div className="container mx-auto max-w-[1500px] flex items-center justify-between py-4 px-6 transition-all duration-200 ease-in ">
        {/* Logo Section */}
        <div className="flex-none w-[250px]  flex items-center justify-start">
          <Image src="/logo-white-2.png" className="cursor-pointer" width={110} height={24} alt="logo" />
        </div>

        {/* Main Menu Section */}
        <nav className="shrink whitespace-nowrap w-[50%] 3xl:w-[55%] transition-all duration-200 ease-in hidden lg:flex justify-center items-stretch space-x-6">
          <Navigation handleClick={handleClick} activeSection={activeSection} />
        </nav>

        {/* Right Side Buttons Section */}
        <div className="flex-none w-[250px]  hidden lg:flex  justify-end items-center space-x-6">
          <LinkDefault href="http://localhost:3000/login" />
          <OutlineButton
            text="Sign Up"
            route="http://localhost:3000/login"
            padding="px-6 md:px-8 lg:px-10"
            extraClasses="h-[42px]"
          />
        </div>
        <div className="lg:hidden">
          <MenuButton active={isOpen} setActive={setIsOpen} />
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
