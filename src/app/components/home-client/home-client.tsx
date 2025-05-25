'use client';

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Info, Users, FileText, Landmark, HeartHandshake } from 'lucide-react'
import { useAuth } from '@/app/context/authcontext/page'

export default function Home() {
  const { isAdmin } = useAuth()

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="text-gray-800"
    >
      {/* Bouton Admin flottant (conditionnel) */}
      {isAdmin && (
        <div className="fixed bottom-6 right-6 z-50">
          <Link
            href="/admin/dashboard"
            className="flex items-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white px-4 py-2 rounded-full shadow-lg transition-all text-sm"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
            </svg>
            <span>Admin</span>
          </Link>
        </div>
      )}
      {/* Hero sobre */}
      <section className="bg-[#f1f5f9] py-16 px-6 text-center border-b border-gray-200">
        <h1 className="text-4xl md:text-5xl font-bold text-emerald-700 mb-4">
          Crise de Conscience
        </h1>
        <p className="text-lg max-w-3xl mx-auto text-gray-700">
          Association indépendante de soutien, d'information et d’action contre les dérives sectaires liées aux Témoins de Jéhovah.
        </p>
      </section>

      {/* Bloc mission */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold text-emerald-700 mb-6">
          Nos missions et nos actions
        </h2>
        <div className="grid md:grid-cols-2 gap-6 text-sm">
          <Card title="Documentation & Vérité" content="Nous rassemblons des preuves officielles (lettres internes, documents judiciaires, témoignages...) pour exposer la structure sectaire." />
          <Card title="Veille OSINT & Contre-endoctrinement" content="Surveillance des contenus TJ, scraping YouTube, détection via IA et création de contre-contenus visuels accessibles à tous." />
          <Card title="Aide aux PIMO & ex-membres" content="Serveur sécurisé, anonymat, groupes de parole, packs de sortie pratiques et psy bénévoles formés aux traumas sectaires." />
          <Card title="Prévention pour les futures victimes" content="Campagnes locales, site miroir, vidéos jeunes, et travail de terrain avec écoles, assistantes sociales et mairies." />
          <Card title="Lobby & législation" content="Dossiers auprès de la MIVILUDES, députés, avocats. Objectifs : faire évoluer la loi, protéger les mineurs, contrôler les finances." />
        </div>
      </section>

      {/* Navigation blocs */}
      <section className="py-16 px-6 max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Bloc icon={<Info className="w-8 h-8 text-emerald-600" />} title="S'informer" text="Comprendre les mécanismes d'endoctrinement, analyser les documents internes TJ, développer l'esprit critique." href="/s-informer" />
        <Bloc icon={<Users className="w-8 h-8 text-emerald-600" />} title="Être aidé" text="Excommunié·e, PIMO ou proche de victime ? Découvrez nos espaces de soutien, de parole et nos outils pour se reconstruire." href="/aide" />
        <Bloc icon={<HeartHandshake className="w-8 h-8 text-emerald-600" />} title="Agir" text="Témoigner, signaler, sensibiliser autour de vous ou nous aider à financer les actions de terrain." href="/agir" />
        <Bloc icon={<FileText className="w-8 h-8 text-emerald-600" />} title="Documents utiles" text="Accédez aux lettres internes, documents judiciaires, témoignages et ressources PDF pour comprendre et informer." href="/documents" />
        <Bloc icon={<Landmark className="w-8 h-8 text-emerald-600" />} title="L’association" text="Pourquoi Crise de Conscience existe ? Qui sommes-nous ? Découvrez notre équipe et nos engagements." href="/qui-sommes-nous" />
      </section>

      {/* Appel à action final */}
      <section className="bg-[#f1f5f9] py-16 px-6 text-center">
        <h3 className="text-xl font-semibold text-emerald-700 mb-4">
          Ensemble, exposons la vérité et protégeons les plus vulnérables.
        </h3>
        <div className="flex flex-col md:flex-row justify-center gap-4 mt-6">
          <Link href="/qui-sommes-nous" className="bg-white border border-emerald-700 text-emerald-700 px-6 py-3 rounded hover:bg-emerald-50 transition">En savoir plus</Link>
          <Link href="/dons" className="bg-emerald-100 text-emerald-700 px-6 py-3 rounded hover:bg-emerald-200 transition">Faire un don</Link>
          <Link href="/contact" className="bg-emerald-600 text-white px-6 py-3 rounded hover:bg-emerald-700 transition">Nous contacter</Link>
        </div>
      </section>
    </motion.main>
  )
}

/* --- Cartes --- */
function Card({ title, content }: { title: string; content: string }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition">
      <h3 className="text-lg font-semibold text-emerald-700 mb-2">{title}</h3>
      <p className="text-gray-700">{content}</p>
    </div>
  )
}

function Bloc({ icon, title, text, href }: { icon: React.ReactNode; title: string; text: string; href: string }) {
  return (
    <motion.div whileHover={{ scale: 1.02 }} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition flex flex-col justify-between">
      <div>
        <div className="mb-4">{icon}</div>
        <h2 className="text-xl font-semibold text-emerald-700 mb-2">{title}</h2>
        <p className="text-sm text-gray-700">{text}</p>
      </div>
      <div className="mt-4">
        <Link href={href} className="text-sm text-emerald-700 hover:underline">En savoir plus →</Link>
      </div>
    </motion.div>
  )
}
