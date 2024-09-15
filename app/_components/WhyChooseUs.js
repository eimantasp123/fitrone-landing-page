import ActiveBadge from "./ui/ActiveBadge";
import { motion } from "framer-motion";

export default function WhyChooseUs() {
  return (
    <section className="w-full px-3 lg:px-6">
      <div className="flex flex-col text-center items-center justify-center  bg-backgroundDarkLight gap-5 p-8 lg:p-20 rounded-[30px] border border-stone-800">
        <ActiveBadge text="BENEFITS" backgroundColor="bg-backgroundDark" />
        <h2 className="text-2xl lg:text-4xl text-center text-stone-200   font-semibold  ">Why Choose Fitrone?</h2>
        <p className="lg:text-lg text-white/60">
          Tired of one-size-fits-all fitness plans? With Fitrone, you get a personalized solution that evolves with you. We
          analyze your workout data, body measurements, and fitness goals to provide nutrition plans designed specifically for
          your needs — updated every week!
        </p>
      </div>
    </section>
  );
}
