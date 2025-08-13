import Link from "next/link";

export default function ArticleContreJW() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <div className="mb-8">
        <img
          src="/502000362_univ_pnr_lg.jpg"
          alt="Image de fille devant une ville détruite"
          className="w-full h-64 object-cover rounded-lg shadow"
        />
      </div>

      <h1 className="text-4xl font-bold text-gray-900 mb-6">
        Jésus, la paix et la réalité des enseignements de la Watchtower
      </h1>

      <p className="text-gray-700 text-lg mb-10">
        Réponse critique à l’article publié sur JW.org intitulé
        <em> « Grâce à Jésus, finies les guerres ! »</em>, avec des analyses de
        Raymond Franz et des sources bibliques et historiques.
      </p>

      <div className="space-y-10">
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">
            Une promesse biblique… mais une application sélective
          </h2>
          <p className="text-gray-700">
            L’article cite plusieurs versets pour affirmer que Jésus mettra fin
            aux guerres. Pourtant, la Watchtower réserve cette paix à ses seuls
            membres, en contradiction avec l’appel universel de l’Évangile. La
            paix promise par Jésus semble d’abord intérieure (Jean 14:27), non
            liée à une appartenance institutionnelle.
          </p>

          <p className="text-gray-700 mt-4">
            De plus, Raymond Franz met en lumière un paradoxe : alors que
            l’amour est présenté comme la marque des vrais chrétiens (Jean
            13:35), l’organisation impose une politique stricte d’exclusion
            doctrinale. Cela crée une dissonance entre message et méthode.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">
            Un Royaume spirituel réduit à une organisation humaine ?
          </h2>
          <p className="text-gray-700">
            Selon la Watchtower, le Royaume annoncé par Jésus ne se manifeste
            qu’à travers son organisation. Or, bibliquement, le Royaume est
            spirituel, non lié à une structure humaine centralisée. Colossiens
            1:13 souligne l’autorité directe du Christ sur ses disciples.
          </p>

          <p className="text-gray-700 mt-4">
            L’histoire du mouvement montre d’ailleurs que cette vision
            organisationnelle est relativement récente. Les premières
            générations évitaient ce type de centralisation rigide, comme
            l’explique Franz dans *Crise de Conscience*.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">
            Des attentes prophétiques et une paix déjà accessible
          </h2>
          <p className="text-gray-700">
            Depuis 1914, des générations de fidèles ont attendu une paix
            mondiale imminente — avec des dates annoncées ou suggérées (1925,
            1975, etc.). Actes 1:7 rappelle pourtant que fixer des échéances
            prophétiques précises n’est pas biblique.
          </p>

          <p className="text-gray-700 mt-4">
            En réalité, la paix que promet Jésus est déjà disponible à ceux qui
            le suivent (Philippiens 4:7). La restreindre à une organisation
            revient à créer une frontière sectaire que Jésus dénonçait chez les
            pharisiens (Matthieu 23:4).
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">
            Conclusion critique
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
            <li>Une espérance biblique réduite à une structure humaine</li>
            <li>Des pratiques d’exclusion qui contredisent l’amour chrétien</li>
            <li>
              Une interprétation restrictive du message universel de Jésus
            </li>
          </ul>
          <p className="text-gray-700">
            L’amour véritable du Christ dépasse les frontières religieuses. Il
            invite à une paix intérieure et une foi libre, ouverte à tous.
          </p>
        </section>

        <div className="pt-8 border-t mt-12">
          <Link href="/temoins-de-jehovah/contre-articles">
            <span className="text-blue-600 hover:underline">
              ← Retour aux contre-articles
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
