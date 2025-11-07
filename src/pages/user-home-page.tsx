import { motion } from "framer-motion";
import Cake from "../components/cake";
// import Confetti1 from "../components/confetti-1";
import Gifts from "../components/gifts";
import Ballons from "../components/ballons";
import ConfettiFireWorks from "../components/confetti-with-fireworks";
const UserHomePage = () => {
  return (
    <main className="relative h-dvh w-dvw flex justify-center items-center overflow-hidden bg-linear-to-br from-pink-100 via-yellow-50 to-pink-200 -z-10">
      {/* Confetti */}

      {/* Cake */}
      <Cake tailwindCSS=" absolute bottom-10 h-[300px] w-[300px]  sm:h-[350px] sm:w-[350px] z-2 " />

      {/* Gifts */}
      <Gifts
        tailwindCSS=" top-2/3 sm:bottom-0 -right-8 sm:right-0 absolute h-[200px] w-[180px] sm:h-[2
      400px] sm:w-[400px] z-1"
      />
      <Gifts
        tailwindCSS=" top-2/3  sm:bottom-0 -left-8 sm:left-0 absolute h-[200px] w-[180px] sm:h-[2
      400px] sm:w-[400px] z-1 "
      />

      {/* Ballons */}
      <Ballons tailwindCSS="absolute bottom-0 h-full w-full flex justify-between items-center -z-1  *:w-[300px]" />

      {/*Birthday Confetti Ballons*/}
      <ConfettiFireWorks
        loop={true}
        tailwindCSS="absolute bottom-0 h-dvh w-dvw -z-2  "
      />

      {/* FireWorks */}
      {/* <SesonalFireWorks tailwindCSS=" bottom-1/2 w-[200vw]   sm:bottom-0 left-0 absolute sm:h-dvh sm:w-dvw z-1" /> */}
      {/* ................... */}
      <div className="wishes absolute top-12 flex flex-col items-center gap-1 text-pink-500 font-extrabold text-5xl sm:text-6xl wish-heading">
        <motion.h2
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="text-4xl sm:text-5xl "
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
