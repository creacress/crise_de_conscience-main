import type { Metadata } from 'next'
import ContactForm from './ContactForm'

export const metadata: Metadata = {
  title: 'Contact – Crise de Conscience',
  description:
    "Vous avez une question, un témoignage ou souhaitez nous soutenir ? Contactez notre association engagée contre les dérives sectaires.",
  alternates: {
    canonical: 'https://criseconscience.org/contact',
  },
  openGraph: {
    title: 'Contact – Crise de Conscience',
    description:
      "Échangez avec notre équipe, posez vos questions ou partagez votre témoignage en toute confidentialité.",
    url: 'https://criseconscience.org/contact',
    siteName: 'Crise de Conscience',
  },
  twitter: {
    card: 'summary',
    title: 'Contact – Crise de Conscience',
    description:
      "Échangez avec notre équipe, posez vos questions ou partagez votre témoignage en toute confidentialité.",
  },
}

export default function Page() {
  return <ContactForm />
}
