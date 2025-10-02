import Blogs from "@/components/common/Blogs";
import Footer3 from "@/components/footers/Footer3";
import Header3 from "@/components/headers/Header3";
import About from "@/components/homes/index-personal-portfolio/About";
import Brands from "@/components/homes/index-personal-portfolio/Brands";
import Hero from "@/components/homes/index-personal-portfolio/Hero";
import Portfolio from "@/components/homes/index-personal-portfolio/Portfolio";
import Skills from "@/components/homes/index-personal-portfolio/Skills";
import Testimonials from "@/components/homes/index-personal-portfolio/Testimonials";
import React from "react";

export const metadata = {
  title:
    "Home Personal Poerfolio || Doob Business and Consulting React Nextjs Bootstrap5 Template",
  description: "Doob Business and Consulting React Nextjs Bootstrap5 Template",
};
export default function page() {
  return (
    <>
      <Header3 />
      <div>
        <div className="rainbow-gradient-circle" />
        <div className="rainbow-gradient-circle theme-pink" />
      </div>
      <Hero />
      <About />
      <Brands />
      <Portfolio />
      <div className="rbt-separator-mid">
        <div className="container">
          <hr className="rbt-separator m-0" />
        </div>
      </div>
      <Skills />
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
      <Footer3 />
    </>
  );
}
