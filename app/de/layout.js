import RootDocument from "../RootDocument";

export { metadata, viewport } from "../RootDocument";

export default function GermanRootLayout({ children }) {
  return <RootDocument language="de">{children}</RootDocument>;
}
