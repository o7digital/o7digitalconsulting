import BlogListSidebar from "@/components/blog/BlogListSidebar";
import Breadcumb from "@/components/blog/Breadcumb";
import Footer3 from "@/components/footers/Footer3";
import Header4 from "@/components/headers/Header4";
import Topbar from "@/components/headers/Topbar";
import React from "react";

export const metadata = {
  title:
    "Blog List Sidebar || Doob Business and Consulting React Nextjs Bootstrap5 Template",
  description: "Doob Business and Consulting React Nextjs Bootstrap5 Template",
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
        <BlogListSidebar />
      </div>
      <Footer3 />
    </>
  );
}
