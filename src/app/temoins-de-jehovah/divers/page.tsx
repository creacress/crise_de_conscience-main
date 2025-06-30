import Link from "next/link";

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
          <div className="overflow-hidden h-48">
            <img
              src="/501100016_univ_lsr_lg.jpg"
              alt="Poignée de main entre symboles religieux et financiers"
              className="w-full h-full object-cover transform group-hover:scale-105 transition duration-300"
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
          <div className="overflow-hidden h-48">
            <img
              src="/sam-carling-depute-temoins-jehovah.jpg"
              alt="Sam Carling au Parlement britannique"
              className="w-full h-full object-cover transform group-hover:scale-105 transition duration-300"
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
              Sam Carling, député et ex-Témoin, qualifie l’organisation de “secte”
              au Parlement et dénonce son traitement des abus sexuels.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
