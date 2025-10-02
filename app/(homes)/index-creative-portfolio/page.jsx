import Copywrite from "@/components/footers/Copywrite";
import Header4 from "@/components/headers/Header4";
import Topbar2 from "@/components/headers/Topbar2";
import Brands from "@/components/homes/index-creative-portfolio/Brands";
import Hero from "@/components/homes/index-creative-portfolio/Hero";
import Portfolio from "@/components/homes/index-creative-portfolio/Portfolio";
import React from "react";

export const metadata = {
  title:
    "Home Creative Portfolio || Doob Business and Consulting React Nextjs Bootstrap5 Template",
  description: "Doob Business and Consulting React Nextjs Bootstrap5 Template",
};
export default function page() {
  return (
    <>
      <Topbar2 />
      <Header4 />
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
      <div className="rbt-separator-mid">
        <div className="container">
          <hr className="rbt-separator m-0" />
        </div>
      </div>
      <Portfolio />
      <Brands />
      <Copywrite />
    </>
  );
}
