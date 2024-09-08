import Image from "next/image";
import Hero from "./_components/Hero";
import FeaturesSection from "./_components/FeaturesSection";
import PricingSection from "./_components/PricingSection";
import AboutUsSection from "./_components/AboutUsSection";
import ContactSection from "./_components/ContactSection";

export default function Page() {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <Hero />
        <div className="px-6 mt-10">
          <Image src="/hero.jpg" className=" custom-border" width={1200} height={800} alt="hero" />
        </div>
        <FeaturesSection />
        <PricingSection />
        <AboutUsSection />
        <ContactSection />
      </div>
    </>
  );
}
