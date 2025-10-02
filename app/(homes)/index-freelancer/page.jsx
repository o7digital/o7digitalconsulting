import Copywrite2 from "@/components/footers/Copywrite2";
import Header2 from "@/components/headers/Header2";
import About from "@/components/homes/index-freelancer/About";
import Brands from "@/components/homes/index-freelancer/Brands";
import Contact from "@/components/homes/index-freelancer/Contact";
import Hero from "@/components/homes/index-freelancer/Hero";
import Pricing from "@/components/homes/index-freelancer/Pricing";
import Service from "@/components/homes/index-freelancer/Service";
import Testimonials from "@/components/homes/index-freelancer/Testimonials";
import Timeline from "@/components/homes/index-freelancer/Timeline";
import React from "react";

export const metadata = {
  title:
    "Home Freelancer || Doob Business and Consulting React Nextjs Bootstrap5 Template",
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
      <Timeline />
      <Service />
      <Pricing />
      <Brands />
      <Testimonials />
      <Contact />
      <Copywrite2 />
    </>
  );
}
