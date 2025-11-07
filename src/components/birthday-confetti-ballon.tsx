import { Suspense, lazy } from "react";
import { motion } from "framer-motion";

// Lazy load Lottie
const Lottie = lazy(() => import("lottie-react"));
import BirthdayConfettiBallonAnimation_JSON from "../assets/animations/BirthdayConfettiBallon.json";

interface BirthdayConfettiBallon {
  tailwindCSS?: string;
  loop?: boolean;
}

// Lightweight placeholder while Lottie loads
const FallbackBirthdayConfettiBallon = ({
  tailwindCSS,
}: {
  tailwindCSS?: string;
}) => (
  <div className={`${tailwindCSS} bg-yellow-200 animate-pulse rounded-full`} />
);

const ConfettiBallons = ({
  tailwindCSS = "h-[400px] w-[400px]",
  loop = false,
}: BirthdayConfettiBallon) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`${tailwindCSS}`}
    >
      <Suspense
        fallback={<FallbackBirthdayConfettiBallon tailwindCSS={tailwindCSS} />}
      >
        <Lottie
          animationData={BirthdayConfettiBallonAnimation_JSON}
          loop={loop}
          draggable={false}
          {...({ renderer: "canvas" } as any)} // TypeScript-safe canvas renderer
        />
      </Suspense>
    </motion.div>
  );
};

export default ConfettiBallons;
