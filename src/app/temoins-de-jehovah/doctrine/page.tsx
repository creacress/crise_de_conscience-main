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
      <motion.h1
        className="text-4xl font-extrabold text-emerald-700 mb-10 text-center"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Doctrine des Témoins de Jéhovah
      </motion.h1>

      <motion.section
        className="space-y-6 text-lg leading-relaxed"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <p>
          Les Témoins de Jéhovah possèdent une théologie très spécifique. Voici un aperçu de leurs principales croyances :
        </p>

        <p>
          <strong>Les 144 000 :</strong> seuls 144 000 seront ressuscités pour régner avec Christ au ciel. Les autres fidèles vivront éternellement sur une terre transformée. Cette doctrine repose sur une lecture littérale d'Apocalypse 7 et 14, mais ignore le caractère symbolique largement reconnu du langage apocalyptique. Elle introduit une élite spirituelle au sein même de l'organisation, ce qui contredit l’égalité entre croyants prônée dans le Nouveau Testament.
        </p>

        <p>
          <strong>Rejet de la Trinité :</strong> Jésus est considéré comme une créature divine mais distincte de Dieu (Jéhovah), et le Saint-Esprit comme une force active impersonnelle. Ce rejet, bien qu’en accord avec certaines traditions non trinitaires primitives, nie des affirmations claires de divinité attribuées au Christ (Jean 1:1 ; Col. 2:9) et résulte d’une traduction biaisée de certains versets dans leur propre Bible, la <em>Traduction du monde nouveau</em>.
        </p>

        <p>
          <strong>Transfusions interdites :</strong> Basé sur une interprétation stricte des textes bibliques sur le sang (Gen. 9:4 ; Actes 15:28-29), le refus du sang est un dogme central. Or, ces textes ne traitent pas explicitement des usages médicaux modernes, et cette politique a mené à de nombreuses morts évitables. L’argument moral s’effondre d’autant plus que l’organisation autorise désormais certaines fractions sanguines, révélant une incohérence doctrinale.
        </p>

        <p>
          <strong>Prédication obligatoire :</strong> Les fidèles doivent prêcher activement la « bonne nouvelle du Royaume ». Cette obligation est strictement surveillée par des rapports d’activité mensuels, instaurant une logique de rendement spirituel peu compatible avec la liberté chrétienne prônée dans les Évangiles.
        </p>

        <p>
          <strong>Armageddon imminent :</strong> Seuls les Témoins de Jéhovah seront sauvés lors de la destruction finale du monde actuel. Ce message exclusiviste repose sur des prédictions constamment révisées (1874, 1914, 1925, 1975), démontrant une faillibilité prophétique que la Bible condamne explicitement (Deut. 18:22).
        </p>

        <p>
          D'autres points incluent l'interdiction des fêtes, de la politique, et une hiérarchie très rigide au sein de l'organisation. Cette structure autoritaire, dirigée par le Collège central, impose une interprétation unique de la Bible, rendant toute pensée divergente passible d'exclusion. La doctrine des Témoins de Jéhovah, bien que cohérente en apparence, révèle de profondes contradictions internes, tant sur le plan scripturaire qu’éthique, comme l'ont exposé plusieurs anciens membres de haut rang, dont Raymond Franz.
        </p>
      </motion.section>
    </motion.main>
  );
}
