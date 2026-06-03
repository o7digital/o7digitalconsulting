import React from "react";
import Header2 from "@/components/headers/Header2";
import Footer2 from "@/components/footers/Footer2";

export const metadata = {
  title: "Mentions legales et politique de confidentialite | O7 Digital",
  description:
    "Informations legales, editeur, hebergement et politique de confidentialite du site O7 Digital Consulting.",
  alternates: {
    canonical: "https://www.o7digital.com/privacy-policy",
    languages: {
      fr: "https://www.o7digital.com/privacy-policy",
      en: "https://www.o7digital.com/en/privacy-policy",
      es: "https://www.o7digital.com/es/privacy-policy",
      de: "https://www.o7digital.com/de/privacy-policy",
      it: "https://www.o7digital.com/it/privacy-policy",
    },
  },
};

export default function Page() {
  return (
    <>
      <Header2 parentClass="rainbow-header header-default header-left-align header-transparent header-sticky" />
      <div className="rainbow-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <h1 className="title w-700 mb--20">Mentions legales et politique de confidentialite</h1>
              <p className="b1"><strong>O7 Digital Consulting SASU</strong></p>
              <p className="b1">SIREN : 899 748 560 · SIRET : 899 748 560 00013</p>
              <p className="b1">Siege social : 10 rue de Penthievre, 75008 Paris, France</p>
              <p className="b1">
                Contact : <a href="mailto:info@o7digital.com">info@o7digital.com</a>
              </p>
              <h2 className="title h4 mt--30">Hebergement</h2>
              <p className="b1">GitHub, Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, Etats-Unis.</p>
              <h2 className="title h4 mt--30">Donnees personnelles</h2>
              <p className="b1">
                Les donnees transmises via les formulaires sont utilisees uniquement pour repondre aux demandes envoyees a O7 Digital Consulting. Vous pouvez demander l'acces, la rectification ou la suppression de vos donnees par email.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer2 />
    </>
  );
}
