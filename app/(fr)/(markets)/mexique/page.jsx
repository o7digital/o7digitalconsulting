import SeoLandingPage from "@/components/o7/seo/SeoLandingPage";
import { marketPages } from "@/data/seoPages";

const page = marketPages.mexique;

export const metadata = {
  title: page.metaTitle,
  description: page.description,
  alternates: { canonical: "https://www.o7digital.com/mexique" },
};

export default function Page() {
  return <SeoLandingPage page={page} relatedTitle="Servicios en Mexico" />;
}
