import { Suspense, lazy } from "react";
import { motion } from "framer-motion";

// Lazy load Lottie for performance
const Lottie = lazy(() => import("lottie-react"));
import SeasonalFireworksAnimation_JSON from "../assets/animations/SeasonFireworks.json";

interface FireworksProps {
  tailwindCSS?: string;
  loop?: boolean;
}

// Lightweight placeholder while Lottie loads
const FallbackFireworks = ({ tailwindCSS }: { tailwindCSS?: string }) => (
  <div
    className={`${tailwindCSS} bg-gradient-to-br from-purple-200 via-yellow-100 to-pink-200 animate-pulse rounded-full`}
  />
);

const SesonalFireWorks = ({
  tailwindCSS = "h-[400px] w-[400px]",
  loop = true,
}: FireworksProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`${tailwindCSS}`}
    >
      <Suspense fallback={<FallbackFireworks tailwindCSS={tailwindCSS} />}>
        <Lottie
          animationData={SeasonalFireworksAnimation_JSON}
          loop={loop}
          autoplay
          draggable={false}
          {...({ renderer: "canvas" } as any)} // TypeScript-safe canvas renderer
        />
      </Suspense>
    </motion.div>
  );
};

export default SesonalFireWorks;
