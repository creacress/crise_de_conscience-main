import Link from "next/link";

export default function RoyaumeContreArticle() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <div className="mb-8">
        <img
          src="/502012120_univ_lsr_lg.jpg"
          alt="Illustration du Royaume de Dieu selon la Watchtower"
          className="w-full h-64 object-cover rounded-lg shadow"
        />
      </div>

      <h1 className="text-4xl font-bold text-gray-900 mb-6">
        Le Royaume de Dieu — promesse divine ou structure humaine ?
      </h1>

      <p className="text-gray-700 text-lg mb-10">
        Contre-article biblique et critique sur l’interprétation du Royaume par
        la Watchtower, en lien direct avec l’article « Grâce à Jésus, finies les
        guerres ! ».
      </p>

      <div className="space-y-10">
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">
            Une définition biblique… teintée d’organisation
          </h2>
          <p className="text-gray-700">
            L’article de JW.org décrit le Royaume comme un gouvernement divin.
            Mais il fusionne subtilement cette entité céleste avec son
            organisation terrestre. Or, dans le Nouveau Testament, l’autorité de
            Jésus s’exerce directement, sans intermédiaire humain exclusif (Jean
            16:13 ; Colossiens 1:13).
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">
            Une paix conditionnée à une structure
          </h2>
          <p className="text-gray-700">
            Le lien entre Royaume et fin des guerres repose sur une vision
            centralisée. Pourtant, comme le montre Raymond Franz dans *Crise de
            Conscience*, le fonctionnement interne de l’organisation reflète
            davantage un système humain que le gouvernement parfait de Christ.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">
            Des sujets triés selon des critères humains
          </h2>
          <p className="text-gray-700">
            En pratique, l’organisation limite l’accès au Royaume à ceux qui
            acceptent toutes ses doctrines et directives, excluant même sur des
            sujets où la Bible garde le silence. Cela contredit Jean 6:37 et
            Actes 10:34-35.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">
            Lois du Royaume ou prescriptions humaines ?
          </h2>
          <p className="text-gray-700">
            Bien que la loi du Royaume soit fondée sur l’amour (Matthieu
            22:37-39), la Watchtower impose de nombreuses règles précises qui
            s’apparentent à du légalisme pharisien (Matthieu 23:4).
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">
            Une promesse détournée
          </h2>
          <p className="text-gray-700">
            Si le paradis terrestre est une espérance biblique (Révélation
            21:3-4), le conditionner à l’appartenance à une structure
            organisationnelle va à l’encontre de la vision initiale des premiers
            proclamateurs, et du message ouvert du Christ.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">
            Conclusion critique
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
            <li>Le Royaume est assimilé à une structure humaine</li>
            <li>La paix divine devient conditionnelle à l’adhésion</li>
            <li>Les lois divines sont remplacées par des règles internes</li>
          </ul>
          <p className="text-gray-700">
            Le Royaume de Dieu, tel que présenté par Jésus, transcende toute
            organisation. Il agit dans le cœur du croyant, dès maintenant, sans
            passer par des filtres humains.
          </p>
        </section>

        <div className="pt-8 border-t mt-12">
          <Link href="/temoins-de-jehovah/contre-articles/questions-bibliques/jesus-christ/finies-les-guerres">
            <span className="text-blue-600 hover:underline">
              ← Lire aussi : Grâce à Jésus, finies les guerres !
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
