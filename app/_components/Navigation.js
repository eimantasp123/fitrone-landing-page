import Link from "next/link";

// Navigation links
const links = [
  { href: "#home", label: "Home" },
  { href: "#features", label: "Features" },
  { href: "#pricing", label: "Pricing" },
  { href: "#about", label: "About Us" },
  { href: "#contact", label: "Contact" },
  { href: "/faq", label: "FAQ" },
];

export default function Navigation({ handleClick, activeSection }) {
  return (
    <ul className="list-none bg-neutral-900 border select-none w-full shadow-custom-dark shadow-[#00000011] border-stone-800 rounded-full h-[45px] flex p-1 justify-between items-center gap-2">
      {links.map(({ href, label }) => (
        <li key={`${href}-${label}`} className="h-full w-full flex items-center justify-center">
          <a
            onClick={() => handleClick(href)}
            className={`cursor-pointer transition-colors duration-200 ease-in ${
              activeSection && activeSection === href.slice(1) ? " bg-neutral-800 text-accent1 " : ""
            }  hover:bg-backgroundDark flex items-center justify-center rounded-full h-full w-full`}
          >
            {label}
          </a>
        </li>
      ))}
    </ul>
  );
}
