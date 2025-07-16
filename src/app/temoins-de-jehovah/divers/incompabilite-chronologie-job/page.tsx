import Link from "next/link";

export default function RapportJobDownload() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-16 text-center text-gray-800">
      <h1 className="text-4xl font-bold mb-6 leading-snug">
        Rapport exclusif : Le livre de Job face à la chronologie des Témoins de
        Jéhovah
      </h1>

      <p className="text-base mb-6">
        📘 Ce rapport démonte, étape par étape, la datation biblique avancée par
        les Témoins de Jéhovah — qui situent l’écriture de{" "}
        <strong>Job vers -1473 av. J.-C.</strong>.
      </p>

      <p className="text-base mb-6">
        À travers des arguments solides et documentés (archéologie, philologie,
        critique littéraire), l’auteur met en lumière l’incohérence de cette
        vision doctrinale.
      </p>

      <p className="text-base mb-6">
        Ce texte s’adresse à tous : croyants, chercheurs, ex-Témoins ou simples
        curieux. Son objectif : restituer le livre de Job dans son véritable
        contexte historique.
      </p>

      <p className="text-base mb-10 italic">
        👉 Un outil utile pour celles et ceux qui veulent penser leur foi
        autrement, avec exigence et honnêteté.
      </p>

      <Link
        href="/Rapport_job.pdf"
        download
        className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition text-base font-medium"
      >
        📄 Télécharger le rapport (PDF)
      </Link>
    </div>
  );
}
