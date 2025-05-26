import React from "react";
import { motion } from "framer-motion";

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
        <motion.p
          variants={fadeInVariants}
          className="legal-intro legal-section-0"
        >
          Mise à jour : 5 Mai, 2025
          <br />
          <br />
          <h2 className="legal-titre-secondaire">
            {" "}
            <strong> 1. Éditeur du site</strong>{" "}
          </h2>
          <p className="">
            <br />
            Ce site est édité par :
            <br />
            <strong>Raison sociale :</strong> Vincent-Nicolas Marconnet
            <br />
            Forme juridique : Auto-entrepreneur
            <br />
            Siège social : 18 bis route de Bellegarde - 42330 Saint-Galmier
            <br />
            SIRET : 980 5868 2000 0014
            <br />
            TVA : Non applicable selon article 293 B du CGI
            <br />
            Responsable de publication : Vincent-Nicolas Marconnet
            <br />
            Email : contact@stm-nettoyage.fr
            <br />
          </p>
          <br />
          <h2 className="legal-titre-secondaire">
            {" "}
            <strong> 2. Hébergement</strong>
          </h2>{" "}
          <p className="">
            <br />
            Ce site est hébergé par : Hostinger — https://www.hostinger.com
            <br />
          </p>
          <br />
          <h2 className="legal-titre-secondaire">
            {" "}
            <strong> 3. Propriété intellectuelle </strong>
          </h2>
          <p className="">
            <br />
            Tous les contenus présents sur le site (textes, images, vidéos,
            design, code...) sont la propriété exclusive de STM ou font l’objet
            d’autorisations spécifiques. Toute reproduction est interdite sans
            accord préalable.
            <br />
          </p>
          <br />
          <h2 className="legal-titre-secondaire">
            {" "}
            <strong> 4. Responsabilité</strong>
          </h2>{" "}
          <br />
          <p>
            STM ne saurait être tenu responsable de l’usage fait du site ou des
            erreurs éventuelles dans le contenu.
            <br />
          </p>
          <br />
          <h2 className="legal-titre-secondaire">
            {" "}
            <strong> 5. Données personnelles</strong>
          </h2>
          <p>
            <br />
            Aucune donnée personnelle n’est collectée via le site.
            <br />
          </p>
          <br />
          <h2 className="legal-titre-secondaire">
            {" "}
            <strong> 6. Cookies</strong>
          </h2>{" "}
          <p>
            <br />
            Le site n’utilise aucun cookie de suivi, marketing ou publicitaire.
            <br />
            <br />
            Pour plus d'informations sur vos droits, consultez :
            <a
              href="https://www.cnil.fr/"
              target="_blank"
              rel="noopener noreferrer"
            >
              CNIL.fr
            </a>{" "}
          </p>
        </motion.p>
      </motion.section>
    </>
  );
};

export default LegalMentions;
