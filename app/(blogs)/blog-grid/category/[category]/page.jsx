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
    "Blog Category || Doob Business and Consulting React Nextjs Bootstrap5 Template",
  description: "Doob Business and Consulting React Nextjs Bootstrap5 Template",
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
