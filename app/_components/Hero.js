import Button from "./ui/Button";
import ActiveBadge from "./ui/ActiveBadge";
import OutlineButton from "./ui/OutlineButton";

export default function Hero() {
  const submit = () => {
    document.getElementById("pricing").scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section id="home" className="flex flex-col items-center  gap-6 lg:gap-10  mb-14 mt-14 lg:mt-20 lg:mb-10  px-0 lg:px-6 ">
      <ActiveBadge text="We're launching on 2024.12.01!" />
      <h1 className="text-3xl text-center mt-5 text-stone-200 md:text-5xl lg:text-6xl  xl:text-7xl  font-semibold  ">
        Personalized Fitness, Real-Time Results.
      </h1>
      <p className=" max-w-[1100px] px-4  text-center lg:text-lg text-stone-300 ">
        Fitrone is your ultimate fitness companion. Sync your devices, track progress, and get personalized weekly meal plans
        based on your body’s changes. No guesswork—just tailored results.
      </p>
      <div className="flex flex-col sm:flex-row items-center font-medium justify-center gap-5">
        <Button route="http://localhost:3000/register" text="Get Started Today" />
        <OutlineButton submitHref="pricing" text="Explore Pricing" />
      </div>
    </section>
  );
}
