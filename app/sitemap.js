export default function sitemap() {
  const baseUrl = 'https://www.o7digital-consulting.com';
  const currentDate = new Date().toISOString();
  
  // Liste des pages principales avec leurs priorités
  const routes = [
    { path: '/index-digital-agency', priority: 1.0, changeFreq: 'weekly' },
    { path: '/about', priority: 0.9, changeFreq: 'monthly' },
    { path: '/contact', priority: 0.9, changeFreq: 'monthly' },
    { path: '/portfolio', priority: 0.8, changeFreq: 'weekly' },
    { path: '/privacy-policy', priority: 0.3, changeFreq: 'yearly' },
  ];

  // Langues supportées
  const languages = ['', 'en', 'es', 'de', 'it']; // '' = français (default)

  const urls = [];

  // Générer les URLs pour chaque combinaison de route et langue
  languages.forEach(lang => {
    routes.forEach(route => {
      const langPrefix = lang ? `/${lang}` : '';
      urls.push({
        url: `${baseUrl}${langPrefix}${route.path}`,
        lastModified: currentDate,
        changeFrequency: route.changeFreq,
        priority: route.priority,
        alternates: {
          languages: {
            fr: `${baseUrl}${route.path}`,
            en: `${baseUrl}/en${route.path}`,
            es: `${baseUrl}/es${route.path}`,
            de: `${baseUrl}/de${route.path}`,
            it: `${baseUrl}/it${route.path}`,
          },
        },
      });
    });
  });

  return urls;
}
