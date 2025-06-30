import Image from "next/image";

export default function CriseDeConscienceArticle() {
  return (
    <div className="max-w-4xl mx-auto px-4 pt-8">
      <div className="mb-6">
        <Image
          src="/raymond_franz.jpg"
          alt="Raymond Franz, ancien membre du Collège Central"
          width={1024}
          height={600}
          priority
          className="w-full h-auto rounded-md shadow-sm"
        />
      </div>

      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Crise de Conscience – Un voyage au cœur d’un dilemme spirituel et humain
      </h1>

      <p className="text-gray-700 text-lg mb-6">
        Un témoignage unique sur les Témoins de Jéhovah, vu de l’intérieur. Dans
        le monde des religions structurées, rares sont ceux qui osent briser le
        silence. <em>Crise de Conscience</em> de Raymond Franz est l’un de ces
        ouvrages exceptionnels, où un ancien dirigeant religieux lève le voile
        sur les tensions profondes entre foi personnelle, autorité
        institutionnelle et conscience individuelle.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-2">
        Une immersion dans les coulisses d’une organisation religieuse fermée
      </h2>
      <p className="text-gray-700 mb-4">
        Raymond Franz, membre pendant neuf ans du Collège Central des Témoins de
        Jéhovah, relate dans ce livre sa propre expérience de crise spirituelle.
        Il ne s’agit pas d’un règlement de comptes, mais d’un document lucide,
        empreint d’humanité. Le livre commence par une question fondamentale :
        que faire lorsque ses convictions bibliques personnelles entrent en
        contradiction avec les doctrines officielles ?
      </p>
      <p className="text-gray-700 mb-4">
        Franz décrit avec précision des réunions du Collège Central où la Bible
        est souvent absente, et où l’unité organisationnelle prime sur la vérité
        scripturaire.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-2">
        Les thèmes majeurs explorés dans l’ouvrage
      </h2>
      <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
        <li>
          <strong>1. Le prix de la conscience :</strong> Franz montre le coût
          personnel de l’honnêteté spirituelle : exclusion, rupture familiale,
          marginalisation.
        </li>
        <li>
          <strong>2. Le pouvoir centralisé :</strong> Les décisions sont prises
          par vote sans véritable débat biblique, révélant un autoritarisme
          déguisé.
        </li>
        <li>
          <strong>3. L’emprise psychologique :</strong> Le contrôle mental
          s'exerce par la menace d’exclusion et la peur du rejet.
        </li>
        <li>
          <strong>4. La distorsion doctrinale :</strong> Franz analyse des
          doctrines centrales (1914, 1975, etc.) imposées sans base scripturaire
          solide.
        </li>
        <li>
          <strong>5. Tradition et légalisme :</strong> Il dénonce la dérive vers
          une religion fondée sur des règles humaines plutôt que sur l’Évangile.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-2">
        Une œuvre universelle au-delà des Témoins de Jéhovah
      </h2>
      <p className="text-gray-700 mb-4">
        Même si l'analyse porte sur les Témoins de Jéhovah, les dilemmes posés
        par Franz résonnent dans toutes les religions institutionnelles. La
        question centrale :{" "}
        <em>quand la loyauté devient-elle une trahison de soi-même ?</em>
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-2">
        Un plaidoyer pour la liberté spirituelle
      </h2>
      <p className="text-gray-700 mb-4">
        Le livre se conclut sur une note d’espoir, invitant chacun à revaloriser
        sa conscience comme guide spirituel légitime, au-dessus des hiérarchies
        humaines.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-2">
        Pourquoi recommander ce livre ?
      </h2>
      <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
        <li>
          Un témoignage rare et sincère d’un homme de foi face à l’autorité
          religieuse.
        </li>
        <li>
          Un outil d’analyse lucide sur les dérives autoritaires dans les
          religions.
        </li>
        <li>Un plaidoyer éthique en faveur de la liberté de conscience.</li>
        <li>Un livre profondément humain et universel.</li>
      </ul>
      <div className="mt-16 border-t pt-10 text-center">
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">
          Ce témoignage vous a interpellé ?
        </h3>
        <p className="text-gray-600 mb-4">
          Découvrez d’autres récits ou contactez-nous pour partager le vôtre.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <a
            href="/contact"
            className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
          >
            Nous contacter
          </a>
          <a
            href="/temoins-de-jehovah/contre-articles/questions-bibliques"
            className="bg-gray-100 text-gray-800 px-6 py-3 rounded-md hover:bg-gray-200 transition"
          >
            Voir d'autres contre-articles
          </a>
        </div>
      </div>

      {/* Suggestions d’articles */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto px-4">
        <div className="bg-white border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
          <div className="h-48 overflow-hidden">
            <Image
              src="/sam-carling-parlement.avif"
              alt="Sam Carling au Parlement"
              width={800}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-5">
            <h4 className="text-lg font-semibold text-gray-800 mb-1">
              <a
                href="/temoins-de-jehovah/divers/parlement-watchtower"
                className="hover:underline"
              >
                Un député britannique dénonce les Témoins de Jéhovah
              </a>
            </h4>
            <p className="text-sm text-gray-600">
              Sam Carling, ancien Témoin de Jéhovah et député, dénonce une
              culture du silence.
            </p>
          </div>
        </div>

        <div className="bg-white border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
          <div className="h-48 overflow-hidden">
            <Image
              src="/502015177_univ_lsr_lg.jpg"
              alt="Image symbolique des religions"
              width={800}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-5">
            <h4 className="text-lg font-semibold text-gray-800 mb-1">
              <a
                href="/temoins-de-jehovah/contre-articles/questions-bibliques/quelle-est-la-vraie-religion"
                className="hover:underline"
              >
                Quelle est la vraie religion ?
              </a>
            </h4>
            <p className="text-sm text-gray-600">
              Une analyse critique de la revendication d’exclusivité des Témoins
              de Jéhovah.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
