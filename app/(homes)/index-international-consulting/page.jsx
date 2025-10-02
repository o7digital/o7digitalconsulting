import Blogs from "@/components/common/Blogs";
import Footer3 from "@/components/footers/Footer3";
import Header2 from "@/components/headers/Header2";
import About from "@/components/homes/index-international-consulting/About";
import Facts from "@/components/homes/index-international-consulting/Facts";
import Hero from "@/components/homes/index-international-consulting/Hero";
import Portfolio from "@/components/homes/index-international-consulting/Portfolio";
import Pricing from "@/components/common/Pricing3";
import Service from "@/components/homes/index-international-consulting/Service";
import React from "react";

export const metadata = {
  title:
    "Home International Consulting || Doob Business and Consulting React Nextjs Bootstrap5 Template",
  description: "Doob Business and Consulting React Nextjs Bootstrap5 Template",
};
export default function page() {
  return (
    <>
      <Header2
        btnClass="btn-default btn-small "
        parentClass="rainbow-header header-default header-left-align header-transparent header-sticky"
      />
      <div>
        <div className="rainbow-gradient-circle"></div>
        <div className="rainbow-gradient-circle theme-pink"></div>
      </div>
      <Hero />
      <Service />
      <About />
      <Facts />
      <Portfolio />
      <div className="rbt-separator-mid">
        <div className="container">
          <hr className="rbt-separator m-0" />
        </div>
      </div>
      <Pricing />
      <div className="rbt-separator-mid">
        <div className="container">
          <hr className="rbt-separator m-0" />
        </div>
      </div>
      <Blogs />
      <Footer3 />
    </>
  );
}
