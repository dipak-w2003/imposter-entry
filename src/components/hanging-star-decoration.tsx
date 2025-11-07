import { Suspense, lazy } from "react";
import { motion } from "framer-motion";

// Lazy load Lottie
const Lottie = lazy(() => import("lottie-react"));
import HangingStarDecorationAnimation_JSON from "../assets/animations/HangingStarDecoration.json";

interface HangingDecorationProps {
  tailwindCSS?: string;
  loop?: boolean;
}

// Lightweight placeholder while Lottie loads
const FallbackFireWorks = ({ tailwindCSS }: { tailwindCSS?: string }) => (
  <div className={`${tailwindCSS} bg-yellow-200 animate-pulse rounded-full`} />
);

const HangingStarDecoration = ({
  tailwindCSS = "h-[400px] w-[400px]",
  loop = false,
}: HangingDecorationProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`${tailwindCSS}`}
    >
      <Suspense fallback={<FallbackFireWorks tailwindCSS={tailwindCSS} />}>
        <Lottie
          animationData={HangingStarDecorationAnimation_JSON}
          loop={loop}
          autoplay
          draggable={false}
          {...({ renderer: "canvas" } as any)} // TypeScript-safe canvas renderer
        />
      </Suspense>
    </motion.div>
  );
};

export default HangingStarDecoration;
