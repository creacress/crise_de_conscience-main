import Link from 'next/link';

export default function ContreArticles() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Contre-articles</h1>
      <p className="text-gray-700 text-lg mb-8">
        Retrouvez ici toutes nos réponses critiques et documentées aux publications officielles. Chaque contre-article examine en profondeur les affirmations faites et propose une analyse basée sur des faits, des sources et des témoignages.
      </p>

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
        <div className="relative bg-white border rounded-lg overflow-hidden shadow hover:shadow-xl transition duration-300 group">
          <div className="overflow-hidden h-48">
            <img
              src="/501100016_univ_lsr_lg.jpg"
              alt="Poignée de main entre symboles religieux et financiers"
              className="w-full h-full object-cover transform group-hover:scale-105 transition duration-300"
            />
          </div>
          <div className="p-5">
            <Link href="/temoins-de-jehovah/contre-article/religion-est-elle-entreprise-commerciale" className="text-xl font-semibold text-blue-600 hover:underline">
              La religion est-elle une entreprise commerciale ?
            </Link>
            <p className="text-gray-600 mt-2 text-sm">
              Une analyse critique du discours de jw.org sur la gestion financière des Témoins de Jéhovah.
            </p>
          </div>
        </div>

        {/* Ajouter d'autres cards ici avec images différentes si dispo */}
      </div>
    </div>
  );
}
