import { Suspense } from "react";
import { motion } from "framer-motion";

// Lazy load Lottie for performance
import LottieAnimationProvider from "./lottie-animation-provider";

interface GiftsProps {
  className?: string;
}

// Lightweight placeholder while Lottie loads
const FallbackGift = ({ className }: { className?: string }) => (
  <div className={`${className} bg-yellow-200 rounded-md animate-pulse`} />
);

const Gifts = ({ className }: GiftsProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`${className}`}
    >
      <Suspense fallback={<FallbackGift className={className} />}>
        <LottieAnimationProvider
          url="https://cdn.jsdelivr.net/gh/dipak-w2003/unisha-verse@main/projects/imposter-entry/lottie-json-animations/jumping-gifts-boxes.json"
          loop
        />
      </Suspense>
    </motion.div>
  );
};

export default Gifts;
