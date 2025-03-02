import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const quotes = [
  "Design is intelligence made visible.",
  "Good design is like a refrigerator—when it works, no one notices, but when it doesn’t, it stinks.",
  "Whitespace is like air: it is necessary for design to breathe.",
  "People ignore design that ignores people.",
  "Simplicity is the ultimate sophistication.",
];

const FunFact = () => {
  const [quote, setQuote] = useState(quotes[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
    }, 3000); // Changes every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-10 px-8 max-w-3xl mx-auto text-center">
      <motion.p
        key={quote} // Key forces re-render for animation
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 2 }}
        className="text-purple-400 text-lg italic font-semibold bg-gray-800 px-6 py-3 rounded-lg shadow-lg"
      >
        {quote}
      </motion.p>
    </div>
  );
};

export default FunFact;
