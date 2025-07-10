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
      <motion.h1
        className="text-4xl font-extrabold text-emerald-700 mb-10 text-center"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Origines des Témoins de Jéhovah
      </motion.h1>

      <motion.section
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="space-y-6 text-lg leading-relaxed"
      >
        <p>
          Le mouvement des Témoins de Jéhovah trouve ses racines dans les années 1870 avec Charles Taze Russell, fondateur du groupe des Étudiants de la Bible.
        </p>
        <p>
          Rejetant les dogmes traditionnels des Églises établies, Russell prônait une lecture personnelle de la Bible, et dénonçait toute forme d’organisation religieuse structurée.
        </p>
        <p>
          Pourtant, sous la direction de son successeur Joseph Rutherford, ce mouvement s’est transformé en une organisation centralisée et autoritaire, rompant radicalement avec les principes initiaux.
        </p>
        <p>
          En 1931, le nom « Témoins de Jéhovah » fut adopté, marquant une scission définitive avec d’autres groupes issus du courant russelliste.
        </p>
        <p>
          L’organisation moderne se distingue par son rejet de la Trinité, sa valorisation du nom « Jéhovah » — une transcription linguistiquement erronée du tétragramme YHWH — et son insistance sur l’autorité exclusive de son Collège central.
        </p>
        <p>
          Cette évolution doctrinale et structurelle fut souvent motivée non par une exégèse rigoureuse, mais par des considérations pratiques et disciplinaires, comme l’a démontré Raymond Franz, ancien membre du Collège central, dans <em>Crise de Conscience</em>.
        </p>
        <p>
          Dès lors, l’objectif affiché de restaurer le christianisme primitif apparaît comme un projet idéologique sélectif, davantage modelé par les décisions humaines que par un retour fidèle aux textes bibliques.
        </p>
      </motion.section>
    </motion.main>
  );
}
