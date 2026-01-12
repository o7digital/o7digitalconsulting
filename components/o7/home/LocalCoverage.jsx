import React from "react";
import { o7LocalCoverage } from "@/data/o7";

export default function LocalCoverage({ data = o7LocalCoverage }) {
  if (!data) return null;

  return (
    <div className="rainbow-section-gap">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            {data.intro && <p className="description b1">{data.intro}</p>}
            {data.paragraphs?.map((text, index) => (
              <p key={index} className="b1 mt--15 mb--0">
                {text}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
