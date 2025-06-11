"use client";

import Link from "next/link";

export default function TJPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-20 text-gray-800">
      <h1 className="text-3xl font-bold text-emerald-700 mb-6">
        Les Témoins de Jéhovah
      </h1>
      <p className="mb-6">
        Découvrez les origines, la doctrine, les prophéties controversées et l’usage du nom « Jéhovah ».
      </p>

      <ul className="space-y-4 text-emerald-800 font-medium">
        <li>
          <Link href="/temoins-de-jehovah/origines" className="underline">
            Origines du mouvement
          </Link>
          <Link href="/temoins-de-jehovah/contre-article/" className="underline">
            Contre-article du site officiel des TJ
          </Link>
        </li>
        <li>
          <Link href="/temoins-de-jehovah/doctrine" className="underline">
            Doctrine des TJ
          </Link>
        </li>
        <li>
          <Link href="/temoins-de-jehovah/fausses-propheties" className="underline">
            Fausses prophéties (1914, 1925, 1975…)
          </Link>
        </li>
        <li>
          <Link href="/temoins-de-jehovah/nom-de-dieu" className="underline">
            Le nom de Dieu : « Jéhovah »
          </Link>
        </li>
      </ul>
    </main>
  );
}
