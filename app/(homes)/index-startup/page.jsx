import Blogs from "@/components/common/Blogs";
import Footer3 from "@/components/footers/Footer3";
import Header4 from "@/components/headers/Header4";
import Hero from "@/components/homes/index-startup/Hero";
import Portfolio from "@/components/homes/index-startup/Portfolio";
import Progress from "@/components/homes/index-startup/Progress";
import Services from "@/components/homes/index-startup/Services";
import Timeline from "@/components/homes/index-startup/Timeline";
import React from "react";

export const metadata = {
  title:
    "Home Startup || Doob Business and Consulting React Nextjs Bootstrap5 Template",
  description: "Doob Business and Consulting React Nextjs Bootstrap5 Template",
};
export default function page() {
  return (
    <>
      <Header4 parentClass="rainbow-header header-default header-transparent header-sticky" />
      <div>
        <div className="rainbow-gradient-circle" />
        <div className="rainbow-gradient-circle theme-pink" />
      </div>
      <Hero />
      <Progress />
      <div className="rbt-separator-mid">
        <div className="container">
          <hr className="rbt-separator m-0" />
        </div>
      </div>
      <Timeline />
      <div className="rbt-separator-mid">
        <div className="container">
          <hr className="rbt-separator m-0" />
        </div>
      </div>
      <Portfolio />
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
      <Blogs />
      <Footer3 />
    </>
  );
}
