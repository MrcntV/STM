import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

const LegalMentions: React.FC = () => {
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
        <title>Mentions légales – STM Nettoyage</title>
        <meta
          name="description"
          content="Consultez les mentions légales du site stm-nettoyage.fr. Éditeur, hébergeur, propriété intellectuelle et politique de confidentialité de STM Nettoyage."
        />
        <meta charSet="UTF-8" />
        <meta httpEquiv="Content-Language" content="fr" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://stm-nettoyage.fr/mentions-legales"
        />

        {/* Open Graph */}
        <meta property="og:title" content="Mentions légales – STM Nettoyage" />
        <meta
          property="og:description"
          content="Mentions légales du site stm-nettoyage.fr : informations sur l'éditeur, l'hébergeur et la gestion des données."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://stm-nettoyage.fr/mentions-legales"
        />
        <meta
          property="og:image"
          content="https://stm-nettoyage.fr/images/og-image.png"
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Mentions légales – STM Nettoyage" />
        <meta
          name="twitter:description"
          content="Informations légales et juridiques du site STM Nettoyage à Saint-Étienne."
        />
        <meta
          name="twitter:image"
          content="https://stm-nettoyage.fr/images/twitter-card.png"
        />
      </Helmet>
      <motion.div
        className="legal-header"
        initial="hidden"
        animate="show"
        exit="hidden"
      >
        <motion.h1 variants={fadeInVariants} className="legal-title">
          MENTIONS LÉGALES
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
            <strong>1. Éditeur du site</strong>
          </h2>
          <p>
            Ce site est édité par :
            <br />
            <strong>Raison sociale :</strong> Vincent-Nicolas Marconnet
            <br />
            <strong>Forme juridique :</strong> Auto-entrepreneur
            <br />
            <strong>Siège social :</strong> 18 bis route de Bellegarde - 42330
            Saint-Galmier
            <br />
            <strong>SIRET :</strong> 980 5868 2000 0014
            <br />
            <strong>TVA :</strong> Non applicable selon article 293 B du CGI
            <br />
            <strong>Responsable de publication :</strong> Vincent-Nicolas
            Marconnet
            <br />
            <strong>Email :</strong>{" "}
            <a href="mailto:contact@stm-nettoyage.fr">
              contact@stm-nettoyage.fr
            </a>
          </p>

          <h2 className="legal-titre-secondaire">
            <strong>2. Hébergement</strong>
          </h2>
          <p>
            Ce site est hébergé par : <strong>Hostinger</strong> —{" "}
            <a
              href="https://www.hostinger.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.hostinger.com
            </a>
          </p>

          <h2 className="legal-titre-secondaire">
            <strong>3. Propriété intellectuelle</strong>
          </h2>
          <p>
            Tous les contenus présents sur le site (
            <strong>textes, images, vidéos, design, code</strong>...) sont la
            propriété exclusive de <strong>STM</strong> ou font l’objet
            d’autorisations spécifiques.
            <br />
            <strong>Toute reproduction est interdite</strong> sans accord
            préalable.
          </p>

          <h2 className="legal-titre-secondaire">
            <strong>4. Responsabilité</strong>
          </h2>
          <p>
            <strong>STM</strong> ne saurait être tenu responsable de l’usage
            fait du site ou des erreurs éventuelles dans le contenu.
          </p>

          <h2 className="legal-titre-secondaire">
            <strong>5. Données personnelles</strong>
          </h2>
          <p>
            <strong>Aucune donnée personnelle</strong> n’est collectée via le
            site.
          </p>

          <h2 className="legal-titre-secondaire">
            <strong>6. Cookies</strong>
          </h2>
          <p>
            Le site <strong>n’utilise aucun cookie</strong> de suivi, marketing
            ou publicitaire.
            <br />
            Pour plus d'informations sur vos droits, consultez :{" "}
            <a
              href="https://www.cnil.fr/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong>CNIL.fr</strong>
            </a>
          </p>
        </motion.div>
      </motion.section>
    </>
  );
};

export default LegalMentions;
