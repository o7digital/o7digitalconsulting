import RootDocument from "../RootDocument";

export { metadata, viewport } from "../RootDocument";

export default function ItalianRootLayout({ children }) {
  return <RootDocument language="it">{children}</RootDocument>;
}
