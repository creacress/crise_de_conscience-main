"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Agir() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="py-20 px-6 max-w-4xl mx-auto text-gray-800"
    >
      <h1 className="text-3xl font-bold text-emerald-700 mb-6">
        Agir face aux dérives sectaires
      </h1>

      <section className="space-y-10 text-sm leading-relaxed">
        {/* Particulier */}
        <div>
          <h2 className="text-xl font-semibold text-emerald-700 mb-2">
            Vous êtes un particulier
          </h2>
          <p>
            Si vous êtes confronté·e à une situation suspecte (manipulation,
            rupture familiale imposée, contrôle psychologique...), vous pouvez
            agir en signalant les faits ou en vous rapprochant d’associations.
          </p>

          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>
              📝 <strong>Informer la MIVILUDES</strong> d&apos;une dérive sectaire
            </li>
            <li>
              🧩 Contacter des associations reconnues :
              <ul className="pl-4 list-disc mt-1">
                <li>
                  <a
                    href="https://www.unadfi.org"
                    target="_blank"
                    className="underline text-emerald-700"
                  >
                    UNADFI
                  </a>{" "}
                  – 01 34 00 14 58
                </li>
                <li>
                  <a
                    href="https://www.ccmm.asso.fr"
                    target="_blank"
                    className="underline text-emerald-700"
                  >
                    CCMM
                  </a>{" "}
                  – 01 44 64 02 40
                </li>
                <li>
                  <a
                    href="https://www.fauxsouvenirs-afsi.org"
                    target="_blank"
                    className="underline text-emerald-700"
                  >
                    AFSI
                  </a>{" "}
                  – 06 81 67 10 55
                </li>
                <li>
                  <a
                    href="https://www.france-victimes.fr/"
                    target="_blank"
                    className="underline text-emerald-700"
                  >
                    France Victimes
                  </a>{" "}
                  – 116 006 (appel gratuit)
                </li>
              </ul>
            </li>
            <li>
              📩 Saisir une administration : préfecture, rectorat, ARS, ordre
              professionnel
            </li>
            <li>
              ⚖️ Porter plainte auprès du procureur ou au
              commissariat/gendarmerie
            </li>
          </ul>
        </div>

        {/* Agent public */}
        <div>
          <h2 className="text-xl font-semibold text-emerald-700 mb-2">
            Vous êtes un agent public
          </h2>
          <p>
            Si, dans l’exercice de vos fonctions, vous suspectez une dérive
            sectaire, vous avez le devoir de réagir.
          </p>

          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>📢 Alerter la MIVILUDES ou une association spécialisée</li>
            <li>
              📨 Saisir le Procureur de la République en cas de délit ou crime
              suspecté
            </li>
            <li>
              📚 Demander conseil via les canaux officiels ou consulter les
              guides disponibles
            </li>
          </ul>

          <div className="bg-white border-l-4 border-emerald-600 p-4 mt-4 rounded">
            <strong>Article 40 du Code de procédure pénale :</strong>
            <br />« Toute autorité constituée, tout officier public ou
            fonctionnaire qui, dans l&apos;exercice de ses fonctions, acquiert la
            connaissance d&apos;un crime ou d&apos;un délit, est tenu d&apos;en donner avis
            sans délai au Procureur de la République… »
          </div>
        </div>

        {/* Liens utiles */}
        <div>
          <h2 className="text-xl font-semibold text-emerald-700 mb-2">
            Ressources pratiques
          </h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <Link href="/documents" className="underline text-emerald-700">
                Documents internes TJ
              </Link>{" "}
              et preuves officielles
            </li>
            <li>
              Guide : <em>Agent public face aux dérives sectaires</em>
            </li>
            <li>
              Guide :{" "}
              <em>Collectivités territoriales & entreprises face aux sectes</em>
            </li>
            <li>
              Guide : <em>Protection des mineurs contre l’emprise sectaire</em>
            </li>
          </ul>
        </div>

        {/* Appel à agir */}
        <div className="bg-emerald-50 p-4 rounded border border-emerald-200 text-center mt-6">
          <h3 className="text-md font-semibold mb-2">
            Vous pouvez faire la différence
          </h3>
          <p className="mb-3">
            En signalant, en informant, en soutenant une victime, vous brisez le
            silence.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="bg-emerald-600 text-white px-6 py-2 rounded hover:bg-emerald-700 transition"
            >
              Contacter l’association
            </Link>
            <Link
              href="/dons"
              className="bg-white border border-emerald-600 text-emerald-700 px-6 py-2 rounded hover:bg-emerald-50 transition"
            >
              Faire un don
            </Link>
          </div>
        </div>
      </section>
    </motion.main>
  );
}
