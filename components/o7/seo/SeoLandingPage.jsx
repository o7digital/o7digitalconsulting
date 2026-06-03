import Link from "next/link";
import Header2 from "@/components/headers/Header2";
import Footer2 from "@/components/footers/Footer2";

export default function SeoLandingPage({ page, relatedTitle = "Services associes" }) {
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
        </div>
      </main>
      <Footer2 />
    </>
  );
}
