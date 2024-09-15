import React from "react";
import Image from "next/image";
import OutlineButton from "./ui/OutlineButton";

export default function CtaSection() {
  return (
    <section className=" w-full px-6 my-10">
      <div className="flex flex-col gap-4  items-center justify-center text-center ">
        <span className="size-[90px] bg-accent rounded-full flex items-center justify-center text-textDark">
          <Image src="/icon.png" width={50} height={100} alt="cta-icon" />
        </span>
        <h1 className="text-3xl lg:text-[50px] font-semibold mb-2 lg:mb-4 my-5 lg:leading-[60px] max-w-[300px]  lg:max-w-[550px]">
          Are you ready to get started?
        </h1>
        <p className=" text-base lg:text-[17px] text-stone-300 mb-6 max-w-[700px]">
          Sync your devices, track your progress, and get weekly plans that adapt to your goals. Join Fitrone today and take the
          guesswork out of fitness!
        </p>
        <OutlineButton text="Get Started Now" href="http://localhost:3000/register" />
      </div>
    </section>
  );
}
