"use client";
import { animate, motion, useMotionValue } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";
import useMeasure from "react-use-measure";

const logoVariants = [
  { src: "/fitbit-logo.png", width: 90, height: 50, alt: "Fitbit Logo" },
  { src: "/apple-logo.png", width: 105, height: 50, alt: "Fitbit Logo" },
  { src: "/garmin-logo.png", width: 100, height: 50, alt: "Fitbit Logo" },
  { src: "/oura-logo.png", width: 80, height: 50, alt: "Fitbit Logo" },
  { src: "/whoop-logo.png", width: 100, height: 50, alt: "Fitbit Logo" },
  { src: "/samsung-logo.png", width: 150, height: 50, alt: "Fitbit Logo" },
];

export default function DevicesLogoCarousel() {
  let [ref, { width }] = useMeasure();
  const xTranslation = useMotionValue(0);

  useEffect(() => {
    let controls;
    let finalPosition = -width / 2 - 20;
    controls = animate(xTranslation, [0, finalPosition], {
      ease: "linear",
      duration: 25,
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 0,
    });
    return () => controls.stop();
  }, [width, xTranslation]);

  return (
    <div className=" px-6 relative h-fit w-full my-16 xl:mt-32 lg:my-24 flex flex-col items-center justify-center gap-3">
      <h2 className=" text-2xl text-center text-textLight lg:text-4xl font-semibold">
        Seamlessly Sync with All Your Favorite Devices
      </h2>

      {/* Container with fixed width and overflow-hidden */}
      <div className="relative w-full my-6 lg:mt-16 overflow-hidden">
        {/* Gradient overlay on the left and right sides */}
        <div className="absolute top-0 left-0 w-10 md:w-20 lg:w-40 h-full bg-gradient-to-r from-backgroundDark z-10 to-transparent pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-10 md:w-20 lg:w-40 h-full bg-gradient-to-l from-backgroundDark z-10  to-transparent pointer-events-none"></div>

        {/* Infinite Carousel for Device Logos */}
        <motion.div className="flex items-center w-max gap-10" ref={ref} style={{ x: xTranslation }}>
          {/* Repeat logos twice for continuous scroll */}
          {[...logoVariants, ...logoVariants].map((logo, index) => (
            <Image
              key={index}
              src={logo.src}
              width={logo.width}
              height={logo.height}
              alt={logo.alt}
              className="filter sm:mx-4 lg:mx-10 invert brightness-50 hover:brightness-0 transition-all duration-300 ease-in contrast-150 grayscale"
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
