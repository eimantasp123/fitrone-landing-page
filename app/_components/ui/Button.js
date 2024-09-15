import Link from "next/link";

export default function Button({
  bg = "bg-accent",
  textColor = "text-textDark",
  borderColor = "border-accent",
  text = "Button",
  route = "/",
  hoverBgColor = "hover:bg-accentDark",
  hoverBorderColor = "hover:border-accentDark",
  extraClasses = "",
  padding = "py-3 px-10",
}) {
  return (
    <Link
      href={route}
      className={`whitespace-nowrap ${hoverBgColor} ${hoverBorderColor}  ${padding} ${extraClasses} ${bg} ${textColor} ${borderColor}   border-2 flex rounded-full justify-center font-medium  transition-colors duration-300 ease-in-out`}
    >
      {text}
    </Link>
  );
}
