export default function FeaturesItem({ icon: Icon, title }) {
  return (
    <div className="flex relative items-center py-2  justify-center gap-4 bg-accent1 px-6 rounded-full">
      <span className="size-8 absolute left-0 ml-1 bg-black flex  items-center justify-center rounded-full">
        <Icon className="text-white text-sm " />
      </span>
      <h4 className="pl-8">{title}</h4>
    </div>
  );
}
