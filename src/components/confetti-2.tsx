import { Suspense, lazy } from "react";
import { motion } from "framer-motion";

// Lazy load Lottie for performance
const Lottie = lazy(() => import("lottie-react"));
import Confetti2Animation_JSON from "../assets/animations/Confetti.json";

interface ConfettiProps {
  tailwindCSS?: string;
  loop?: boolean;
}

// Lightweight placeholder while Lottie loads
const FallbackConfetti = ({ tailwindCSS }: { tailwindCSS?: string }) => (
  <div
    className={`${tailwindCSS} bg-gradient-to-br from-yellow-100 to-pink-100 animate-pulse rounded-full`}
  />
);

const Confetti2 = ({
  tailwindCSS = "h-[400px] w-[400px]",
  loop = true,
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
          animationData={Confetti2Animation_JSON}
          loop={loop}
          autoplay
          draggable={false}
          {...({ renderer: "canvas" } as any)} // TypeScript-safe canvas renderer
        />
      </Suspense>
    </motion.div>
  );
};

export default Confetti2;
