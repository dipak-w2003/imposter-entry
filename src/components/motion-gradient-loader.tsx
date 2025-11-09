import { motion } from "framer-motion";

const MotionGradientLoader = ({
  size = 60,
  strokeWidth = 8,
}: {
  size?: number;
  strokeWidth?: number;
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  return (
    <div className="flex justify-center items-center h-full w-full">
      <motion.svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, ease: "linear", duration: 1.2 }}
      >
        <defs>
          <linearGradient
            id="loaderGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#ff6ec4" />
            <stop offset="50%" stopColor="#fff" />
            <stop offset="100%" stopColor="#a18cd1" />
          </linearGradient>
        </defs>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="transparent"
          stroke="url(#loaderGradient)"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference * 0.75 + " " + circumference}
        />
      </motion.svg>
    </div>
  );
};

export default MotionGradientLoader;
