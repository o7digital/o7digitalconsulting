import SeoLandingPage from "@/components/o7/seo/SeoLandingPage";
import { servicePages } from "@/data/seoPages";

const page = servicePages["developpement-web"];

export const metadata = {
  title: page.metaTitle,
  description: page.description,
  alternates: { canonical: "https://www.o7digital.com/developpement-web" },
};

export default function Page() {
  return <SeoLandingPage page={page} />;
}
