'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Info, Users, FileText, Landmark, HeartHandshake, ArrowUp } from 'lucide-react'
import { useAuth } from '@/app/context/authcontext/page'
import ContreArticles from '@/app/temoins-de-jehovah/contre-articles/page'
import { useEffect, useState } from 'react'

export default function Home() {
  const { isAdmin } = useAuth()
  const [showTopBtn, setShowTopBtn] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => setShowTopBtn(window.scrollY > 300)
    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }} className="text-gray-800 font-sans">
      
      {/* Scroll To Top Button */}
      {showTopBtn && (
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="fixed bottom-6 left-6 z-50 p-3 bg-emerald-600 text-white rounded-full shadow-lg hover:bg-emerald-700 transition">
          <ArrowUp size={18} />
        </button>
      )}

      {/* Admin */}
      {isAdmin && (
        <div className="fixed bottom-6 right-6 z-50">
          <Link href="/admin/dashboard" className="flex items-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white px-4 py-2 rounded-full shadow-lg transition-all text-sm">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="..." clipRule="evenodd" />
            </svg>
            <span>Admin</span>
          </Link>
        </div>
      )}

      {/* Hero */}
      <section className="bg-gradient-to-r from-emerald-100 to-lime-100 py-20 px-6 text-center border-b border-gray-200">
        <h1 className="text-4xl md:text-5xl font-extrabold text-emerald-700 mb-4">Crise de Conscience</h1>
        <p className="text-lg max-w-3xl mx-auto text-gray-700">Association indépendante de soutien, d'information et d’action contre les dérives sectaires liées aux Témoins de Jéhovah.</p>
      </section>

      {/* Missions */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold text-emerald-700 mb-6">Nos missions et nos actions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
          <Card title="Documentation & Vérité" category="Données" content="Nous rassemblons des preuves officielles..." />
          <Card title="Veille OSINT & Contre-endoctrinement" category="OSINT" content="Surveillance des contenus TJ..." />
          <Card title="Aide aux PIMO & ex-membres" category="Soutien" content="Serveur sécurisé, anonymat..." />
          <Card title="Prévention pour les futures victimes" category="Prévention" content="Campagnes locales, site miroir..." />
          <Card title="Lobby & législation" category="Légal" content="Dossiers auprès de la MIVILUDES, députés..." />
        </div>
      </section>

      {/* Blocs navigation */}
      <section className="py-20 px-6 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <Bloc icon={<Info className="w-8 h-8 text-emerald-600" />} title="S'informer" text="Comprendre les mécanismes..." href="/s-informer" />
        <Bloc icon={<Users className="w-8 h-8 text-emerald-600" />} title="Être aidé" text="Découvrez nos espaces de soutien..." href="/aide" />
        <Bloc icon={<HeartHandshake className="w-8 h-8 text-emerald-600" />} title="Agir" text="Témoigner, signaler, sensibiliser..." href="/agir" />
        <Bloc icon={<FileText className="w-8 h-8 text-emerald-600" />} title="Documents utiles" text="Accédez aux lettres internes..." href="/documents" />
        <Bloc icon={<Landmark className="w-8 h-8 text-emerald-600" />} title="L’association" text="Découvrez notre équipe..." href="/qui-sommes-nous" />
      </section>

      {/* Articles contre */}
      <ContreArticles />

      {/* CTA final */}
      <section className="bg-gradient-to-r from-emerald-50 to-lime-50 py-20 px-6 text-center">
        <h3 className="text-xl font-semibold text-emerald-700 mb-4">Ensemble, exposons la vérité et protégeons les plus vulnérables.</h3>
        <div className="flex flex-col md:flex-row justify-center gap-4 mt-6">
          <Link href="/qui-sommes-nous" className="bg-white border border-emerald-700 text-emerald-700 px-6 py-3 rounded hover:bg-emerald-50 transition">En savoir plus</Link>
          <Link href="/dons" className="bg-emerald-100 text-emerald-700 px-6 py-3 rounded hover:bg-emerald-200 transition">Faire un don</Link>
          <Link href="/contact" className="bg-emerald-600 text-white px-6 py-3 rounded hover:bg-emerald-700 transition">Nous contacter</Link>
        </div>
      </section>
    </motion.main>
  )
}

/* -- Composants modernisés -- */

function Card({ title, content, category }: { title: string; content: string; category: string }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-md hover:shadow-xl transition group">
      <div className="mb-2 text-xs uppercase text-emerald-600 tracking-wider font-bold">{category}</div>
      <h3 className="text-lg font-semibold text-emerald-800 group-hover:underline">{title}</h3>
      <p className="text-gray-700 mt-2">{content}</p>
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