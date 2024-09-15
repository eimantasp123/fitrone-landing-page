import Link from "next/link";
import React from "react";

export default function LinkDefault({ route = "/", text = "Log In" }) {
  return (
    <>
      <Link href={route} className=" whitespace-nowrap hover:text-accent transition-colors duration-100 ease-in">
        {text}
      </Link>
    </>
  );
}
