"use client";

import { motion } from "framer-motion";

interface Props {
  title: string;
  content: string;
}

export default function Section({ title, content }: Props) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="py-16 px-6 max-w-4xl mx-auto"
    >
      <h2 className="text-2xl md:text-3xl font-semibold mb-4">{title}</h2>
      <p className="text-gray-700 text-lg leading-relaxed">{content}</p>
    </motion.section>
  );
}
