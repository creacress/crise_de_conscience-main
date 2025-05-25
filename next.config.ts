import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
};

export default nextConfig;

export const config = {
  matcher: ['/admin/:path*'],
};
