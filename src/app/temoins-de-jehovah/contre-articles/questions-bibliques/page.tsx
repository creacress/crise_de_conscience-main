import Link from "next/link";

export default function QuestionsBibliques() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Questions bibliques
      </h1>
      <p className="text-gray-600 text-lg mb-8">
        Explorez nos articles qui remettent en question certaines
        interprétations bibliques. Nos analyses sont basées sur les textes,
        l’histoire, et les faits.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
        <div className="relative bg-white border rounded-lg overflow-hidden shadow hover:shadow-xl transition duration-300 group">
          <div className="overflow-hidden h-48">
            <img
              src="/502015177_univ_lsr_lg.jpg"
              alt="Image symbolique sur la vraie religion"
              className="w-full h-full object-cover transform group-hover:scale-105 transition duration-300"
            />
          </div>
          <div className="p-5">
            <Link
              href="/temoins-de-jehovah/contre-articles/questions-bibliques/quelle-est-la-vraie-religion"
              className="text-xl font-semibold text-blue-600 hover:underline"
            >
              Quelle est la vraie religion ?
            </Link>
            <p className="text-gray-600 mt-2 text-sm">
              Une enquête biblique sur les critères présentés pour identifier la
              "vraie religion" selon les Témoins de Jéhovah.
            </p>
          </div>
        </div>

        <div className="relative bg-white border rounded-lg overflow-hidden shadow hover:shadow-xl transition duration-300 group">
          <div className="overflow-hidden h-48">
            <img
              src="/502000362_univ_pnr_lg.jpg"
              alt="Image de fille devant une ville détruite"
              className="w-full h-full object-cover transform group-hover:scale-105 transition duration-300"
            />
          </div>
          <div className="p-5">
            <Link
              href="/temoins-de-jehovah/contre-articles/questions-bibliques/jesus-christ/finies-les-guerres"
              className="text-xl font-semibold text-blue-600 hover:underline"
            >
              Grâce à Jésus, finies les guerres ?
            </Link>
            <p className="text-gray-600 mt-2 text-sm">
              Une rétrospective critique de l’idée des Témoins de Jéhovah sur la
              paix mondiale à la lumière de la Bible et de l’histoire.
            </p>
          </div>
        </div>
      </div>
      <div className="relative bg-white border rounded-lg overflow-hidden shadow hover:shadow-xl transition duration-300 group">
        <div className="overflow-hidden h-48">
          <img
            src="/502012120_univ_lsr_lg.jpg"
            alt="Jesus-Christ et la paix mondiale"
            className="w-full h-full object-cover transform group-hover:scale-105 transition duration-300"
          />
        </div>
        <div className="p-5">
          <Link
            href="/temoins-de-jehovah/contre-articles/questions-bibliques/jesus-christ/royaume-de-dieu"
            className="text-xl font-semibold text-blue-600 hover:underline"
          >
            Le Royaume de Dieu : une promesse biblique ou une illusion ?
          </Link>
          <p className="text-gray-600 mt-2 text-sm">
            Une analyse de la promesse du Royaume de Dieu selon les Témoins de
            Jéhovah, et comment elle est interprétée dans le contexte biblique.
          </p>
        </div>
      </div>
    </div>
  );
}
