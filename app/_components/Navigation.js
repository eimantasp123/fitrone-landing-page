import { useRef, useState } from "react";
import { motion } from "framer-motion";

const links = [
  { href: "#home", label: "Home" },
  { href: "#features", label: "Features" },
  { href: "#howAppWorking", label: "How It Works" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

export default function Navigation({ handleClick, activeSection }) {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <nav className="shrink overflow-hidden relative whitespace-nowrap w-[52%]  border rounded-full shadow-custom-dark shadow-[#00000011] border-stone-800  hidden lg:flex justify-center items-stretch space-x-6">
      <ul className="list-none  bg-backgroundDarkLight relative  select-none w-full  border-stone-800  h-[45px] flex p-1 justify-between items-center gap-2">
        {links.map((link) => (
          <Tab
            key={link.href}
            setPosition={setPosition}
            href={link.href}
            label={link.label}
            handleClick={handleClick}
            activeSection={activeSection}
          />
        ))}
        <Cursor position={position} />
      </ul>
    </nav>
  );
}

const Tab = ({ href, label, handleClick, activeSection, setPosition }) => {
  const ref = useRef(null);

  return (
    <li className="h-full z-10 w-full flex items-center justify-center">
      <a
        ref={ref}
        onMouseEnter={() => {
          if (!ref.current) return;

          const { width } = ref.current.getBoundingClientRect();

          setPosition({
            width,
            opacity: 1,
            left: ref.current.offsetLeft,
          });
        }}
        onMouseLeave={() => {
          setPosition((pv) => ({
            ...pv,
            opacity: 0,
          }));
        }}
        onClick={() => handleClick(href)}
        className={`cursor-pointer transition-colors duration-200 ease-in ${
          activeSection && activeSection === href.slice(1) ? " bg-[#202020ec] text-accent " : ""
        }  flex items-center mix-blend-difference justify-center rounded-full h-full w-full`}
      >
        {label}
      </a>
    </li>
  );
};

const Cursor = ({ position }) => {
  return <motion.li animate={position} className="absolute z-0  h-[37px] rounded-full bg-neutral-800" />;
};
