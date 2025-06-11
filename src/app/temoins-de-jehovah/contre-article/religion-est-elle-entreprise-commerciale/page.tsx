import Image from 'next/image';

export default function ReligionEntrepriseCommerciale() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-6">
        <Image
          src="/501100016_univ_lsr_lg.jpg"
          alt="Poignée de main entre symboles religieux et financiers"
          width={1024}
          height={600}
          className="w-full h-auto rounded-md shadow-sm"
        />
      </div>

      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        La religion est-elle une entreprise commerciale ? Critique approfondie de l’article sur <a href="https://www.jw.org/fr/biblioth%C3%A8que/rubriques/divers/religion-est-elle-entreprise-commerciale/" className="text-blue-600 underline">jw.org</a>
      </h1>

      <p className="text-gray-700 text-lg mb-4">
        Le texte original paru sur <a href="https://www.jw.org/fr/biblioth%C3%A8que/rubriques/divers/religion-est-elle-entreprise-commerciale/" target="_blank" rel="noreferrer" className="text-blue-600 underline">
        jw.org</a> présente les Témoins de Jéhovah comme exempts de toute organisation mercantile : absence de dîmes, distribution gratuite de publications, et financement par des dons anonymes <a href="https://www.jw.org/fr/temoins-de-jehovah/faq/comment-sont-finances/" target="_blank" rel="noreferrer" className="text-blue-600 underline">[source jw.org]</a>. Cependant, cette position mérite d'être examinée sous l'angle des données financières, institutionnelles, et doctrinales.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-2">1. Modèle économique centralisé et opaque</h2>
      <p className="text-gray-700 text-lg mb-4">
        Bien qu’ils affirment financer leur activité par dons, plusieurs enquêtes montrent qu’ils détiennent un vaste parc immobilier. Les bâtiments, souvent construits par des bénévoles, sont ensuite revendus par la direction centrale sans redistribution des profits. Cet empire foncier, géré par la « Watch Tower Bible and Tract Society », fonctionne comme une entreprise organisée, avec des bilans non transparents. Voir les témoignages exposés dans le livre de Raymond Franz, ancien membre du Collège central, *Crise de conscience*.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-2">2. Dons volontaires… mais sous pression morale</h2>
      <p className="text-gray-700 text-lg mb-4">
        L’argument de l’anonymat pour les dons—mentionné sur jw.org—cache une réalité décrite par de nombreux ex-membres : le don est souvent présenté comme un acte spirituel attendu, parfois incité par des promesses de bénédictions futures. L’absence de transparence empêche tout contrôle indépendant, comme l’ont noté plusieurs rapports indépendants.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-2">3. Transparence financière insuffisante</h2>
      <p className="text-gray-700 text-lg mb-4">
        Contrairement à d’autres confessions, les Témoins de Jéhovah ne publient pas de rapports financiers complets. En Norvège, le ministère des Affaires sociales a suspendu leur enregistrement comme association religieuse en 2022 pour manque de transparence <a href="https://www.regjeringen.no/" target="_blank" rel="noreferrer" className="text-blue-600 underline">[source officielle]</a>.
      </p>
      <p className="text-gray-700 text-lg mb-4">
        En France, leur statut d'association cultuelle leur permet d’obtenir des avantages fiscaux, mais cette reconnaissance est régulièrement critiquée. Voir notamment les enquêtes parlementaires sur les dérives sectaires.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-2">4. Une emprise sociale normée et coercitive</h2>
      <p className="text-gray-700 text-lg mb-4">
        L’article jw.org n’aborde pas les mécanismes de discipline interne. Pourtant, l’exclusion (shunning), les directives contre les transfusions sanguines et les règles de conduite interne révèlent un contrôle strict sur la vie des fidèles. Ces pratiques ont été analysées par la Commission royale australienne sur les abus institutionnels en 2017 <a href="https://www.childabuseroyalcommission.gov.au/" target="_blank" rel="noreferrer" className="text-blue-600 underline">[rapport complet]</a>.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-2">5. Impact légal et réputationnel</h2>
      <p className="text-gray-700 text-lg mb-4">
        Plusieurs pays, dont l’Australie et la Norvège, ont questionné leur statut légal. Des enquêtes journalistiques, notamment par la BBC <a href="https://www.bbc.com/news/uk-66330103" target="_blank" rel="noreferrer" className="text-blue-600 underline">[BBC, 2023]</a>, documentent des cas d’abus, de silence imposé et de rétention d’information à propos d’agressions sexuelles.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-2">Conclusion : plus qu’un discours spirituel… un modèle institutionnel à questionner</h2>
      <p className="text-gray-700 text-lg mb-4">
        Loin de l’image de « religion pure » promue sur jw.org, les Témoins de Jéhovah fonctionnent selon une structure centralisée, contrôlée, opaque sur le plan financier, et moralement coercitive. La liberté religieuse ne devrait pas être un prétexte à l’opacité ni à l’isolement des fidèles. Une transparence accrue et un encadrement par les autorités restent essentiels.
      </p>
    </div>
  );
}