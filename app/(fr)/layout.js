import RootDocument from "../RootDocument";

export { metadata, viewport } from "../RootDocument";

export default function FrenchRootLayout({ children }) {
  return <RootDocument language="fr">{children}</RootDocument>;
}
