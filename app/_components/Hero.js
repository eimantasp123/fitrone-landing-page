import Button from "./Button";

export default function Hero() {
  return (
    <section id="home" className="flex flex-col items-center gap-8 lg:gap-10  my-16 lg:my-10  px-6 ">
      {true && (
        <div className="flex items-center mx-auto  py-2 rounded-full  text-accent1 gap-4 px-5 bg-neutral-900 border border-stone-800 ">
          <span className="relative flex  size-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent1 opacity-75"></span>
            <span className="relative inline-flex rounded-full size-3 bg-accent1"></span>
          </span>
          <p>Fitrone 1.1.01 coming soon!</p>
        </div>
      )}

      <h1 className="text-4xl text-center md:text-5xl lg:text-6xl xl:text-7xl lg:leading-[80px]  font-semibold">
        Expert Coaching. Personalized Progress. Secure.
      </h1>
      <p className=" max-w-[1100px] text-center text-lg text-stone-300 ">
        Join our community and gain access to personalized fitness and nutrition plans tailored specifically for you. Take
        advantage of real-time consultations with professional trainers and stay on track with our secure, end-to-end encrypted
        platform
      </p>
      <div className="flex flex-col sm:flex-row items-center font-medium justify-center gap-5">
        <Button text="Get Started Today" />
        <Button
          text="Learn More"
          bg="bg-transparent"
          textColor="text-accent1"
          hoverBgColor="bg-neutral-800"
          hoverBorderColor="border-accent1"
        />
      </div>
    </section>
  );
}
