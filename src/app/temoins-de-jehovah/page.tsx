"use client";

import Link from "next/link";

export default function TJPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-20 text-gray-800">
      <h1 className="text-4xl font-extrabold text-emerald-700 mb-10 text-center animate-fade-in">
        Les Témoins de Jéhovah
      </h1>
      <p className="mb-10 text-lg text-center text-gray-700 animate-fade-in delay-200">
        Découvrez les origines, la doctrine, les prophéties controversées et l’usage du nom « Jéhovah ».
      </p>

      <div className="grid gap-6 animate-fade-in-up delay-300">
        <div className="p-6 border border-emerald-200 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 bg-white hover:bg-emerald-50">
          <Link href="/temoins-de-jehovah/origines" className="text-emerald-800 text-lg font-semibold underline">
            Origines du mouvement
          </Link>
        </div>

        <div className="p-6 border border-emerald-200 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 bg-white hover:bg-emerald-50">
          <Link href="/temoins-de-jehovah/contre-articles/" className="text-emerald-800 text-lg font-semibold underline">
            Contre-article du site officiel des TJ
          </Link>
        </div>

        <div className="p-6 border border-emerald-200 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 bg-white hover:bg-emerald-50">
          <Link href="/temoins-de-jehovah/doctrine" className="text-emerald-800 text-lg font-semibold underline">
            Doctrine des TJ
          </Link>
        </div>

        <div className="p-6 border border-emerald-200 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 bg-white hover:bg-emerald-50">
          <Link href="/temoins-de-jehovah/fausses-propheties" className="text-emerald-800 text-lg font-semibold underline">
            Fausses prophéties (1914, 1925, 1975…)
          </Link>
        </div>

        <div className="p-6 border border-emerald-200 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 bg-white hover:bg-emerald-50">
          <Link href="/temoins-de-jehovah/nom-de-dieu" className="text-emerald-800 text-lg font-semibold underline">
            Le nom de Dieu : « Jéhovah »
          </Link>
        </div>
      </div>
    </main>
  );
}
