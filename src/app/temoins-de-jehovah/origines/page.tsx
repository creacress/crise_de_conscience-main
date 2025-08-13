"use client";

import { motion } from "framer-motion";

export default function OriginesTJ() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl mx-auto px-6 py-20 text-gray-800 dark:text-gray-200"
    >
      {/* Hero */}
      <motion.section
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-emerald-700 mb-4">
          Origines des Témoins de Jéhovah
        </h1>
        <p className="text-md md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Une transformation historique entre dissidence spirituelle et centralisation autoritaire.
        </p>
      </motion.section>

      {/* Contenu */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="space-y-8 text-base md:text-lg leading-relaxed"
      >
        {[
          "Le mouvement des Témoins de Jéhovah trouve ses racines dans les années 1870 avec Charles Taze Russell, fondateur du groupe des Étudiants de la Bible.",
          "Rejetant les dogmes traditionnels des Églises établies, Russell prônait une lecture personnelle de la Bible, et dénonçait toute forme d’organisation religieuse structurée.",
          "Pourtant, sous la direction de son successeur Joseph Rutherford, ce mouvement s’est transformé en une organisation centralisée et autoritaire, rompant radicalement avec les principes initiaux.",
          "En 1931, le nom « Témoins de Jéhovah » fut adopté, marquant une scission définitive avec d’autres groupes issus du courant russelliste.",
          "L’organisation moderne se distingue par son rejet de la Trinité, sa valorisation du nom « Jéhovah » — une transcription linguistiquement erronée du tétragramme YHWH — et son insistance sur l’autorité exclusive de son Collège central."
        ].map((text, i) => (
          <motion.p key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 + i * 0.1 }} className="border-l-4 border-emerald-600 pl-4">
            {text}
          </motion.p>
        ))}

        {/* Citation Franz */}
        <div className="bg-emerald-50 dark:bg-emerald-900/20 border-l-4 border-emerald-600 p-4 rounded">
          <p className="italic text-gray-700 dark:text-gray-300">
            Cette évolution doctrinale et structurelle fut souvent motivée non par une exégèse rigoureuse, mais par des considérations pratiques et disciplinaires.
          </p>
          <p className="mt-2 text-right text-sm text-gray-600 dark:text-gray-400">
            — Raymond Franz, <em>Crise de Conscience</em>
          </p>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="border-l-4 border-emerald-600 pl-4"
        >
          Dès lors, l’objectif affiché de restaurer le christianisme primitif apparaît comme un projet idéologique sélectif, davantage modelé par les décisions humaines que par un retour fidèle aux textes bibliques.
        </motion.p>
      </motion.section>
    </motion.main>
  );
}
