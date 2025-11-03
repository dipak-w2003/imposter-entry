import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  cat_frame001,
  cat_frame002,
  cat_frame003,
  cat_frame004,
  cat_frame005,
  cat_frame006,
  cat_frame007,
  cat_frame008,
  cat_frame010,
  cat_frame011,
  cat_frame012,
  cat_frame013,
  cat_frame014,
  cat_frame015,
  cat_frame025,
  cat_frame026,
  cat_frame027,
  cat_frame028,
  cat_frame044,
  cat_frame049,
} from "../assets/svg/meow-expressions/meow-expressions-collection";
import { badGreetings, goodGreetings } from "../lib/constants/greetings";
import {
  namePredictionsCollections,
  namePredictionsCollections2,
} from "../lib/constants/constants";

// responsive is required hai
function LoginPage() {
  const [username, setUsername] = useState<string>("");
  const [isExcited, setIsExcited] = useState<boolean>(false);
  const expression_HASH: Record<string, string> = {
    u: cat_frame001,
    un: cat_frame002,
    uni: cat_frame003,
    unis: cat_frame004,
    unish: cat_frame005,
    unisha: cat_frame006,
    "unisha ": cat_frame007,
    "unisha t": cat_frame008,
    "unisha ta": cat_frame002,
    "unisha tam": cat_frame003,
    "unisha tama": cat_frame004,
    "unisha taman": cat_frame005,
    "unisha tamang": cat_frame006,
  };
  const randomSmileyExpressions = [
    cat_frame001,
    cat_frame002,
    cat_frame003,
    cat_frame004,
    cat_frame005,
    cat_frame006,
  ];

  const randomSadExpressions = [
    cat_frame010,
    cat_frame011,
    cat_frame012,
    cat_frame013,
    cat_frame014,
    cat_frame015,
    cat_frame025,
    cat_frame026,
    cat_frame027,
    cat_frame028,
    cat_frame044,
    cat_frame049,
  ];

  // Choose current cat frame
  const currentFrame = useMemo(() => {
    const randomIndex0 = Math.floor(
      Math.random() * randomSmileyExpressions.length
    );

    const matched = expression_HASH[username.trim().toLowerCase()];
    if (matched) return randomSmileyExpressions[randomIndex0];

    // pick random fallback image safely
    const randomIndex = Math.floor(Math.random() * randomSadExpressions.length);
    const randomImage = randomSadExpressions[randomIndex];
    return randomImage || cat_frame049;
  }, [username]);

  return (
    <main className="flex flex-col justify-center items-center h-screen bg-gradient-to-br from-pink-100 via-yellow-50 to-pink-200 overflow-hidden">
      <section className="flex flex-col h-[600px] w-[600px] justify-center items-center relative overflow-hidden rounded-2xl shadow-[0_0_20px_rgba(0,0,0,0.15)]">
        {/* 🐱 Cat Expression */}
        <div className="box-image h-[300px] w-[300px] absolute -top-24 z-10 ">
          <AnimatePresence mode="wait">
            <motion.img
              src={currentFrame}
              draggable={false}
              alt="cat expression"
              className="h-full w-full absolute -bottom-14 z-10 select-none drop-shadow-[0_5px_5px_rgba(0,0,0,0.25)]"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                ease: "easeOut",
                scale: { duration: 0.4 },
              }}
            />
          </AnimatePresence>
        </div>

        {/* 🧩 Form Contents */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="form w-[520px] h-[350px] relative mt-36 rounded-lg flex flex-col justify-center gap-6 items-center bg-white/60 backdrop-blur-md border border-white/30"
          style={{ boxShadow: "inset 2px 2px 10px 2px rgba(0,0,0,0.25)" }}
        >
          <motion.header
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, ease: "easeOut" }}
            className="text-2xl font-semibold mt-2"
          >
            <ConditionalHeaderProvider username={username} />
          </motion.header>

          {/* Input field */}
          <motion.input
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            placeholder="Your Full Name"
            className="bg-transparent placeholder:text-gray-700 h-[50px] w-[300px] rounded-lg px-4 border-none outline-none text-center text-lg"
            style={{ boxShadow: "inset 2px 2px 10px 2px rgba(0,0,0,0.25)" }}
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.3 }}
          />

          {/* Excited Question */}
          <div className="excited-question flex flex-col justify-center items-center text-center gap-2">
            <span className="">
              <h2 className="font-semibold text-gray-800">
                <motion.span
                  // key={username}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-pink-600 font-bold"
                >
                  Are You Excited ?
                </motion.span>
              </h2>
            </span>
            <span className="flex justify-center gap-4 mt-2">
              <motion.button
                onClick={() => setIsExcited(true)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`cursor-pointer ${
                  isExcited ? "bg-pink-300" : "bg-pink-200"
                } rounded-full px-4 py-2 text-gray-800 shadow-md`}
              >
                Yes 😸
              </motion.button>
              <motion.button
                onClick={() => setIsExcited(false)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`cursor-pointer ${
                  !isExcited ? "bg-yellow-300" : "bg-yellow-200"
                } rounded-full px-4 py-2 text-gray-800 shadow-md`}
              >
                No 😿
              </motion.button>
            </span>
          </div>
          {namePredictionsCollections2.includes(username.toLowerCase()) && (
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={`cursor-pointer w-[20vw] ${
                isExcited ? "bg-pink-300" : "bg-pink-200"
              } rounded px-4 py-2 text-gray-800 shadow-md`}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                ease: "easeOut",
                scale: { duration: 0.8 },
              }}
            >
              Let's Go
            </motion.button>
          )}
        </motion.div>
      </section>
    </main>
  );
}

export default LoginPage;

interface ConditionalHeaderProviderProps {
  username: string;
}

export function ConditionalHeaderProvider({
  username,
}: ConditionalHeaderProviderProps) {
  const isRealUnisha = namePredictionsCollections.includes(
    username.toLowerCase()
  );

  const selectedGreeting = useMemo(() => {
    const greetings = isRealUnisha ? goodGreetings : badGreetings;
    const randomIndex = Math.floor(Math.random() * greetings.length);
    return greetings[randomIndex];
  }, [isRealUnisha, username]);

  return (
    <motion.header
      key={selectedGreeting}
      initial={{ opacity: 0, y: -20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className={`text-xl font-semibold text-center ${
        isRealUnisha ? "text-pink-500" : "text-gray-600"
      }`}
    >
      {selectedGreeting}
    </motion.header>
  );
}
