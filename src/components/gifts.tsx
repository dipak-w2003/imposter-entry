import { Suspense, lazy } from "react";
import { motion } from "framer-motion";

// Lazy load Lottie for performance
const Lottie = lazy(() => import("lottie-react"));
import GiftsAnimation_JSON from "../assets/animations/JumpingGiftBoxes.json";

interface GiftsProps {
  tailwindCSS?: string;
}

// Lightweight placeholder while Lottie loads
const FallbackGift = ({ tailwindCSS }: { tailwindCSS?: string }) => (
  <div className={`${tailwindCSS} bg-yellow-200 rounded-md animate-pulse`} />
);

const Gifts = ({ tailwindCSS = "h-[400px] w-[400px]" }: GiftsProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`${tailwindCSS}`}
    >
      <Suspense fallback={<FallbackGift tailwindCSS={tailwindCSS} />}>
        <Lottie
          animationData={GiftsAnimation_JSON}
          loop
          autoplay
          draggable={false}
          {...({ renderer: "canvas" } as any)} // TypeScript-safe canvas renderer
        />
      </Suspense>
    </motion.div>
  );
};

export default Gifts;
