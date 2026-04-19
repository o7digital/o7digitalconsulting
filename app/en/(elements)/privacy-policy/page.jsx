import React from "react";
import Header2 from "@/components/headers/Header2";
import Footer2 from "@/components/footers/Footer2";

export const metadata = {
  title: "Legal Notice & Privacy Policy – O7 Digital",
  description:
    "Legal information, publisher details, hosting and privacy policy of O7 Digital Consulting.",
  alternates: {
    canonical: 'https://www.o7digital-consulting.com/en/privacy-policy',
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
                Legal Notice &amp; Privacy Policy
              </h1>
              <Paragraph>
                <strong>O7 Digital Consulting</strong>
              </Paragraph>
              <Paragraph>Last updated: December 2025</Paragraph>

              <div className="mt--30">
                <SectionTitle>1. Legal Notice</SectionTitle>

                <SubTitle>1.1. Website Publisher</SubTitle>
                <Paragraph>
                  <strong>O7 Digital Consulting SASU</strong>
                  <br />
                  Company registered with the Paris Trade Register (RCS de Paris)
                  <br />
                  <strong>SIREN: 899 748 560</strong>
                  <br />
                  <strong>SIRET: 899 748 560 00013</strong>
                </Paragraph>
                <Paragraph>
                  <strong>Registered office:</strong>
                  <br />
                  10 rue de Penthièvre
                  <br />
                  75008 Paris – France
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
                  Publication Director: <strong>Olivier Steineur</strong>
                </Paragraph>

                <SubTitle>1.2. Hosting</SubTitle>
                <Paragraph>
                  <strong>GitHub, Inc.</strong>
                  <br />
                  88 Colin P. Kelly Jr. Street
                  <br />
                  San Francisco, CA 94107
                  <br />
                  United States
                </Paragraph>
                <Paragraph>
                  Hosted via <strong>GitHub Pages</strong>
                  <br />
                  Website: <a href="https://github.com">https://github.com</a>
                </Paragraph>

                <SubTitle>1.3. Development</SubTitle>
                <Paragraph>
                  Developed by:
                  <br />
                  <strong>O7 Digital Consulting</strong>
                  <br />
                  10 rue de Penthièvre
                  <br />
                  75008 Paris – France
                </Paragraph>
              </div>

              <div className="mt--30">
                <SectionTitle>2. Terms of Use</SectionTitle>
                <Paragraph>
                  The website <strong>www.o7digital-consulting.com</strong> is provided as is. 
                  Visitors acknowledge having the necessary technical skills to use it and agree 
                  to use it in accordance with applicable law. O7 Digital Consulting does not 
                  guarantee complete absence of errors and disclaims all liability in case of 
                  unavailability or malfunction.
                </Paragraph>
              </div>

              <div className="mt--30">
                <SectionTitle>3. Intellectual Property</SectionTitle>
                <Paragraph>
                  All website content (text, images, logo, code, graphic elements) is protected 
                  by intellectual property laws. Any reproduction, representation or exploitation, 
                  in whole or in part, without prior written authorization, is strictly prohibited.
                </Paragraph>
              </div>

              <div className="mt--30">
                <SectionTitle>4. Hyperlinks</SectionTitle>
                <Paragraph>
                  The website may contain links to external resources. O7 Digital Consulting 
                  exercises no control over these third-party sites and disclaims all 
                  responsibility for their availability, content or security. Creating links 
                  to this site requires prior written authorization from the publisher.
                </Paragraph>
              </div>

              <div className="mt--30">
                <SectionTitle>5. Cookies</SectionTitle>
                <Paragraph>
                  The website may use technical or statistical cookies. Users can refuse cookies 
                  via their browser settings. Refusal may impair certain functionalities.
                </Paragraph>
              </div>

              <div className="mt--30">
                <SectionTitle>6. Personal Data – GDPR Policy</SectionTitle>

                <SubTitle>6.1. Data Collected</SubTitle>
                <BulletList
                  items={[
                    "First name, last name",
                    "Email address",
                    "Phone number",
                    "Company name",
                    "Information submitted via contact form",
                    "IP address",
                    "Browsing data (anonymized statistics: pages viewed, browser type, duration)",
                    "No sensitive data is collected",
                  ]}
                />

                <SubTitle>6.2. Legal Basis for Processing</SubTitle>
                <BulletList
                  items={[
                    "Consent (contact form)",
                    "Legitimate interest (traffic analysis)",
                    "Legal obligation (accounting data)",
                  ]}
                />

                <SubTitle>6.3. Processing Purposes</SubTitle>
                <BulletList
                  items={[
                    "Respond to requests sent via the form",
                    "Establish a commercial or informational relationship",
                    "Analyze website traffic",
                    "Comply with legal and accounting obligations",
                  ]}
                />

                <SubTitle>6.4. Data Recipients</SubTitle>
                <Paragraph>
                  Data is processed exclusively by <strong>O7 Digital Consulting</strong> and 
                  is not shared with third parties, except:
                </Paragraph>
                <BulletList
                  items={[
                    "Hosting provider (GitHub Pages)",
                    "Analysis tools (if applicable)",
                    "Authorities upon legal request",
                  ]}
                />

                <SubTitle>6.5. Retention Period</SubTitle>
                <BulletList
                  items={[
                    "Contact forms: 3 years from last contact",
                    "Browsing data: 13 months maximum",
                    "Accounting data: 10 years (legal obligation)",
                  ]}
                />

                <SubTitle>6.6. Your Rights</SubTitle>
                <Paragraph>
                  Under GDPR, you have the following rights:
                </Paragraph>
                <BulletList
                  items={[
                    "Right of access",
                    "Right of rectification",
                    "Right to erasure (right to be forgotten)",
                    "Right to restriction of processing",
                    "Right to data portability",
                    "Right to object",
                    "Right to withdraw consent",
                  ]}
                />
                <Paragraph>
                  To exercise these rights, contact:{" "}
                  <a href="mailto:info@o7digital-consulting.com">
                    info@o7digital-consulting.com
                  </a>
                </Paragraph>

                <SubTitle>6.7. Complaints</SubTitle>
                <Paragraph>
                  If you believe your rights are not being respected, you may file a 
                  complaint with the supervisory authority:
                </Paragraph>
                <Paragraph>
                  <strong>CNIL</strong> (Commission Nationale de l'Informatique et des Libertés)
                  <br />
                  3 Place de Fontenoy – TSA 80715
                  <br />
                  75334 Paris Cedex 07 – France
                  <br />
                  <a href="https://www.cnil.fr">www.cnil.fr</a>
                </Paragraph>
              </div>

              <div className="mt--30">
                <SectionTitle>7. Data Security</SectionTitle>
                <Paragraph>
                  O7 Digital Consulting implements appropriate technical and organizational 
                  measures to protect personal data against unauthorized access, loss, 
                  alteration or disclosure.
                </Paragraph>
              </div>

              <div className="mt--30">
                <SectionTitle>8. Changes</SectionTitle>
                <Paragraph>
                  This legal notice and privacy policy may be updated. The date of the last 
                  update appears at the top of this page.
                </Paragraph>
              </div>

              <div className="mt--30">
                <SectionTitle>9. Contact</SectionTitle>
                <Paragraph>
                  For any questions regarding this policy or your data:
                  <br />
                  <a href="mailto:info@o7digital-consulting.com">
                    info@o7digital-consulting.com
                  </a>
                </Paragraph>
              </div>

              <div className="mt--50 mb--20 text-center">
                <Paragraph>
                  <em>
                    © {new Date().getFullYear()} O7 Digital Consulting – All rights reserved
                  </em>
                </Paragraph>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer2 lang="en" />
    </>
  );
}
