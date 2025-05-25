"use client";

import { motion } from "framer-motion";

export default function NomDeDieuTJ() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl mx-auto px-6 py-20 text-gray-800"
    >
      <h1 className="text-3xl font-bold text-emerald-700 mb-6">
        Le nom de Dieu selon les Témoins de Jéhovah
      </h1>

      <p className="mb-4">
        Pour les Témoins de Jéhovah, le nom divin « Jéhovah » est central. Ils considèrent que le nom de Dieu doit être utilisé dans le culte, comme preuve de fidélité et de vérité.
      </p>

      <p className="mb-4">
        Le mot « Jéhovah » est une latinisation du tétragramme hébreu YHWH, combiné avec les voyelles du mot « Adonaï ». Bien que ce ne soit pas la prononciation originale, ils estiment qu’il est essentiel de l’utiliser.
      </p>

      <p className="mb-4">
        Ils ont même modifié leur propre version de la Bible, la *Traduction du Monde Nouveau*, pour y inclure « Jéhovah » dans l’Ancien comme dans le Nouveau Testament, là où les autres traductions utilisent « Seigneur ».
      </p>

      <p>
        Cette insistance sur le nom sert aussi à affirmer leur identité unique parmi les religions chrétiennes.
      </p>
    </motion.main>
  );
}
