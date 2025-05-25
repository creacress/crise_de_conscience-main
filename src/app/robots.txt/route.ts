import { NextResponse } from 'next/server';

export async function GET() {
  const content = `
User-agent: *
Disallow: /admin
Disallow: /api
Allow: /

Sitemap: https://criseconscience.org/sitemap.xml
  `.trim();

  return new NextResponse(content, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}
