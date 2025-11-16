import { motion, type Variants } from "framer-motion";
import { lazy, useEffect, useState, useCallback } from "react";
const Butterfly = lazy(() => import("../components/butterfly"));

export default function RandomCanvaBirthdayItems() {
  const [currentIMGIndex, setCurrentIMGIndex] = useState(0);

  // 🎨 Floating animation variants (same as before)
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
        y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
      },
    }),
  };

  // 🖼️ User image frames
  const USER_IMAGES = [
    "user-photo-frame-1.png",
    "user-photo-frame-2.png",
    "user-photo-frame-3.png",
    "user-photo-frame-4.png",
  ];

  // 🕐 Optional: auto change image every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIMGIndex((prev) => (prev + 1) % USER_IMAGES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  // 🧠 Click handler (memoized)
  const handleSelectImage = useCallback((index: number) => {
    setCurrentIMGIndex(index);
  }, []);

  return (
    <>
      {/* 🎈 Top Left Penant Flag */}
      <motion.img
        loading="lazy"
        draggable={false}
        className="fixed z-50 -top-2 left-0 object-cover w-20 sm:w-32 md:w-36"
        src="https://cdn.jsdelivr.net/gh/dipak-w2003/unisha-verse@main/projects/imposter-entry/images/penant-flag.png"
        alt="penant-flag"
        variants={float}
        initial="hidden"
        animate="visible"
        custom={0.2}
      />

      {/* 🎈 Top Right Penant Flag */}
      <motion.img
        loading="lazy"
        draggable={false}
        className="fixed z-50 -top-2 -right-2 object-cover w-20 sm:w-32 md:w-36 rotate-90"
        src="https://cdn.jsdelivr.net/gh/dipak-w2003/unisha-verse@main/projects/imposter-entry/images/penant-flag.png"
        alt="penant-flag"
        variants={float}
        initial="hidden"
        animate="visible"
        custom={0.3}
      />

      {/* 🎈 Balloon */}
      <motion.img
        loading="lazy"
        draggable={false}
        className="fixed z-50 top-1/3 left-1/6 object-cover -rotate-15 w-16 sm:w-20 md:w-24"
        src="https://cdn.jsdelivr.net/gh/dipak-w2003/unisha-verse@main/projects/imposter-entry/images/triangle-inside-ballon-3.png"
        alt="balloon"
        variants={float}
        initial="hidden"
        animate="visible"
        custom={0.3}
      />

      {/* 🌸 Star Flower */}
      <motion.img
        loading="lazy"
        draggable={false}
        className="fixed z-50 -top-20 left-1/4 object-cover w-28 sm:w-44 md:w-56"
        src="https://cdn.jsdelivr.net/gh/dipak-w2003/unisha-verse@main/projects/imposter-entry/images/4-edge-star-flower-2.png"
        alt="star-flower"
        variants={float}
        initial="hidden"
        animate="visible"
        custom={0.4}
      />

      {/* 🌀 Curvy Shape Top Right */}
      <motion.img
        loading="lazy"
        draggable={false}
        className="fixed z-50 -top-32 right-4 sm:-top-52 sm:right-16 object-cover w-36 sm:w-72 md:w-96"
        src="https://cdn.jsdelivr.net/gh/dipak-w2003/unisha-verse@main/projects/imposter-entry/images/curvey-shaped-rounded-icon-4.png"
        alt="curvey-shape"
        variants={float}
        initial="hidden"
        animate="visible"
        custom={0.5}
      />

      {/* 🌀 Curvy Shape Bottom Left */}
      <motion.img
        loading="lazy"
        draggable={false}
        className="fixed z-50 -bottom-1/3 -left-12 sm:-bottom-1/4 sm:left-1/10 object-cover w-36 sm:w-72 md:w-80"
        src="https://cdn.jsdelivr.net/gh/dipak-w2003/unisha-verse@main/projects/imposter-entry/images/curvey-shaped-rounded-icon-4.png"
        alt="curvey-shape"
        variants={float}
        initial="hidden"
        animate="visible"
        custom={0.6}
      />

      {/* 🌿 Heart Leaf */}
      <motion.img
        loading="lazy"
        draggable={false}
        className="fixed z-50 bottom-2 left-1/5 object-cover w-24 sm:w-36 md:w-40"
        src="https://cdn.jsdelivr.net/gh/dipak-w2003/unisha-verse@main/projects/imposter-entry/images/heart-leaf-1.png"
        alt="heart-leaf"
        variants={float}
        initial="hidden"
        animate="visible"
        custom={0.7}
      />

      {/* 🎁 Big Gift */}
      <motion.img
        loading="lazy"
        draggable={false}
        className="fixed z-50 -bottom-2 -left-8 rotate-12 object-cover w-28 sm:w-36 md:w-40"
        src="https://cdn.jsdelivr.net/gh/dipak-w2003/unisha-verse@main/projects/imposter-entry/images/big-size-gift-5.png"
        alt="big-gift"
        variants={float}
        initial="hidden"
        animate="visible"
        custom={0.8}
      />

      {/* 🎁 Small Gift */}
      <motion.img
        loading="lazy"
        draggable={false}
        className="fixed z-50 -bottom-4 left-8 rotate-12 object-cover w-16 sm:w-20 md:w-24"
        src="https://cdn.jsdelivr.net/gh/dipak-w2003/unisha-verse@main/projects/imposter-entry/images/small-size-gift-6.png"
        alt="small-gift"
        variants={float}
        initial="hidden"
        animate="visible"
        custom={0.9}
      />

      {/* 🖼️ User Photo Section (optimized) */}
      <motion.div
        className="absolute z-10 bottom-1/4 sm:bottom-14 flex flex-col items-center"
        initial="hidden"
        animate="visible"
        custom={0.3}
      >
        <motion.div
          key={USER_IMAGES[currentIMGIndex]} // ensures re-animation
          initial={{ opacity: 0, scale: 0.95, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: -15 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative"
        >
          <img
            loading="lazy"
            draggable={false}
            className="object-cover z-0 w-[280px] sm:w-72 md:w-[380px] rounded-md shadow-lg"
            src={`https://cdn.jsdelivr.net/gh/dipak-w2003/unisha-verse@main/projects/imposter-entry/images/${USER_IMAGES[currentIMGIndex]}`}
            alt={`user-photo-${currentIMGIndex + 1}`}
          />

          {/* ⭕ Image Navigation Dots */}
          <div className="absolute top-1/4 -right-8 flex flex-col p-2 gap-2">
            {USER_IMAGES.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => handleSelectImage(index)}
                aria-label={`Select photo ${index + 1}`}
                className={`h-3 w-3 rounded-full transition-all duration-200 ${
                  currentIMGIndex === index
                    ? "bg-gray-500 scale-110"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>

          {/* 🦋 Butterfly Decoration */}
          <Butterfly className="absolute top-1 left-2 sm:top-10 w-[60px] md:w-32" />
          <Butterfly className="absolute top-0 left-2 sm:top-10 w-[20px] md:w-32" />
          <Butterfly className="absolute top-0 left-12 sm:top-10 w-[20px] md:w-32" />
        </motion.div>
      </motion.div>
    </>
  );
}
