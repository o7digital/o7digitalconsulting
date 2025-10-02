import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import Cta from "@/components/homes/home-landing/Cta";
import Features from "@/components/homes/home-landing/Features";
import Hero from "@/components/homes/home-landing/Hero";
import PopulerFeatures from "@/components/homes/home-landing/PopulerFeatures";
import TemplateSlider from "@/components/homes/home-landing/TemplateSlider";
import Testimonials from "@/components/homes/home-landing/Testimonials";

export const metadata = {
  title:
    "Home Langing || Doob Business and Consulting React Nextjs Bootstrap5 Template",
  description: "Doob Business and Consulting React Nextjs Bootstrap5 Template",
};
export default function Home() {
  return (
    <>
      <Header1 />

      <div>
        <div className="rainbow-gradient-circle" />
        <div className="rainbow-gradient-circle theme-pink" />
      </div>
      <Hero />
      <Features />
      <TemplateSlider />
      <PopulerFeatures />
      <Testimonials />
      <Cta />
      <Footer1 />
    </>
  );
}
