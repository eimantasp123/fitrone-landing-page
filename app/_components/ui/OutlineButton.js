"use client";
import Link from "next/link";

export default function OutlineButton({
  text = "Button",
  textColor = "text-accent",
  submitHref = null,
  href = "/",
  extraClasses = "",
  borderColor = "border-accent ",
  hoverBorderColor = "border-accent",
  padding = "py-3 px-10",
}) {
  return (
    <Link
      href={href}
      onClick={() => {
        if (!submitHref) return;
        document.getElementById(submitHref).scrollIntoView({ behavior: "smooth" });
      }}
      className={`whitespace-nowrap flex items-center ${`hover:${hoverBorderColor}`} hover:bg-neutral-900  ${textColor} ${borderColor}  ${padding} ${extraClasses}  border-2 flex rounded-full justify-center font-medium  transition-colors duration-300 ease-in-out`}
    >
      {text}
    </Link>
  );
}
