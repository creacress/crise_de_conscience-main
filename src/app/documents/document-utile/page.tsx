"use client";

import * as React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function DocumentsUtiles() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="py-20 px-6 max-w-4xl mx-auto text-gray-800"
    >
      <h1 className="text-3xl font-bold text-emerald-700 mb-6">
        Documents utiles
      </h1>

      <section className="space-y-10 text-sm leading-relaxed">
        {/* Documents internes */}
        <div>
          <h2 className="text-xl font-semibold text-emerald-700 mb-2">
            Documents internes TJ
          </h2>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>
              <a
                href="/documents/shepherd-book.pdf"
                target="_blank"
                className="underline text-emerald-700"
              >
                Extraits du Shepherd Book (PDF)
              </a>
            </li>
            <li>
              <a
                href="/documents/lettre-aux-anciens.pdf"
                target="_blank"
                className="underline text-emerald-700"
              >
                Lettre confidentielle aux anciens (PDF)
              </a>
            </li>
          </ul>
        </div>

        {/* Guides pratiques */}
        <div>
          <h2 className="text-xl font-semibold text-emerald-700 mb-2">
            Guides pratiques
          </h2>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>
              <a
                href="/documents/guide-sante.pdf"
                target="_blank"
                className="underline text-emerald-700"
              >
                Guide Santé – dérives pseudo-médicales (PDF)
              </a>
            </li>
            <li>
              <a
                href="/documents/contre-endoctrinement.pdf"
                target="_blank"
                className="underline text-emerald-700"
              >
                Déconstruire l’endoctrinement (PDF)
              </a>
            </li>
          </ul>
        </div>

        {/* Médias */}
        <div>
          <h2 className="text-xl font-semibold text-emerald-700 mb-2">
            Témoignages audio/vidéo
          </h2>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>
              <a
                href="/documents/temoignage-audio.mp3"
                target="_blank"
                className="underline text-emerald-700"
              >
                Audio témoignage (MP3)
              </a>
            </li>
            <li className="text-gray-500 italic">Vidéos à venir...</li>
          </ul>
        </div>

        {/* CTA */}
        <div className="bg-emerald-50 p-4 rounded border border-emerald-200 text-center mt-6">
          <h3 className="text-md font-semibold mb-2">
            Vous souhaitez partager un document ?
          </h3>
          <p className="mb-3">
            Aidez-nous à enrichir cette base pour protéger d'autres victimes.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-emerald-600 text-white px-6 py-2 rounded hover:bg-emerald-700 transition"
          >
            Nous écrire
          </Link>
        </div>
      </section>
    </motion.main>
  );
}
