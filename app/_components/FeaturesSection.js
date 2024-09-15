import { FaUtensils, FaDumbbell, FaComments, FaLock } from "react-icons/fa";
import ActiveBadge from "./ui/ActiveBadge";
import Button from "./ui/Button";

const features = [
  {
    icon: <FaUtensils className="text-black text-md" />,
    title: "Personalized Nutrition Plan",
    description: "Get a meal plan tailored to your goals and needs.",
  },
  {
    icon: <FaLock className="text-black text-md" />,
    title: "Secure Data Storage ",
    description: "Your data is fully protected with advanced encryption.",
  },
  {
    icon: <FaComments className="text-black text-md" />,
    title: "Real-Time Consultations",
    description: "Get expert advice and answers instantly.",
  },
  {
    icon: <FaDumbbell className="text-black text-md" />,
    title: "Personalized Workout Plan",
    description: "Follow a custom workout plan with real-time tracking. ",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="h-fit w-full flex flex-col mt-24 lg:mt-32 items-center justify-center ">
      <div className="flex flex-col items-center lg:w-[1200px] gap-3 lg:gap-7">
        <ActiveBadge text="WHAT YOU'LL GET" />
        <h2 className="text-2xl lg:text-[40px] mt-4 lg:mt-0 font-semibold text-center">Unlock Your Full Potential</h2>
        <p className="lg:text-lg text-white/80 px-3 lg:w-[800px] text-center">
          Fitrone goes beyond tracking — offering personalized insights, dynamic meal plans, and progress-driven results tailored
          to your evolving fitness journey.
        </p>
      </div>
      <div className="w-full flex flex-col lg:flex-row  px-3 lg:px-4 gap-6 mt-14">
        {/*  */}
        <div className="p-6  bg-gradient-to-b from-[#1d1d1d] to-[#141414] flex items-center justify-center flex-col  border h-[400px] rounded-[30px] gap-6 border-stone-800">
          <span className="text-center bg-red-500  p-20  w-full h-full rounded-[24px] ">IMAGE</span>
          <div className="lg:px-4 flex  flex-col w-full gap-1 lg:gap-2">
            <h6 className="text-[23px] font-medium text-stone-200">Trainer Integration</h6>
            <p className="lg:text-[17px] text-white/50">
              Choose from a variety of certified personal trainers to customize your plan even further.
            </p>
          </div>
        </div>
        {/*  */}
        <div className="p-6 bg-gradient-to-b from-[#1d1d1d] to-[#141414] flex items-center justify-center flex-col  border h-[400px] rounded-[30px] gap-6 border-stone-800">
          <span className="text-center bg-red-500  p-20  w-full h-full rounded-[24px] ">IMAGE</span>
          <div className="lg:px-4 flex  flex-col w-full gap-1 lg:gap-2">
            <h6 className="text-[23px] font-medium text-stone-200">Device Integration</h6>
            <p className="lg:text-[17px] text-white/50">
              Sync your fitness trackers (like Fitbit, Apple Watch, Garmin) for seamless data collection.
            </p>
          </div>
        </div>
        {/*  */}
        <div className="p-6 bg-gradient-to-b from-[#1d1d1d] to-[#141414] flex items-center justify-center flex-col  border h-[400px] rounded-[30px] gap-6 border-stone-800">
          <span className="text-center bg-red-500  p-20  w-full h-full rounded-[24px] ">IMAGE</span>
          <div className="lg:px-4 flex  flex-col w-full gap-1 lg:gap-2">
            <h6 className="text-[23px] font-medium text-stone-200">Progress Tracking</h6>
            <p className="lg:text-[17px] text-white/50">
              Track weight, body measurements, workout intensity, and more. All your data in one place.
            </p>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="w-full px-3 flex flex-col lg:flex-row gap-6 mt-6">
        {/*  */}
        <div className="lg:w-1/2 p-6  rounded-[30px] w-full flex flex-col-reverse lg:flex-row  bg-gradient-to-b from-[#1d1d1d] to-[#141414] border border-stone-800">
          <div className="lg:px-4 lg:w-1/2 flex lg:items-start flex-col lg:justify-center mt-6 lg:mt-0 gap-1 lg:gap-2 h-full">
            <h6 className="text-[23px] font-medium leading-[30px]  text-stone-200">Weekly Personalized Nutrition Plans</h6>
            <p className="lg:text-[17px] text-white/50">
              Tailored to your fitness progress, body changes, and goals. Updated every week for optimal results.
            </p>
          </div>
          <div className="bg-red-500 flex items-center justify-center rounded-[30px] lg:w-1/2 h-[250px] "> IMAGE</div>
        </div>
        <div className="lg:w-1/2 p-6  rounded-[30px] w-full flex flex-col-reverse lg:flex-row  bg-gradient-to-b from-[#1d1d1d] to-[#141414] border border-stone-800">
          <div className="lg:px-4 lg:w-1/2 flex lg:items-start flex-col lg:justify-center mt-6 lg:mt-0 gap-1 lg:gap-2 h-full">
            <h6 className="text-[23px] font-medium leading-[30px]  text-stone-200">Dynamic Adjustments</h6>
            <p className="lg:text-[17px] text-white/50">
              Your nutrition plan evolves weekly based on your tracked data, keeping your progress on track.
            </p>
          </div>
          <div className="bg-red-500 flex items-center justify-center rounded-[30px] lg:w-1/2 h-[250px] "> IMAGE</div>
        </div>
        {/*  */}
      </div>
    </section>
  );
}
