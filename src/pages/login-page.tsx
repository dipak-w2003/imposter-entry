import { useMemo, useState, type ChangeEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { badGreetings, goodGreetings } from "../lib/constants/greetings";
import {
  expression_HASH,
  namePredictionsCollections,
  namePredictionsCollections2,
  randomSadExpressions,
  randomSmileyExpressions,
} from "../lib/constants/constants";
import type { AppDispatch, RootState } from "../lib/store/store";
import { useDispatch, useSelector } from "react-redux";
import { setIsLoaded, setName } from "../lib/store/user-general-slice";
import { useNavigate } from "react-router-dom";

// ------------------
// Conditional Greeting Component
// ------------------
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
      className={`text-xl sm:text-2xl font-semibold text-center ${
        isRealUnisha ? "text-pink-500" : "text-gray-600"
      }`}
    >
      {selectedGreeting}
    </motion.header>
  );
}

// ------------------
// Main LoginPage Component
// ------------------
function LoginPage() {
  const { name: _name_user } = useSelector(
    (state: RootState) => state.userGeneralSlice
  );
  const [username, setUsername] = useState<string>("");
  const [isExcited, setIsExcited] = useState<boolean>(false);

  const dispatch: AppDispatch = useDispatch();

  // Choose current cat frame
  const currentFrame = useMemo(() => {
    const matched = expression_HASH[username.trim().toLowerCase()];
    if (matched) {
      const randomIndex = Math.floor(
        Math.random() * randomSmileyExpressions.length
      );
      return randomSmileyExpressions[randomIndex];
    }

    const randomIndex = Math.floor(Math.random() * randomSadExpressions.length);
    return (
      randomSadExpressions[randomIndex] ||
      "https://cdn.jsdelivr.net/gh/dipak-w2003/unisha-verse@main/projects/imposter-entry/svgs/meow-expressions/frame-9.svg"
    );
  }, [username]);

  // Handle input change
  const handleUsername = (e: ChangeEvent<HTMLInputElement>) => {
    const _e = e.target.value.trimStart().trimEnd();
    // setUsername(e.target.value);
    setUsername(_e);
  };
  const navigate = useNavigate();
  // Handle "Let's Go" button click
  const handleButton = () => {
    const _name = username.trim();
    if (namePredictionsCollections2.includes(_name.toLowerCase())) {
      dispatch(setName(_name));
      dispatch(setIsLoaded(true));
      navigate("/user");
    } else {
      dispatch(setName(""));
    }
  };

  return (
    <main className="relative flex flex-col justify-center items-center min-h-dvh max-h-dvh bg-linear-to-br bg-blue-800 from-pink-100 via-yellow-50 to-pink-200">
      <section
        className="flex flex-col justify-center items-center relative  rounded-2xl shadow-[0_0_20px_rgba(0,0,0,0.15)]
        h-[500px] w-[380px] sm:h-[600px] sm:w-[600px]"
      >
        {/* 🐱 Cat Expression */}
        <div className="box-image h-[200px] w-[200px] sm:h-[260px] sm:w-[260px] absolute -top-2  sm:-top-12 z-10">
          <AnimatePresence mode="wait">
            <motion.img
              src={currentFrame}
              draggable={false}
              alt="cat expression"
              className="h-full w-full absolute -bottom-2  sm:-bottom-8 z-10 select-none drop-shadow-[0_5px_5px_rgba(0,0,0,0.25)]"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ ease: "easeOut", scale: { duration: 0.4 } }}
            />
          </AnimatePresence>
        </div>

        {/* 🧩 Form Contents */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="form w-[350px] h-[300px] sm:w-[550px] sm:h-[350px] relative mt-36 sm:mt-40 rounded-lg flex flex-col justify-center gap-4 sm:gap-6 items-center bg-white/60 backdrop-blur-md border border-white/30"
          style={{ boxShadow: "inset 2px 2px 10px 2px rgba(0,0,0,0.25)" }}
        >
          {/* Header Greeting */}
          <motion.header
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, ease: "easeOut" }}
            className="sm:text-2xl text-xl font-semibold mt-2"
          >
            <ConditionalHeaderProvider username={username} />
          </motion.header>

          {/* Input field */}
          <motion.input
            autoFocus
            autoComplete="off"
            onChange={handleUsername}
            type="text"
            placeholder="Your Full Name"
            className="bg-transparent placeholder:text-gray-700 h-[50px] w-[260px] sm:w-[300px] rounded-lg px-4 border-none outline-none text-center text-lg font-bold sm:font-normal"
            style={{ boxShadow: "inset 2px 2px 10px 2px rgba(0,0,0,0.25)" }}
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.3 }}
          />

          {/* Excited question buttons */}
          <div className="excited-question flex flex-col justify-center items-center text-center gap-2">
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
            <span className="flex justify-center gap-4 mt-2">
              <motion.button
                onClick={() => setIsExcited(true)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`cursor-pointer ${
                  isExcited ? "bg-pink-300" : "bg-pink-100"
                } rounded-full px-4 py-2 text-gray-800 shadow-md`}
              >
                Yes 😸
              </motion.button>
              <motion.button
                onClick={() => setIsExcited(false)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`cursor-pointer ${
                  !isExcited ? "bg-yellow-300" : "bg-yellow-100"
                } rounded-full px-4 py-2 text-gray-800 shadow-md`}
              >
                No 😿
              </motion.button>
            </span>
          </div>

          {/* Let's Go Button */}
          {namePredictionsCollections2.includes(username.toLowerCase()) && (
            <motion.button
              onClick={handleButton}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={`cursor-pointer w-[40vw] sm:w-[20vw] ${
                isExcited ? "bg-pink-300" : "bg-pink-200"
              } rounded px-4 py-2 text-gray-800 shadow-md`}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ ease: "easeOut", scale: { duration: 0.8 } }}
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
