import SeoLandingPage from "@/components/o7/seo/SeoLandingPage";
import { marketPages } from "@/data/seoPages";

const page = marketPages.france;

export const metadata = {
  title: page.metaTitle,
  description: page.description,
  alternates: { canonical: "https://www.o7digital.com/france" },
};

export default function Page() {
  return <SeoLandingPage page={page} relatedTitle="Services en France" />;
}
