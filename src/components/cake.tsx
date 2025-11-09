import { Suspense } from "react";
import { motion } from "framer-motion";

// Lazy load Lottie for performance
import LottieAnimationProvider from "./lottie-animation-provider";

interface CakeProps {
  className?: string;
  loop?: boolean;
}

// Lightweight placeholder while Lottie loads
const FallbackCake = ({ className }: { className?: string }) => (
  <div className={`${className} bg-pink-200 animate-pulse rounded-full`} />
);

const Cake = ({ className, loop = false }: CakeProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`${className}`}
    >
      <Suspense fallback={<FallbackCake className={className} />}>
        <LottieAnimationProvider
          url="https://cdn.jsdelivr.net/gh/dipak-w2003/unisha-verse@main/projects/imposter-entry/lottie-json-animations/cake.json"
          loop={loop}
          autoplay
        />
      </Suspense>
    </motion.div>
  );
};

export default Cake;
