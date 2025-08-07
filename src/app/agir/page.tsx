"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { User, ShieldCheck, BookOpenCheck, AlertTriangle, HandHelping } from "lucide-react";

export default function Agir() {
  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }} className="py-20 px-6 max-w-4xl mx-auto text-gray-800 dark:text-gray-200">
      
      {/* Hero */}
      <section className="mb-12 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-emerald-700 mb-4">Agir face aux dérives sectaires</h1>
        <p className="text-sm md:text-base text-gray-600 dark:text-gray-300">Que vous soyez victime, témoin ou agent public, vous avez un rôle à jouer.</p>
      </section>

      <section className="space-y-12 text-sm leading-relaxed">
        
        {/* Particulier */}
        <Card title="Vous êtes un particulier" icon={<User className="w-5 h-5 text-emerald-600" />} color="emerald">
          <p>Si vous êtes confronté·e à une situation suspecte (manipulation, rupture familiale imposée, contrôle psychologique...), vous pouvez agir :</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>📝 <strong>Informer la MIVILUDES</strong></li>
            <li>🧩 Contacter des associations reconnues :
              <ul className="pl-4 list-disc mt-1">
                <li><a href="https://www.unadfi.org" target="_blank" className="underline text-emerald-700">UNADFI</a> – 01 34 00 14 58</li>
                <li><a href="https://www.ccmm.asso.fr" target="_blank" className="underline text-emerald-700">CCMM</a> – 01 44 64 02 40</li>
                <li><a href="https://www.fauxsouvenirs-afsi.org" target="_blank" className="underline text-emerald-700">AFSI</a> – 06 81 67 10 55</li>
                <li><a href="https://www.france-victimes.fr/" target="_blank" className="underline text-emerald-700">France Victimes</a> – 116 006</li>
              </ul>
            </li>
            <li>📩 Saisir une administration : préfecture, rectorat, ARS...</li>
            <li>⚖️ Porter plainte au commissariat ou au procureur</li>
          </ul>
        </Card>

        {/* Agent public */}
        <Card title="Vous êtes un agent public" icon={<ShieldCheck className="w-5 h-5 text-emerald-600" />} color="blue">
          <p>Dans l’exercice de vos fonctions, vous avez l’obligation de réagir en cas de soupçon :</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>📢 Alerter la MIVILUDES ou une association spécialisée</li>
            <li>📨 Saisir le Procureur de la République</li>
            <li>📚 Demander conseil via les canaux officiels</li>
          </ul>
          <div className="bg-white dark:bg-slate-800 border-l-4 border-emerald-600 p-4 mt-4 rounded">
            <strong>Article 40 du Code de procédure pénale :</strong><br />
            « Toute autorité constituée, tout officier public ou fonctionnaire qui, dans l&apos;exercice de ses fonctions, acquiert la connaissance d&apos;un crime ou d&apos;un délit, est tenu d&apos;en donner avis sans délai au Procureur de la République… »
          </div>
        </Card>

        {/* Ressources */}
        <Card title="Ressources pratiques" icon={<BookOpenCheck className="w-5 h-5 text-emerald-600" />} color="gray">
          <ul className="list-disc pl-5 space-y-1">
            <li><Link href="/documents" className="underline text-emerald-700">Documents internes TJ</Link> et preuves officielles</li>
            <li>Guide : <em>Agent public face aux dérives sectaires</em></li>
            <li>Guide : <em>Collectivités & entreprises face aux sectes</em></li>
            <li>Guide : <em>Protection des mineurs contre l’emprise sectaire</em></li>
          </ul>
        </Card>

        {/* CTA */}
        <div className="bg-emerald-50 dark:bg-emerald-900/20 p-6 rounded border border-emerald-200 dark:border-emerald-700 text-center mt-6">
          <h3 className="text-md font-semibold mb-2 flex items-center justify-center gap-2 text-emerald-800 dark:text-emerald-200">
            <HandHelping className="w-5 h-5" /> Vous pouvez faire la différence
          </h3>
          <p className="mb-4 text-sm">En signalant, en soutenant une victime, vous brisez le silence.</p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <Link href="/contact" className="bg-emerald-600 text-white px-6 py-2 rounded hover:bg-emerald-700 transition">Contacter l’association</Link>
            <Link href="/dons" className="bg-white dark:bg-transparent border border-emerald-600 text-emerald-700 px-6 py-2 rounded hover:bg-emerald-50 dark:hover:bg-emerald-900 transition">Faire un don</Link>
          </div>
        </div>
      </section>
    </motion.main>
  );
}

/* Composant carte stylisée */
function Card({ title, icon, children, color }: { title: string; icon: React.ReactNode; children: React.ReactNode; color?: string }) {
  const borderClass = color ? `border-l-4 border-${color}-600` : ''
  return (
    <div className={`bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-xl p-6 shadow-sm hover:shadow-md transition-all ${borderClass}`}>
      <div className="flex items-center gap-2 mb-2 text-emerald-600">
        {icon}
        <h2 className="text-lg font-semibold text-emerald-700 dark:text-emerald-400">{title}</h2>
      </div>
      <div className="text-sm text-gray-700 dark:text-gray-300">{children}</div>
    </div>
  );
}