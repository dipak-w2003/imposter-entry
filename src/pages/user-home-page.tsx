import { motion } from "framer-motion";
import Cake from "../components/cake";
import Confetti1 from "../components/confetti-1";
import Gifts from "../components/gifts";
import Confetti2 from "../components/confetti-2";
const UserHomePage = () => {
  return (
    <main className="relative h-dvh w-dvw flex justify-center items-center overflow-hidden bg-linear-to-br from-pink-100 via-yellow-50 to-pink-200 -z-10">
      {/* Confetti */}
      <Confetti1 tailwindCSS=" top-4  left-0 absolute sm:h-dvh sm:w-dvw -z-2 " />
      <Confetti1 tailwindCSS="top-4 right-0 absolute sm:h-dvh sm:w-dvw -z-2" />
      <Confetti2 tailwindCSS="-bottom-2 left-0 absolute sm:h-[300px] sm:w-[300px] -z-2" />
      <Confetti2 tailwindCSS="-bottom-2 right-0 absolute sm:h-[300px] sm:w-[300px] -rotate-180 -z-2" />

      {/* Cake */}
      <Cake tailwindCSS=" absolute sm:h-[400px] sm:w-[400px] z-2 " />

      {/* Gifts */}
      <Gifts tailwindCSS="bottom-0 right-0 absolute sm:h-[200px] sm:w-[200px] z-1" />
      <Gifts tailwindCSS="bottom-0 left-0 absolute sm:h-[200px] sm:w-[200px] z-1" />
      {/* FireWorks */}
      {/* <SesonalFireWorks tailwindCSS="bottom-0 left-0 absolute sm:h-dvh sm:w-dvw z-1" /> */}
      {/* ................... */}
      <div className="wishes absolute bottom-8 flex flex-col items-center gap-2 text-pink-500 font-extrabold text-4xl font-serif">
        <motion.h2
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="text-2xl"
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
    </main>
  );
};

export default UserHomePage;
