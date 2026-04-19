import Footer3 from "@/components/footers/Footer3";
import Header2 from "@/components/headers/Header2";
import Topbar from "@/components/headers/Topbar";
import BlogListView from "@/components/homes/index-magazine/BlogListView";
import Blogs from "@/components/homes/index-magazine/Blogs";
import Elements from "@/components/homes/index-magazine/Elements";
import React from "react";

export const metadata = {
  title:
    "Home Magazine || Showcase page for O7 Digital Consulting website templates and components",
  description: "Showcase page for O7 Digital Consulting website templates and components",
};
export default function page() {
  return (
    <>
      <Topbar />
      <Header2 />
      <div>
        <div className="rainbow-gradient-circle" />
        <div className="rainbow-gradient-circle theme-pink" />
      </div>
      <Elements />
      <Blogs />
      <BlogListView />
      <Footer3 />
    </>
  );
}
