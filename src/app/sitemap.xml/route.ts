import { NextResponse } from 'next/server';

const siteUrl = 'https://criseconscience.org';

const staticPaths = [
  '',
  '/admin/login',
  '/agir',
  '/aide',
  '/contact',
  '/documents',
  '/documents/document-utile',
  '/dons',
  '/dons/thank',
  '/forum',
  '/legal',
  '/qui-sommes-nous',
  '/s-informer',
  '/temoignages',
  '/temoins-de-jehovah',
  '/temoins-de-jehovah/contre-article',
  '/temoins-de-jehovah/contre-article/religion-est-elle-entreprise-commerciale',
  '/temoins-de-jehovah',
  '/temoins-de-jehovah/doctrine',
  '/temoins-de-jehovah/fausses-propheties',
  '/temoins-de-jehovah/fausses-propheties/1914',
  '/temoins-de-jehovah/fausses-propheties/1925',
  '/temoins-de-jehovah/fausses-propheties/1975',
  '/temoins-de-jehovah/nom-de-dieu',
  '/temoins-de-jehovah/origines',
];


export async function GET() {
  const urls = staticPaths
    .map((path) => {
      return `
        <url>
          <loc>${siteUrl}${path}</loc>
          <changefreq>monthly</changefreq>
          <priority>0.7</priority>
        </url>
      `;
    })
    .join('');

  const xml = `
    <?xml version="1.0" encoding="UTF-8" ?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${urls}
    </urlset>
  `.trim();

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
