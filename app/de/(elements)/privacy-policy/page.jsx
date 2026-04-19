import React from "react";
import Header2 from "@/components/headers/Header2";
import Footer2 from "@/components/footers/Footer2";

export const metadata = {
  title: "Impressum & Datenschutzerklärung – O7 Digital",
  description:
    "Impressum, Anbieter-Informationen, Hosting und Datenschutzrichtlinie von O7 Digital Consulting.",
  alternates: {
    canonical: 'https://www.o7digital-consulting.com/de/privacy-policy',
    languages: {
      'fr': 'https://www.o7digital-consulting.com/privacy-policy',
      'en': 'https://www.o7digital-consulting.com/en/privacy-policy',
      'es': 'https://www.o7digital-consulting.com/es/privacy-policy',
      'de': 'https://www.o7digital-consulting.com/de/privacy-policy',
      'it': 'https://www.o7digital-consulting.com/it/privacy-policy',
    },
  },
};

function SectionTitle({ children }) {
  return (
    <h2 className="title w-600 mb--10" style={{ fontSize: "26px" }}>
      {children}
    </h2>
  );
}

function SubTitle({ children }) {
  return (
    <h3 className="title w-600 mb--6" style={{ fontSize: "20px" }}>
      {children}
    </h3>
  );
}

function Paragraph({ children }) {
  return <p className="b1 mb--10">{children}</p>;
}

function BulletList({ items }) {
  return (
    <ul className="list-style--1">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export default function Page() {
  return (
    <>
      <Header2 parentClass="rainbow-header header-default header-left-align header-transparent header-sticky" />
      <div>
        <div className="rainbow-gradient-circle" />
        <div className="rainbow-gradient-circle theme-pink" />
      </div>
      <div className="rainbow-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <h1 className="title w-700 mb--10">
                Impressum &amp; Datenschutzerklärung
              </h1>
              <Paragraph>
                <strong>O7 Digital Consulting</strong>
              </Paragraph>
              <Paragraph>Letzte Aktualisierung: Dezember 2025</Paragraph>

              <div className="mt--30">
                <SectionTitle>1. Impressum</SectionTitle>

                <SubTitle>1.1. Betreiber der Website</SubTitle>
                <Paragraph>
                  <strong>O7 Digital Consulting SASU</strong>
                  <br />
                  Eingetragen im Handelsregister von Paris
                  <br />
                  <strong>SIREN: 899 748 560</strong>
                  <br />
                  <strong>SIRET: 899 748 560 00013</strong>
                </Paragraph>
                <Paragraph>
                  <strong>Anschrift:</strong>
                  <br />
                  10 rue de Penthièvre
                  <br />
                  75008 Paris – Frankreich
                </Paragraph>
                <Paragraph>
                  <strong>Email:</strong>{" "}
                  <a href="mailto:info@o7digital-consulting.com">
                    info@o7digital-consulting.com
                  </a>
                  <br />
                  <strong>Website:</strong>{" "}
                  <a href="http://www.o7digital-consulting.com">
                    www.o7digital-consulting.com
                  </a>
                  <br />
                  Verantwortlich für die Veröffentlichung:{" "}
                  <strong>Olivier Steineur</strong>
                </Paragraph>

                <SubTitle>1.2. Hosting</SubTitle>
                <Paragraph>
                  <strong>GitHub, Inc.</strong>
                  <br />
                  88 Colin P. Kelly Jr. Street
                  <br />
                  San Francisco, CA 94107
                  <br />
                  Vereinigte Staaten
                </Paragraph>
                <Paragraph>
                  Hosting über <strong>GitHub Pages</strong>
                  <br />
                  Website: <a href="https://github.com">https://github.com</a>
                </Paragraph>

                <SubTitle>1.3. Entwicklung</SubTitle>
                <Paragraph>
                  Entwickelt von:
                  <br />
                  <strong>O7 Digital Consulting</strong>
                  <br />
                  10 rue de Penthièvre
                  <br />
                  75008 Paris – Frankreich
                </Paragraph>
              </div>

              <div className="mt--30">
                <SectionTitle>2. Nutzungsbedingungen</SectionTitle>
                <Paragraph>
                  Die Website <strong>www.o7digital-consulting.com</strong> wird
                  „wie besehen“ bereitgestellt. Besucher bestätigen, die
                  erforderlichen technischen Kenntnisse zu besitzen, und nutzen
                  die Seite in Übereinstimmung mit geltendem Recht. O7 Digital
                  Consulting garantiert nicht die vollständige Fehlerfreiheit
                  und übernimmt keine Haftung im Falle von Nichtverfügbarkeit
                  oder Fehlfunktionen.
                </Paragraph>
              </div>

              <div className="mt--30">
                <SectionTitle>3. Geistiges Eigentum</SectionTitle>
                <Paragraph>
                  Alle Inhalte der Website (Texte, Bilder, Logo, Code,
                  grafische Elemente) sind urheberrechtlich geschützt. Jede
                  Vervielfältigung, Darstellung oder Nutzung – ganz oder
                  teilweise – ohne vorherige schriftliche Genehmigung ist
                  strengstens verboten.
                </Paragraph>
              </div>

              <div className="mt--30">
                <SectionTitle>4. Hyperlinks</SectionTitle>
                <Paragraph>
                  Die Website kann Links zu externen Ressourcen enthalten. O7
                  Digital Consulting hat keine Kontrolle über Drittseiten und
                  übernimmt keine Verantwortung für deren Verfügbarkeit,
                  Inhalte oder Sicherheit. Das Setzen von Links zu dieser Seite
                  erfordert eine vorherige schriftliche Genehmigung des
                  Herausgebers.
                </Paragraph>
              </div>

              <div className="mt--30">
                <SectionTitle>5. Cookies</SectionTitle>
                <Paragraph>
                  Die Website kann technische oder statistische Cookies
                  verwenden. Nutzer können Cookies über ihre Browsereinstellungen
                  ablehnen; dies kann bestimmte Funktionen beeinträchtigen.
                </Paragraph>
              </div>

              <div className="mt--30">
                <SectionTitle>6. Personenbezogene Daten – DSGVO</SectionTitle>

                <SubTitle>6.1. Erhobene Daten</SubTitle>
                <BulletList
                  items={[
                    "Vorname, Nachname",
                    "E-Mail-Adresse",
                    "Telefonnummer",
                    "Unternehmensname",
                    "Informationen aus dem Kontaktformular",
                    "IP-Adresse",
                    "Browsedaten (anonymisierte Statistiken: besuchte Seiten, Browsertyp, Dauer)",
                    "Keine sensiblen Daten werden erhoben",
                  ]}
                />

                <SubTitle>6.2. Rechtsgrundlagen</SubTitle>
                <BulletList
                  items={[
                    "Einwilligung (Kontaktformular)",
                    "Berechtigtes Interesse (Traffic-Analyse)",
                    "Gesetzliche Pflicht (buchhalterische Daten)",
                  ]}
                />

                <SubTitle>6.3. Zwecke der Verarbeitung</SubTitle>
                <BulletList
                  items={[
                    "Anfragen über das Formular beantworten",
                    "Geschäftliche oder informative Beziehung aufbauen",
                    "Website-Traffic analysieren",
                    "Gesetzliche und buchhalterische Pflichten erfüllen",
                  ]}
                />

                <SubTitle>6.4. Empfänger der Daten</SubTitle>
                <Paragraph>
                  Die Daten werden ausschließlich von{" "}
                  <strong>O7 Digital Consulting</strong> verarbeitet und nicht
                  an Dritte weitergegeben, außer:
                </Paragraph>
                <BulletList
                  items={[
                    "Hosting- oder IT-Dienstleister im Rahmen ihrer Aufgaben",
                    "Behördliche Stellen im Rahmen gesetzlicher Pflichten",
                  ]}
                />

                <SubTitle>6.5. Speicherdauer</SubTitle>
                <Paragraph>
                  Daten werden nur so lange gespeichert, wie es für die Zwecke
                  erforderlich ist: maximal 36 Monate für Kontakt- und
                  CRM-Daten, entsprechend den gesetzlichen Vorgaben für
                  buchhalterische Daten.
                </Paragraph>

                <SubTitle>6.6. Rechte der Nutzer</SubTitle>
                <Paragraph>
                  In Übereinstimmung mit der DSGVO haben Sie das Recht auf
                  Auskunft, Berichtigung, Löschung, Einschränkung der
                  Verarbeitung und Widerspruch gegen die Verarbeitung Ihrer
                  personenbezogenen Daten sowie auf Datenübertragbarkeit. Zur
                  Ausübung dieser Rechte kontaktieren Sie uns unter{" "}
                  <a href="mailto:info@o7digital-consulting.com">
                    info@o7digital-consulting.com
                  </a>
                  .
                </Paragraph>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer2 lang="de" />
    </>
  );
}
