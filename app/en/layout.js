import RootDocument from "../RootDocument";

export { metadata, viewport } from "../RootDocument";

export default function EnglishRootLayout({ children }) {
  return <RootDocument language="en">{children}</RootDocument>;
}
