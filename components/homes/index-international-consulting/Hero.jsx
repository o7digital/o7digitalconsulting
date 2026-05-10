"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const SLIDES = [
  "/assets/images/hero/hero-1.jpg",
  "/assets/images/hero/hero-2.jpg",
  "/assets/images/hero/hero-3.jpg",
  "/assets/images/hero/hero-4.jpg",
];

const INTERVAL_MS = 5000; // 5s entre slides

const DEFAULT_FR_SLIDES = [
  {
    title: "Sites Astro & React conçus pour Google",
    subtitle:
      "SEO technique, performance web et architecture moderne pour positionner votre site plus rapidement.",
    shortText:
      "O7 Digital crée des sites rapides, multilingues et optimisés pour Google avec Astro, React, CMS headless et une stratégie SEO orientée résultats.",
    ctaLabel: "Demander un audit SEO",
    ctaHref: "/contact",
  },
  {
    title: "SEO technique & performance web",
    subtitle:
      "Un site rapide, propre et bien structuré donne à Google de meilleures conditions pour comprendre, indexer et positionner vos pages.",
    shortText:
      "Core Web Vitals, balises SEO, structure HTML, contenus optimisés, maillage interne et indexation sont intégrés dès la conception.",
    ctaLabel: "Voir notre méthode SEO",
    ctaHref: "/contact",
  },
  {
    title: "Migration WordPress vers Astro",
    subtitle:
      "Nous transformons les sites WordPress lents ou surchargés en plateformes rapides, modernes et optimisées pour le référencement naturel.",
    shortText:
      "Conservez votre contenu, améliorez votre vitesse, renforcez votre SEO et donnez à votre site une base technique plus professionnelle.",
    ctaLabel: "Migrer mon site",
    ctaHref: "/contact",
  },
  {
    title: "Premiers résultats SEO visibles rapidement",
    subtitle:
      "Sur des marchés ciblés, une bonne architecture technique et une stratégie SEO claire peuvent générer des résultats visibles en moins de 30 jours.",
    shortText:
      "Audit, mots-clés, optimisation technique, contenu SEO, performance mobile et suivi de positionnement : chaque page est construite pour être trouvée.",
    ctaLabel: "Parler de mon projet",
    ctaHref: "/contact",
  },
];

export default function Hero({
  title,
  description,
  ctaLabel,
  ctaHref,
}) {
  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);
  const useLegacySingleSlide =
    typeof title !== "undefined" ||
    typeof description !== "undefined" ||
    typeof ctaLabel !== "undefined" ||
    typeof ctaHref !== "undefined";
  const slideContents = useLegacySingleSlide
    ? SLIDES.map(() => ({
        title:
          title ||
          "Sites Astro & React conçus pour Google",
        subtitle:
          description ||
          "SEO technique, performance web et architecture moderne pour positionner votre site plus rapidement.",
        shortText: "",
        ctaLabel: ctaLabel || "Demander un audit SEO",
        ctaHref: ctaHref || "/contact",
      }))
    : DEFAULT_FR_SLIDES;

  const start = () => {
    stop();
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % slideContents.length);
    }, INTERVAL_MS);
  };
  const stop = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      SLIDES.forEach((src) => {
        const img = new window.Image();
        img.src = src;
      });
    }
    start();
    const onVis = () => (document.hidden ? stop() : start());
    document.addEventListener("visibilitychange", onVis);
    return () => {
      document.removeEventListener("visibilitychange", onVis);
      stop();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const goPrev = () =>
    setIndex((i) => (i - 1 + slideContents.length) % slideContents.length);
  const goNext = () => setIndex((i) => (i + 1) % slideContents.length);

  return (
    <div
      className="slider-area slider-style-1 variation-default height-850"
      style={{ position: "relative", overflow: "hidden" }}
      onMouseEnter={stop}
      onMouseLeave={start}
    >
      {/* Slides */}
      <div className="hero-slides">
        {SLIDES.map((src, i) => {
          const content = slideContents[i] || slideContents[0];
          return (
          <div key={`${src}-${i}`} className={`slide ${i === index ? "active" : ""}`}>
            <Image
              src={src}
              alt={`Hero slide ${i + 1}`}
              fill
              priority={i === 0}
              sizes="100vw"
              style={{ objectFit: "cover" }}
            />
            <div className="container" style={{ position: "relative", zIndex: 2 }}>
              <div className="row">
                <div className="col-lg-12">
                  <div className="inner text-center hero-content-white">
                    <h1 className="title display-one">{content.title}</h1>
                    <p className="description">{content.subtitle}</p>
                    {content.shortText ? (
                      <p className="description hero-short-text">{content.shortText}</p>
                    ) : null}
                    <div className="button-group">
                      <Link className="btn-default btn-medium btn-icon btn-border btn-hero" href={content.ctaHref}>
                        {content.ctaLabel}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )})}
      </div>

      {/* Overlay pour lisibilité */}
      <div className="overlay" aria-hidden="true" />

      {/* Nav */}
      <button className="hero-nav prev" aria-label="Slide précédent" onClick={goPrev}>
        <i className="feather-arrow-left" />
      </button>
      <button className="hero-nav next" aria-label="Slide suivant" onClick={goNext}>
        <i className="feather-arrow-right" />
      </button>

      {/* Dots */}
      <div className="dots">
        {slideContents.map((_, i) => (
          <button
            key={i}
            aria-label={`Aller au slide ${i + 1}`}
            className={i === index ? "active" : ""}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>

      <style jsx>{`
        .hero-slides {
          position: absolute;
          inset: 0;
          z-index: 0;
        }
        .slide {
          position: absolute;
          inset: 0;
          opacity: 0;
          transition: opacity 800ms ease-in-out;
          will-change: opacity;
        }
        .slide.active {
          opacity: 1;
        }
        .overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.45);
          z-index: 1;
        }
        .hero-content-white .title,
        .hero-content-white .description {
          color: #fff !important;
        }
        .hero-short-text {
          max-width: 950px;
          margin: 12px auto 0;
          font-size: 1rem;
          line-height: 1.65;
          opacity: 0.95;
        }
        .btn-hero {
          color: #fff !important;
          border-color: rgba(255, 255, 255, 0.9) !important;
        }
        .hero-nav {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 3;
          background: rgba(0, 0, 0, 0.45);
          border: 0;
          color: #fff;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }
        .hero-nav.prev {
          left: 16px;
        }
        .hero-nav.next {
          right: 16px;
        }
        .hero-nav i {
          font-size: 18px;
          line-height: 1;
        }
        .dots {
          position: absolute;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 3;
          display: flex;
          gap: 8px;
        }
        .dots button {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.5);
          border: 0;
          cursor: pointer;
        }
        .dots button.active {
          background: #fff;
        }
      `}</style>
    </div>
  );
}
