import Footer3 from "@/components/footers/Footer3";
import Header4 from "@/components/headers/Header4";
import Topbar from "@/components/headers/Topbar";
import Portfolio1 from "@/components/portfolio/Portfolio1";
import React from "react";

export const metadata = {
  title:
    "Portfolio Grid Layout || Showcase page for O7 Digital Consulting website templates and components",
  description: "Showcase page for O7 Digital Consulting website templates and components",
  robots: { index: false, follow: true },
};
export default function page() {
  return (
    <>
      <Topbar />
      <Header4 />
      <div>
        <div className="rainbow-gradient-circle" />
        <div className="rainbow-gradient-circle theme-pink" />
      </div>
      <Portfolio1 />
      <Footer3 />
    </>
  );
}
