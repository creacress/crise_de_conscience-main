import Image from "next/image";

export default function VraieReligionContreArticle() {
  return (
    <div className="max-w-4xl mx-auto px-4 pt-8">
      <div className="mb-6">
        <Image
          src="/502015177_univ_lsr_lg.jpg"
          alt="Image symbolique des religions"
          width={1024}
          height={600}
          priority
          className="w-full h-auto rounded-md shadow-sm"
        />
      </div>

      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Quelle est la vraie religion ? Une analyse critique de l'article publié
        sur{" "}
        <a
          href="https://www.jw.org/fr/la-bible-et-vous/questions-bibliques/quelle-est-la-vraie-religion/"
          className="text-blue-600 underline"
        >
          jw.org
        </a>
      </h1>

      <p className="text-gray-700 text-lg mb-4">
        Le site jw.org affirme identifier la seule « vraie » religion, celle des
        Témoins de Jéhovah, en se basant sur leur propre interprétation
        biblique. Ce contre-article examine les affirmations proposées en les
        confrontant à des données historiques, exégétiques et sociologiques.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-2">
        1. Une revendication d’exclusivité non justifiée
      </h2>
      <p className="text-gray-700 text-lg mb-4">
        L’article postule que Dieu n’a qu’une seule organisation sur terre. Ce
        type d’affirmation exclusive repose sur une lecture autoréférentielle de
        la Bible. De nombreuses confessions chrétiennes revendiquent aussi la
        fidélité aux Écritures, rendant cette prétention difficilement
        vérifiable objectivement.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-2">
        2. Une traduction biblique contestée
      </h2>
      <p className="text-gray-700 text-lg mb-4">
        La Traduction du Monde Nouveau insère le nom « Jéhovah » dans le Nouveau
        Testament, ce qui ne figure dans aucun manuscrit grec ancien. Cela
        influe considérablement sur le sens théologique de nombreux versets,
        comme Jean 1:1 qui devient « la Parole était un dieu ».
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-2">
        3. Diabolisation des autres religions
      </h2>
      <p className="text-gray-700 text-lg mb-4">
        En présentant toutes les autres confessions comme manipulées par Satan,
        l’article pose un cadre manichéen incompatible avec la diversité
        religieuse reconnue par les historiens des religions. Cette rhétorique
        alimente le séparatisme et décourage l'ouverture interreligieuse.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-2">
        4. Doctrine sur l’âme et l’enfer : interprétation univoque
      </h2>
      <p className="text-gray-700 text-lg mb-4">
        L’article rejette la croyance en l’âme immortelle et en l’enfer,
        s’appuyant sur une lecture littérale de certains versets. Or, ces
        concepts sont interprétés différemment dans l’histoire chrétienne,
        notamment chez les Pères de l’Église et dans d'autres courants
        bibliques.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-2">
        5. Une structure à tendance sectaire ?
      </h2>
      <p className="text-gray-700 text-lg mb-4">
        Le rejet des relations extérieures et l’adhésion exclusive à
        l’organisation sont des caractéristiques analysées comme sectaires par
        de nombreux sociologues. Raymond Franz, ancien membre du Collège
        central, détaille ce glissement dans son ouvrage{" "}
        <em>Crise de conscience</em>.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-2">
        Conclusion : une vraie foi ne se décrète pas
      </h2>
      <p className="text-gray-700 text-lg mb-4">
        Une foi authentique ne repose pas sur l'exclusivité organisationnelle
        mais sur la sincérité, la liberté de conscience et la recherche de
        vérité. La diversité chrétienne témoigne d’un cheminement multiple vers
        le sacré, où la prétention d’unicité peut devenir un obstacle à la foi
        vécue.
      </p>
    </div>
  );
}
