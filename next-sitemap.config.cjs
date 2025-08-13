/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://criseconscience.org', //
    generateRobotsTxt: true,
    sitemapSize: 5000,
    changefreq: 'weekly',
    priority: 0.7,
    exclude: ['/admin'],
    robotsTxtOptions: {
      policies: [
        { userAgent: '*', allow: '/' },
        { userAgent: '*', disallow: ['/admin'] },
      ],
    },
  }