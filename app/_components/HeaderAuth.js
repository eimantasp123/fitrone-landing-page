import LinkDefault from "./ui/LinkDefault";
import OutlineButton from "./ui/OutlineButton";

export default function HeaderAuth() {
  return (
    <div className="flex-none w-[250px]  hidden lg:flex  justify-end items-center space-x-6">
      <LinkDefault route="http://localhost:3000/login" />
      <OutlineButton
        text="Sign Up"
        href="http://localhost:3000/register"
        padding="px-6 md:px-8 lg:px-10"
        extraClasses="h-[42px]"
      />
    </div>
  );
}
