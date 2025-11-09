import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import { fetchJSON } from "../utils/fetch-json";
import MotionGradientLoader from "../components/motion-gradient-loader";

interface LottieAnimationProps {
  url: string;
  loop?: boolean;
  autoplay?: boolean;
  style?: React.CSSProperties;
  className?: string;
  onComplete?: () => void;
  loaderSize?: number;
}

const LottieAnimationProvider = ({
  url,
  loop = true,
  autoplay = true,
  style,
  onComplete,
  className,
  loaderSize = 50,
}: LottieAnimationProps) => {
  const [animationData, setAnimationData] = useState<any>(null);

  useEffect(() => {
    let isMounted = true;
    fetchJSON(url).then((data) => {
      if (isMounted) setAnimationData(data);
    });
    return () => {
      isMounted = false;
    };
  }, [url]);

  if (!animationData) return <MotionGradientLoader size={loaderSize} />;

  return (
    <Lottie
      animationData={animationData}
      loop={loop}
      autoplay={autoplay}
      style={style}
      className={className}
      onComplete={onComplete}
    />
  );
};

export default LottieAnimationProvider;
