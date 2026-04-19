import BlogGridSidebar from "@/components/blog/BlogGridSidebar";
import Breadcumb from "@/components/blog/Breadcumb";
import Footer3 from "@/components/footers/Footer3";
import Header4 from "@/components/headers/Header4";
import Topbar from "@/components/headers/Topbar";
import React from "react";

export const metadata = {
  title:
    "Blog Grid Sidebar || Showcase page for O7 Digital Consulting website templates and components",
  description: "Showcase page for O7 Digital Consulting website templates and components",
};
export default function page() {
  return (
    <>
      <Topbar />
      <Header4 />
      <Breadcumb />
      <div>
        <div className="rainbow-gradient-circle" />
        <div className="rainbow-gradient-circle theme-pink" />
      </div>
      <div className="main-content">
        <BlogGridSidebar />
      </div>
      <Footer3 />
    </>
  );
}
