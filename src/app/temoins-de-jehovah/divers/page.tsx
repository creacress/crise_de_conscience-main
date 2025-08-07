import Link from 'next/link';
import Image from 'next/image';

export default function DiversPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Articles divers</h1>
      <p className="text-gray-600 text-lg mb-8">
        Vous trouverez ici les articles divers et variés autour des croyances,
        pratiques, actualités ou réflexions spirituelles.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Carte 1 */}
        <div className="relative bg-white border rounded-lg overflow-hidden shadow hover:shadow-xl transition duration-300 group">
          <div className="relative overflow-hidden h-48">
            <Image
              src="/501100016_univ_lsr_lg.jpg"
              alt="Poignée de main entre symboles religieux et financiers"
              fill
              className="object-cover transform group-hover:scale-105 transition duration-300"
            />
          </div>
          <div className="p-5">
            <Link
              href="/temoins-de-jehovah/divers/religion-est-elle-entreprise-commerciale"
              className="text-xl font-semibold text-blue-600 hover:underline"
            >
              La religion n’est-elle qu’une entreprise commerciale de plus ?
            </Link>
            <p className="text-gray-600 mt-2 text-sm">
              Exploration critique du lien entre religion et finance dans le cas
              des Témoins de Jéhovah.
            </p>
          </div>
        </div>

        {/* Carte 2 */}
        <div className="relative bg-white border rounded-lg overflow-hidden shadow hover:shadow-xl transition duration-300 group">
          <div className="overflow-hidden h-48 relative">
            <Image
              src="/sam-carling-parlement.avif"
              alt="Sam Carling au Parlement britannique"
              fill
              className="object-cover transform group-hover:scale-105 transition duration-300"
            />
          </div>
          <div className="p-5">
            <Link
              href="/temoins-de-jehovah/divers/parlement-watchtower"
              className="text-xl font-semibold text-blue-600 hover:underline"
            >
              Un député britannique dénonce les Témoins de Jéhovah
            </Link>
            <p className="text-gray-600 mt-2 text-sm">
              Sam Carling, député et ex-Témoin, qualifie l’organisation de
              “secte” au Parlement et dénonce son traitement des abus sexuels.
            </p>
          </div>
        </div>
        {/* Carte 3 */}
        <div className="relative bg-white border rounded-lg overflow-hidden shadow hover:shadow-xl transition duration-300 group">
          <div className="overflow-hidden h-48 relative">
            <Image
              src="/raymond_franz.jpg"
              alt="Raymond Franz ancien membre du Collège Central"
              fill
              className="object-cover transform group-hover:scale-105 transition duration-300"
            />
          </div>
          <div className="p-5">
            <Link
              href="/temoins-de-jehovah/divers/crise-de-conscience-livre"
              className="text-xl font-semibold text-blue-600 hover:underline"
            >
              Crise de Conscience – Le témoignage choc d’un ancien dirigeant
            </Link>
            <p className="text-gray-600 mt-2 text-sm">
              Raymond Franz, ex-membre du Collège Central, dévoile les coulisses
              d’une organisation religieuse autoritaire.
            </p>
          </div>
        </div>
        {/* Carte 4 */}
        <div className="relative bg-white border rounded-lg overflow-hidden shadow hover:shadow-xl transition duration-300 group">
          <div className="overflow-hidden h-48 relative">
            <Image
              src="/job-watchtower.jpg"
              alt="Ancien rouleau biblique et contexte historique"
              fill
              className="object-cover transform group-hover:scale-105 transition duration-300"
            />
          </div>
          <div className="p-5">
            <Link
              href="/temoins-de-jehovah/divers/incompabilite-chronologie-job"
              className="text-xl font-semibold text-blue-600 hover:underline"
            >
              Le livre de Job face à la chronologie des Témoins de Jéhovah
            </Link>
            <p className="text-gray-600 mt-2 text-sm">
              Une analyse historique et linguistique démontrant l’impossibilité
              d’une rédaction par Moïse en -1473.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
