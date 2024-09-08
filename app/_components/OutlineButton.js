import Link from "next/link";

export default function OutlineButton({
  text = "Button",
  textColor = "text-accent1",
  route = "/",
  extraClasses = "",
  borderColor = "border-accent1 ",
  hoverBorderColor = "border-accent1",
  padding = "py-3 px-10",
}) {
  return (
    <Link
      href={route}
      className={`whitespace-nowrap flex items-center ${`hover:${hoverBorderColor}`} hover:bg-neutral-800  ${textColor} ${borderColor}  ${padding} ${extraClasses}  border-2 flex rounded-full justify-center font-medium  transition-colors duration-300 ease-in-out`}
    >
      {text}
    </Link>
  );
}
