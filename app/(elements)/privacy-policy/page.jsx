import React from "react";
import Header2 from "@/components/headers/Header2";
import Footer2 from "@/components/footers/Footer2";

export const metadata = {
  title: "Mentions Légales & Politique de Confidentialité – O7 Digital",
  description:
    "Mentions légales, informations éditeur, hébergement et politique de confidentialité d’O7 Digital Consulting.",
  alternates: {
    canonical: 'https://www.o7digital-consulting.com/privacy-policy',
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
                Mentions Légales &amp; Politique de Confidentialité
              </h1>
              <Paragraph>
                <strong>O7 Digital Consulting</strong>
              </Paragraph>
              <Paragraph>Dernière mise à jour : décembre 2025</Paragraph>

              <div className="mt--30">
                <SectionTitle>1. Mentions légales</SectionTitle>

                <SubTitle>1.1. Éditeur du site</SubTitle>
                <Paragraph>
                  <strong>O7 Digital Consulting SASU</strong>
                  <br />
                  Entreprise immatriculée au RCS de Paris
                  <br />
                  <strong>SIREN : 899 748 560</strong>
                  <br />
                  <strong>SIRET : 899 748 560 00013</strong>
                </Paragraph>
                <Paragraph>
                  <strong>Adresse du siège social :</strong>
                  <br />
                  10 rue de Penthièvre
                  <br />
                  75008 Paris – France
                </Paragraph>
                <Paragraph>
                  <strong>Email :</strong>{" "}
                  <a href="mailto:info@o7digital-consulting.com">
                    info@o7digital-consulting.com
                  </a>
                  <br />
                  <strong>Site :</strong>{" "}
                  <a href="http://www.o7digital-consulting.com">
                    www.o7digital-consulting.com
                  </a>
                  <br />
                  Directeur de la publication : <strong>Olivier Steineur</strong>
                </Paragraph>

                <SubTitle>1.2. Hébergement</SubTitle>
                <Paragraph>
                  <strong>GitHub, Inc.</strong>
                  <br />
                  88 Colin P. Kelly Jr. Street
                  <br />
                  San Francisco, CA 94107
                  <br />
                  États-Unis
                </Paragraph>
                <Paragraph>
                  Hébergement via <strong>GitHub Pages</strong>
                  <br />
                  Site : <a href="https://github.com">https://github.com</a>
                </Paragraph>

                <SubTitle>1.3. Développement</SubTitle>
                <Paragraph>
                  Développé par :
                  <br />
                  <strong>O7 Digital Consulting</strong>
                  <br />
                  10 rue de Penthièvre
                  <br />
                  75008 Paris – France
                </Paragraph>
              </div>

              <div className="mt--30">
                <SectionTitle>2. Conditions d’utilisation</SectionTitle>
                <Paragraph>
                  Le site <strong>www.o7digital-consulting.com</strong> est mis à
                  disposition en l’état. Le visiteur reconnaît disposer des
                  compétences techniques nécessaires pour l’utiliser et s’engage
                  à l’utiliser conformément à la législation en vigueur. O7
                  Digital Consulting ne garantit pas l’absence totale d’erreurs
                  et décline toute responsabilité en cas d’indisponibilité ou de
                  dysfonctionnement.
                </Paragraph>
              </div>

              <div className="mt--30">
                <SectionTitle>3. Propriété intellectuelle</SectionTitle>
                <Paragraph>
                  L’intégralité du contenu du site (textes, images, logo, code,
                  éléments graphiques) est protégée par le Code de la propriété
                  intellectuelle. Toute reproduction, représentation ou
                  exploitation, totale ou partielle, sans autorisation écrite
                  préalable, est strictement interdite.
                </Paragraph>
              </div>

              <div className="mt--30">
                <SectionTitle>4. Liens hypertextes</SectionTitle>
                <Paragraph>
                  Le site peut contenir des liens pointant vers des ressources
                  externes. O7 Digital Consulting n&apos;exerce aucun contrôle
                  sur ces sites tiers et décline toute responsabilité quant à
                  leur disponibilité, leur contenu ou leur sécurité. La création
                  de liens vers ce site nécessite une autorisation écrite
                  préalable de l’éditeur.
                </Paragraph>
              </div>

              <div className="mt--30">
                <SectionTitle>5. Cookies</SectionTitle>
                <Paragraph>
                  Le site peut utiliser des cookies techniques ou statistiques.
                  L’utilisateur peut refuser les cookies via les paramètres de
                  son navigateur. Le refus peut altérer certaines
                  fonctionnalités.
                </Paragraph>
              </div>

              <div className="mt--30">
                <SectionTitle>6. Données personnelles – Politique RGPD</SectionTitle>

                <SubTitle>6.1. Données collectées</SubTitle>
                <BulletList
                  items={[
                    "Nom, prénom",
                    "Adresse email",
                    "Téléphone",
                    "Nom de l’entreprise",
                    "Informations transmises via le formulaire de contact",
                    "Adresse IP",
                    "Données de navigation (statistiques anonymisées : pages vues, type de navigateur, durée)",
                    "Aucune donnée sensible n’est collectée",
                  ]}
                />

                <SubTitle>6.2. Base légale du traitement</SubTitle>
                <BulletList
                  items={[
                    "le consentement (formulaire de contact)",
                    "l’intérêt légitime (analyse du trafic)",
                    "l’obligation légale (données comptables)",
                  ]}
                />

                <SubTitle>6.3. Finalités du traitement</SubTitle>
                <BulletList
                  items={[
                    "répondre aux demandes envoyées via le formulaire",
                    "établir une relation commerciale ou informative",
                    "analyser la fréquentation du site",
                    "assurer le bon fonctionnement technique",
                    "respecter les obligations légales de conservation",
                    "les données ne sont jamais revendues",
                  ]}
                />

                <SubTitle>6.4. Destinataires des données</SubTitle>
                <BulletList
                  items={[
                    "O7 Digital Consulting",
                    "Les prestataires techniques nécessaires (hébergement GitHub, analytics)",
                    "Aucun transfert non autorisé",
                  ]}
                />

                <SubTitle>6.5. Durée de conservation</SubTitle>
                <BulletList
                  items={[
                    "Formulaire de contact : 12 mois",
                    "Prospects / clients : 3 ans",
                    "Données comptables : 10 ans",
                    "Cookies : selon les règles du navigateur (13 mois recommandé)",
                  ]}
                />

                <SubTitle>6.6. Sécurité</SubTitle>
                <BulletList
                  items={[
                    "HTTPS",
                    "Hébergement sécurisé",
                    "Restrictions d’accès",
                    "Surveillance et mises à jour techniques",
                  ]}
                />

                <SubTitle>6.7. Droits des utilisateurs</SubTitle>
                <BulletList
                  items={[
                    "Accès",
                    "Rectification",
                    "Suppression",
                    "Opposition",
                    "Portabilité",
                    "Limitation du traitement",
                    "Pour exercer un droit, contactez : info@o7digital-consulting.com (réponse sous 30 jours)",
                  ]}
                />

                <SubTitle>6.8. Transferts hors UE</SubTitle>
                <Paragraph>
                  L’hébergement GitHub implique un transfert vers les États-Unis.
                  GitHub applique les garanties nécessaires (clauses
                  contractuelles types).
                </Paragraph>
              </div>

              <div className="mt--30">
                <SectionTitle>7. Modification de la politique</SectionTitle>
                <Paragraph>
                  O7 Digital Consulting peut modifier ces mentions à tout
                  moment. La version applicable est celle en ligne au moment de
                  la consultation.
                </Paragraph>
              </div>

              <div className="mt--30">
                <SectionTitle>8. Droit applicable</SectionTitle>
                <Paragraph>
                  Le présent site est soumis au droit français. En cas de litige,
                  compétence exclusive des tribunaux de <strong>Paris</strong>.
                </Paragraph>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer2 />
    </>
  );
}
