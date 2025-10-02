import About from "@/components/common/About";
import Pricing5 from "@/components/common/Pricing5";
import Footer3 from "@/components/footers/Footer3";
import Header3 from "@/components/headers/Header3";
import Topbar from "@/components/headers/Topbar";
import Brands from "@/components/homes/index-seo-agency/Brands";
import Cta from "@/components/homes/index-seo-agency/Cta";
import Hero from "@/components/homes/index-seo-agency/Hero";

import Timeline from "@/components/homes/index-seo-agency/Timeline";
import React from "react";

export const metadata = {
  title:
    "Home Seo Agency || Doob Business and Consulting React Nextjs Bootstrap5 Template",
  description: "Doob Business and Consulting React Nextjs Bootstrap5 Template",
};
export default function page() {
  return (
    <>
      <Topbar />
      <Header3 btnClass="btn-default btn-small " />
      <div>
        <div className="rainbow-gradient-circle" />
        <div className="rainbow-gradient-circle theme-pink" />
      </div>
      <Hero />
      <Cta />
      <div className="rbt-separator-mid">
        <div className="container">
          <hr className="rbt-separator m-0" />
        </div>
      </div>
      <Timeline />
      <div className="rbt-separator-mid">
        <div className="container">
          <hr className="rbt-separator m-0" />
        </div>
      </div>
      <About />
      <div className="rbt-separator-mid">
        <div className="container">
          <hr className="rbt-separator m-0" />
        </div>
      </div>
      <Pricing5 />
      <div className="rbt-separator-mid">
        <div className="container">
          <hr className="rbt-separator m-0" />
        </div>
      </div>
      <Brands />
      <Footer3 />
    </>
  );
}
