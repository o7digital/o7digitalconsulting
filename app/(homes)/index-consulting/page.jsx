import Footer3 from "@/components/footers/Footer3";
import Header2 from "@/components/headers/Header2";
import Topbar2 from "@/components/headers/Topbar2";
import About from "@/components/homes/index-consulting/About";
import Cta from "@/components/homes/index-consulting/Cta";
import Facts from "@/components/homes/index-consulting/Facts";
import Hero from "@/components/homes/index-consulting/Hero";
import Services from "@/components/homes/index-consulting/Services";
import Team from "@/components/homes/index-consulting/Team";
import React from "react";

export const metadata = {
  title:
    "Home Consulting || Doob Business and Consulting React Nextjs Bootstrap5 Template",
  description: "Doob Business and Consulting React Nextjs Bootstrap5 Template",
};
export default function page() {
  return (
    <>
      <Topbar2 />
      <Header2
        btnClass="btn-default btn-small "
        parentClass="rainbow-header header-default header-left-align header-transparent header-sticky"
      />
      <div>
        <div className="rainbow-gradient-circle" />
        <div className="rainbow-gradient-circle theme-pink" />
      </div>
      <div className="rbt-separator-mid">
        <div className="container">
          <hr className="rbt-separator m-0" />
        </div>
      </div>
      <Hero />
      <About />
      <Facts />
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
      <Team />
      <Cta />
      <Footer3 />
    </>
  );
}
