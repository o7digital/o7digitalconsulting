import Footer3 from "@/components/footers/Footer3";
import Header4 from "@/components/headers/Header4";
import Topbar from "@/components/headers/Topbar";
import Brands from "@/components/homes/index-company/Brands";

import Cta from "@/components/homes/index-company/Cta";
import Features from "@/components/homes/index-company/Features";
import Hero from "@/components/homes/index-company/Hero";
import Portfolio from "@/components/homes/index-company/Portfolio";
import Services from "@/components/homes/index-company/Services";
import Team from "@/components/homes/index-company/Team";
import React from "react";

export const metadata = {
  title:
    "Home Company || Doob Business and Consulting React Nextjs Bootstrap5 Template",
  description: "Doob Business and Consulting React Nextjs Bootstrap5 Template",
};
export default function page() {
  return (
    <>
      <Topbar />
      <Header4 />
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
      <Services />
      <Features />
      <Portfolio />
      <div className="rbt-separator-mid">
        <div className="container">
          <hr className="rbt-separator m-0" />
        </div>
      </div>
      <Team />
      <Brands />
      <Footer3 />
    </>
  );
}
