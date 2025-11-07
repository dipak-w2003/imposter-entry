import { Suspense, lazy } from "react";
import { motion } from "framer-motion";

// Lazy load Lottie player to avoid blocking main bundle
const Lottie = lazy(() => import("lottie-react"));

import ConfettiAnimation_JSON from "../assets/animations/Confetti-1.json";

interface ConfettiProps {
  tailwindCSS?: string;
  loop?: boolean;
}

// Lightweight fallback while Lottie loads
const FallbackConfetti = ({ tailwindCSS }: { tailwindCSS?: string }) => (
  <div
    className={`${tailwindCSS} bg-gradient-to-br from-yellow-100 to-pink-100 animate-pulse rounded-full`}
  />
);

const Confetti1 = ({
  tailwindCSS = "h-[400px] w-[400px]",
  loop = false,
}: ConfettiProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`${tailwindCSS}`}
    >
      <Suspense fallback={<FallbackConfetti tailwindCSS={tailwindCSS} />}>
        <Lottie
          animationData={ConfettiAnimation_JSON}
          autoplay
          draggable={false}
          loop={loop}
          {...({ renderer: "canvas" } as any)} // TypeScript-safe canvas renderer
        />
      </Suspense>
    </motion.div>
  );
};

export default Confetti1;
