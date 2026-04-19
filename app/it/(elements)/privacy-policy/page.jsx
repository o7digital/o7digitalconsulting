import React from "react";
import Header2 from "@/components/headers/Header2";
import Footer2 from "@/components/footers/Footer2";

export const metadata = {
  title: "Note Legali & Politica sulla Privacy – O7 Digital",
  description:
    "Informazioni legali, dettagli editore, hosting e politica sulla privacy di O7 Digital Consulting.",
  alternates: {
    canonical: 'https://www.o7digital-consulting.com/it/privacy-policy',
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
                Note Legali &amp; Politica sulla Privacy
              </h1>
              <Paragraph>
                <strong>O7 Digital Consulting</strong>
              </Paragraph>
              <Paragraph>Ultimo aggiornamento: Dicembre 2025</Paragraph>

              <div className="mt--30">
                <SectionTitle>1. Note Legali</SectionTitle>

                <SubTitle>1.1. Editore del Sito Web</SubTitle>
                <Paragraph>
                  <strong>O7 Digital Consulting SASU</strong>
                  <br />
                  Società iscritta al Registro del Commercio di Parigi (RCS de Paris)
                  <br />
                  <strong>SIREN: 899 748 560</strong>
                  <br />
                  <strong>SIRET: 899 748 560 00013</strong>
                </Paragraph>
                <Paragraph>
                  <strong>Sede legale:</strong>
                  <br />
                  10 rue de Penthièvre
                  <br />
                  75008 Parigi – Francia
                </Paragraph>
                <Paragraph>
                  <strong>Email:</strong>{" "}
                  <a href="mailto:info@o7digital-consulting.com">
                    info@o7digital-consulting.com
                  </a>
                  <br />
                  <strong>Sito web:</strong>{" "}
                  <a href="http://www.o7digital-consulting.com">
                    www.o7digital-consulting.com
                  </a>
                  <br />
                  <strong>Rappresentante legale:</strong> Olivier Steineur, Presidente
                  <br />
                  <strong>Numero di partita IVA intracomunitaria:</strong> FR16899748560
                </Paragraph>

                <SubTitle>1.2. Hosting</SubTitle>
                <Paragraph>
                  <strong>Vercel Inc.</strong>
                  <br />
                  440 N Barranca Ave #4133
                  <br />
                  Covina, CA 91723
                  <br />
                  Stati Uniti
                  <br />
                  Sito web:{" "}
                  <a
                    href="https://vercel.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://vercel.com
                  </a>
                </Paragraph>

                <SubTitle>1.3. Proprietà Intellettuale</SubTitle>
                <Paragraph>
                  Tutti i contenuti presenti su questo sito (testi, immagini, grafici, loghi, 
                  video, software, ecc.) sono di proprietà esclusiva di O7 Digital Consulting 
                  o sono utilizzati con il permesso dei loro rispettivi proprietari.
                </Paragraph>
                <Paragraph>
                  Qualsiasi riproduzione, rappresentazione, modifica, pubblicazione o 
                  adattamento, totale o parziale, degli elementi del sito, con qualsiasi mezzo 
                  o procedimento, è vietata senza l'autorizzazione scritta preventiva di O7 
                  Digital Consulting.
                </Paragraph>

                <SectionTitle>2. Politica sulla Privacy</SectionTitle>

                <SubTitle>2.1. Informazioni Raccolte</SubTitle>
                <Paragraph>
                  Nel contesto dell'uso del nostro sito web, potremmo raccogliere i seguenti 
                  tipi di dati:
                </Paragraph>
                <BulletList
                  items={[
                    "Dati di contatto: nome, cognome, indirizzo email, numero di telefono",
                    "Dati professionali: nome dell'azienda, posizione, settore di attività",
                    "Dati di navigazione: indirizzo IP, tipo di browser, pagine visitate",
                    "Cookies e tecnologie simili per migliorare l'esperienza utente",
                  ]}
                />

                <SubTitle>2.2. Finalità del Trattamento</SubTitle>
                <Paragraph>
                  I vostri dati personali sono raccolti e trattati per le seguenti finalità:
                </Paragraph>
                <BulletList
                  items={[
                    "Gestire le vostre richieste di informazioni o preventivi",
                    "Fornire i nostri servizi di consulenza digitale",
                    "Inviare comunicazioni commerciali (con il vostro consenso)",
                    "Migliorare le prestazioni e la sicurezza del nostro sito web",
                    "Rispettare i nostri obblighi legali e regolamentari",
                  ]}
                />

                <SubTitle>2.3. Base Giuridica</SubTitle>
                <Paragraph>
                  Il trattamento dei vostri dati personali si basa su:
                </Paragraph>
                <BulletList
                  items={[
                    "Il vostro consenso esplicito",
                    "L'esecuzione di un contratto di servizi",
                    "Il nostro legittimo interesse nel migliorare i nostri servizi",
                    "Il rispetto dei nostri obblighi legali",
                  ]}
                />

                <SubTitle>2.4. Destinatari dei Dati</SubTitle>
                <Paragraph>
                  I vostri dati personali possono essere comunicati a:
                </Paragraph>
                <BulletList
                  items={[
                    "Personale autorizzato di O7 Digital Consulting",
                    "Fornitori di servizi tecnici (hosting, manutenzione, analisi)",
                    "Partner commerciali (solo con il vostro consenso esplicito)",
                    "Autorità pubbliche quando richiesto dalla legge",
                  ]}
                />

                <SubTitle>2.5. Periodo di Conservazione</SubTitle>
                <Paragraph>
                  I vostri dati personali sono conservati per il tempo necessario agli scopi 
                  per cui sono stati raccolti:
                </Paragraph>
                <BulletList
                  items={[
                    "Dati di contatto: per la durata della relazione commerciale + 3 anni",
                    "Dati di navigazione: massimo 13 mesi",
                    "Dati contabili: 10 anni secondo la normativa fiscale",
                  ]}
                />

                <SubTitle>2.6. I Vostri Diritti</SubTitle>
                <Paragraph>
                  Conformemente al Regolamento Generale sulla Protezione dei Dati (GDPR), 
                  disponete dei seguenti diritti:
                </Paragraph>
                <BulletList
                  items={[
                    "Diritto di accesso ai vostri dati personali",
                    "Diritto di rettifica dei dati inesatti o incompleti",
                    "Diritto di cancellazione dei vostri dati",
                    "Diritto di limitazione del trattamento",
                    "Diritto di opposizione al trattamento",
                    "Diritto alla portabilità dei dati",
                    "Diritto di ritirare il vostro consenso in qualsiasi momento",
                  ]}
                />
                <Paragraph>
                  Per esercitare questi diritti, potete contattarci a:{" "}
                  <a href="mailto:info@o7digital-consulting.com">
                    info@o7digital-consulting.com
                  </a>
                </Paragraph>

                <SubTitle>2.7. Sicurezza dei Dati</SubTitle>
                <Paragraph>
                  Implementiamo misure tecniche e organizzative appropriate per proteggere i 
                  vostri dati personali contro la perdita, l'uso improprio, l'accesso non 
                  autorizzato, la divulgazione, l'alterazione o la distruzione.
                </Paragraph>

                <SubTitle>2.8. Cookies</SubTitle>
                <Paragraph>
                  Il nostro sito web utilizza cookies per migliorare la vostra esperienza di 
                  navigazione. Potete gestire le vostre preferenze sui cookies attraverso le 
                  impostazioni del vostro browser.
                </Paragraph>
                <Paragraph>
                  Tipi di cookies utilizzati:
                </Paragraph>
                <BulletList
                  items={[
                    "Cookies essenziali: necessari per il funzionamento del sito",
                    "Cookies di prestazione: analizzano l'utilizzo del sito",
                    "Cookies funzionali: memorizzano le vostre preferenze",
                  ]}
                />

                <SubTitle>2.9. Trasferimenti Internazionali</SubTitle>
                <Paragraph>
                  I vostri dati personali possono essere trasferiti e conservati su server 
                  situati al di fuori dell'Unione Europea. In tal caso, garantiamo che siano 
                  applicate misure di protezione adeguate conformemente al GDPR.
                </Paragraph>

                <SubTitle>2.10. Reclami</SubTitle>
                <Paragraph>
                  Se ritenete che il trattamento dei vostri dati personali violi la normativa 
                  applicabile, avete il diritto di presentare un reclamo presso l'autorità di 
                  controllo competente:
                </Paragraph>
                <Paragraph>
                  <strong>CNIL (Commission Nationale de l'Informatique et des Libertés)</strong>
                  <br />
                  3 Place de Fontenoy
                  <br />
                  TSA 80715
                  <br />
                  75334 Parigi Cedex 07 – Francia
                  <br />
                  Sito web:{" "}
                  <a
                    href="https://www.cnil.fr"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    www.cnil.fr
                  </a>
                </Paragraph>

                <SectionTitle>3. Modifiche alla Politica sulla Privacy</SectionTitle>
                <Paragraph>
                  Ci riserviamo il diritto di modificare questa politica sulla privacy in 
                  qualsiasi momento. Qualsiasi modifica sarà pubblicata su questa pagina con 
                  una nuova data di "Ultimo aggiornamento".
                </Paragraph>

                <SectionTitle>4. Contatto</SectionTitle>
                <Paragraph>
                  Per qualsiasi domanda relativa a queste note legali o alla nostra politica 
                  sulla privacy, non esitate a contattarci:
                </Paragraph>
                <Paragraph>
                  <strong>O7 Digital Consulting</strong>
                  <br />
                  Email:{" "}
                  <a href="mailto:info@o7digital-consulting.com">
                    info@o7digital-consulting.com
                  </a>
                  <br />
                  Indirizzo: 10 rue de Penthièvre, 75008 Parigi – Francia
                </Paragraph>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer2 lang="it" />
    </>
  );
}
