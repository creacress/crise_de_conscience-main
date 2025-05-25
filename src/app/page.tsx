import type { Metadata } from 'next'
import Home from "@/app/components/home-client/home-client"

export const metadata: Metadata = {
  title: 'Crise de Conscience – Aide aux ex-Témoins de Jéhovah',
  description: "Association de soutien, d'information et d'action pour les excommuniés et victimes de dérives sectaires des Témoins de Jéhovah (JW.org).",
  keywords: [
    'jw.org',
    'témoins de Jéhovah',
    'secte',
    'excommunié',
    'excommunication',
    'sortir d’une secte',
    'aide morale',
    'reconstruction spirituelle',
    'culte destructeur',
    'ex TJ',
    'crise de foi',
  ],
  alternates: {
    canonical: 'https://criseconscience.org',
  },
  openGraph: {
    title: 'Crise de Conscience – Association contre les dérives religieuses',
    description: "Soutien, documentation, témoignages et action pour les ex-membres des Témoins de Jéhovah.",
    url: 'https://criseconscience.org',
    siteName: 'Crise de Conscience',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Crise de Conscience',
    description: "Ex-Témoins de Jéhovah ? Découvrez notre association indépendante de soutien et d'action.",
  },
}

export default function Page() {
  return (
    <>
      {/* JSON-LD WebPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: 'Crise de Conscience',
            url: 'https://criseconscience.org',
            description: "Aide aux ex-Témoins de Jéhovah et personnes en crise spirituelle. Soutien, témoignages, actions concrètes.",
            inLanguage: 'fr',
          }),
        }}
      />
      <Home />
    </>
  )
}
