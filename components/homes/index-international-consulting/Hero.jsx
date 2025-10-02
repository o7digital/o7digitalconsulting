import Link from "next/link";
import React from "react";

export default function Hero() {
  return (
    <div
      className="slider-area slider-style-1 variation-default height-850 bg_image bg_image--18"
      data-black-overlay={7}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="inner text-center">
              <h1 className="title display-one">
                International <br />
                <span className="theme-gradient">Business</span> &amp;{" "}
                <span className="theme-gradient">Consulting</span>.
              </h1>
              <p className="description">
                We help our clients succeed by creating brand identities,
                digital experiences, and print materials.
              </p>
              <div className="button-group">
                <a
                  className="btn-default btn-medium btn-icon"
                  target="_blank"
                  href="https://themeforest.net/user/rainbow-themes/portfolio"
                >
                  Purchase Now <i className="feather-arrow-right" />
                </a>
                <Link
                  className="btn-default btn-medium btn-icon btn-border"
                  href={`/contact`}
                >
                  Contact Us <i className="feather-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
