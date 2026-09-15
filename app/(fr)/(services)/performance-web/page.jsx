import SeoLandingPage from "@/components/o7/seo/SeoLandingPage";
import { servicePages } from "@/data/seoPages";

const page = servicePages["performance-web"];

export const metadata = {
  title: page.metaTitle,
  description: page.description,
  alternates: { canonical: "https://www.o7digital.com/performance-web" },
};

export default function Page() {
  return <SeoLandingPage page={page} />;
}
