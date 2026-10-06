import React from "react";
import { o7AboutHero } from "@/data/o7";

export default function AboutHero({ heroData = o7AboutHero }) {
  return (
    <div
      className="slider-area slider-style-1 variation-default height-650 bg_image"
      style={{ backgroundImage: 'url(/assets/hammer-group.webp)' }}
      data-black-overlay={4}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div
              className="inner pt--80 text-center"
              data-sal="slide-up"
              data-sal-duration={400}
              data-sal-delay={150}
            >
              <div>
                <p className="rainbow-sub-badge">
                  <span className="theme-gradient">{heroData.eyebrow}</span>
                </p>
              </div>
              <h1 className="title display-one">{heroData.title}</h1>
              <p className="description b1 mt--15 mb--0">
                {heroData.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
