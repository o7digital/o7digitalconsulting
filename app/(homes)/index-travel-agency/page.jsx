import Header2 from "@/components/headers/Header2";
import Header3 from "@/components/headers/Header3";
import Topbar from "@/components/headers/Topbar";
import Services from "@/components/common/Services";
import Hero from "@/components/homes/index-travel-agency/Hero";
import React from "react";
import About from "@/components/homes/index-travel-agency/About";
import Gallery from "@/components/homes/index-travel-agency/Gallery";
import Testimonials from "@/components/homes/index-travel-agency/Testimonials";
import Blogs from "@/components/common/Blogs";
import Footer3 from "@/components/footers/Footer3";

export const metadata = {
  title:
    "Home Travel Agency || Doob Business and Consulting React Nextjs Bootstrap5 Template",
  description: "Doob Business and Consulting React Nextjs Bootstrap5 Template",
};
export default function page() {
  return (
    <>
      <Topbar />
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
      <Services />
      <div className="rbt-separator-mid">
        <div className="container">
          <hr className="rbt-separator m-0" />
        </div>
      </div>
      <About />
      <Gallery />
      <div className="rbt-separator-mid">
        <div className="container">
          <hr className="rbt-separator m-0" />
        </div>
      </div>
      <Testimonials />
      <Blogs />
      <Footer3 />
    </>
  );
}
