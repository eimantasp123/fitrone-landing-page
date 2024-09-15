"use client";
import ActiveBadge from "./ActiveBadge";
import { MdDevicesOther, MdOutlineRestaurantMenu } from "react-icons/md";
import { GiProgression } from "react-icons/gi";

const features = [
  {
    icon: <MdDevicesOther className="text-2xl lg:text-3xl  text-accent" />,
    title: "Sync Your Devices",
    description:
      "Connect your smartwatch or fitness tracker to Fitrone to collect your daily activity, workouts, and health data seamlessly.",
  },
  {
    icon: <GiProgression className="text-2xl lg:text-3xl  text-accent" />,
    title: "Track Your Progress",
    description: "Log your weight, body measurements, and progress. Watch your performance metrics update automatically.",
  },
  {
    icon: <MdOutlineRestaurantMenu className="text-2xl lg:text-3xl  text-accent" />,
    title: "Personalized Weekly Meal Plan",
    description:
      "Receive weekly nutrition plans based on your progress and fitness goals. We calculate everything for you, so you can focus on getting results",
  },
];

export default function HowAppWorks() {
  return (
    <section id="howAppWorking" className="w-full h-fit  px-3 lg:px-6 flex flex-col mt-20 lg:mt-32 ">
      {/*  */}
      <div className="gap-4 flex items-center flex-col justify-center">
        <ActiveBadge text="HOW IT WORKS" />
        <h2 className="text-2xl lg:text-4xl lg:w-[600px] text-center lg:leading-[50px] font-normal">
          Your Personalized Path to Smarter Fitness and Nutrition
        </h2>
      </div>

      <div className="flex flex-col lg:flex-row items-stretch gap-6 mt-10 lg:mt-16 justify-center">
        {features.map(({ title, description, icon }) => (
          <Container key={title} title={title} description={description} icon={icon} />
        ))}
      </div>
    </section>
  );
}

const Container = ({ title, description, icon }) => {
  return (
    <div className="rounded-[30px] bg-backgroundDarkLight border border-stone-800 p-6 lg:p-10 lg:w-1/3 ">
      <div className="size-[70px] lg:size-[80px] rounded-full  mb-6 lg:mb-10 border border-stone-800 flex items-center justify-center bg-backgroundBlack">
        {icon}
      </div>
      {/*  */}
      <h4 className=" text-2xl mb-3 font-normal ">{title}</h4>
      <p className="lg:text-[17px] text-white/50 ">{description}</p>
    </div>
  );
};
