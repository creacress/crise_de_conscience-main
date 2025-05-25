"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BookText, ShieldCheck, Users, Eye, Gavel } from "lucide-react";

export default function QuiSommesNous() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="py-20 px-6 max-w-5xl mx-auto"
    >
      <nav className="text-sm text-gray-600 mb-6">
        <Link href="/" className="text-emerald-700 hover:underline">
          Accueil
        </Link>{' '}
        / <span className="text-gray-500">Qui sommes-nous</span>
      </nav>

      <h1 className="text-4xl font-bold text-emerald-700 mb-6">
        Qui sommes-nous ?
      </h1>

      <p className="text-lg text-gray-700 mb-12 leading-relaxed">
        L'association <strong>Crise de Conscience</strong> est née d’un besoin
        urgent : celui de <strong>révéler les dérives systémiques</strong> des
        Témoins de Jéhovah, de <strong>soutenir les victimes</strong>, et de{" "}
        <strong>agir contre l’inaction</strong>.
        <br />
        <br />
        Nos actions s’organisent autour de 5 axes forts :
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        <Axe
          icon={<BookText className="w-8 h-8 text-emerald-600" />}
          title="1. Documentation & Vérité"
          content="Base de données de preuves (lettres internes, témoignages, documents judiciaires) pour exposer le système TJ dans sa globalité."
        />
        <Axe
          icon={<Eye className="w-8 h-8 text-emerald-600" />}
          title="2. Veille OSINT & Contre-communication"
          content="Scraping, IA, détection des contenus d’endoctrinement + contre-réponses visuelles (shorts, vidéos, contenus jeunes)."
        />
        <Axe
          icon={<Users className="w-8 h-8 text-emerald-600" />}
          title="3. Soutien aux excommuniés (renvoyés) & victimes"
          content="Anonymat, groupes de parole, psys bénévoles et packs de sortie pratiques pour reconstruire sa vie."
        />
        <Axe
          icon={<ShieldCheck className="w-8 h-8 text-emerald-600" />}
          title="4. Prévention pour les futures victimes"
          content="Campagnes ciblées, site miroir pédagogique, partenariats institutionnels, contenu adapté aux jeunes."
        />
        <Axe
          icon={<Gavel className="w-8 h-8 text-emerald-600" />}
          title="5. Lobby & législation"
          content="Pression politique et juridique : MIVILUDES, députés, avocats. Objectif : changement de statut, interdiction de prêcher aux mineurs."
        />
      </div>
    </motion.main>
  );
}

function Axe({
  icon,
  title,
  content,
}: {
  icon: React.ReactNode;
  title: string;
  content: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-white p-6 rounded-xl shadow hover:shadow-md transition"
    >
      <div className="mb-4">{icon}</div>
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-sm text-gray-700">{content}</p>
    </motion.div>
  );
}
