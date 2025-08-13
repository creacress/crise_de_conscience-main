"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function SInformer() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="py-20 px-6 max-w-4xl mx-auto text-gray-800 dark:text-gray-200"
    >
      {/* Hero */}
      <section className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-emerald-700 mb-3">
          S’informer sur les dérives sectaires
        </h1>
        <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
          Comprendre les mécanismes d’emprise mentale pour mieux les reconnaître et s’en protéger.
        </p>
      </section>

      <section className="space-y-10 text-sm leading-relaxed">
        {/* Définition */}
        <div>
          <h2 className="text-xl font-semibold mb-2">
            Qu’est-ce qu’une dérive sectaire ?
          </h2>
          <p>
            Une dérive sectaire désigne une dynamique dans laquelle un groupe
            exerce un pouvoir abusif sur ses membres, restreint leur liberté de
            pensée, et les isole du monde extérieur. Elle n&apos;est pas toujours
            spectaculaire : souvent, elle s’installe lentement, de manière
            insidieuse.
          </p>
        </div>

        {/* Le rôle du gourou */}
        <div>
          <h2 className="text-xl font-semibold mb-2">
            Le rôle du gourou ou de l&apos;autorité absolue
          </h2>
          <p>
            Le gourou n’est pas forcément une seule personne. Il peut s&apos;agir
            d&apos;un conseil ou d&apos;une entité &quot;sacralisée&quot;. Son pouvoir repose sur le
            contrôle des esprits, la manipulation émotionnelle, et
            l&apos;impossibilité de remettre en cause ses directives sans subir de
            conséquences sociales ou spirituelles.
          </p>
        </div>

        {/* Techniques de contrôle */}
        <div>
          <h2 className="text-xl font-semibold mb-2">
            Techniques d’endoctrinement utilisées
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              Discours apocalyptique : peur du monde extérieur, fin imminente
            </li>
            <li>Répétition et conditionnement mental</li>
            <li>Règles de vie strictes et culpabilisantes</li>
            <li>Rupture familiale imposée (shunning)</li>
            <li>Soumission absolue aux dirigeants</li>
          </ul>
        </div>

        {/* Infographie améliorée */}
        <div className="bg-gradient-to-br from-emerald-50 to-white dark:from-slate-800 dark:to-slate-700 border border-emerald-200 dark:border-slate-600 rounded-xl p-6 text-center shadow">
          <h3 className="text-md font-semibold text-emerald-700 mb-2">
            Infographie : Reconnaître une dérive sectaire
          </h3>
          <div className="bg-gray-100 dark:bg-slate-600 h-48 rounded flex items-center justify-center text-gray-500 dark:text-gray-300 italic">
            (Infographie à venir ici : Signes visuels, triangle d’influence, etc.)
          </div>
        </div>

        {/* Danger */}
        <div>
          <h2 className="text-xl font-semibold mb-2">
            Reconnaître les signes de danger
          </h2>
          <p>
            Perte d’autonomie, rupture avec la famille, peur du doute, sentiment
            d’échec si on remet en cause les enseignements... Ces signaux sont
            les marqueurs d’une atteinte profonde à la liberté de conscience.
          </p>
        </div>

        {/* Lien vers documents */}
        <div className="bg-[#f1f5f9] dark:bg-slate-800 p-4 border-l-4 border-emerald-600 rounded">
          📁 <strong>Explorer les preuves internes</strong> : Découvrez notre
          base de données contenant des{" "}
          <Link href="/documents" className="underline">
            lettres confidentielles
          </Link>
          , extraits du Shepherd Book, directives internes et bien plus encore.
        </div>

        {/* Appel à l’aide modernisé */}
        <div className="bg-emerald-50 dark:bg-emerald-900/20 p-6 rounded border border-emerald-200 dark:border-emerald-700 text-center mt-6">
          <h3 className="text-md font-semibold mb-2 text-emerald-800 dark:text-emerald-200">
            Vous êtes concerné·e ?
          </h3>
          <p className="mb-3 text-sm">Parlez-en, vous n’êtes pas seul·e.</p>
          <Link
            href="/aide"
            className="inline-block bg-emerald-600 text-white px-6 py-2 rounded hover:bg-emerald-700 transition"
          >
            Être aidé
          </Link>
        </div>
      </section>
    </motion.main>
  );
}
