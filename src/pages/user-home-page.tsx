import { lazy, useState } from "react";
import { motion } from "framer-motion";
import { Howl } from "howler";
const RandomCanvaBirthdayItems = lazy(
  () => import("../components/random-canva-birthday-images")
);
const ConfettiFireWorks = lazy(
  () => import("../components/confetti-with-fireworks")
);

const HangingStarDecoration = lazy(
  () => import("../components/hanging-star-decoration")
);

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
        src: [
          "https://cdn.jsdelivr.net/gh/dipak-w2003/unisha-verse@main/projects/imposter-entry/music/emotion-rhythm-music.mp3?v=1",
        ],
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
    <main className="relative h-dvh flex justify-center items-center overflow-hidden bg-[#434978]">
      {/* Curtain Button */}
      {!openCurtain && (
        <button
          onClick={handleOpenCurtain}
          className="absolute cursor-pointer top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-6 py-3 bg-pink-200 rounded-lg z-50 text-lg font-bold hover:bg-pink-300 transition-all"
        >
          Namaskar Unisha Ji,
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
          <HangingStarDecoration
            loop
            className="overflow-hidden absolute top-0 right-1/2 sm:right-1/4 sm:top-0 w-[150px] sm:w-[150px] z-0"
          />
          <ConfettiFireWorks
            loop
            className="absolute *:w-dvw *:h-full bottom-0 h-dvh w-dvw z-1"
          />

          <RandomCanvaBirthdayItems />
          {/* Other Contents */}
          <div className="wishes absolute top-24 flex flex-col justify-around items-center gap-8 text-white font-extrabold text-[30vw]  z-4 wish-heading *:sm:text-7xl">
            <motion.h2
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className=" sm:text-5xl relative z-2 items"
            >
              Happy Birthday
            </motion.h2>
            <motion.h2
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              className="text-[#e2bdd3]"
            >
              Unisha
            </motion.h2>
          </div>
          {/* Music Toggle Button */}
          {bgMusic && (
            <button
              onClick={toggleMusic}
              className="absolute cursor-pointer  top-2 right-2 z-50 px-4 py-2 bg-[#e2bdd3] hover:bg-[#e2bdd3c8] rounded-lg text-xl transition-all"
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

/**
* 


 */
