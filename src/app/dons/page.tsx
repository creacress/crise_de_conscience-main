"use client";

import { motion } from "framer-motion";
import StripeDonationForm from "@/app/components/StripeDonationForm/StripeDonationForm";
import Link from "next/link";
import { siteConfig } from "@/app/config/site";

export default function DonsPage() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="py-20 px-6 max-w-3xl mx-auto"
    >
      <h1 className="text-3xl font-bold text-emerald-700 mb-6">
        Soutenir l&apos;association
      </h1>

      <p className="text-gray-700 mb-8 leading-relaxed text-base">
        L’association ne reçoit aucune subvention et fonctionne uniquement grâce
        à votre soutien. Chaque don permet de maintenir les infrastructures,
        d’accompagner des personnes en sortie, de développer des outils
        d&apos;information et d&apos;agir au niveau institutionnel.
      </p>

      <div className="bg-[#f1f5f9] p-6 rounded-lg border border-gray-200 mb-6 space-y-4">
        <h2 className="text-xl font-semibold text-emerald-700">Faire un don</h2>
        <p className="text-gray-700 text-sm">
          Vous pouvez contribuer librement via carte bancaire, Apple Pay ou
          PayPal. Chaque contribution compte 🙏
        </p>

        <StripeDonationForm />

        <div className="text-center pt-4">
          <a
            href={siteConfig.donationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white border border-emerald-600 text-emerald-600 px-6 py-3 rounded hover:bg-emerald-50 transition text-sm"
          >
            Don via PayPal
          </a>
        </div>
      </div>

      <p className="text-sm text-gray-500">
        Pour obtenir un reçu fiscal ou poser une question :{" "}
        <Link href="/contact" className="text-emerald-700 underline">
          contactez-nous →
        </Link>
      </p>
    </motion.main>
  );
}
