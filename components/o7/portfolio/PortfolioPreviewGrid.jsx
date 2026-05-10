"use client";

import React, { useMemo, useState } from "react";

const buildPreviewUrl = (url) => {
  const safeUrl = (url || "").trim();
  return `https://api.microlink.io/?url=${encodeURIComponent(
    safeUrl
  )}&screenshot=true&meta=false&embed=screenshot.url`;
};

function PortfolioCard({ project, labels, categoryLabel }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const previewImageUrl = useMemo(() => {
    if (project.previewImage) {
      return project.previewImage;
    }

    return buildPreviewUrl(project.url);
  }, [project.url, project.previewImage]);
  const isBusy = !isLoaded && !hasError;

  const handleLoad = () => setIsLoaded(true);
  const handleError = () => {
    setIsLoaded(true);
    setHasError(true);
  };

  return (
    <div
      className={`rainbow-card portfolio o7-portfolio-card ${
        isLoaded ? "is-loaded" : "is-loading"
      } ${hasError ? "has-error" : ""}`}
    >
      <div className="inner">
        <div className="thumbnail">
          <figure
            className="card-image o7-portfolio-preview"
            aria-busy={isBusy}
          >
            <a
              href={project.url}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`${labels.viewProject}: ${project.title}`}
            >
              <img
                src={previewImageUrl}
                alt={project.alt || project.title}
                loading="lazy"
                decoding="async"
                onLoad={handleLoad}
                onError={handleError}
              />
            </a>
            {isBusy && (
              <span className="o7-portfolio-placeholder" role="status">
                {labels.loading}
              </span>
            )}
            {hasError && (
              <span className="o7-portfolio-error" role="status">
                {labels.previewUnavailable}
              </span>
            )}
          </figure>
        </div>
        <div className="content">
          <span className="subtitle b2">{categoryLabel}</span>
          <h3 className="title mb--10">{project.title}</h3>
          <a
            className="btn-default btn-small"
            href={project.url}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={`${labels.viewProject}: ${project.title}`}
          >
            {labels.viewProject}
          </a>
          {project.isPageOneGoogle && project.primaryKeywords?.length > 0 && (
            <div className="o7-portfolio-seo-proof">
              <p className="o7-portfolio-seo-title">{labels.pageOneGoogle}</p>
              <p className="o7-portfolio-seo-keywords">
                {project.primaryKeywords.join(" • ")}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function PortfolioPreviewGrid({ projects, copy }) {
  const { labels, categories } = copy;

  return (
    <div className="row row--30 o7-portfolio-grid">
      {projects.map((project, index) => {
        const categoryLabel =
          categories?.[project.category] || project.category;

        return (
          <div
            key={project.id}
            className="col-lg-4 col-md-6 col-12 o7-portfolio-col"
            data-sal="slide-up"
            data-sal-duration={600}
            data-sal-delay={index * 50}
          >
            <PortfolioCard
              project={project}
              labels={labels}
              categoryLabel={categoryLabel}
            />
          </div>
        );
      })}
    </div>
  );
}
