import { motion, useAnimation, type Variants } from "framer-motion";
import { useEffect } from "react";

export const UserHeartWarmmingWishingP5Page = () => {
  const futureWish =
    "May your life be full of happiness, success, and beautiful surprises !";

  const controls = useAnimation();

  useEffect(() => {
    const sequence = async () => {
      while (true) {
        await controls.start("visible"); // play animation
        await new Promise((resolve) => setTimeout(resolve, 5000)); // wait 5s
        await controls.start("hidden"); // hide before next loop
        await new Promise((resolve) => setTimeout(resolve, 500)); // short pause
      }
    };
    sequence();
  }, [controls]);

  // Define variants with Typescript-friendly signature
  const letterVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.05, type: "spring", stiffness: 200 },
    }),
  };

  return (
    <div
      className="h-dvh flex items-center justify-center p-6 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://i.pinimg.com/736x/b1/70/78/b1707873ca3d536b3c58030184e1ec0d.jpg')",
      }}
    >
      <motion.h1 className="text-[4rem] romantic-message md:text-5xl font-bold text-center text-black">
        {futureWish.split("").map((char, index) => (
          <motion.span
            key={index}
            custom={index} // passes index to variant function
            variants={letterVariants}
            initial="hidden"
            animate={controls}
          >
            {char}
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
};
