"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="py-24 px-6 text-center bg-[#f1f5f9]"
    >
      <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 mb-4">
        Crise de Conscience
      </h1>
      <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
        Nous sommes là pour vous accompagner, vous informer et vous aider à
        traverser cette période difficile. Vous n'êtes pas seul(e).
        Ensemble, nous pouvons surmonter cette crise et retrouver la paix.
      </p>
    </motion.section>
  );
}
