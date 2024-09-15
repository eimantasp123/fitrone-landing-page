export default function HeroImages() {
  return (
    <div initial="hidden" animate="visible" className="flex items-end justify-center gap-8 w-full px-3 lg:px-6 lg:mt-10">
      {/*  */}
      <div className="bg-red-500 items-center justify-center hidden lg:flex text-textDark text-center h-[300px] rounded-[30px] w-[25%]">
        Second image
      </div>
      {/*  */}
      <div className="w-full lg:w-[50%] ">
        {/* <Image src="/hero.jpg" className="custom-border" width={700} height={800} alt="hero" /> */}
        <div className="custom-border ">
          <div className="bg-red-500 flex rounded-[30px] items-center justify-center h-[300px] lg:h-[500px] ">Second image</div>
        </div>
      </div>
      {/*  */}
      <div className="bg-red-500 hidden lg:flex items-center justify-center text-textDark text-center h-[300px] rounded-[30px] w-[25%]">
        Second image
      </div>
    </div>
  );
}
