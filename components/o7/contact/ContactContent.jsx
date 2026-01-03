"use client";

import React, { useState } from "react";
import SectionHeader from "../common/SectionHeader";
import { o7ContactInfo } from "@/data/o7";

const defaultCopy = {
  title: "Parlons de votre projet digital",
  intro: [
    "Chez O7 Digital Consulting, chaque collaboration commence par un échange clair et stratégique. Que vous ayez un projet précis ou une réflexion en cours, nous prenons le temps de comprendre vos enjeux business, vos objectifs et votre contexte technologique.",
    "Nous accompagnons des dirigeants, des équipes et des organisations qui recherchent un partenaire impliqué, capable de structurer, piloter et faire évoluer leur écosystème digital dans la durée.",
  ],
  whenTitle: "Quand nous contacter ?",
  whenItems: [
    "Lancement ou refonte d’un site ou d’une plateforme digitale",
    "Besoin d’un accompagnement CTO ou direction digitale",
    "Problématiques de performance, SEO ou scalabilité",
    "Projet nécessitant design, développement et vision stratégique",
    "Volonté d’aligner le digital avec les objectifs business",
  ],
  preForm:
    "Après un premier échange, nous vous proposons une approche claire et structurée : cadrage des besoins, analyse du contexte, recommandations et plan d’action. Chaque collaboration est pensée sur mesure, avec transparence et engagement.",  officesTitle: "Nos bureaux internationaux",
  officesDescription: "Une présence mondiale pour mieux vous accompagner",  labels: {
    emailTitle: "Email",
    phoneTitle: "Téléphone",
    phoneFallback: "Disponible sur demande",
    bookingTitle: "Prendre rendez-vous",
    bookingCta: "Planifier un échange",
    namePlaceholder: "Nom complet",
    emailPlaceholder: "Email professionnel",
    phonePlaceholder: "Téléphone",
    messagePlaceholder: "Votre message",
    submit: "Envoyer",
    sending: "Envoi...",
    success: "Merci, votre message a bien été envoyé.",
    error: "Une erreur est survenue, merci de réessayer.",
  },
};

const defaultLabels = defaultCopy.labels;

export default function ContactContent({
  contactData = o7ContactInfo,
  copy = defaultCopy,
  eyebrow = "Contact",
}) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errorMessage, setErrorMessage] = useState("");
  const phoneValue = o7ContactInfo.phone?.trim();
  const phoneLink = phoneValue
    ? `tel:${phoneValue.replace(/\s+/g, "")}`
    : null;
  const labels = { ...defaultLabels, ...(copy.labels || {}) };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const endpoint = "https://formspree.io/f/xkgdyvze";

    try {
      const payload = {
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        message: formData.message.trim(),
      };

      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => null);
        throw new Error(
          data?.message ||
            labels.error ||
            "Le formulaire n'a pas pu être envoyé pour le moment."
        );
      }

      setStatus("success");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      setStatus("error");
      setErrorMessage(error.message || labels.error);
    }
  };

  return (
    <div className="rainbow-contact-area rainbow-section-gap">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 mb--40">
            <SectionHeader eyebrow={eyebrow} title="" description="" />
            <h1 className="title w-600 mb--10 text-center">
              {copy.title}
            </h1>
            {copy.intro.map((paragraph, idx) => (
              <p
                key={paragraph}
                className={`description b1 text-center ${
                  idx === copy.intro.length - 1 ? "mb--40" : "mb--10"
                }`}
              >
                {paragraph}
              </p>
            ))}
            <div className="row">
              <div className="col-lg-8 offset-lg-2">
                <div className="service service__style--1 bg-color-blackest radius text-left rbt-border">
                  <div className="content">
                    <h4 className="title w-600 mb--10">{copy.whenTitle}</h4>
                    <p className="description b1 mb--0">
                      {copy.whenItems.map((item, idx) => (
                        <React.Fragment key={item}>
                          • {item}
                          {idx < copy.whenItems.length - 1 && <br />}
                        </React.Fragment>
                      ))}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row row--15">
          <div className="col-lg-4 col-md-6 col-12">
            <div className="rainbow-address">
              <div className="icon">
                <i className="feather-mail" />
              </div>
              <div className="inner">
                <h4 className="title">{labels.emailTitle}</h4>
                <p>
                  <a href={`mailto:${o7ContactInfo.email}`}>
                    {o7ContactInfo.email}
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <div className="rainbow-address">
              <div className="icon">
                <i className="feather-phone-call" />
              </div>
              <div className="inner">
                <h4 className="title">{labels.phoneTitle}</h4>
                {phoneLink ? (
                  <p>
                    <a href={phoneLink}>{phoneValue}</a>
                  </p>
                ) : (
                  <p className="mb--0">{labels.phoneFallback}</p>
                )}
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <div className="rainbow-address">
              <div className="icon">
                <i className="feather-calendar" />
              </div>
              <div className="inner">
                <h4 className="title">{labels.bookingTitle}</h4>
                <p className="mb--0">
                  <a href="#contact-form">{labels.bookingCta}</a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt--40 row--15">
          <div className="col-lg-8 offset-lg-2 mb--20">
            <p className="description b1 text-center mb--0">{copy.preForm}</p>
          </div>
          <div className="col-lg-8 offset-lg-2">
            <form
              className="contact-form-1 rainbow-dynamic-form"
              id="contact-form"
              onSubmit={handleSubmit}
            >
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  id="contact-name"
                  placeholder={labels.namePlaceholder}
                  required
                  value={formData.name}
                  onChange={handleChange}
                  disabled={status === "loading"}
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  placeholder={labels.emailPlaceholder}
                  required
                  value={formData.email}
                  onChange={handleChange}
                  disabled={status === "loading"}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="phone"
                  id="contact-phone"
                  placeholder={labels.phonePlaceholder}
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  disabled={status === "loading"}
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  id="contact-message"
                  placeholder={labels.messagePlaceholder}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  disabled={status === "loading"}
                />
              </div>
              <div className="form-group">
                <button
                  name="submit"
                  type="submit"
                  id="submit"
                  className="btn-default btn-large rainbow-btn"
                  disabled={status === "loading"}
                >
                  <span>{status === "loading" ? labels.sending : labels.submit}</span>
                </button>
              </div>
              {status === "success" && (
                <div className="form-group">
                  <p className="success-message mb--0">
                    {labels.success}
                  </p>
                </div>
              )}
              {status === "error" && (
                <div className="form-group">
                  <p className="error-message mb--0">
                    {errorMessage || labels.error}
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>

        {/* International Offices Section */}
        <div className="row mt--60">
          <div className="col-lg-12">
            <div className="section-title text-center mb--40">
              <h3 className="title">{copy.officesTitle || "Nos bureaux internationaux"}</h3>
              <p className="description">{copy.officesDescription || "Une présence mondiale pour mieux vous accompagner"}</p>
            </div>
          </div>
        </div>

        <div className="row row--15">
          {/* France Office */}
          <div className="col-lg-4 col-md-6 col-12 mb--30">
            <div className="rainbow-address h-100">
              <div className="icon">
                <i className="feather-map-pin" />
              </div>
              <div className="inner">
                <h4 className="title">France</h4>
                <p className="mb--10">
                  <strong>O7 DIGITAL CONSULTING SAS</strong>
                </p>
                <p className="mb--0">
                  10 rue de Penthièvre<br />
                  75008 Paris<br />
                  Île-de-France, France
                </p>
              </div>
            </div>
          </div>

          {/* Canada Office */}
          <div className="col-lg-4 col-md-6 col-12 mb--30">
            <div className="rainbow-address h-100">
              <div className="icon">
                <i className="feather-map-pin" />
              </div>
              <div className="inner">
                <h4 className="title">Canada</h4>
                <p className="mb--10">
                  <strong>9517-6806 Québec inc</strong>
                </p>
                <p className="mb--0">
                  1030, Avenue Muguette<br />
                  Saint-Élie-de-Caxton QC G0X 2N0<br />
                  Canada
                </p>
              </div>
            </div>
          </div>

          {/* Mexico Office */}
          <div className="col-lg-4 col-md-6 col-12 mb--30">
            <div className="rainbow-address h-100">
              <div className="icon">
                <i className="feather-map-pin" />
              </div>
              <div className="inner">
                <h4 className="title">Mexique</h4>
                <p className="mb--10">
                  <strong>Integra 365</strong>
                </p>
                <p className="mb--0">
                  Prolongación Paseo de la Reforma 1015<br />
                  Piso 1, Col. Santa Fe, Álvaro Obregón<br />
                  CDMX 01376, Mexico
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
