import Link from "next/link";
import Script from "next/script";
import Header2 from "@/components/headers/Header2";
import Footer2 from "@/components/footers/Footer2";
import { seoCaseStudies } from "@/data/seoPages";

export default function SeoLandingPage({ page, relatedTitle = "Services associes" }) {
  const faqSchema = page.faqs?.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: page.faqs.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      }
    : null;

  return (
    <>
      <Header2 parentClass="rainbow-header header-default header-left-align header-transparent header-sticky" />
      <div>
        <div className="rainbow-gradient-circle" />
        <div className="rainbow-gradient-circle theme-pink" />
      </div>
      <main className="rainbow-section-gap">
        <div className="container">
          <div className="row align-items-start">
            <div className="col-lg-8">
              <p className="theme-gradient b1 mb--15">{page.eyebrow}</p>
              <h1 className="title display-one mb--20">{page.title}</h1>
              <p className="description b1 mb--30">{page.intro}</p>
              <div className="row row--15">
                {page.sections.map((section) => (
                  <div className="col-md-4" key={section}>
                    <div className="service service__style--1 bg-color-blackest radius mt--20">
                      <p className="b1 mb--0">{section}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <aside className="col-lg-4 mt_md--40 mt_sm--40">
              <div className="service service__style--1 bg-color-blackest radius">
                <h2 className="title h4 mb--15">{relatedTitle}</h2>
                <ul className="list-style--1">
                  <li><Link href="/seo-technique">SEO technique</Link></li>
                  <li><Link href="/cto-as-a-service">CTO as a Service</Link></li>
                  <li><Link href="/developpement-web">Developpement web</Link></li>
                  <li><Link href="/performance-web">Performance web</Link></li>
                  <li><Link href="/contact">Demander un audit</Link></li>
                </ul>
              </div>
            </aside>
          </div>

          {page.overview && (
            <section className="row mt--80" aria-labelledby="seo-overview-title">
              <div className="col-lg-4">
                <p className="theme-gradient b1 mb--10">Une approche utile et mesurable</p>
                <h2 id="seo-overview-title" className="title h2 mb--20">
                  Transformer un besoin technique en résultat durable
                </h2>
              </div>
              <div className="col-lg-8">
                {page.overview.map((paragraph) => (
                  <p className="description b1" key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>
          )}

          {page.challenges && page.deliverables && (
            <section className="row row--30 mt--60" aria-label="Enjeux et livrables">
              <div className="col-lg-6">
                <div className="service service__style--1 bg-color-blackest radius h-100">
                  <h2 className="title h3 mb--20">Problèmes que nous traitons</h2>
                  <ul className="list-style--1">
                    {page.challenges.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </div>
              </div>
              <div className="col-lg-6 mt_md--30 mt_sm--30">
                <div className="service service__style--1 bg-color-blackest radius h-100">
                  <h2 className="title h3 mb--20">Ce que vous recevez</h2>
                  <ul className="list-style--1">
                    {page.deliverables.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </div>
              </div>
            </section>
          )}

          {page.process && (
            <section className="mt--80" aria-labelledby="seo-process-title">
              <div className="section-title text-center mb--30">
                <p className="theme-gradient b1 mb--10">Méthode</p>
                <h2 id="seo-process-title" className="title h2">Une intervention en trois étapes</h2>
              </div>
              <div className="row row--20">
                {page.process.map((step, index) => (
                  <div className="col-lg-4 col-md-6 col-12 mt--20" key={step.title}>
                    <div className="service service__style--1 bg-color-blackest radius h-100">
                      <span className="theme-gradient b1">0{index + 1}</span>
                      <h3 className="title h4 mt--10 mb--15">{step.title}</h3>
                      <p className="b1 mb--0">{step.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          <section className="mt--80" aria-labelledby="seo-cases-title">
            <div className="section-title text-center mb--30">
              <p className="theme-gradient b1 mb--10">Réalisations</p>
              <h2 id="seo-cases-title" className="title h2">Des interventions visibles sur des projets réels</h2>
              <p className="description b1">Une sélection de missions où stratégie, développement et SEO technique ont été réunis.</p>
            </div>
            <div className="row row--20">
              {seoCaseStudies.map((study) => (
                <article className="col-lg-4 col-12 mt--20" key={study.title}>
                  <div className="service service__style--1 bg-color-blackest radius h-100">
                    <p className="theme-gradient b2 mb--10">{study.sector}</p>
                    <h3 className="title h4 mb--15">{study.title}</h3>
                    <p className="b2"><strong>Enjeu :</strong> {study.challenge}</p>
                    <p className="b2"><strong>Intervention :</strong> {study.work}</p>
                    <p className="b2"><strong>Résultat observé :</strong> {study.outcome}</p>
                    <a href={study.url} target="_blank" rel="noreferrer noopener" className="btn-default btn-small mt--10">
                      Voir le site
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {page.faqs && (
            <section className="mt--80" aria-labelledby="seo-faq-title">
              <div className="row">
                <div className="col-lg-4">
                  <p className="theme-gradient b1 mb--10">Questions fréquentes</p>
                  <h2 id="seo-faq-title" className="title h2">Ce qu’il faut savoir</h2>
                </div>
                <div className="col-lg-8">
                  {page.faqs.map((item) => (
                    <details className="service service__style--1 bg-color-blackest radius mb--20" key={item.question}>
                      <summary className="title h4">{item.question}</summary>
                      <p className="b1 mt--15 mb--0">{item.answer}</p>
                    </details>
                  ))}
                </div>
              </div>
            </section>
          )}

          <section className="service service__style--1 bg-color-blackest radius mt--80 text-center" aria-label="Prendre contact">
            <h2 className="title h2 mb--15">Parlons de votre objectif</h2>
            <p className="description b1 mb--25">Décrivez votre contexte, vos priorités et vos contraintes. Nous vous proposerons une première lecture claire des prochaines étapes.</p>
            <Link href="/contact#contact-form" className="btn-default btn-medium">Demander un échange</Link>
          </section>
        </div>
      </main>
      {faqSchema && (
        <Script id={`faq-${page.eyebrow}`} type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify(faqSchema)}
        </Script>
      )}
      <Footer2 />
    </>
  );
}
