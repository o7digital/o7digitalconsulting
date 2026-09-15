import SeoLandingPage from "@/components/o7/seo/SeoLandingPage";
import { marketPages } from "@/data/seoPages";

const page = marketPages.canada;

export const metadata = {
  title: page.metaTitle,
  description: page.description,
  alternates: { canonical: "https://www.o7digital.com/canada" },
};

export default function Page() {
  return <SeoLandingPage page={page} relatedTitle="Services au Canada" />;
}
