import React from "react";
import Header2 from "@/components/headers/Header2";
import Footer2 from "@/components/footers/Footer2";

export const metadata = {
  title: "Aviso Legal y Política de Privacidad – O7 Digital",
  description:
    "Información legal, detalles del editor, alojamiento y política de privacidad de O7 Digital Consulting.",
  alternates: {
    canonical: 'https://www.o7digital-consulting.com/es/privacy-policy',
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
                Aviso Legal y Política de Privacidad
              </h1>
              <Paragraph>
                <strong>O7 Digital Consulting</strong>
              </Paragraph>
              <Paragraph>Última actualización: diciembre de 2025</Paragraph>

              <div className="mt--30">
                <SectionTitle>1. Aviso Legal</SectionTitle>

                <SubTitle>1.1. Editor del sitio</SubTitle>
                <Paragraph>
                  <strong>O7 Digital Consulting SASU</strong>
                  <br />
                  Empresa registrada en el RCS de París
                  <br />
                  <strong>SIREN: 899 748 560</strong>
                  <br />
                  <strong>SIRET: 899 748 560 00013</strong>
                </Paragraph>
                <Paragraph>
                  <strong>Domicilio social:</strong>
                  <br />
                  10 rue de Penthièvre
                  <br />
                  75008 París – Francia
                </Paragraph>
                <Paragraph>
                  <strong>Email:</strong>{" "}
                  <a href="mailto:info@o7digital-consulting.com">
                    info@o7digital-consulting.com
                  </a>
                  <br />
                  <strong>Sitio web:</strong>{" "}
                  <a href="http://www.o7digital-consulting.com">
                    www.o7digital-consulting.com
                  </a>
                  <br />
                  Director de publicación: <strong>Olivier Steineur</strong>
                </Paragraph>

                <SubTitle>1.2. Alojamiento</SubTitle>
                <Paragraph>
                  <strong>GitHub, Inc.</strong>
                  <br />
                  88 Colin P. Kelly Jr. Street
                  <br />
                  San Francisco, CA 94107
                  <br />
                  Estados Unidos
                </Paragraph>
                <Paragraph>
                  Alojado a través de <strong>GitHub Pages</strong>
                  <br />
                  Sitio: <a href="https://github.com">https://github.com</a>
                </Paragraph>

                <SubTitle>1.3. Desarrollo</SubTitle>
                <Paragraph>
                  Desarrollado por:
                  <br />
                  <strong>O7 Digital Consulting</strong>
                  <br />
                  10 rue de Penthièvre
                  <br />
                  75008 París – Francia
                </Paragraph>
              </div>

              <div className="mt--30">
                <SectionTitle>2. Condiciones de Uso</SectionTitle>
                <Paragraph>
                  El sitio web <strong>www.o7digital-consulting.com</strong> se proporciona 
                  tal cual. El visitante reconoce poseer las competencias técnicas necesarias 
                  para utilizarlo y se compromete a usarlo conforme a la legislación vigente. 
                  O7 Digital Consulting no garantiza la ausencia total de errores y declina 
                  toda responsabilidad en caso de indisponibilidad o mal funcionamiento.
                </Paragraph>
              </div>

              <div className="mt--30">
                <SectionTitle>3. Propiedad Intelectual</SectionTitle>
                <Paragraph>
                  La totalidad del contenido del sitio (textos, imágenes, logo, código, 
                  elementos gráficos) está protegida por las leyes de propiedad intelectual. 
                  Toda reproducción, representación o explotación, total o parcial, sin 
                  autorización escrita previa, está estrictamente prohibida.
                </Paragraph>
              </div>

              <div className="mt--30">
                <SectionTitle>4. Enlaces Hipertexto</SectionTitle>
                <Paragraph>
                  El sitio puede contener enlaces que apuntan a recursos externos. O7 Digital 
                  Consulting no ejerce ningún control sobre estos sitios de terceros y declina 
                  toda responsabilidad respecto a su disponibilidad, contenido o seguridad. 
                  La creación de enlaces hacia este sitio requiere autorización escrita previa 
                  del editor.
                </Paragraph>
              </div>

              <div className="mt--30">
                <SectionTitle>5. Cookies</SectionTitle>
                <Paragraph>
                  El sitio puede utilizar cookies técnicas o estadísticas. El usuario puede 
                  rechazar las cookies a través de la configuración de su navegador. El rechazo 
                  puede alterar ciertas funcionalidades.
                </Paragraph>
              </div>

              <div className="mt--30">
                <SectionTitle>6. Datos Personales – Política RGPD</SectionTitle>

                <SubTitle>6.1. Datos Recopilados</SubTitle>
                <BulletList
                  items={[
                    "Nombre, apellido",
                    "Dirección de correo electrónico",
                    "Teléfono",
                    "Nombre de la empresa",
                    "Información transmitida a través del formulario de contacto",
                    "Dirección IP",
                    "Datos de navegación (estadísticas anonimizadas: páginas vistas, tipo de navegador, duración)",
                    "No se recopilan datos sensibles",
                  ]}
                />

                <SubTitle>6.2. Base Legal del Tratamiento</SubTitle>
                <BulletList
                  items={[
                    "El consentimiento (formulario de contacto)",
                    "El interés legítimo (análisis del tráfico)",
                    "La obligación legal (datos contables)",
                  ]}
                />

                <SubTitle>6.3. Finalidades del Tratamiento</SubTitle>
                <BulletList
                  items={[
                    "Responder a las solicitudes enviadas a través del formulario",
                    "Establecer una relación comercial o informativa",
                    "Analizar la frecuentación del sitio",
                    "Cumplir con las obligaciones legales y contables",
                  ]}
                />

                <SubTitle>6.4. Destinatarios de los Datos</SubTitle>
                <Paragraph>
                  Los datos son tratados exclusivamente por <strong>O7 Digital Consulting</strong> y 
                  no se comparten con terceros, excepto:
                </Paragraph>
                <BulletList
                  items={[
                    "Proveedor de alojamiento (GitHub Pages)",
                    "Herramientas de análisis (si procede)",
                    "Autoridades bajo solicitud legal",
                  ]}
                />

                <SubTitle>6.5. Período de Conservación</SubTitle>
                <BulletList
                  items={[
                    "Formularios de contacto: 3 años desde el último contacto",
                    "Datos de navegación: 13 meses máximo",
                    "Datos contables: 10 años (obligación legal)",
                  ]}
                />

                <SubTitle>6.6. Sus Derechos</SubTitle>
                <Paragraph>
                  Bajo el RGPD, usted tiene los siguientes derechos:
                </Paragraph>
                <BulletList
                  items={[
                    "Derecho de acceso",
                    "Derecho de rectificación",
                    "Derecho de supresión (derecho al olvido)",
                    "Derecho a la limitación del tratamiento",
                    "Derecho a la portabilidad de los datos",
                    "Derecho de oposición",
                    "Derecho a retirar el consentimiento",
                  ]}
                />
                <Paragraph>
                  Para ejercer estos derechos, contacte:{" "}
                  <a href="mailto:info@o7digital-consulting.com">
                    info@o7digital-consulting.com
                  </a>
                </Paragraph>

                <SubTitle>6.7. Reclamaciones</SubTitle>
                <Paragraph>
                  Si considera que no se respetan sus derechos, puede presentar una 
                  reclamación ante la autoridad de control:
                </Paragraph>
                <Paragraph>
                  <strong>CNIL</strong> (Commission Nationale de l'Informatique et des Libertés)
                  <br />
                  3 Place de Fontenoy – TSA 80715
                  <br />
                  75334 París Cedex 07 – Francia
                  <br />
                  <a href="https://www.cnil.fr">www.cnil.fr</a>
                </Paragraph>
              </div>

              <div className="mt--30">
                <SectionTitle>7. Seguridad de los Datos</SectionTitle>
                <Paragraph>
                  O7 Digital Consulting implementa medidas técnicas y organizativas apropiadas 
                  para proteger los datos personales contra el acceso no autorizado, la pérdida, 
                  la alteración o la divulgación.
                </Paragraph>
              </div>

              <div className="mt--30">
                <SectionTitle>8. Modificaciones</SectionTitle>
                <Paragraph>
                  Este aviso legal y política de privacidad pueden actualizarse. La fecha de 
                  la última actualización aparece en la parte superior de esta página.
                </Paragraph>
              </div>

              <div className="mt--30">
                <SectionTitle>9. Contacto</SectionTitle>
                <Paragraph>
                  Para cualquier pregunta sobre esta política o sus datos:
                  <br />
                  <a href="mailto:info@o7digital-consulting.com">
                    info@o7digital-consulting.com
                  </a>
                </Paragraph>
              </div>

              <div className="mt--50 mb--20 text-center">
                <Paragraph>
                  <em>
                    © {new Date().getFullYear()} O7 Digital Consulting – Todos los derechos reservados
                  </em>
                </Paragraph>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer2 lang="es" />
    </>
  );
}
