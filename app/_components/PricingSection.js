import React from "react";
import ActiveBadge from "./ui/ActiveBadge";
import { SlStar } from "react-icons/sl";
import { GoCheckCircle } from "react-icons/go";
import Link from "next/link";

export default function PricingSection() {
  return (
    <section id="pricing" className="w-full my-28 lg:my-36">
      {/*  */}
      <div className="flex px-3 lg:px-6 flex-col items-center justify-center">
        <ActiveBadge text="CHOOSE YOUR PLAN" />
        <h2 className="text-2xl lg:text-4xl font-medium text-center mt-5 mb-2 xl:leading-[50px]">
          Flexible Plans, Powerful Results
        </h2>
        <p className="text-stone-400 text-center lg:text-lg">
          No hidden fees. No trial periods. Just choose the plan that fits your fitness needs and get started today.
        </p>
      </div>

      {/*  */}
      <div className="w-full px-3 lg:px-6 flex flex-col lg:flex-row items-stretch gap-6 mt-16 ">
        {/* CARD */}
        <div className=" p-6 2xl:p-10 rounded-[30px] bg-gradient-to-b from-[#1d1d1d]  to-[#141414] border border-[#3838388e]  lg:w-1/3">
          <div className="size-[45px] flex items-center justify-center bg-[#303030] rounded-full border border-stone-700">
            <SlStar className="text-xl" />
          </div>
          <div>
            <h6 className="text-2xl font-medium mb-2 mt-6">Basic</h6>
            <p className="text-stone-400">
              Individuals looking for basic, automated nutrition plans and fitness progress tracking.
            </p>
            <div className="my-10 flex items-end gap-2 ">
              <span className="text-5xl font-semibold">$29</span>
              <span className="text-stone-400">/ Per month</span>
            </div>
          </div>
          <Link
            href="http://localhost:3000/register"
            className="flex justify-center p-3 transition-colors duration-200 ease-in bg-[#202020] hover:text-stone-900 hover:bg-accent  border border-[#3838388e] rounded-full"
          >
            Get started
          </Link>
          <hr className="inline-block my-8 w-full border-none h-[1px] bg-stone-700" />
          <div>
            <h6 className="text-lg font-medium mb-4">What you will get</h6>
            <ul className="space-y-2">
              <li className="flex items-center gap-3">
                <GoCheckCircle className="text-lg text-accent w-[10%]" />
                <span className="text-stone-400 leading-[22px] w-[80%]">Sync your devices (wearables, smartwatches)</span>
              </li>
              <li className="flex items-center gap-3">
                <GoCheckCircle className="text-lg text-accent w-[10%] " />
                <span className="text-stone-400 leading-[22px] w-[80%]">Receive weekly personalized nutrition plans</span>
              </li>
              <li className="flex items-center gap-3">
                <GoCheckCircle className="text-lg text-accent w-[10%]" />
                <span className="text-stone-400 leading-[22px] w-[80%]">Log body measurements, weight, and fitness goals</span>
              </li>
              <li className="flex items-center gap-3">
                <GoCheckCircle className="text-lg text-accent w-[10%]" />
                <span className="text-stone-400 leading-[22px] w-[80%]">Weekly progress tracking and updates</span>
              </li>
            </ul>
          </div>
        </div>

        {/* CARD */}
        <div className="p-6 2xl:p-10 rounded-[30px] bg-gradient-to-b from-[#1d1d1d]  to-[#141414] border border-accent  lg:w-1/3">
          <div className="size-[45px] flex items-center justify-center bg-accent rounded-full border border-stone-700">
            <SlStar className="text-xl text-stone-900" />
          </div>
          <div>
            <h6 className="text-2xl font-medium mb-2 mt-6">Pro</h6>
            <p className="text-stone-400">Fitness enthusiasts who want deeper insights and more detailed nutrition planning.</p>
            <div className="my-10 flex items-end gap-2 ">
              <span className="text-5xl font-semibold">$59</span>
              <span className="text-stone-400">/ Per month</span>
            </div>
          </div>
          <Link
            href="http://localhost:3000/register"
            className="flex justify-center p-3  transition-colors duration-200 ease-in text-stone-900 bg-accent  hover:bg-accentDark  border border-[#3838388e] rounded-full"
          >
            Get started
          </Link>
          <hr className="inline-block my-8 w-full border-none h-[1px] bg-stone-700" />
          <div>
            <h6 className="text-lg font-medium mb-4">What you will get</h6>
            <ul className="space-y-2">
              <li className="flex items-center gap-3">
                <GoCheckCircle className="text-lg text-accent w-[10%]" />
                <span className="text-stone-400 leading-[22px] w-[80%]">Everything in the Basic plan</span>
              </li>
              <li className="flex items-center gap-3">
                <GoCheckCircle className="text-lg text-accent w-[10%]" />
                <span className="text-stone-400 leading-[22px] w-[80%]">Advanced workout syncing from wearables</span>
              </li>
              <li className="flex items-center gap-3">
                <GoCheckCircle className="text-lg text-accent w-[10%]" />
                <span className="text-stone-400 leading-[22px] w-[80%]">AI-powered weekly meal adjustments</span>
              </li>
              <li className="flex items-center gap-3">
                <GoCheckCircle className="text-lg text-accent w-[10%]" />
                <span className="text-stone-400 leading-[22px] w-[80%]">Detailed progress analytics and performance reports</span>
              </li>
              <li className="flex items-center gap-3">
                <GoCheckCircle className="text-lg text-accent w-[10%]" />
                <span className="text-stone-400 leading-[22px] w-[80%]">Access to premium workout recipes</span>
              </li>
            </ul>
          </div>
        </div>

        {/* CARD */}
        <div className="p-6 2xl:p-10 rounded-[30px] bg-gradient-to-b from-[#1d1d1d]  to-[#141414] border border-[#3838388e]  lg:w-1/3">
          <div className="size-[45px] flex items-center justify-center bg-[#303030] rounded-full border border-stone-700">
            <SlStar className="text-xl" />
          </div>
          <div>
            <h6 className="text-2xl font-medium mb-2 mt-6">Premium</h6>
            <p className="text-stone-400">Individuals seeking maximum customization and real-time support from professionals.</p>
            <div className="my-10 flex items-end gap-2 ">
              <span className="text-5xl font-semibold">$99</span>
              <span className="text-stone-400">/ Per month</span>
            </div>
          </div>
          <Link
            href="http://localhost:3000/register"
            className="flex justify-center p-3 transition-colors duration-200 ease-in bg-[#202020] hover:text-stone-900 hover:bg-accent  border border-[#3838388e] rounded-full"
          >
            Get started
          </Link>
          <hr className="inline-block my-8 w-full border-none h-[1px] bg-stone-700" />
          <div>
            <h6 className="text-lg font-medium mb-4">What you will get</h6>
            <ul className="space-y-2">
              <li className="flex items-center gap-3">
                <GoCheckCircle className="text-lg text-accent w-[10%]" />
                <span className="text-stone-400 leading-[22px] w-[80%]">Everything in Pro plan</span>
              </li>
              <li className="flex items-center gap-3">
                <GoCheckCircle className="text-lg text-accent w-[10%]" />
                <span className="text-stone-400 leading-[22px] w-[80%]">Personalized trainer support (chat/email)</span>
              </li>
              <li className="flex items-center gap-3">
                <GoCheckCircle className="text-lg text-accent w-[10%]" />
                <span className="text-stone-400 leading-[22px] w-[80%]">Custom workouts designed by a trainer</span>
              </li>
              <li className="flex items-center gap-3">
                <GoCheckCircle className="text-lg text-accent w-[10%]" />
                <span className="text-stone-400 leading-[22px] w-[80%]">Weekly meal plans customized by a nutritionist</span>
              </li>
              <li className="flex items-center gap-3">
                <GoCheckCircle className="text-lg text-accent w-[10%]" />
                <span className="text-stone-400 leading-[22px] w-[80%]">
                  Exclusive access to fitness challenges and a private community
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
