'use client';

import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'
import Link from 'next/link'

export default function Merci() {
  return (
    <motion.main
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6"
    >
      <CheckCircle className="w-16 h-16 text-emerald-600 mb-4" strokeWidth={1.5} />

      <h1 className="text-3xl font-bold text-emerald-700 mb-4">
        Merci pour votre soutien 💚
      </h1>

      <p className="text-gray-700 mb-6 max-w-md">
        Votre don a bien été pris en compte. Il contribue directement à faire avancer notre mission 
        et à soutenir celles et ceux qui en ont besoin. Merci pour votre confiance 🙏
      </p>

      <Link
        href="/"
        className="inline-block bg-emerald-600 text-white px-6 py-3 rounded hover:bg-emerald-700 transition text-sm"
      >
        Retour à l’accueil
      </Link>
    </motion.main>
  )
}
