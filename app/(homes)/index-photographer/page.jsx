import Footer1 from "@/components/footers/Footer1";
import Header4 from "@/components/headers/Header4";
import Hero from "@/components/homes/index-photographer/Hero";
import Portfolio from "@/components/homes/index-photographer/Portfolio";
import React from "react";

export const metadata = {
  title:
    "Home Photographer || Showcase page for O7 Digital Consulting website templates and components",
  description: "Showcase page for O7 Digital Consulting website templates and components",
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
