import React from "react";
import SectionHeader from "@/components/o7/common/SectionHeader";
import PortfolioPreviewGrid from "./PortfolioPreviewGrid";

export default function PortfolioSection({ copy, projects }) {
  return (
    <section className="rainbow-portfolio-area rainbow-section-gap">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 offset-lg-1">
            <SectionHeader
              eyebrow={copy.eyebrow}
              title={copy.title}
              description={copy.description}
              headingLevel="h1"
            />
          </div>
        </div>
        <div className="mt--30">
          <PortfolioPreviewGrid projects={projects} copy={copy} />
        </div>
      </div>
    </section>
  );
}
