import BlogGrid from "@/components/blog/BlogGrid";
import Breadcumb from "@/components/blog/Breadcumb";
import Breadcumb2 from "@/components/blog/Breadcumb2";
import Footer3 from "@/components/footers/Footer3";
import Header4 from "@/components/headers/Header4";
import Topbar from "@/components/headers/Topbar";
import { blogPosts } from "@/data/blogs";
import React from "react";

export const metadata = {
  title:
    "Blog Category || Showcase page for O7 Digital Consulting website templates and components",
  description: "Showcase page for O7 Digital Consulting website templates and components",
};
export default function page({ params }) {
  const items = blogPosts.filter((elm) =>
    elm.categories.includes(params.category.replace("%20", " "))
  );

  return (
    <>
      <Topbar />
      <Header4 />
      <Breadcumb2
        title="Blog Category List"
        type={params.category.replace("%20", " ")}
      />
      <div>
        <div className="rainbow-gradient-circle" />
        <div className="rainbow-gradient-circle theme-pink" />
      </div>
      <div className="main-content">
        <BlogGrid items={items} />
      </div>
      <Footer3 />
    </>
  );
}
