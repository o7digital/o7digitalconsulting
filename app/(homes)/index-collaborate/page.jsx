import Copywrite from "@/components/footers/Copywrite";
import Header2 from "@/components/headers/Header2";
import Collaborators from "@/components/homes/index-collaborate/Collaborators";
import Cta from "@/components/homes/index-collaborate/Cta";
import Features from "@/components/homes/index-collaborate/Features";
import Hero from "@/components/homes/index-collaborate/Hero";
import Services from "@/components/homes/index-collaborate/Services";
import Steps from "@/components/homes/index-collaborate/Steps";
import React from "react";

export const metadata = {
  title:
    "Home Collaborate || Doob Business and Consulting React Nextjs Bootstrap5 Template",
  description: "Doob Business and Consulting React Nextjs Bootstrap5 Template",
};
export default function page() {
  return (
    <>
      <Header2 />
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
      <div className="rbt-separator-mid">
        <div className="container">
          <hr className="rbt-separator m-0" />
        </div>
      </div>
      <Features />
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
      <Collaborators />
      <Steps />
      <Cta />
      <Copywrite />
    </>
  );
}
