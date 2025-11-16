import { useState } from "react";
import { motion } from "framer-motion";

const poems = {
  eng: [
    "You shine effortlessly without trying.",
    "Quiet strength defines your presence.",
    "Kindness flows naturally from you.",
    "Beauty radiates from within.",
    "Genuine in every word and gesture.",
    "People like you are truly rare.",
  ],
  nep: [
    "तिमी बिना प्रयास चम्कन्छौ।",
    "शान्त शक्ति तिम्रो उपस्थिति परिभाषित गर्छ।",
    "दयालुता तिमीबाट प्राकृतिक रूपमा बग्छ।",
    "सुन्दरता भित्रबाट प्रकट हुन्छ।",
    "तिम्रा हरेक शब्द र हरेक क्रियामा वास्तविकता छ।",
    "तिम्रै जस्ता मानिसहरू साँच्चै दुर्लभ छन्।",
  ],
};

export default function UserHowISeeHerP4Page() {
  const [lang, setLang] = useState<"eng" | "nep">("eng");

  return (
    <main className="h-dvh flex flex-col justify-center items-center text-white px-4">
      <header className="elegant text-[5rem] underline  sm:text-[6rem] font-bold text-center">
        {lang === "eng" ? "Through My Gaze" : "मेरो दृष्टिले"}
      </header>

      {/* Toggle Button */}
      <div className="mt-6">
        <button
          className="px-6 py-2 bg-white text-black font-semibold rounded-md shadow-md hover:bg-gray-200 transition"
          onClick={() => setLang(lang === "eng" ? "nep" : "eng")}
        >
          {lang === "eng" ? "नेपालीमा हेर्नुहोस्" : "View in English"}
        </button>
      </div>

      <ul className="mt-12 flex flex-col items-center space-y-4 text-[2.5rem] sm:text-2xl font-light fun-heading text-center">
        {poems[lang].map((line, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            {line}
          </motion.li>
        ))}
      </ul>
    </main>
  );
}
