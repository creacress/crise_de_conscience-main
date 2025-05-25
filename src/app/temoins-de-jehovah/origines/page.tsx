"use client";

import { motion } from "framer-motion";

export default function OriginesTJ() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl mx-auto px-6 py-20 text-gray-800"
    >
      <h1 className="text-3xl font-bold text-emerald-700 mb-6">
        Origines des Témoins de Jéhovah
      </h1>

      <p className="mb-4">
        Le mouvement des Témoins de Jéhovah trouve ses racines dans les années 1870 avec Charles Taze Russell, un prédicateur américain qui fonde un groupe nommé les « Étudiants de la Bible ».
      </p>

      <p className="mb-4">
        En 1881, il fonde la <em>Zion&apos;s Watch Tower Tract Society</em>, renommée plus tard en <em>Watchtower Bible and Tract Society</em>, qui devient l’organe officiel du mouvement. En 1931, sous la direction de Joseph Rutherford, l&apos;organisation adopte officiellement le nom de « Témoins de Jéhovah ».
      </p>

      <p>
        Leur objectif ? Restaurer ce qu&apos;ils considèrent comme la véritable forme du christianisme primitif, rejetant la Trinité et mettant l’accent sur l’utilisation du nom « Jéhovah ».
      </p>
    </motion.main>
  );
}
