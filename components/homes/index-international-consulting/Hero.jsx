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

export default function Hero() {
  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);

  const start = () => {
    stop();
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % SLIDES.length);
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
    setIndex((i) => (i - 1 + SLIDES.length) % SLIDES.length);
  const goNext = () => setIndex((i) => (i + 1) % SLIDES.length);

  return (
    <div
      className="slider-area slider-style-1 variation-default height-850"
      style={{ position: "relative", overflow: "hidden" }}
      onMouseEnter={stop}
      onMouseLeave={start}
    >
      {/* Slides */}
      <div className="hero-slides">
        {SLIDES.map((src, i) => (
          <div key={src} className={`slide ${i === index ? "active" : ""}`}>
            <Image
              src={src}
              alt={`Hero slide ${i + 1}`}
              fill
              priority={i === 0}
              sizes="100vw"
              style={{ objectFit: "cover" }}
            />
          </div>
        ))}
      </div>

      {/* Overlay pour lisibilité */}
      <div className="overlay" aria-hidden="true" />

      {/* Contenu */}
      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        <div className="row">
          <div className="col-lg-12">
            <div className="inner text-center hero-content-white">
              <h1 className="title display-one">
                Nous vous accompagnons <br />
                dans votre croissance et votre développement
              </h1>
              <p className="description">
                Go-to-market, marketing digital, et services IT &amp; Cloud
                (infogérance, cybersécurité, consulting):
              </p>
              <div className="button-group">
                <Link className="btn-default btn-medium btn-icon btn-border btn-hero" href={`/contact`}>
                  Parler à un expert →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Nav */}
      <button className="hero-nav prev" aria-label="Slide précédent" onClick={goPrev}>
        <i className="feather-arrow-left" />
      </button>
      <button className="hero-nav next" aria-label="Slide suivant" onClick={goNext}>
        <i className="feather-arrow-right" />
      </button>

      {/* Dots */}
      <div className="dots">
        {SLIDES.map((_, i) => (
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