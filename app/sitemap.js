export default function sitemap() {
  const baseUrl = 'https://www.o7digital.com';
  const currentDate = new Date().toISOString();

  const routes = [
    { path: '', priority: 1.0, changeFreq: 'weekly', home: true },
    { path: '/about', priority: 0.9, changeFreq: 'monthly' },
    { path: '/contact', priority: 0.9, changeFreq: 'monthly' },
    { path: '/portfolio', priority: 0.8, changeFreq: 'weekly' },
    { path: '/privacy-policy', priority: 0.3, changeFreq: 'yearly' },
  ];

  const languages = [
    { code: 'fr', prefix: '', homePath: '' },
    { code: 'en', prefix: '/en', homePath: '/index-digital-agency' },
    { code: 'es', prefix: '/es', homePath: '/index-digital-agency' },
    { code: 'de', prefix: '/de', homePath: '/index-digital-agency' },
    { code: 'it', prefix: '/it', homePath: '/index-digital-agency' },
  ];

  const localizedUrl = (lang, route) =>
    `${baseUrl}${lang.prefix}${route.home ? lang.homePath : route.path}`;

  return languages.flatMap((lang) =>
    routes.map((route) => ({
        url: localizedUrl(lang, route),
        lastModified: currentDate,
        changeFrequency: route.changeFreq,
        priority: route.priority,
        alternates: {
          languages: Object.fromEntries([
            ['x-default', localizedUrl(languages[0], route)],
            ...languages.map((alternateLang) => [
              alternateLang.code,
              localizedUrl(alternateLang, route),
            ]),
          ]),
        },
      }))
  );
}
