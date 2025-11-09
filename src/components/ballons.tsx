import { motion } from "framer-motion";

const Ballons = ({ className = "h-full w-full" }: { className?: string }) => {
  return (
    <main
      className={`absolute  ${className} overflow-hidden`}
      draggable={false}
    >
      {/* Left Balloon */}
      <motion.img
        draggable={false}
        src={
          "https://cdn.jsdelivr.net/gh/dipak-w2003/unisha-verse@main/projects/imposter-entry/svgs/birthday-celebration-items/left-s-ballons.svg"
        }
        initial={{ y: 200, opacity: 0, scale: 0.8 }}
        alt="balloon-left"
        animate={{
          y: [0, -15, 0],
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.2,
          delay: 0.2,
          ease: "easeOut",
          y: {
            duration: 2,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          },
        }}
        className="w-1/3 md:w-1/4 drop-shadow-xl   sm:mt-32 sm:ml-10"
      />

      {/* Right Balloon */}
      <motion.img
        draggable={false}
        src={
          "https://cdn.jsdelivr.net/gh/dipak-w2003/unisha-verse@main/projects/imposter-entry/svgs/birthday-celebration-items/right-s-ballons.svg"
        }
        alt="balloon-right"
        initial={{ y: 250, opacity: 0, scale: 0.8 }}
        animate={{
          y: [0, -10, 0],
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.2,
          delay: 0.6,
          ease: "easeOut",
          y: {
            duration: 2.5,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          },
        }}
        className="w-1/3 md:w-1/4 drop-shadow-xl  sm:mt-32 sm:mr-10"
      />
    </main>
  );
};

export default Ballons;
