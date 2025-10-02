import Blogs from "@/components/common/Blogs";
import Pricing from "@/components/common/Pricing";
import Footer3 from "@/components/footers/Footer3";
import Header4 from "@/components/headers/Header4";
import Topbar from "@/components/headers/Topbar";
import About from "@/components/homes/index-event-conference/About";
import Brands from "@/components/homes/index-event-conference/Brands";
import Facts from "@/components/homes/index-event-conference/Facts";
import Hero from "@/components/homes/index-event-conference/Hero";
import Services from "@/components/homes/index-event-conference/Services";
import Team from "@/components/homes/index-event-conference/Team";
import React from "react";

export const metadata = {
  title:
    "Home Event Conference || Doob Business and Consulting React Nextjs Bootstrap5 Template",
  description: "Doob Business and Consulting React Nextjs Bootstrap5 Template",
};
export default function page() {
  return (
    <>
      <Topbar />
      <Header4 btnClass="btn-default btn-small " />
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
      <Facts />
      <Brands />
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
