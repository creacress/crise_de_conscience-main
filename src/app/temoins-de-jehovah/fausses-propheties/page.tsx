"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const ProphetiesTJ = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl mx-auto px-6 py-20 text-gray-800"
    >
      <h1 className="text-3xl font-bold text-emerald-700 mb-6">
        Fausses prophéties des Témoins de Jéhovah
      </h1>

      <p className="mb-4">
        Depuis sa fondation, l&apos;organisation a annoncé plusieurs dates censées
        marquer la fin du monde ou l’instauration du Royaume de Dieu sur terre.
        Voici une analyse détaillée des plus marquantes :
      </p>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">
          1914 : Retour invisible du Christ
        </h2>
        <p className="mb-4">
          Selon les Témoins de Jéhovah, 1914 marque l&apos;année du retour invisible
          du Christ et l&apos;établissement de son Royaume céleste. Cette date se
          base sur une interprétation spéculative de Daniel chapitre 4, avec la
          date erronée de 607 av. J.-C. comme chute de Jérusalem, contredite par
          l&apos;histoire académique.
        </p>
        <p className="mb-4">
          Aucun événement visible prophétisé (comme la fin du monde ou
          Armageddon) ne s&apos;est produit. L&apos;organisation Watchtower a alors
          réinterprété cette prophétie pour préserver son autorité doctrinale,
          affirmant un retour invisible, intangible et non réfutable.
        </p>
        <Link
          href="/temoins-de-jehovah/fausses-propheties/1914"
          className="text-emerald-600 hover:text-emerald-800 underline"
        >
          En savoir plus sur la croyance de 1914
        </Link>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">
          1925 : Résurrection des patriarches bibliques
        </h2>
        <p className="mb-4">
          En 1925, les Témoins ont annoncé avec certitude la résurrection
          terrestre imminente d’Abraham, Isaac et Jacob, comme promis par Joseph
          Rutherford dans son livre « Millions Now Living Will Never Die ».
          Cette prédiction a provoqué une grande ferveur parmi les adeptes.
        </p>
        <p className="mb-4">
          Face à l’échec évident de cette prophétie, l&apos;organisation n&apos;a jamais
          reconnu ouvertement son erreur, rejetant la faute sur les croyants.
          Une résidence somptueuse, Beth-Sarim, fut construite en Californie
          pour accueillir ces patriarches, devenant un embarras majeur vendu
          discrètement plus tard.
        </p>
        <Link
          href="/croyances-temoins-jehovah/1925"
          className="text-emerald-600 hover:text-emerald-800 underline"
        >
          En savoir plus sur la croyance de 1925
        </Link>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">
          1975 : Fin du système actuel
        </h2>
        <p className="mb-4">
          L’année 1975 était censée marquer la fin des 6000 ans d’histoire
          humaine depuis la création d’Adam, annonçant ainsi l’arrivée du
          Millénium et l’Armageddon. La Watchtower a intensifié ses annonces dès
          les années 1960, encourageant indirectement ses fidèles à se préparer
          à la fin imminente.
        </p>
        <p className="mb-4">
          L&apos;échec prophétique fut dramatique, poussant de nombreux Témoins à
          abandonner leurs carrières, leurs études et même leurs familles dans
          l&apos;attente d&apos;événements qui ne se produisirent jamais. Une fois de
          plus, l&apos;organisation a esquivé toute responsabilité, accusant ses
          adeptes d&apos;avoir mal compris ses propos pourtant clairs.
        </p>
        <Link
          href="/croyances-temoins-jehovah/1975"
          className="text-emerald-600 hover:text-emerald-800 underline"
        >
          En savoir plus sur la croyance de 1975
        </Link>
      </section>

      <p className="mt-6">
        À chaque échec prophétique, l’organisation a systématiquement
        réinterprété ou minimisé ses déclarations initiales, refusant de
        reconnaître clairement ses erreurs et préservant ainsi son emprise sur
        les membres.
      </p>
    </motion.main>
  );
};

export default ProphetiesTJ;
