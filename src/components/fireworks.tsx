import { Suspense, lazy } from "react";
import { motion } from "framer-motion";

// Lazy load Lottie
const Lottie = lazy(() => import("lottie-react"));
import FireWorksAnimation_JSON from "../assets/animations/FireworksIcon.json";

interface FireWorksProps {
  tailwindCSS?: string;
  loop?: boolean;
}

// Lightweight placeholder while Lottie loads
const FallbackFireWorks = ({ tailwindCSS }: { tailwindCSS?: string }) => (
  <div className={`${tailwindCSS} bg-yellow-200 animate-pulse rounded-full`} />
);

const FireWorks = ({
  tailwindCSS = "h-[400px] w-[400px]",
  loop = false,
}: FireWorksProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`${tailwindCSS}`}
    >
      <Suspense fallback={<FallbackFireWorks tailwindCSS={tailwindCSS} />}>
        <Lottie
          animationData={FireWorksAnimation_JSON}
          loop={loop}
          autoplay
          draggable={false}
          {...({ renderer: "canvas" } as any)} // TypeScript-safe canvas renderer
        />
      </Suspense>
    </motion.div>
  );
};

export default FireWorks;
