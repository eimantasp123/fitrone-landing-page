import LinkDefault from "./LinkDefault";

const links = [
  { href: "/terms", label: "Terms of services" },
  { href: "/privacy", label: "Privacy policy" },
  { href: "/help", label: "Help Center" },
];

export default function Footer() {
  return (
    <footer className="border-t-[1px] mt-10 flex items-center h-auto py-5 transition-all duration-300 ease-in bg-neutral-900 border-stone-800">
      <div className="container mx-auto max-w-[1500px] flex flex-col md:flex-row gap-6 items-center  justify-between px-6 my-5">
        {/* Left Side Container */}
        <ul className=" flex flex-wrap justify-center gap-6 ">
          {links.map(({ href, label }) => (
            <li key={`${href}${label}`}>
              <LinkDefault href={href} text={label} />
            </li>
          ))}
        </ul>

        {/* Center Content */}
        <p className="font-normal text-stone-500 md:text-stone-100">&copy; {new Date().getFullYear()} Copyright Fitrone</p>
      </div>
    </footer>
  );
}
