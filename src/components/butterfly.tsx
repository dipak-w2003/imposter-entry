import { Suspense } from "react";
import { motion } from "framer-motion";

// Lazy load Lottie for performance
import LottieAnimationProvider from "./lottie-animation-provider";

interface ButterflyProps {
  className?: string;
}

// Lightweight placeholder while Lottie loads
const FallbackButterly = ({ className }: { className?: string }) => (
  <div className={`${className} bg-yellow-200 rounded-md animate-pulse`} />
);

const Butterfly = ({ className }: ButterflyProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`${className}`}
    >
      <Suspense fallback={<FallbackButterly className={className} />}>
        <LottieAnimationProvider
          url="https://cdn.jsdelivr.net/gh/dipak-w2003/unisha-verse@main/projects/imposter-entry/lottie-json-animations/butterfly-lottie-animation.json"
          loop
        />
      </Suspense>
    </motion.div>
  );
};

export default Butterfly;
