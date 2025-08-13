"use client";

import { motion } from "framer-motion";

const ProphetiesTJ = () => {
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
        Fausses prophéties des Témoins de Jéhovah
      </motion.h1>

      <motion.section
        className="space-y-6 text-lg leading-relaxed"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <p>
          Depuis sa fondation, l'organisation des Témoins de Jéhovah a émis de nombreuses prédictions liées à la fin du monde, à l’Armageddon ou à l’établissement du Royaume de Dieu. À chaque fois, l’échec manifeste de ces annonces n’a pas conduit à une reconnaissance franche des erreurs, mais à des réinterprétations opportunes et à une culpabilisation des fidèles. Voici les plus notoires :
        </p>

        <h2 className="text-2xl font-semibold text-gray-700 mt-8">1914 : Retour invisible du Christ</h2>
        <p>
          Les Témoins enseignent que 1914 marque l’année du retour « invisible » du Christ et le début de son règne céleste. Cette date repose sur une interprétation très contestée de Daniel 4, où les « sept temps » sont convertis en 2 520 années, partant de 607 av. J.-C. pour aboutir à 1914. Or, la date de 607 comme chute de Jérusalem est unanimement rejetée par l’historiographie moderne, qui situe cet événement vers 587/586 av. J.-C. Rien de ce que Russell ou la Watchtower avaient prophétisé (comme la fin des royaumes humains ou la destruction de la chrétienté) ne s’est produit. Après coup, l’organisation a transformé cette date en une « présence invisible » de Christ, indémontrable, et donc non réfutable.
        </p>

        <h2 className="text-2xl font-semibold text-gray-700 mt-8">1925 : Résurrection d’Abraham et des patriarches</h2>
        <p>
          Sous Joseph Rutherford, l’année 1925 fut annoncée comme celle du retour physique sur terre d’Abraham, Isaac, Jacob et d'autres anciens fidèles. Le livre <em>Millions Now Living Will Never Die</em> affirmait que cette résurrection était certaine. Pour les accueillir, la Watchtower fit construire une maison appelée <em>Beth-Sarim</em> en Californie. Les patriarches ne sont jamais venus. Cette prédiction s’est effondrée sans excuses, et la maison fut discrètement revendue, révélant la manipulation.
        </p>

        <h2 className="text-2xl font-semibold text-gray-700 mt-8">1975 : Fin du système mondial</h2>
        <p>
          Dans les années 1960-70, la Watchtower suggéra que 1975 marquerait les 6 000 ans d’histoire humaine et l’avènement probable de l’Armageddon. Les publications et discours officiels, bien que souvent prudents en formulation, créèrent une attente quasi dogmatique. De nombreux fidèles quittèrent leur emploi, ne se marièrent pas ou renoncèrent à avoir des enfants. Après l’échec, la responsabilité fut rejetée sur les membres pour leur prétendue « interprétation personnelle », malgré les nombreux écrits ambigus de l’époque qui entretenaient clairement l’idée d’une fin imminente.
        </p>

        <h2 className="text-2xl font-semibold text-gray-700 mt-8">Autres dates et révisions</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>1874 :</strong> D’abord enseignée comme date du retour invisible du Christ (avant d’être remplacée par 1914).</li>
          <li><strong>1918 :</strong> Attendue comme année de la destruction des Églises chrétiennes.</li>
          <li><strong>1941 :</strong> Promesse faite aux jeunes Témoins qu’ils n’auraient jamais besoin de mariage ou d’études, la fin étant supposée imminente.</li>
          <li><strong>La génération de 1914 :</strong> Pendant des décennies, la Watchtower a enseigné que ceux qui vivaient en 1914 ne mourraient pas avant l’Armageddon. Cette doctrine a été progressivement abandonnée à partir des années 1990 sans reconnaissance explicite de l’erreur.</li>
        </ul>

        <h2 className="text-2xl font-bold text-emerald-700 mt-10">Conclusion critique</h2>
        <p>
          À chaque échec prophétique, l’organisation a systématiquement modifié ou obscurci ses anciennes déclarations, tout en maintenant un climat d’urgence eschatologique. Cette stratégie d’adaptation évite l’aveu de faillibilité, indispensable à une remise en question honnête. Elle permet également de maintenir la dépendance des membres, qui croient vivre « les derniers jours » depuis plus d’un siècle. Cette répétition de prédictions non réalisées constitue un signe clair de faux prophétisme selon les critères bibliques eux-mêmes (Deutéronome 18:22).
        </p>
      </motion.section>
    </motion.main>
  );
};

export default ProphetiesTJ;
