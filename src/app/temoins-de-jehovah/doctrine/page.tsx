"use client";

import { motion } from "framer-motion";

export default function DoctrineTJ() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl mx-auto px-6 py-20 text-gray-800"
    >
      <h1 className="text-3xl font-bold text-emerald-700 mb-6">
        Doctrine des Témoins de Jéhovah
      </h1>

      <p className="mb-4">
        Les Témoins de Jéhovah possèdent une théologie très spécifique. Voici un aperçu de leurs principales croyances :
      </p>

      <ul className="list-disc pl-5 space-y-3">
        <li>
          <strong>Les 144 000 :</strong> seuls 144 000 seront ressuscités pour régner avec Christ au ciel. Les autres fidèles vivront éternellement sur une terre transformée.
        </li>
        <li>
          <strong>Rejet de la Trinité :</strong> Jésus est considéré comme une créature divine mais distincte de Dieu (Jéhovah), et le Saint-Esprit comme une force active.
        </li>
        <li>
          <strong>Transfusions interdites :</strong> Basé sur une interprétation stricte des textes bibliques, le refus du sang est un dogme central.
        </li>
        <li>
          <strong>Prédication obligatoire :</strong> Les fidèles doivent prêcher activement la « bonne nouvelle du Royaume ».
        </li>
        <li>
          <strong>Armageddon imminent :</strong> Seuls les Témoins de Jéhovah seront sauvés lors de la destruction finale du monde actuel.
        </li>
      </ul>

      <p className="mt-6">
        D&apos;autres points incluent l&apos;interdiction des fêtes, de la politique, et une hiérarchie très rigide au sein de l&apos;organisation.
      </p>
    </motion.main>
  );
}
