import React from "react";
import SectionHeader from "../common/SectionHeader";

export default function ServiceSection({ eyebrow, title, description, items }) {
  return (
    <div className="rainbow-service-area rainbow-section-gap">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <SectionHeader
              eyebrow={eyebrow}
              title={title}
              description={description}
            />
          </div>
        </div>
        <div className="row row--15 service-wrapper">
          {items.map((item, index) => (
            <div
              key={item.title}
              className="col-lg-4 col-md-6 col-sm-6 col-12"
              data-sal="slide-up"
              data-sal-duration={650}
              data-sal-delay={index * 40}
            >
              <div className="service service__style--1 text-left bg-color-blackest radius rbt-border">
                <div className="icon">
                  <i className={item.iconClass || "feather-check"} />
                </div>
                <div className="content">
                  <h3 className="title h4 w-600 mb--10">{item.title}</h3>
                  <p className="description b1 mb--0">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
