import { Suspense } from "react";
import { motion } from "framer-motion";
import LottieAnimationProvider from "./lottie-animation-provider";

// Lazy load Lottie

interface FireWorksProps {
  className?: string;
  loop?: boolean;
}

// Lightweight placeholder while Lottie loads
const FallbackFireWorks = ({ className }: { className?: string }) => (
  <div className={`${className} bg-yellow-200 animate-pulse rounded-full`} />
);

const ConfettiFireWorks = ({
  className = "h-[400px] w-[400px]",
  loop = false,
}: FireWorksProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={className}
    >
      <Suspense fallback={<FallbackFireWorks className={className} />}>
        <LottieAnimationProvider
          url="https://cdn.jsdelivr.net/gh/dipak-w2003/unisha-verse@main/projects/imposter-entry/lottie-json-animations/confetti-with-fireworks.json"
          loop={loop}
        />
      </Suspense>
    </motion.div>
  );
};

export default ConfettiFireWorks;
