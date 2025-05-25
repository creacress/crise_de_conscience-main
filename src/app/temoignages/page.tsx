"use client";

import { motion } from "framer-motion";

export default function Temoignages() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="py-20 px-6 max-w-4xl mx-auto text-gray-800"
    >
      <h1 className="text-3xl font-bold text-emerald-700 mb-6">Témoignages</h1>

      <section className="space-y-10 text-sm leading-relaxed">
        <div>
          <h2 className="text-xl font-semibold mb-2">
            Pourquoi partager votre histoire ?
          </h2>
          <p>
            Vos expériences personnelles ont une valeur inestimable. En les
            partageant, vous pouvez aider d&apos;autres personnes à comprendre les
            réalités vécues au sein de certaines organisations et à éviter des
            situations similaires.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">
            Comment soumettre votre témoignage ?
          </h2>
          <p>
            Pour éviter les spams, veuillez envoyer votre témoignage par e-mail
            à{" "}
            <a
              href="contact@criseconscience.org"
              className="underline text-emerald-700"
            >
              contact@criseconscience.org
            </a>
            . Indiquez si vous souhaitez rester anonyme ou si vous préférez que
            votre prénom soit affiché.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Témoignages récents</h2>
          <div className="space-y-6">
            <article className="border-l-4 border-emerald-600 pl-4">
              <p className="italic">
                "J'ai grandi dans cette organisation, pensant que c'était la
                seule vérité. Ce n'est qu'en sortant que j'ai compris l'ampleur
                du contrôle exercé sur ma vie."
              </p>
              <p className="mt-2 text-sm text-gray-600">— Anonyme</p>
            </article>

            <article className="border-l-4 border-emerald-600 pl-4">
              <p className="italic">
                "Après des années de dévouement, j'ai été exclu sans
                explication. Ma famille ne me parle plus, et je me reconstruis
                petit à petit."
              </p>
              <p className="mt-2 text-sm text-gray-600">— Marc</p>
            </article>
          </div>
        </div>

        <div className="bg-emerald-50 p-4 rounded border border-emerald-200 mt-6 text-center">
          <h3 className="text-md font-semibold mb-2">
            Prêt à partager votre expérience ?
          </h3>
          <p className="mb-3">
            Votre témoignage peut faire la différence pour quelqu&apos;un d&apos;autre.
          </p>
          <a
            href="mailto:contact@criseconscience.org"
            className="inline-block bg-emerald-600 text-white px-6 py-2 rounded hover:bg-emerald-700 transition"
          >
            Envoyer mon témoignage
          </a>
        </div>
      </section>
    </motion.main>
  );
}
