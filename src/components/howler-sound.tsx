import { useState } from "react";
import { Howl } from "howler";
import { motion } from "framer-motion";

const HowlerMusic = () => {
  const [open, setOpen] = useState(false);
  const [musicPlayed, setMusicPlayed] = useState(false);

  const handleOpen = () => setOpen(true);

  const handleMusic = () => {
    if (!musicPlayed) {
      const bgMusic = new Howl({
        src: ["/music/emotion-rhythm-music.mp3"],
        volume: 0,
        loop: true,
        html5: true,
      });
      bgMusic.play();
      bgMusic.fade(0, 0.5, 4000); // fade in smoothly
      setMusicPlayed(true);
    }
  };

  return (
    <div className="relative h-screen w-screen ">
      {/* Curtain Button */}
      {!open && (
        <button
          onClick={handleOpen}
          className=" cursor-pointer absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-6 py-3 bg-pink-200 rounded-lg z-50"
        >
          Open Curtain
        </button>
      )}

      {/* Curtain Animation */}
      <motion.div
        className="absolute top-0 left-0 h-full w-full bg-gradient-to-b from-pink-300 to-yellow-200 z-40"
        animate={{ x: open ? "100%" : "0%" }}
        transition={{ duration: 1 }}
        onAnimationComplete={handleMusic} // play music when curtain fully opens
      />

      {/* Decorations */}
      {open && (
        <div className="absolute top-0 left-0 w-full h-full">
          Decorations go here...
        </div>
      )}
    </div>
  );
};

export default HowlerMusic;
