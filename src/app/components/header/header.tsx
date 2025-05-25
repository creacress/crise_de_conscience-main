'use client';

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <NavLink href="/" label="Accueil" />
          <span className="text-emerald-700 font-semibold">Crise de Conscience</span>
        </div>

        {/* Slogan desktop uniquement avec dégradé statique */}
        <div className="hidden md:block text-xs font-medium uppercase bg-gradient-to-r from-blue-500 via-white to-red-500 bg-clip-text text-transparent">
          Liberté • Égalité • Fraternité
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden"
          aria-label="Menu"
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Menu navigation */}
      <nav
        className={`${open ? 'flex' : 'hidden'
          } md:flex flex-col md:flex-row items-start md:items-center md:justify-center gap-3 md:gap-6 px-4 pb-4 md:pb-2 text-sm font-medium`}
      >
        <NavLink href="/s-informer" label="S'informer" />
        <NavLink href="/aide" label="Être aidé" />
        <NavLink href="/temoins-de-jehovah" label="Témoins de Jéhovah" />
        <NavLink href="/agir" label="Agir" />
        <NavLink href="/documents" label="Documents utiles" />
        <NavLink href="/qui-sommes-nous" label="L'association" />
        <NavLink href="/temoignages" label="Témoignages" />
      </nav>
    </header>
  )
}

const NavLink = ({ href, label }: { href: string; label: string }) => (
  <Link href={href} className="text-emerald-700 hover:underline transition">
    {label}
  </Link>
)
