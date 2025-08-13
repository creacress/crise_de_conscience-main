import type { Metadata } from 'next'
import Script from 'next/script'
import { Sora } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'
import Header from './components/header/header'
import Footer from './components/footer/footer'
import { AuthProvider } from '@/app/context/authcontext/page'

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  weight: ['400', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Crise de Conscience – Association contre les dérives sectaires',
  description: "Soutien aux victimes des Témoins de Jéhovah...",
  metadataBase: new URL('https://criseconscience.org'),
  alternates: { canonical: 'https://criseconscience.org' },
  openGraph: {
    title: 'Crise de Conscience – Association engagée',
    description: 'Exposer les dérives sectaires...',
    url: 'https://criseconscience.org',
    siteName: 'Crise de Conscience',
    images: [{ url: '/og.jpg', width: 1200, height: 630, alt: 'Crise de Conscience' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Crise de Conscience',
    description: 'Association de soutien...',
    images: ['/og.jpg'],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className="scroll-smooth" suppressHydrationWarning>
      <head>
        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-4YB418HLWT"
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-4YB418HLWT');
            `,
          }}
        />
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'NGO',
              name: 'Crise de Conscience',
              url: 'https://criseconscience.org',
              contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'Support',
                email: 'contact@criseconscience.org',
                telephone: '+33-7-66-02-96-32',
              },
              areaServed: 'France',
              availableLanguage: ['fr'],
            }),
          }}
        />
      </head>
      <body className={`${sora.variable} bg-gradient-to-tr from-gray-50 via-white to-emerald-50 dark:from-[#0f172a] dark:via-[#1e293b] dark:to-[#0f172a] text-gray-800 dark:text-gray-200 transition-colors duration-300`}>
        <AuthProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </AuthProvider>
        <Analytics />
      </body>
    </html>
  )
}