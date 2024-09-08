import Link from "next/link";

export default function Button({
  bg = "bg-accent1",
  textColor = "text-secondary",
  borderColor = "border-accent1",
  text = "Button",
  route = "/",
  hoverBgColor = "bg-accent1Darker",
  hoverBorderColor = "border-accent1Darker",
  extraClasses = "",
  padding = "py-3 px-10",
}) {
  return (
    <Link
      href={route}
      className={`whitespace-nowrap ${padding} ${extraClasses} ${bg} ${textColor} ${borderColor} ${`hover:${hoverBgColor}`} ${`hover:${hoverBorderColor}`}  border-2 flex rounded-full justify-center font-medium  transition-colors duration-300 ease-in-out`}
    >
      {text}
    </Link>
  );
}
