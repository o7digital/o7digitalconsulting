import Header3 from "@/components/headers/Header3";
import Topbar from "@/components/headers/Topbar";
import Banner from "@/components/homes/index-business-consulting/Banner";
import Hero from "@/components/homes/index-business-consulting/Hero";
import Portfolio from "@/components/homes/index-business-consulting/Portfolio";
import Process from "@/components/homes/index-business-consulting/Process";
import Services from "@/components/common/Services";
import React from "react";

import Blogs from "@/components/common/Blogs";
import Cta from "@/components/homes/index-business-consulting-2/Cta";

import Copywrite from "@/components/footers/Copywrite";

import Footer4 from "@/components/footers/Footer4";
import Testimonials from "@/components/homes/index-business-consulting-2/Testimonials";

export const metadata = {
  title:
    "Home Business Consulting || Doob Business and Consulting React Nextjs Bootstrap5 Template",
  description: "Doob Business and Consulting React Nextjs Bootstrap5 Template",
};
export default function page() {
  return (
    <>
      <Topbar />
      <Header3 />
      <div>
        <div className="rainbow-gradient-circle" />
        <div className="rainbow-gradient-circle theme-pink" />
      </div>
      <Hero />
      <Services />
      <div className="rbt-separator-mid">
        <div className="container">
          <hr className="rbt-separator m-0" />
        </div>
      </div>
      <Portfolio />
      <div className="rbt-separator-mid">
        <div className="container">
          <hr className="rbt-separator m-0" />
        </div>
      </div>
      <Process />
      <div className="rbt-separator-mid">
        <div className="container">
          <hr className="rbt-separator m-0" />
        </div>
      </div>
      <Banner />
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
      <Blogs />
      <div className="rbt-separator-mid">
        <div className="container">
          <hr className="rbt-separator m-0" />
        </div>
      </div>
      <Cta />
      <div className="rbt-separator-mid">
        <div className="container">
          <hr className="rbt-separator m-0" />
        </div>
      </div>
      <div className="rainbow-section-gapBottom"></div>
      <Footer4 />
      <Copywrite />
    </>
  );
}
