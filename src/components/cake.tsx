import { Suspense, lazy } from "react";
import { motion } from "framer-motion";

// Lazy load Lottie for performance
const Lottie = lazy(() => import("lottie-react"));
import CakeAnimation_JSON from "../assets/animations/Cake.json";

interface CakeProps {
  tailwindCSS?: string;
  loop?: boolean;
}

// Lightweight placeholder while Lottie loads
const FallbackCake = ({ tailwindCSS }: { tailwindCSS?: string }) => (
  <div className={`${tailwindCSS} bg-pink-200 animate-pulse rounded-full`} />
);

const Cake = ({
  tailwindCSS = "h-[400px] w-[400px]",
  loop = true,
}: CakeProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`${tailwindCSS}`}
    >
      <Suspense fallback={<FallbackCake tailwindCSS={tailwindCSS} />}>
        <Lottie
          animationData={CakeAnimation_JSON}
          loop={loop}
          autoplay
          draggable={false}
        />
      </Suspense>
    </motion.div>
  );
};

export default Cake;
