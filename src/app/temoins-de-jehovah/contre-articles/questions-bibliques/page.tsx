import Link from "next/link";
import Image from "next/image";
import type { FC } from "react";

// Types
type Article = {
  href: string;
  title: string;
  description: string;
  img: string;
  alt: string;
};

const ArticleCard: FC<Article> = ({ href, title, description, img, alt }) => (
  <li className="relative">
    <Link
      href={href}
      className="group block bg-white border rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
      aria-label={title}
    >
      <div className="relative h-48 sm:h-56">
        <Image
          src={img}
          alt={alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          priority={false}
        />
      </div>
      <div className="p-5">
        <h3 className="text-lg sm:text-xl font-semibold text-blue-700 group-hover:underline">
          {title}
        </h3>
        <p className="text-gray-600 mt-2 text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </Link>
  </li>
);

const articles: ReadonlyArray<Article> = [
  {
    href:
      "/temoins-de-jehovah/contre-articles/questions-bibliques/quelle-est-la-vraie-religion",
    title: "Quelle est la vraie religion ?",
    description:
      "Une enquête biblique sur les critères avancés pour identifier la “vraie religion” selon les Témoins de Jéhovah.",
    img: "/502015177_univ_lsr_lg.jpg",
    alt: "Image symbolique sur la vraie religion",
  },
  {
    href:
      "/temoins-de-jehovah/contre-articles/questions-bibliques/jesus-christ/finies-les-guerres",
    title: "Grâce à Jésus, finies les guerres ?",
    description:
      "Rétrospective critique de l’idée des Témoins de Jéhovah sur la paix mondiale à la lumière de la Bible et de l’histoire.",
    img: "/502000362_univ_pnr_lg.jpg",
    alt: "Jeune fille devant une ville détruite",
  },
  {
    href:
      "/temoins-de-jehovah/contre-articles/questions-bibliques/jesus-christ/royaume-de-dieu",
    title: "Le Royaume de Dieu : promesse biblique ou illusion ?",
    description:
      "Analyse de la promesse du Royaume de Dieu selon les Témoins de Jéhovah et de son interprétation dans le contexte biblique.",
    img: "/502012120_univ_lsr_lg.jpg",
    alt: "Jésus-Christ et la paix mondiale",
  },
] as const;

const QuestionsBibliques: FC = () => {
  return (
    <main className="max-w-6xl mx-auto px-4 py-10">
      <header className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
          Questions bibliques
        </h1>
        <p className="text-gray-600 text-base md:text-lg mt-3 max-w-3xl">
          Explorez nos articles qui remettent en question certaines interprétations
          bibliques. Nos analyses sont basées sur les textes, l’histoire et les faits.
        </p>
      </header>

      <section aria-labelledby="articles-heading">
        <h2 id="articles-heading" className="sr-only">
          Liste d’articles
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
          {articles.map((a) => (
            <ArticleCard key={a.href} {...a} />
          ))}
        </ul>
      </section>
    </main>
  );
};

export default QuestionsBibliques;
