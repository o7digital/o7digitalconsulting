import RootDocument from "../RootDocument";

export { metadata, viewport } from "../RootDocument";

export default function SpanishRootLayout({ children }) {
  return <RootDocument language="es">{children}</RootDocument>;
}
