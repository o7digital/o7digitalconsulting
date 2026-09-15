import React from "react";
import Image from "next/image";
import SectionHeader from "../common/SectionHeader";
import { o7HomeServices } from "@/data/o7";

export default function HomeServices({
  services = o7HomeServices,
  eyebrow = "Services phares",
  title = "9 services principaux",
  description = "Stratégie, développement, IA, SEO, infogérance, design graphique, motion design et 3D pour couvrir vos besoins digitaux.",
}) {
  return (
    <div id="services" className="rainbow-service-area rainbow-section-gap">
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
          {services.map((service, index) => (
            <div
              key={service.title}
              className="col-lg-4 col-md-6 col-sm-6 col-12"
              data-sal="slide-up"
              data-sal-duration={600}
              data-sal-delay={index * 50}
            >
              <div
                className={`service service__style--1 icon-circle-style home-service-card ${
                  service.spanTwo ? "service-span-two" : ""
                } ${
                  service.align || "text-center"
                }`}
              >
                <div className="icon">
                  <i className={service.iconClass} />
                </div>
                <div className="content">
                  <h4 className="title w-600">
                    {service.title}
                  </h4>
                  <p className="description b1 color-gray mb--0">
                    {service.description}
                  </p>
                  {service.points && (
                    <ul className="list-style--1 text-start mt--15 mb--0">
                      {service.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  )}
                </div>
                {service.image?.src && (
                  <div
                    className={`image mt--20 home-service-image ${
                      service.image.className || ""
                    }`}
                    style={{ height: service.image.height || "330px" }}
                  >
                    <Image
                      src={service.image.src}
                      alt={service.image.alt}
                      fill
                      loading="lazy"
                      quality={72}
                      sizes={
                        service.spanTwo
                          ? "(max-width: 767px) calc(100vw - 30px), (max-width: 991px) calc(50vw - 30px), (max-width: 1399px) calc(66vw - 60px), 850px"
                          : "(max-width: 767px) calc(100vw - 30px), (max-width: 991px) calc(50vw - 30px), (max-width: 1399px) calc(33vw - 30px), 410px"
                      }
                      className="radius"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
