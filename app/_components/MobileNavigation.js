import Button from "./ui/Button";
import OutlineButton from "./ui/OutlineButton";

const links = [
  { href: "#home", label: "Home" },
  { href: "#features", label: "Features" },
  { href: "#howAppWorking", label: "How It Works" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

export default function MobileNavigation({ handleMobileClick }) {
  return (
    <>
      <nav>
        <ul className={`flex p-8 text-lg gap-2 font-normal flex-col items-start justify-center space-y-2`}>
          {links.map(({ href, label }) => (
            <li key={`${href}-${label}`} className="flex items-center cursor-pointer  justify-center space-x-2">
              <a onClick={() => handleMobileClick(href)}>{label}</a>
            </li>
          ))}
          {/* <hr className="w-full border-neutral-700" />
          <li className="flex items-center cursor-pointer justify-center space-x-2">
            <a href="/faq">FAQ</a>
          </li> */}
        </ul>
      </nav>
      <div className="px-8 mt-4 flex flex-col items-center  space-y-4 mb-[150px]">
        <Button route="http://localhost:3000/login" text="Log In" extraClasses="w-full max-w-[500px]" />
        <OutlineButton
          route="http://localhost:3000/register"
          text="Sign Up"
          borderColor="border-stone-700"
          extraClasses="w-full max-w-[500px]"
        />
      </div>
    </>
  );
}
