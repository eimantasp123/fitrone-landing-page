"use client";
import { useEffect, useReducer, useRef, useState } from "react";
import ActiveBadge from "./ui/ActiveBadge";
import { IoIosArrowUp } from "react-icons/io";
import { HiPlus } from "react-icons/hi";

// FAQ data
const faqs = [
  {
    question: "What is Fitrone?",
    answer:
      "Fitrone is a personalized fitness app that syncs with your wearable devices to track your progress and provide customized weekly nutrition plans. Our system evolves based on your real-time data, ensuring your meal plans and workout recommendations adapt to your body’s changing needs.",
  },
  {
    question: "How does Fitrone sync with my devices?",
    answer:
      "Fitrone integrates with popular wearable devices like Apple Watch, Fitbit, Garmin, and more. Simply connect your device through the app, and Fitrone will automatically pull data such as workouts, sleep patterns, and calorie burn to tailor your fitness plan.",
  },
  {
    question: "Can I customize my meal plans?",
    answer:
      "Yes! Your meal plans are fully customizable. Based on your fitness goals, dietary preferences, and real-time progress, you’ll receive weekly meal recommendations that you can adjust to fit your specific needs.",
  },
  {
    question: "Do I need to manually update my progress?",
    answer:
      "No, Fitrone automatically tracks your progress by syncing with your wearable device. However, you can manually log body measurements or specific workouts if you prefer more detailed tracking.",
  },
  {
    question: "Is there a free trial?",
    answer:
      "Currently, Fitrone does not offer a free trial. However, you can subscribe to our monthly or yearly plans, with the flexibility to cancel anytime if it doesn’t meet your expectations.",
  },
  {
    question: "How does Fitrone personalize my plan?",
    answer:
      "Fitrone uses your real-time data—such as workouts, heart rate, calorie burn, and sleep metrics—from synced devices to create dynamic meal and fitness plans. These plans adjust weekly based on your activity, progress, and fitness goals.",
  },
  {
    question: "Can I use Fitrone without a wearable device?",
    answer:
      "Yes, while Fitrone works best when synced with wearable devices, you can still manually input data such as body weight, workout details, and progress to receive customized plans.",
  },
  {
    question: "What makes Fitrone different from other fitness apps?",
    answer:
      "Fitrone offers real-time personalized fitness and nutrition plans based on your unique progress. Unlike generic apps, our plans evolve as your body changes, helping you avoid plateaus and stay motivated.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null); // Track which accordion is open across both columns

  // Toggle accordion open/close globally
  const handleToggle = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  return (
    <section id="faq" className="w-full px-3 lg:px-6 select-none flex flex-col">
      <div className="flex flex-col items-center gap-5 justify-center">
        <ActiveBadge text="FAQS" />
        <h2 className="text-stone-200 text-2xl font-semibold lg:text-4xl">We&apos;ve Got The Answers</h2>
      </div>

      {/* FAQ SECTIONS */}
      <div className="flex flex-col lg:flex-row gap-6 my-10 lg:my-16">
        {/* Left Column */}
        <div className="w-full lg:w-1/2 flex flex-col gap-3 lg:gap-4">
          {faqs.slice(0, 4).map((faq, index) => (
            <Accordion key={index} faq={faq} isOpen={openIndex === index} onToggle={() => handleToggle(index)} />
          ))}
        </div>

        {/* Right Column */}
        <div className="w-full lg:w-1/2 flex flex-col gap-3 lg:gap-4">
          {faqs.slice(4, 8).map((faq, index) => (
            <Accordion key={index + 4} faq={faq} isOpen={openIndex === index + 4} onToggle={() => handleToggle(index + 4)} />
          ))}
        </div>
      </div>
    </section>
  );
}

// Accordion Component
const Accordion = ({ faq, isOpen, onToggle }) => {
  const contentRef = useRef(null); // Ref to measure the height of content

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.style.maxHeight = isOpen ? `${contentRef.current.scrollHeight}px` : "0px";
    }
  }, [isOpen]);

  return (
    <div
      className={`border p-5 lg:p-6 transition-colors duration-300 ease-in-out rounded-2xl  ${
        isOpen ? "bg-backgroundDarkLight border-accent/5 " : "border-stone-800 "
      }`}
    >
      {/* Accordion Header */}
      <div className="flex justify-between items-center cursor-pointer" onClick={onToggle}>
        <h3 className={`text-lg  w-[80%] font-medium ${isOpen ? "text-accent" : "text-stone-300"} `}>{faq.question}</h3>
        <HiPlus
          className={`transition-transform  text-lg duration-300 ease-in-out ${
            isOpen ? "rotate-45 text-accent" : "text-stone-300"
          }`}
        />
      </div>

      {/* Accordion Content */}
      <div
        ref={contentRef}
        className="transition-all duration-500 ease-in-out overflow-hidden max-h-0"
        style={{ maxHeight: "0px" }}
      >
        <p className=" text-white/50 mt-3">{faq.answer}</p>
      </div>
    </div>
  );
};
