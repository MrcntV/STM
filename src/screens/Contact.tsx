import React from "react";
import { motion } from "framer-motion";

import { Helmet } from "react-helmet";
import { FaPhone, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import ContactForm from "../components/05_ContactForm";
import { IoTime } from "react-icons/io5";

const Contact: React.FC = () => {
  return (
    <>
      <Helmet>
        {/* Informations de base */}
        <html lang="fr" />
        <title>Contact – STM Nettoyage à Saint-Étienne</title>
        <meta charSet="UTF-8" />
        <meta httpEquiv="Content-Language" content="fr" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="robots"
          content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        <meta name="author" content="STM Nettoyage" />
        <meta name="copyright" content="STM Nettoyage" />

        {/* SEO */}
        <meta
          name="description"
          content="Contactez STM, entreprise de nettoyage à Saint-Étienne. Demandez un devis ou plus d’informations sur nos services pour particuliers et professionnels."
        />
        <link rel="canonical" href="https://stm-nettoyage.fr/contact" />
        <meta
          name="image"
          content="https://stm-nettoyage.fr/images/og-image.png"
        />

        {/* Open Graph (Facebook / LinkedIn...) */}
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Contact – STM Nettoyage à Saint-Étienne"
        />
        <meta
          property="og:description"
          content="Besoin d’un service de nettoyage professionnel ou particulier ? Contactez STM dès maintenant."
        />
        <meta property="og:url" content="https://stm-nettoyage.fr/contact" />
        <meta property="og:site_name" content="STM Nettoyage" />
        <meta
          property="og:image"
          content="https://stm-nettoyage.fr/images/og-image.png"
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact – STM Nettoyage" />
        <meta
          name="twitter:description"
          content="Demandez un devis ou des renseignements à STM, spécialiste du nettoyage depuis 1996."
        />
        <meta
          name="twitter:image"
          content="https://stm-nettoyage.fr/images/og-image.png"
        />

        {/* Données structurées JSON-LD */}
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "name": "Contact – STM Nettoyage",
      "url": "https://stm-nettoyage.fr/contact",
      "description": "Page de contact de STM, entreprise de nettoyage à Saint-Étienne",
      "inLanguage": "fr-FR",
      "publisher": {
        "@type": "Organization",
        "name": "STM Nettoyage",
        "logo": {
          "@type": "ImageObject",
          "url": "https://stm-nettoyage.fr/stm-logo-512px.png"
        }
      }
    }
    `}
        </script>
      </Helmet>
      <section className="DecalageHeader">
        <section className="contact-section">
          <h1>CONTACT</h1>

          <motion.div
            className="contact-info"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h2>
              STM
              <br />
              Services et Travaux de Maintenance
            </h2>
            <p>
              <FaMapMarkerAlt />
              Adresse :{" "}
              <a
                href="https://www.google.com/maps/place/Stm+Entreprise+De+Propret%C3%A9/@45.4611741,4.378661,17z/data=!3m1!4b1!4m6!3m5!1s0x47f5ac6b410c1d93:0x5e1d508422f3285c!8m2!3d45.4611741!4d4.3812359!16s%2Fg%2F11ddwwj3nc?entry=ttu&g_ep=EgoyMDI1MDUyMS4wIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
              >
                {process.env.REACT_APP_ADDRESS}
              </a>
            </p>
            <p>
              {" "}
              <IoTime />
              Horaires : Lundi – Vendredi : 8h00 – 18h00
            </p>
            <p>
              <FaPhone />
              Tel.:{" "}
              <a href={`tel:${process.env.REACT_APP_PHONE}`}>
                {process.env.REACT_APP_PHONE}
              </a>
            </p>
            <p>
              <FaEnvelope />{" "}
              <a href={`mailto:${process.env.REACT_APP_CONTACT_EMAIL}`}>
                {process.env.REACT_APP_CONTACT_EMAIL}
              </a>
            </p>
          </motion.div>
        </section>
        <div className="contact-form-container" id="contact-form">
          <ContactForm />
        </div>
      </section>
    </>
  );
};

export default Contact;
