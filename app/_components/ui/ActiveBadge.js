export default function ActiveBadge({ text = "", backgroundColor = "bg-backgroundDarkLight" }) {
  return (
    <div
      className={`flex items-center py-2 rounded-full  text-accent gap-4 px-5 ${backgroundColor} border border-accentDark border-opacity-10`}
    >
      <span className="relative flex  size-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
        <span className="relative inline-flex rounded-full size-3 bg-accent"></span>
      </span>
      <p>{text}</p>
    </div>
  );
}
