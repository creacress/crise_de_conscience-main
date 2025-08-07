

import Link from 'next/link';
import Image from 'next/image';

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
          <div className="relative overflow-hidden h-48">
            <Image
              src="/502015177_univ_lsr_lg.jpg"
              alt="Image symbolique sur la vraie religion"
              fill
              className="object-cover transform group-hover:scale-105 transition duration-300"
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
      </div>
    </div>
  );
}
