"use client";

import { motion } from "framer-motion";

export default function Legal() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="py-20 px-6 max-w-4xl mx-auto"
    >
      <h1 className="text-3xl font-bold text-emerald-700 mb-6">Mentions légales</h1>

      <section className="space-y-6 text-gray-700 text-sm leading-relaxed">
        <div>
          <h2 className="font-semibold text-emerald-700 mb-1">Éditeur du site</h2>
          <p>
            Le site <strong>Crise de Conscience</strong> est édité par une association indépendante à but non lucratif.  
            Pour toute question, vous pouvez nous contacter via la page <a href="/contact" className="text-emerald-700 underline">Contact</a>.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-emerald-700 mb-1">Hébergement</h2>
          <p>
            Le site est hébergé par : <br />
            <strong>Hostinger International Ltd</strong><br />
            61 Lordou Vironos Street, 6023 Larnaca, Chypre
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-emerald-700 mb-1">Propriété intellectuelle</h2>
          <p>
            Le contenu du site est protégé par les lois en vigueur sur la propriété intellectuelle. 
            Toute reproduction partielle ou totale sans autorisation est interdite.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-emerald-700 mb-1">Données personnelles</h2>
          <p>
            Aucune donnée personnelle n’est collectée à votre insu. Les données de contact éventuellement transmises via le formulaire sont strictement confidentielles.
          </p>
        </div>
      </section>
    </motion.main>
  );
}
