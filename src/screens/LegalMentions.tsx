import React from "react";
import { motion } from "framer-motion";
import Banner from "../components/Banner";

const LegalMentions: React.FC = () => {
  // Animation d'apparition des sections
  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      className="legal-container"
      initial="hidden"
      animate="show"
      exit="hidden"
    >
      <motion.h1 variants={fadeInVariants} className="legal-title">
        Mentions Légales & Politique de Confidentialité
      </motion.h1>

      <motion.p variants={fadeInVariants} className="legal-intro">
        La société Auto Idéaly, soucieuse des droits des individus, notamment au
        regard des traitements automatisés et dans une volonté de transparence
        avec ses clients, a mis en place une politique reprenant l’ensemble de
        ces traitements. <br />
        <br />
        Pour toute information complémentaire sur la protection des données
        personnelles, veuillez consulter :{" "}
        <a
          href="https://www.cnil.fr/"
          target="_blank"
          rel="noopener noreferrer"
        >
          CNIL.fr
        </a>
      </motion.p>

      <motion.div variants={fadeInVariants} className="legal-section">
        <h2>Article 1 - Mentions légales</h2>
        <p>
          <strong>1.1 Site :</strong> Auto Idéaly <br />
          <strong>1.2 Éditeur :</strong> Auto Idéaly SASU, 69 Rue des Narcisses,
          83230 Bormes-les-Mimosas <br />
          <strong>1.3 Hébergeur :</strong> Gandi, 63 Boulevard Masséna, 75013
          Paris.
        </p>
      </motion.div>

      <motion.div variants={fadeInVariants} className="legal-section">
        <h2>Article 2 - Accès au site</h2>
        <p>
          L'accès au site est réservé à un usage strictement personnel. Toute
          utilisation commerciale, publicitaire ou sollicitations non autorisées
          sont interdites.
        </p>
      </motion.div>

      <motion.div variants={fadeInVariants} className="legal-section">
        <h2>Article 3 - Contenu du site</h2>
        <p>
          Tous les contenus présents sur le site (textes, images, vidéos, etc.)
          sont protégés par le droit de la propriété intellectuelle et
          appartiennent à Auto Idéaly ou à ses partenaires.
        </p>
      </motion.div>

      <motion.div variants={fadeInVariants} className="legal-section">
        <h2>Article 4 - Gestion du site</h2>
        <p>
          L'éditeur se réserve le droit de suspendre ou de limiter l’accès au
          site à tout moment pour maintenance ou toute autre nécessité.
        </p>
      </motion.div>

      <motion.div variants={fadeInVariants} className="legal-section">
        <h2>Article 5 - Responsabilités</h2>
        <p>
          L'éditeur n'est pas responsable en cas de problème technique affectant
          l'accès au site ni des dommages causés par l'utilisation du site.
        </p>
      </motion.div>

      <motion.div variants={fadeInVariants} className="legal-section">
        <h2>Article 6 - Collecte des données</h2>
        <p>
          Les données personnelles collectées sont utilisées uniquement pour la
          gestion de la relation client et ne sont pas revendues à des tiers.
        </p>
      </motion.div>

      <motion.div variants={fadeInVariants} className="legal-section">
        <h2>Article 7 - Cookies</h2>
        <p>
          Le site utilise des cookies pour améliorer l’expérience utilisateur.
          L’utilisateur peut les désactiver via les paramètres de son
          navigateur.
        </p>
      </motion.div>

      <motion.div variants={fadeInVariants} className="legal-contact">
        <h2>Article 8 - Contact</h2>
        <p>
          Pour toute question, contactez-nous à :{" "}
          <a href="mailto:pierre.cizeron@agenceauto.com">
            pierre.cizeron@agenceauto.com
          </a>
        </p>
      </motion.div>

      <Banner />
    </motion.section>
  );
};

export default LegalMentions;
