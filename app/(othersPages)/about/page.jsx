import Footer3 from "@/components/footers/Footer3";
import Header4 from "@/components/headers/Header4";
import Topbar from "@/components/headers/Topbar";
import About from "@/components/homes/index-consulting/About";
import Facts from "@/components/homes/index-consulting/Facts";
import Service2 from "@/components/homes/index-web-agency/Service";
import Brands from "@/components/othersPages/about/Brands";
import Hero from "@/components/othersPages/about/Hero";
import Service from "@/components/othersPages/about/Service";
import Team from "@/components/othersPages/about/Team";
import Timeline from "@/components/othersPages/about/Timeline";
import React from "react";

export const metadata = {
  title:
    "About || Doob Business and Consulting React Nextjs Bootstrap5 Template",
  description: "Doob Business and Consulting React Nextjs Bootstrap5 Template",
};
export default function page() {
  return (
    <>
      <Topbar />
      <Header4 parentClass="rainbow-header header-default header-transparent header-sticky" />
      <div>
        <div className="rainbow-gradient-circle" />
        <div className="rainbow-gradient-circle theme-pink" />
      </div>

      <Hero />
      <Service2 />
      <Brands />
      <div className="rbt-separator-mid">
        <div className="container">
          <hr className="rbt-separator m-0" />
        </div>
      </div>
      <Service />
      <Timeline />
      <div className="rbt-separator-mid">
        <div className="container">
          <hr className="rbt-separator m-0" />
        </div>
      </div>
      <About />
      <Facts />
      <div className="rbt-separator-mid">
        <div className="container">
          <hr className="rbt-separator m-0" />
        </div>
      </div>
      <Team />
      <Footer3 />
    </>
  );
}
