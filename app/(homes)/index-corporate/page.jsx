import Header3 from "@/components/headers/Header3";

import Topbar2 from "@/components/headers/Topbar2";

import About from "@/components/common/About";
import Facts from "@/components/homes/index-corporate/Facts";
import Hero from "@/components/homes/index-corporate/Hero";
import Services from "@/components/homes/index-corporate/Services";
import Team from "@/components/homes/index-corporate/Team";
import React from "react";
import Cta from "@/components/homes/index-corporate/Cta";

import Footer4 from "@/components/footers/Footer4";
import Copywrite from "@/components/footers/Copywrite";
import Pricing4 from "@/components/common/Pricing4";

export const metadata = {
  title:
    "Home Corporate || Doob Business and Consulting React Nextjs Bootstrap5 Template",
  description: "Doob Business and Consulting React Nextjs Bootstrap5 Template",
};
export default function page() {
  return (
    <>
      <div className="header-transparent-with-topbar">
        <Topbar2 />
        <Header3 btnClass="btn-default btn-small " />
      </div>
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
      <About />
      <div className="rbt-separator-mid">
        <div className="container">
          <hr className="rbt-separator m-0" />
        </div>
      </div>
      <Facts />
      <div className="rbt-separator-mid">
        <div className="container">
          <hr className="rbt-separator m-0" />
        </div>
      </div>
      <Team />
      <div className="rbt-separator-mid">
        <div className="container">
          <hr className="rbt-separator m-0" />
        </div>
      </div>
      <Pricing4 />
      <Cta />
      <Footer4 />
      <Copywrite />
    </>
  );
}
