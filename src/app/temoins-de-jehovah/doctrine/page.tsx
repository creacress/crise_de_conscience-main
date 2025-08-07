"use client";

import { motion } from "framer-motion";

export default function DoctrineTJ() {
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
          Doctrine des Témoins de Jéhovah
        </h1>
        <p className="text-md md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Une théologie rigide, exclusive, et parfois mortelle.
        </p>
      </motion.section>

      {/* Corps */}
      <motion.section
        className="space-y-8 text-base md:text-lg leading-relaxed"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        {[
          "Les Témoins de Jéhovah possèdent une théologie très spécifique. Voici un aperçu de leurs principales croyances :",
          "Les 144 000 : seuls 144 000 seront ressuscités pour régner avec Christ au ciel. Les autres fidèles vivront éternellement sur une terre transformée. Cette doctrine repose sur une lecture littérale d'Apocalypse 7 et 14, mais ignore le caractère symbolique largement reconnu du langage apocalyptique.",
          "Rejet de la Trinité : Jésus est considéré comme une créature divine mais distincte de Dieu (Jéhovah), et le Saint-Esprit comme une force active impersonnelle. Ce rejet, bien qu’en accord avec certaines traditions non trinitaires primitives, nie des affirmations claires de divinité attribuées au Christ.",
          "Transfusions interdites : basé sur une interprétation stricte des textes bibliques sur le sang, le refus du sang est un dogme central. Or, ces textes ne traitent pas explicitement des usages médicaux modernes, et cette politique a mené à de nombreuses morts évitables.",
          "Prédication obligatoire : les fidèles doivent prêcher activement la « bonne nouvelle du Royaume ». Cette obligation est strictement surveillée par des rapports mensuels, instaurant une logique de rendement peu compatible avec la liberté chrétienne.",
          "Armageddon imminent : seuls les Témoins de Jéhovah seront sauvés lors de la destruction finale du monde actuel. Ce message exclusiviste repose sur des prédictions constamment révisées, démontrant une faillibilité prophétique que la Bible condamne explicitement.",
          "La doctrine des Témoins de Jéhovah, bien que cohérente en apparence, révèle de profondes contradictions internes, tant sur le plan scripturaire qu’éthique, comme l'ont exposé plusieurs anciens membres de haut rang, dont Raymond Franz."
        ].map((text, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + i * 0.1 }}
            className="border-l-4 border-emerald-600 pl-4"
          >
            {text}
          </motion.p>
        ))}
      </motion.section>
    </motion.main>
  );
}
