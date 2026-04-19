import Pricing3 from "@/components/common/Pricing3";
import Footer3 from "@/components/footers/Footer3";
import Header4 from "@/components/headers/Header4";
import About from "@/components/homes/index-web-agency/About";
import Brands from "@/components/homes/index-web-agency/Brands";
import Facts from "@/components/homes/index-web-agency/Facts";
import Features from "@/components/homes/index-web-agency/Features";
import Hero from "@/components/homes/index-web-agency/Hero";
import Service from "@/components/homes/index-web-agency/Service";
import React from "react";

export const metadata = {
  title:
    "Home Web Agency || Showcase page for O7 Digital Consulting website templates and components",
  description: "Showcase page for O7 Digital Consulting website templates and components",
};
export default function page() {
  return (
    <>
      <Header4 />
      <div>
        <div className="rainbow-gradient-circle" />
        <div className="rainbow-gradient-circle theme-pink" />
      </div>
      <Hero />
      <Facts />
      <div className="rbt-separator-mid">
        <div className="container">
          <hr className="rbt-separator m-0" />
        </div>
      </div>
      <Service />
      <Features />
      <About />
      <Pricing3 />
      <Brands />
      <Footer3 />
    </>
  );
}
