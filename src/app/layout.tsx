import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import './globals.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import { AuthProvider } from '@/app/context/authcontext/page';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

/* --- SEO (App Router style) --- */
export const metadata: Metadata = {
  title: 'Crise de Conscience – Association contre les dérives sectaires',
  description:
    "Soutien aux victimes des Témoins de Jéhovah, informations internes, actions terrain et plaidoyer auprès des institutions.",
  metadataBase: new URL('https://criseconscience.org'),
  alternates: {
    canonical: 'https://criseconscience.org',
  },
  openGraph: {
    title: 'Crise de Conscience – Association engagée',
    description:
      "Exposer les dérives sectaires, aider les ex-TJ, alerter l'opinion, agir légalement.",
    url: 'https://criseconscience.org',
    siteName: 'Crise de Conscience',
    images: [
      {
        url: '/og.jpg',
        width: 1200,
        height: 630,
        alt: 'Crise de Conscience',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Crise de Conscience',
    description:
      'Association de soutien, de documentation et d’action face aux dérives sectaires des Témoins de Jéhovah.',
    images: ['/og.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
  {/* Google Analytics */}
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-4YB418HLWT"></script>
  <script
    dangerouslySetInnerHTML={{
      __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-4YB418HLWT');
      `,
    }}
  />

  {/* Données structurées JSON-LD */}
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'NGO',
        name: 'Crise de Conscience',
        url: 'https://criseconscience.org',
        areaServed: 'FR',
        availableLanguage: ['French'],
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'Support',
          telephone: '+33-7-66-02-96-32',
          email: 'contact@criseconscience.org',
          availableLanguage: 'French',
        },
      }),
    }}
  />
</head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-[#f1f5f9] text-gray-800`}
      >
        <AuthProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </AuthProvider>
        <Analytics />
      </body>
    </html>
  );
}