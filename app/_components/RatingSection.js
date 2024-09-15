export default function RatingSection() {
  return (
    <section className="w-full px-6  flex flex-col md:flex-row justify-evenly mt-24 mb-6 md:mt-32 md:mb-10">
      <div className="flex flex-col items-center justify-center gap-2">
        <h1 className="text-7xl font-normal">45+</h1>
        <p className="text-white/70 text-xl">Happy customers</p>
      </div>

      {/*  */}
      <hr className=" md:w-[1px] h-[1px] w-full md:h-28 border-none bg-gradient-to-l my-10 md:my-0 md:bg-gradient-to-b from-backgroundDark via-stone-700 to-backgroundDark " />
      {/*  */}

      <div className="flex flex-col items-center justify-center gap-2">
        <h1 className="text-7xl font-normal">5k+</h1>
        <p className="text-white/70 text-xl">Hours spent on craft</p>
      </div>

      {/*  */}
      <hr className=" md:w-[1px] h-[1px] w-full md:h-28 border-none bg-gradient-to-l my-10 md:my-0 md:bg-gradient-to-b from-backgroundDark via-stone-700 to-backgroundDark " />

      {/*  */}
      <div className="flex flex-col items-center justify-center gap-2">
        <h1 className="text-7xl font-normal">4.8</h1>
        <p className="text-white/70 text-xl">Review rate</p>
      </div>
    </section>
  );
}
