import { MdMessage, MdFitnessCenter, MdRestaurantMenu, MdSecurity, MdTrackChanges } from "react-icons/md";
import FeaturesItem from "./FeaturesItem";

const features = [
  {
    title: "Personalized Workout Plans",
    icon: MdFitnessCenter,
  },
  {
    title: "Customized Nutrition Plans",
    icon: MdRestaurantMenu,
  },
  {
    title: "Real-Time Trainer Consultations",
    icon: MdMessage,
  },
  {
    title: "Secure Data Storage",
    icon: MdSecurity,
  },
  {
    title: "Progress Tracking and Analytics",
    icon: MdTrackChanges,
  },
];

export default function ShortFeatures() {
  return (
    <div className="h-content p-8 text-center  bg-stone-900 w-full text-secondaryDark  ">
      {/* <h3 className="text-lg font-medium">5 Key Features of the Platform</h3> */}
      <div className="flex justify-evenly container mx-auto ">
        {features.map(({ title, icon }) => (
          <FeaturesItem key={title} title={title} icon={icon} />
        ))}
      </div>
    </div>
  );
}
