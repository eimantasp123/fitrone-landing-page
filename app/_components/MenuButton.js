import { motion, MotionConfig } from "framer-motion";

export default function MenuButton({ active, setActive }) {
  return (
    <MotionConfig
      transition={{
        duration: 0.25,
        ease: "easeInOut",
      }}
    >
      <motion.button
        initial={false}
        onClick={() => setActive((pv) => !pv)}
        animate={active ? "open" : "closed"}
        className="relative py-6 pr-8"
      >
        <motion.span
          style={{
            left: "50%",
            top: "35%",
            x: "-50%",
            y: "-50%",
          }}
          className="absolute top-0 left-0 h-[2px] w-7 bg-white/90"
          variants={{
            open: {
              rotate: ["0deg", "0deg", "45deg"],
              top: ["35%", "50%", "50%"],
            },
            closed: {
              rotate: ["45deg", "0deg", "0deg"],
              top: ["50%", "50%", "35%"],
            },
          }}
        />
        <motion.span
          style={{
            left: "calc(50% + 4px)",
            top: "50%",
            x: "-50%",
            y: "-50%",
          }}
          className="absolute h-[2px] w-5 bg-white/90"
          variants={{
            open: {
              rotate: ["0deg", "0deg", "-45deg"],
              left: "50%",
              width: ["20px", "28px", "28px"],
            },
            closed: {
              rotate: ["-45deg", "0deg", "0deg"],
              left: "calc(50% + 4px)",
              width: ["28px", "20px", "20px"],
            },
          }}
        />
        <motion.span
          style={{
            left: "calc(50% + 8px)",
            bottom: "35%",
            x: "-50%",
            y: "50%",
          }}
          className="absolute h-[2px] w-3 bg-white/90"
          variants={{
            open: {
              rotate: ["0deg", "0deg", "45deg"],
              left: "50%",
              bottom: ["35%", "50%", "50%"],
            },
            closed: {
              rotate: ["45deg", "0deg", "0deg"],
              left: "calc(50% + 8px)",
              bottom: ["50%", "50%", "35%"],
            },
          }}
        />
      </motion.button>
    </MotionConfig>
  );
}
