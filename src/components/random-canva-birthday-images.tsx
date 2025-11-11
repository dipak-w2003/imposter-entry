import { motion, type Variants } from "framer-motion";
import { lazy } from "react";
const Butterfly = lazy(() => import("../components/butterfly"));

export default function RandomCanvaBirthdayItems() {
  // Smooth reusable floating animation
  const float: Variants = {
    hidden: { opacity: 0, scale: 0.8, y: 40 },
    visible: (custom: number) => ({
      opacity: 1,
      scale: 1,
      y: [0, -10, 0],
      transition: {
        delay: custom,
        duration: 1.2,
        ease: "easeOut",
        y: {
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        },
      },
    }),
  };

  return (
    <>
      {/* 🎈 Top Left Penant Flag */}
      <motion.img
        draggable={false}
        className="absolute z-10 -top-2 left-0 object-cover w-20 sm:w-32 md:w-36"
        src="https://cdn.jsdelivr.net/gh/dipak-w2003/unisha-verse@main/projects/imposter-entry/images/penant-flag.png"
        alt="penant-flag"
        variants={float}
        initial="hidden"
        animate="visible"
        custom={0.2}
      />

      {/* 🎈 Top Right Penant Flag */}
      <motion.img
        draggable={false}
        className="absolute z-10 -top-2 -right-2 object-cover w-20 sm:w-32 md:w-36 rotate-90"
        src="https://cdn.jsdelivr.net/gh/dipak-w2003/unisha-verse@main/projects/imposter-entry/images/penant-flag.png"
        alt="penant-flag"
        variants={float}
        initial="hidden"
        animate="visible"
        custom={0.3}
      />
      {/* Ballons */}
      <motion.img
        draggable={false}
        className="absolute z-10 top-1/3 left-1/6 object-cover -rotate-15 w-16 sm:w-20 md:w-24 "
        src="https://cdn.jsdelivr.net/gh/dipak-w2003/unisha-verse@main/projects/imposter-entry/images/triangle-inside-ballon-3.png"
        alt="penant-flag"
        variants={float}
        initial="hidden"
        animate="visible"
        custom={0.3}
      />

      {/* 🌸 Star Flower */}
      <motion.img
        draggable={false}
        className="absolute z-10 -top-20 left-1/4 object-cover w-28 sm:w-44 md:w-56"
        src="https://cdn.jsdelivr.net/gh/dipak-w2003/unisha-verse@main/projects/imposter-entry/images/4-edge-star-flower-2.png"
        alt="star-flower"
        variants={float}
        initial="hidden"
        animate="visible"
        custom={0.4}
      />

      {/* 🌀 Curvey Shape Top Right */}
      <motion.img
        draggable={false}
        className="absolute z-10 -top-32 right-4 sm:-top-52 sm:right-16 object-cover w-36 sm:w-72 md:w-96"
        src="https://cdn.jsdelivr.net/gh/dipak-w2003/unisha-verse@main/projects/imposter-entry/images/curvey-shaped-rounded-icon-4.png"
        alt="curvey-shape"
        variants={float}
        initial="hidden"
        animate="visible"
        custom={0.5}
      />

      {/* 🌀 Curvey Shape Bottom Left */}
      <motion.img
        draggable={false}
        className="absolute z-10 -bottom-1/3 -left-12 sm:-bottom-1/4 sm:left-1/10 object-cover w-36 sm:w-72 md:w-80"
        src="https://cdn.jsdelivr.net/gh/dipak-w2003/unisha-verse@main/projects/imposter-entry/images/curvey-shaped-rounded-icon-4.png"
        alt="curvey-shape"
        variants={float}
        initial="hidden"
        animate="visible"
        custom={0.6}
      />

      {/* 🌿 Heart Leaf */}
      <motion.img
        draggable={false}
        className="absolute z-10 bottom-2 left-1/5 object-cover w-24 sm:w-36 md:w-40"
        src="https://cdn.jsdelivr.net/gh/dipak-w2003/unisha-verse@main/projects/imposter-entry/images/heart-leaf-1.png"
        alt="heart-leaf"
        variants={float}
        initial="hidden"
        animate="visible"
        custom={0.7}
      />

      {/* 🎁 Big Gift */}
      <motion.img
        draggable={false}
        className="absolute z-10 -bottom-2 -left-8 rotate-12 object-cover w-28 sm:w-36 md:w-40"
        src="https://cdn.jsdelivr.net/gh/dipak-w2003/unisha-verse@main/projects/imposter-entry/images/big-size-gift-5.png"
        alt="big-gift"
        variants={float}
        initial="hidden"
        animate="visible"
        custom={0.8}
      />

      {/* 🎁 Small Gift */}
      <motion.img
        draggable={false}
        className="absolute z-10 -bottom-4 left-8 rotate-12 object-cover w-16 sm:w-20 md:w-24"
        src="https://cdn.jsdelivr.net/gh/dipak-w2003/unisha-verse@main/projects/imposter-entry/images/small-size-gift-6.png"
        alt="small-gift"
        variants={float}
        initial="hidden"
        animate="visible"
        custom={0.9}
      />

      {/* user photo */}
      <motion.div
        className="absolute z-10 bottom-1/4 sm:bottom-14 "
        initial="hidden"
        animate="visible"
        custom={0.3}
      >
        <motion.span
          className="relative"
          initial="hidden"
          animate="visible"
          custom={0.3}
        >
          <motion.img
            draggable={false}
            className="object-cover -rotate-15 w-[300px] sm:w-32 md:w-[380px] "
            src="https://cdn.jsdelivr.net/gh/dipak-w2003/unisha-verse@main/projects/imposter-entry/images/user-photo-frame-1.png"
            alt="penant-flag"
            // variants={float}
            initial="hidden"
            animate="visible"
            custom={0.3}
          />
          <Butterfly className="absolute top-8 sm:top-10 w-[60px] md:w-32" />
        </motion.span>
      </motion.div>
    </>
  );
}
