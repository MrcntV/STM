import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

const PolitiqueDeConfidentialite: React.FC = () => {
  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <>
      <Helmet>
        <html lang="fr" />
        <title>Politique de confidentialité – STM Nettoyage</title>
        <meta charSet="UTF-8" />
        <meta httpEquiv="Content-Language" content="fr" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="STM Nettoyage" />
        <meta name="copyright" content="STM Nettoyage" />
        <meta
          name="image"
          content="https://stm-nettoyage.fr/stm-logo-512px.png"
        />
        <meta
          name="description"
          content="Consultez la politique de confidentialité du site stm-nettoyage.fr. Aucune donnée personnelle n’est collectée, aucun cookie ni outil de suivi utilisé."
        />
        <link
          rel="canonical"
          href="https://stm-nettoyage.fr/politique-de-confidentialite"
        />

        {/* Open Graph */}
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Politique de confidentialité – STM Nettoyage"
        />
        <meta
          property="og:description"
          content="Aucune donnée personnelle n’est collectée via le site stm-nettoyage.fr. Pas de cookies ni d’analyses statistiques. Conformité RGPD."
        />
        <meta
          property="og:url"
          content="https://stm-nettoyage.fr/politique-de-confidentialite"
        />
        <meta property="og:site_name" content="STM Nettoyage" />
        <meta
          property="og:image"
          content="https://stm-nettoyage.fr/stm-logo-512px.png"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Politique de confidentialité – STM Nettoyage"
        />
        <meta
          name="twitter:description"
          content="RGPD, sécurité, droits des utilisateurs : retrouvez la politique de confidentialité du site STM Nettoyage."
        />
        <meta
          name="twitter:image"
          content="https://stm-nettoyage.fr/stm-logo-512px.png"
        />

        {/* Schema.org */}
        <script type="application/ld+json">
          {`
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Politique de confidentialité – STM Nettoyage",
        "url": "https://stm-nettoyage.fr/politique-de-confidentialite",
        "description": "Aucune donnée personnelle n’est collectée via le site stm-nettoyage.fr. Pas de cookies ni d’analyses statistiques. Conformité RGPD.",
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
      <motion.div
        className="legal-header"
        initial="hidden"
        animate="show"
        exit="hidden"
      >
        <motion.h1 variants={fadeInVariants} className="legal-title">
          POLITIQUE DE CONFIDENTIALITÉ
        </motion.h1>
      </motion.div>

      <motion.section
        className="legal-container"
        initial="hidden"
        animate="show"
        exit="hidden"
      >
        <motion.div
          variants={fadeInVariants}
          className="legal-intro legal-section-0"
        >
          <p>
            <strong>Mise à jour :</strong> 5 Mai, 2025
          </p>

          <h2 className="legal-titre-secondaire">
            <strong>1. Responsable du traitement</strong>
          </h2>
          <p>
            <strong>Vincent-Nicolas Marconnet</strong>
            <br />
            <strong>Auto-entrepreneur</strong>
            <br />
            <strong>Adresse :</strong> 18 bis route de Bellegarde, 42330
            Saint-Galmier
            <br />
            <strong>SIRET :</strong> 980 5868 2000 0014
            <br />
            <strong>Email :</strong>{" "}
            <a href="mailto:contact@stm-nettoyage.fr">
              contact@stm-nettoyage.fr
            </a>
          </p>

          <h2 className="legal-titre-secondaire">
            <strong>2. Données collectées</strong>
          </h2>
          <p>
            <strong>Aucune donnée personnelle</strong> n'est collectée par le
            site.
            <br />
            <strong>Aucun formulaire, inscription ou connexion</strong> n'est
            proposé.
          </p>

          <h2 className="legal-titre-secondaire">
            <strong>3. Analyse statistique</strong>
          </h2>
          <p>
            Le site <strong>n'utilise aucun cookie</strong> ni outil d'analyse
            statistique.
            <br />
            Les <strong>adresses IP</strong> ne sont ni stockées ni recoupées.
            <br />
            Aucune information permettant d'
            <strong>identifier un utilisateur</strong> n'est collectée.
          </p>

          <h2 className="legal-titre-secondaire">
            <strong>4. Vos droits</strong>
          </h2>
          <p>
            Conformément au <strong>RGPD</strong>, vous disposez des droits
            suivants :
            <ul>
              <li>
                <strong>Droit à l'information</strong>
              </li>
              <li>
                <strong>Droit d'accès, de rectification ou d'effacement</strong>{" "}
                (non applicable ici)
              </li>
            </ul>
            <strong>Contact :</strong>{" "}
            <a href="mailto:contact@stm-nettoyage.fr">
              contact@stm-nettoyage.fr
            </a>
          </p>

          <h2 className="legal-titre-secondaire">
            <strong>5. Sécurité</strong>
          </h2>
          <p>
            Le site est sécurisé via <strong>HTTPS</strong>.<br />
            <strong>Aucun tiers publicitaire ou traqueur</strong> n’est utilisé.
          </p>

          <h2 className="legal-titre-secondaire">
            <strong>6. Modifications</strong>
          </h2>
          <p>
            Cette politique peut évoluer.
            <br />
            Toute mise à jour sera indiquée avec la date de révision.
          </p>

          <h2 className="legal-titre-secondaire">
            <strong>7. Droit applicable</strong>
          </h2>
          <p>
            Les présentes conditions sont soumises au droit français.
            <br />
            En cas de litige, les tribunaux compétents seront ceux de
            Saint-Étienne.
          </p>
        </motion.div>
      </motion.section>
    </>
  );
};

export default PolitiqueDeConfidentialite;
