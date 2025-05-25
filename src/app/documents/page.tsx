"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function DocumentsUtiles() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="py-20 px-6 max-w-4xl mx-auto text-gray-800"
    >
      <h1 className="text-3xl font-bold text-emerald-700 mb-6">Documents utiles</h1>

      <section className="space-y-10 text-sm leading-relaxed">
        {/* Bloc 1 : documents internes */}
        <div>
          <h2 className="text-xl font-semibold text-emerald-700 mb-2">Documents internes TJ</h2>
          <p>
            Ces documents permettent de comprendre le fonctionnement interne des Témoins de Jéhovah,
            leurs directives secrètes, et les mécanismes d’emprise organisationnelle.
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>📄 Lettres confidentielles aux anciens</li>
            <li>📘 Extraits du Shepherd Book (manuel d’anciens)</li>
            <li>🧾 Notes internes sur le traitement des victimes d’abus</li>
            <li>🛑 Directives sur le shunning (rupture familiale imposée)</li>
          </ul>
        </div>

        {/* Bloc 2 : guides pratiques */}
        <div>
          <h2 className="text-xl font-semibold text-emerald-700 mb-2">Guides officiels et pratiques</h2>
          <p>
            Ces ressources vous aident à comprendre vos droits, reconnaître les signes de dérive,
            et agir concrètement selon votre situation :
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>📘 <em>Guide Santé</em> – dérives médicales & pseudo-thérapies</li>
            <li>🏢 <em>Guide de l’entreprise face aux dérives sectaires</em></li>
            <li>🧑‍🏫 <em>Guide pour les collectivités territoriales</em></li>
            <li>👶 <em>Guide sur la protection des mineurs</em></li>
            <li>📚 <em>Formation pro & dérives</em> (détection en milieu éducatif)</li>
          </ul>
        </div>

        {/* Bloc 3 : ressources médias */}
        <div>
          <h2 className="text-xl font-semibold text-emerald-700 mb-2">Témoignages & contenus visuels</h2>
          <p>Nous mettons à disposition du contenu audiovisuel pour sensibiliser et informer :</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>🎥 Vidéos de témoignages d’ex-membres (PIMO, excommuniés…)</li>
            <li>🎧 Audios de conférences ou groupes de parole</li>
            <li>📺 Contre-contenus TikTok, Shorts, YouTube (à venir)</li>
          </ul>
        </div>

        {/* Bloc 4 : outils pratiques */}
        <div>
          <h2 className="text-xl font-semibold text-emerald-700 mb-2">Outils & formulaires utiles</h2>
          <p>Vous trouverez ici des outils pour agir, signaler ou obtenir une aide :</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>📝 Modèle de lettre pour signaler une dérive à la MIVILUDES</li>
            <li>📬 Formulaire de contact sécurisé (via notre <Link href="/contact" className="underline text-emerald-700">page contact</Link>)</li>
            <li>📍 Liens directs vers les associations d’aide aux victimes</li>
            <li>🧭 Fiches pratiques : que faire en tant que proche, agent public, victime</li>
          </ul>
        </div>

        {/* CTA final */}
        <div className="bg-emerald-50 p-4 rounded border border-emerald-200 text-center mt-6">
          <h3 className="text-md font-semibold mb-2">Un document à partager ? Une ressource à recommander ?</h3>
          <p className="mb-3">Aidez-nous à enrichir cette base pour qu’elle bénéficie au plus grand nombre.</p>
          <Link
            href="/contact"
            className="inline-block bg-emerald-600 text-white px-6 py-2 rounded hover:bg-emerald-700 transition"
          >
            Nous écrire
          </Link>
        </div>
      </section>
    </motion.main>
  );
}
