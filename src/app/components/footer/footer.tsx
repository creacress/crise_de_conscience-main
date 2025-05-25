'use client';

import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-white py-10 px-6 mt-12 text-sm text-gray-600 border-t border-gray-200">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-emerald-700 font-semibold mb-2">
            Crise de Conscience
          </h3>
          <p>
            Association indépendante pour la vérité, le soutien et la reconstruction.
          </p>
        </div>

        <div>
          <h4 className="text-gray-800 font-semibold mb-2">Liens utiles</h4>
          <ul className="space-y-1">
            <li><Link href="/" className="hover:underline">Accueil</Link></li>
            <li><Link href="/qui-sommes-nous" className="hover:underline">Qui sommes-nous</Link></li>
            <li><Link href="/forum" className="hover:underline">Forum</Link></li>
            <li><Link href="/dons" className="hover:underline">Faire un don</Link></li>
            <li><Link href="/contact" className="hover:underline">Contact</Link></li>
            <li><Link href="/admin/dashboard" className="hover:underline">Admin</Link></li> {/* 👈 ici */}
          </ul>
        </div>


        <div>
          <h4 className="text-gray-800 font-semibold mb-2">Mentions</h4>
          <ul className="space-y-1">
            <li><Link href="/legal" className="hover:underline">Mentions légales</Link></li>
            <li><Link href="/privacy" className="hover:underline">Politique de confidentialité</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-gray-800 font-semibold mb-2">Documents</h4>
          <ul className="space-y-1">
            <li>
              <a
                href="/docs/Status-association.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Télécharger les statuts (PDF)
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center text-xs mt-8 text-gray-500">
        © {new Date().getFullYear()} Crise de Conscience — Tous droits réservés.
      </div>
    </footer>
  )
}
