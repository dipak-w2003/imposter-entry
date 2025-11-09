import { Suspense } from "react";
import { motion } from "framer-motion";

// Lazy load Lottie
import LottieAnimationProvider from "./lottie-animation-provider";

interface HangingDecorationProps {
  className?: string;
  loop?: boolean;
}

// Lightweight placeholder while Lottie loads
const FallbackFireWorks = ({ className }: { className?: string }) => (
  <div className={`${className} bg-yellow-200 animate-pulse rounded-full`} />
);

const HangingStarDecoration = ({ className, loop }: HangingDecorationProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`${className}`}
    >
      <Suspense fallback={<FallbackFireWorks className={className} />}>
        <LottieAnimationProvider
          loop={loop}
          url="https://cdn.jsdelivr.net/gh/dipak-w2003/unisha-verse@main/projects/imposter-entry/lottie-json-animations/hanging-start-decoration.json"
        />
      </Suspense>
    </motion.div>
  );
};

export default HangingStarDecoration;
