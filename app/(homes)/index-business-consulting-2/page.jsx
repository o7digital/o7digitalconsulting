import Footer3 from "@/components/footers/Footer3";
import Header2 from "@/components/headers/Header2";
import Topbar from "@/components/headers/Topbar";
import About from "@/components/homes/index-business-consulting-2/About";
import Blogs from "@/components/homes/index-business-consulting-2/Blogs";
import Cta from "@/components/homes/index-business-consulting-2/Cta";
import Faq from "@/components/homes/index-business-consulting-2/Faq";
import Hero from "@/components/homes/index-business-consulting-2/Hero";
import Service from "@/components/homes/index-business-consulting-2/Service";
import Team from "@/components/homes/index-business-consulting-2/Team";
import Testimonials from "@/components/homes/index-business-consulting-2/Testimonials";
import React from "react";

export const metadata = {
  title:
    "Home Business Consultion 2 || Doob Business and Consulting React Nextjs Bootstrap5 Template",
  description: "Doob Business and Consulting React Nextjs Bootstrap5 Template",
};
export default function page() {
  return (
    <>
      <Topbar />
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
      <About />
      <div className="rbt-separator-mid">
        <div className="container">
          <hr className="rbt-separator m-0" />
        </div>
      </div>
      <Service />
      <Cta />
      <Team />
      <div className="rbt-separator-mid">
        <div className="container">
          <hr className="rbt-separator m-0" />
        </div>
      </div>
      <Faq />
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
