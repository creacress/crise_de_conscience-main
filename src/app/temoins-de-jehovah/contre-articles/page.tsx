import Link from 'next/link';


export default function ContreArticles() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Contre-articles</h1>
      <p className="text-gray-700 text-lg mb-8">
        Retrouvez ici toutes nos réponses critiques et documentées aux publications officielles. Chaque contres examine en profondeur les affirmations faites et propose une analyse basée sur des faits, des sources et des témoignages.
      </p>

      <h2 className="text-2xl font-bold text-gray-800 mt-12 mb-4">Rubriques thématiques</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <Link href="/temoins-de-jehovah/contre-articles/questions-bibliques" className="relative group h-40 rounded-lg overflow-hidden shadow hover:shadow-lg transition">
          <img
            src="/1011202_univ_pnr_md.jpg"
            alt="Questions bibliques"
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute bottom-2 left-2 bg-white bg-opacity-80 px-3 py-1 rounded">
            <h3 className="text-gray-900 text-sm font-semibold">Questions bibliques</h3>
          </div>
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <Link href="/temoins-de-jehovah/divers" className="relative group h-40 rounded-lg overflow-hidden shadow hover:shadow-lg transition">
          <img
            src="/501100023_univ_lsr_lg.jpg"
            alt="Questions bibliques"
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute bottom-2 left-2 bg-white bg-opacity-80 px-3 py-1 rounded">
            <h3 className="text-gray-900 text-sm font-semibold">Divers</h3>
          </div>
        </Link>
      </div>
    </div>
  );
}
