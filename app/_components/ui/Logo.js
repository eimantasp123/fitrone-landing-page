import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex-none w-[250px]  flex items-center justify-start">
      <Image src="/logo-white-2.png" className="cursor-pointer" width={110} height={24} alt="logo" />
    </div>
  );
}
