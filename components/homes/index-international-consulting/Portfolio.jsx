"use client";
import React, { useMemo, useState } from "react";
import { filterButtons, portfolios } from "@/data/portfolio";
import Image from "next/image";
import Link from "next/link";

export default function Portfolio() {
  const [currentFilter, setCurrentFilter] = useState("*");

  // Filtrage côté React, sans Isotope
  const displayed = useMemo(() => {
    if (currentFilter === "*") return portfolios;
    const key = currentFilter.startsWith(".")
      ? currentFilter.slice(1)
      : currentFilter;
    return portfolios.filter((p) => {
      const cats = String(p.categories || "").split(/\s+/);
      return cats.includes(key);
    });
  }, [currentFilter]);

  return (
    <div className="rainbow-portfolio-area rainbow-section-gap">
      <div className="container-fluid plr--30">
        <div className="row">
          <div className="col-lg-12">
            <div
              className="section-title text-center mb--50"
              data-sal="slide-up"
              data-sal-duration={700}
              data-sal-delay={100}
            >
              <h4 className="subtitle">
                <span className="theme-gradient">Études de cas</span>
              </h4>
              <h2 className="title w-600 mb--20">
                Des résultats concrets, <br /> des projets menés à bien.
              </h2>
            </div>
          </div>
        </div>

        {/* Filtres */}
        <div className="row">
          <div className="col-lg-12">
            <div className="rainbow-portfolio-filter filter-button-default messonry-button text-center mb--30">
              {filterButtons.map((button) => (
                <button
                  key={button.filter}
                  onClick={() => setCurrentFilter(button.filter)}
                  data-filter={button.filter}
                  className={currentFilter === button.filter ? "is-checked" : ""}
                >
                  <span className="filter-text">{button.label}</span>
                </button>
              ))}
            </div>

            {/* Grille simple sans Isotope */}
            <div className="portfolio-items grid-metro3 mesonry-list">
              <div className="resizer" />
              {displayed.map((portfolio) => (
                <div
                  key={portfolio.id}
                  className={`portfolio-3 box-grid-layout ${portfolio.categories}`}
                >
                  <div className="rainbow-card portfolio">
                    <div className="inner">
                      <div className="thumbnail">
                        <figure className="card-image">
                          <Link href={`/portfolio-details/${portfolio.id}`}>
                            <Image
                              alt={portfolio.altText}
                              src={portfolio.imgSrc}
                              width={1270}
                              height={950}
                            />
                          </Link>
                        </figure>
                        <Link
                          className="rainbow-overlay"
                          href={`/portfolio-details/${portfolio.id}`}
                        />
                      </div>
                      <div className="content">
                        <h5 className="title mb--10">
                          <Link href={`/portfolio-details/${portfolio.id}`}>
                            {portfolio.title}
                          </Link>
                        </h5>
                        <span className="subtitle b2">{portfolio.subtitle}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              {displayed.length === 0 && (
                <div className="text-center b2 mt--20 mb--20">Aucun élément.</div>
              )}
            </div>
          </div>
        </div>

        {/* Bouton voir plus */}
        <div className="row row--15">
          <div className="col-lg-12">
            <div className="rainbow-load-more text-center mt--60">
              <Link href={`/portfolio`} className="btn btn-default btn-large btn-icon">
                <span>
                  Voir plus de projets <span className="icon feather-loader" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}