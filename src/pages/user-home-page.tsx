import { useState } from "react";
import { motion } from "framer-motion";
import { Howl } from "howler";

import Cake from "../components/cake";
import Gifts from "../components/gifts";
import Ballons from "../components/ballons";
import ConfettiFireWorks from "../components/confetti-with-fireworks";
import HangingStarDecoration from "../components/hanging-star-decoration";
// import FireWorkIcon from "../components/firework-icon";
// import ConfettiBallons from "../components/birthday-confetti-ballon";

const UserHomePage = () => {
  const [openCurtain, setOpenCurtain] = useState(false);
  const [musicPlayed, setMusicPlayed] = useState(false);
  const [bgMusic, setBgMusic] = useState<Howl | null>(null);
  const [isPlaying, setIsPlaying] = useState(true); // default playing after curtain opens

  // Open curtain
  const handleOpenCurtain = () => setOpenCurtain(true);

  // Initialize & play music after curtain opens
  const handleMusicPlay = () => {
    if (!musicPlayed) {
      const music = new Howl({
        src: ["/music/emotion-rhythm-music.mp3"],
        volume: 0,
        loop: true,
        html5: true,
      });
      music.play();
      music.fade(0, 0.5, 4000); // smooth fade-in
      setBgMusic(music);
      setMusicPlayed(true);
    }
  };

  // Toggle music play/pause
  const toggleMusic = () => {
    if (!bgMusic) return;
    if (bgMusic.playing()) {
      bgMusic.pause();
      setIsPlaying(false);
    } else {
      bgMusic.play();
      setIsPlaying(true);
    }
  };

  return (
    <main className="relative h-dvh w-dvw flex justify-center items-center overflow-hidden bg-linear-to-br from-pink-100 via-yellow-50 to-pink-200">
      {/* Curtain Button */}
      {!openCurtain && (
        <button
          onClick={handleOpenCurtain}
          className="absolute cursor-pointer top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-6 py-3 bg-pink-200 rounded-lg z-50 text-lg font-bold hover:bg-pink-300 transition-all"
        >
          Open Curtain
        </button>
      )}

      {/* Curtain Overlay */}
      <motion.div
        className={`absolute top-0 left-0 h-full w-full bg-gradient-to-b from-pink-300 to-yellow-200 z-40 ${
          openCurtain ? "pointer-events-none" : "pointer-events-auto"
        }`}
        animate={{ x: openCurtain ? "100%" : "0%" }}
        transition={{ duration: 1 }}
        onAnimationComplete={handleMusicPlay} // music triggers here
      />

      {/* Decorations */}
      {openCurtain && (
        <>
          {/* A Slider Contents Down Here SlideeContent[0] , thats the idea for now */}
          <Cake tailwindCSS="absolute bottom-2 sm:bottom-10 w-[300px] sm:w-[350px] z-4" />
          <HangingStarDecoration
            loop
            tailwindCSS="overflow-hidden absolute top-0 sm:left-0 sm:top-0 w-[400px] sm:w-[350px] z-1"
          />
          <Gifts tailwindCSS="top-1/2 sm:top-2/3 sm:bottom-0 -right-8 sm:right-0 absolute w-[260px] sm:w-[400px] z-3" />
          <Gifts tailwindCSS="top-1/2 sm:top-2/3 sm:bottom-0 -left-8 sm:left-0 absolute w-[260px] sm:w-[400px] z-3" />
          <Ballons tailwindCSS="absolute bottom-0 h-full w-full flex justify-around sm:justify-between sm:gap-2 items-center z-2 *:sm:w-[300px]" />
          <ConfettiFireWorks
            loop
            tailwindCSS="absolute *:w-dvw *:h-full bottom-0 h-dvh w-dvw z-1"
          />
          {/* <FireWorkIcon
            loop
            tailwindCSS="absolute h-[500px] w-[500px] bottom-4 left-4 sm:hidden w-dvw z-1"
          /> <FireWorkIcon
            loop
            tailwindCSS="absolute h-[500px] w-[500px] bottom-4 right-4 sm:hidden w-dvw z-1"
          /> */}
          {/* Birthday Wishes */}
          <div className="wishes absolute top-1/6 flex flex-col items-baseline gap-1 text-pink-500 font-extrabold text-[30vw] sm:text-6xl z-4 wish-heading ">
            <motion.h2
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="text-4xl sm:text-5xl relative z-2 items"
            >
              Happy Birthday
            </motion.h2>
            <motion.h2
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            >
              Unisha Tamang
            </motion.h2>
          </div>
          {/* Music Toggle Button */}
          {bgMusic && (
            <button
              onClick={toggleMusic}
              className="absolute top-2 right-2 z-50 px-4 py-2 bg-pink-200 hover:bg-pink-300 rounded-lg text-xl transition-all"
            >
              {isPlaying ? "🎵" : "🔇"}
            </button>
          )}
        </>
      )}
    </main>
  );
};

export default UserHomePage;
