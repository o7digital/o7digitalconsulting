import Footer2 from "@/components/footers/Footer2";
import Header2 from "@/components/headers/Header2";
import About from "@/components/homes/index-application/About";
import Brands from "@/components/homes/index-application/Brands";
import CaseStudies from "@/components/homes/index-application/CaseStudies";
import Cta from "@/components/homes/index-application/Cta";
import FeaturesTab from "@/components/homes/index-application/FeaturesTab";
import Hero from "@/components/homes/index-application/Hero";
import Pricing from "@/components/common/Pricing";
import Services from "@/components/homes/index-application/Services";
import Testimonials from "@/components/common/Testimonials";
import React from "react";

export const metadata = {
  title:
    "Home Application || Doob Business and Consulting React Nextjs Bootstrap5 Template",
  description: "Doob Business and Consulting React Nextjs Bootstrap5 Template",
};
export default function page() {
  return (
    <>
      <Header2 />
      <div>
        <div className="rainbow-gradient-circle" />
        <div className="rainbow-gradient-circle theme-pink" />
      </div>
      <Hero />
      <div className="rbt-separator-mid">
        <div className="container">
          <hr className="rbt-separator m-0" />
        </div>
      </div>
      <Brands />
      <CaseStudies />
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
      <Services />
      <div className="rbt-separator-mid">
        <div className="container">
          <hr className="rbt-separator m-0" />
        </div>
      </div>
      <FeaturesTab />
      <div className="rbt-separator-mid">
        <div className="container">
          <hr className="rbt-separator m-0" />
        </div>
      </div>
      <Testimonials />
      <div className="rbt-separator-mid">
        <div className="container">
          <hr className="rbt-separator m-0" />
        </div>
      </div>
      <Pricing />
      <Cta />
      <Footer2 />
    </>
  );
}
