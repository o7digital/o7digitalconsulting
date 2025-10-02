import Footer1 from "@/components/footers/Footer1";
import Header4 from "@/components/headers/Header4";
import Hero from "@/components/homes/index-photographer/Hero";
import Portfolio from "@/components/homes/index-photographer/Portfolio";
import React from "react";

export const metadata = {
  title:
    "Home Photographer || Doob Business and Consulting React Nextjs Bootstrap5 Template",
  description: "Doob Business and Consulting React Nextjs Bootstrap5 Template",
};
export default function page() {
  return (
    <>
      <Header4 parentClass="rainbow-header header-default header-not-transparent header-sticky" />

      <div>
        <div className="rainbow-gradient-circle" />
        <div className="rainbow-gradient-circle theme-pink" />
      </div>
      <Hero />
      <Portfolio />
      <Footer1 />
    </>
  );
}
