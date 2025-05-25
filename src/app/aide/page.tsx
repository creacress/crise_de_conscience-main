"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Aide() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="py-20 px-6 max-w-4xl mx-auto text-gray-800"
    >
      <h1 className="text-3xl font-bold text-emerald-700 mb-6">Être aidé</h1>

      <section className="space-y-10 text-sm leading-relaxed">
        <div>
          <h2 className="text-xl font-semibold mb-2">
            Quand demander de l’aide ?
          </h2>
          <p>
            Vous vous interrogez sur une situation vécue ? Vous ressentez une
            emprise, une rupture sociale, une perte d’autonomie, ou des
            pressions psychologiques liées à une organisation religieuse ?
            N’attendez pas : parlez-en.
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Isolement imposé par un groupe</li>
            <li>Rupture familiale forcée (shunning)</li>
            <li>Obligation de soumission à une autorité religieuse</li>
            <li>Refus de soins médicaux</li>
            <li>Peurs ancrées ou culpabilité permanente</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">
            Associations et contacts utiles
          </h2>
          <p className="mb-4">
            Voici des structures reconnues pour leur accompagnement des victimes
            :
          </p>
          <ul className="space-y-3">
            <li>
              <strong>UNADFI</strong> – 01 34 00 14 58
            </li>
            <li>
              <strong>CCMM</strong> – 01 44 64 02 40 / 07 69 29 89 53 ·{" "}
              <a
                href="mailto:france@ccmm.asso.fr"
                className="underline text-emerald-700"
              >
                france@ccmm.asso.fr
              </a>
            </li>
            <li>
              <strong>AFSI</strong> –{" "}
              <a
                href="https://www.fauxsouvenirs-afsi.org"
                className="underline"
              >
                fauxsouvenirs-afsi.org
              </a>{" "}
              · 06 81 67 10 55
            </li>
            <li>
              <strong>France Victimes</strong> – 116 006 (appel gratuit, 7/7,
              9h-20h)
            </li>
            <li>
              <strong>CAFFES</strong> – 03 20 57 26 77 ·{" "}
              <a
                href="mailto:contact@caffes.fr"
                className="underline text-emerald-700"
              >
                contact@caffes.fr
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Santé et prudence</h2>
          <p>
            Méfiez-vous des thérapies miracles ou des conseils médicaux
            provenant de structures fermées ou sans base scientifique. En cas de
            doute, consultez :
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>
              Votre médecin généraliste ou un professionnel de santé référencé
            </li>
            <li>
              Le{" "}
              <Link href="/faq" className="underline text-emerald-700">
                Guide Santé
              </Link>{" "}
              publié par la Miviludes
            </li>
            <li>
              Les signaux listés dans notre{" "}
              <Link href="/s-informer" className="underline text-emerald-700">
                rubrique S’informer
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Vie professionnelle</h2>
          <p>
            Les dérives sectaires touchent aussi le monde du travail :
            formations douteuses, pressions hiérarchiques liées à des croyances,
            etc. Pour en savoir plus :
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>
              Consultez notre{" "}
              <Link href="/documents" className="underline text-emerald-700">
                bibliothèque de ressources
              </Link>
            </li>
            <li>
              Référez-vous au{" "}
              <em>Guide de l’entreprise face aux dérives sectaires</em>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">
            Vous êtes à l’étranger ?
          </h2>
          <p>
            Si vous êtes à l’étranger ou souhaitez aider un proche expatrié,
            nous vous invitons à :
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Contacter l’ambassade ou le consulat</li>
            <li>Faire appel à France Victimes (numéro disponible en Europe)</li>
            <li>
              Écrire à notre équipe via la page{" "}
              <Link href="/contact" className="underline text-emerald-700">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* CTA final */}
        <div className="bg-emerald-50 p-4 rounded border border-emerald-200 mt-6 text-center">
          <h3 className="text-md font-semibold mb-2">
            Besoin d’écoute ou d’orientation ?
          </h3>
          <p className="mb-3">
            Notre équipe vous répond dans la bienveillance et la
            confidentialité.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-emerald-600 text-white px-6 py-2 rounded hover:bg-emerald-700 transition"
          >
            Contacter l’association
          </Link>
        </div>
      </section>
    </motion.main>
  );
}
