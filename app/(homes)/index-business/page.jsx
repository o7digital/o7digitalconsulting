import Pricing2 from "@/components/common/Pricing2";
import Footer1 from "@/components/footers/Footer1";
import Header4 from "@/components/headers/Header4";
import Topbar from "@/components/headers/Topbar";
import About from "@/components/homes/index-business/About";
import Blogs from "@/components/common/Blogs";
import Faq from "@/components/homes/index-business/Faq";
import Hero from "@/components/homes/index-business/Hero";
import Timeline from "@/components/homes/index-business/Timeline";
import React from "react";

export const metadata = {
  title:
    "Home Business || Doob Business and Consulting React Nextjs Bootstrap5 Template",
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
      <Timeline />
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
      <Pricing2 />
      <div className="rbt-separator-mid">
        <div className="container">
          <hr className="rbt-separator m-0" />
        </div>
      </div>
      <Blogs />
      <Footer1 />
    </>
  );
}
