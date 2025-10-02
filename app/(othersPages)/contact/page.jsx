import Footer3 from "@/components/footers/Footer3";
import Header4 from "@/components/headers/Header4";
import Topbar from "@/components/headers/Topbar";
import Contact from "@/components/othersPages/Contact";
import BreadCumb from "@/components/portfolio/BreadCumb";

export const metadata = {
  title:
    "Contact || Doob Business and Consulting React Nextjs Bootstrap5 Template",
  description: "Doob Business and Consulting React Nextjs Bootstrap5 Template",
};
export default function page() {
  return (
    <>
      <Topbar />
      <Header4 />
      <BreadCumb />
      <div>
        <div className="rainbow-gradient-circle" />
        <div className="rainbow-gradient-circle theme-pink" />
      </div>
      <Contact />
      <Footer3 />
    </>
  );
}
