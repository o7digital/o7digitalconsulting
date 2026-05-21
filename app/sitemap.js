export default function sitemap() {
  const baseUrl = 'https://www.o7digital.com';
  const currentDate = new Date().toISOString();
  
  // Liste des pages principales avec leurs priorités
  const routes = [
    { path: '', priority: 1.0, changeFreq: 'weekly', localizedHome: true },
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
      const path = route.localizedHome && lang
        ? '/index-digital-agency'
        : route.path;
      urls.push({
        url: `${baseUrl}${langPrefix}${path}`,
        lastModified: currentDate,
        changeFrequency: route.changeFreq,
        priority: route.priority,
        alternates: {
          languages: {
            'x-default': route.localizedHome ? `${baseUrl}/` : `${baseUrl}${route.path}`,
            fr: route.localizedHome ? `${baseUrl}/` : `${baseUrl}${route.path}`,
            en: route.localizedHome ? `${baseUrl}/en/index-digital-agency` : `${baseUrl}/en${route.path}`,
            es: route.localizedHome ? `${baseUrl}/es/index-digital-agency` : `${baseUrl}/es${route.path}`,
            de: route.localizedHome ? `${baseUrl}/de/index-digital-agency` : `${baseUrl}/de${route.path}`,
            it: route.localizedHome ? `${baseUrl}/it/index-digital-agency` : `${baseUrl}/it${route.path}`,
          },
        },
      });
    });
  });

  return urls;
}
