import About from "@/components/common/About";
import Blogs from "@/components/common/Blogs";
import Testimonials from "@/components/common/Testimonials";
import Footer3 from "@/components/footers/Footer3";
import Header2 from "@/components/headers/Header2";
import Topbar from "@/components/headers/Topbar";
import Cta from "@/components/homes/index-finance/Cta";
import Facts from "@/components/homes/index-finance/Facts";
import Hero from "@/components/homes/index-finance/Hero";
import Services from "@/components/homes/index-finance/Services";
import React from "react";

export const metadata = {
  title:
    "Home Finance || Doob Business and Consulting React Nextjs Bootstrap5 Template",
  description: "Doob Business and Consulting React Nextjs Bootstrap5 Template",
};
export default function page() {
  return (
    <>
      <Topbar />
      <Header2 btnClass="btn-default btn-small " />
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
