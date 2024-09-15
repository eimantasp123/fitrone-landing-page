import Hero from "./_components/Hero";
import FeaturesSection from "./_components/FeaturesSection";
import PricingSection from "./_components/PricingSection";
import HeroImages from "./_components/ui/HeroImages";
import DevicesLogoCarousel from "./_components/ui/DevicesLogoCarousel";
import HowAppWorks from "./_components/ui/HowAppWorks";
import WhyChooseUs from "./_components/WhyChooseUs";
import FaqSection from "./_components/FaqSection";
import RatingSection from "./_components/RatingSection";
import CtaSection from "./_components/CtaSection";

export const metadata = {
  title: "Fitrone",
  description: "Expert Coaching. Personalized Progress. Secure.",
};

export default function Page() {
  return (
    <>
      <div id="home-page" className="flex flex-col justify-center items-center">
        {/*  */}
        <Hero />

        {/*  */}
        <HeroImages />

        {/*  */}
        <DevicesLogoCarousel />

        {/*  */}
        <WhyChooseUs />

        {/*  */}
        <FeaturesSection />

        {/*  */}
        <RatingSection />

        {/*  */}
        <HowAppWorks />

        {/*  */}
        <PricingSection />

        {/*  */}
        <FaqSection />

        {/*  */}
        <CtaSection />
      </div>
    </>
  );
}
