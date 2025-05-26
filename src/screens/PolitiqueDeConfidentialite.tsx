import React from "react";
import { motion } from "framer-motion";
import Banner from "../components/Banner";

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
    <motion.section
      className="legal-container"
      initial="hidden"
      animate="show"
      exit="hidden"
    >
      <motion.h1 variants={fadeInVariants} className="legal-title">
        Politique de Confidentialité
      </motion.h1>

      <motion.div variants={fadeInVariants} className="legal-section">
        <h2>1. Responsable du traitement</h2>
        <p>
          Vincent-Nicolas Marconnet
          <br />
          Auto-entrepreneur
          <br />
          18 bis route de Bellegarde, 42330 Saint-Galmier
          <br />
          SIRET : 980 5868 2000 0014
          <br />
          Email : contact@stm-nettoyage.fr
        </p>
      </motion.div>

      <motion.div variants={fadeInVariants} className="legal-section">
        <h2>2. Données collectées</h2>
        <p>
          Aucune donnée personnelle n'est collectée par le site.
          <br />
          Aucune inscription, connexion ou formulaire n'est proposé.
        </p>
      </motion.div>

      <motion.div variants={fadeInVariants} className="legal-section">
        <h2>3. Analyse statistique</h2>
        <p>
          Le site n'utilise pas d'analyse de statistiques, ni de cookies
          <br />
          Les adresses IP ne sont ni stockées ni recoupées.
          <br />
          Aucune information permettant d'identifier un utilisateur n'est
          collectée.
        </p>
      </motion.div>

      <motion.div variants={fadeInVariants} className="legal-section">
        <h2>4. Vos droits</h2>
        <p>
          Conformément au RGPD, vous disposez des droits suivants :<br />
          - Droit à l'information
          <br />
          - Droit d'accès, de rectification ou d'effacement (non applicable ici
          car aucune donnée personnelle n'est collectée)
          <br />
          Contact : contact@stm-nettoyage.fr
        </p>
      </motion.div>

      <motion.div variants={fadeInVariants} className="legal-section">
        <h2>5. Sécurité</h2>
        <p>
          Le site est sécurisé via HTTPS.
          <br />
          Aucun tiers publicitaire ou traqueur n'est utilisé.
        </p>
      </motion.div>

      <motion.div variants={fadeInVariants} className="legal-section">
        <h2>6. Modifications</h2>
        <p>
          Cette politique peut évoluer.
          <br />
          Toute mise à jour sera indiquée sur cette page avec la date de
          révision.
        </p>
      </motion.div>

      <motion.div variants={fadeInVariants} className="legal-section">
        <h2>7. Droit applicable</h2>
        <p>
          Les présentes conditions sont soumises au droit français.
          <br />
          En cas de litige, les tribunaux compétents seront ceux de
          Saint-Étienne.
        </p>
      </motion.div>

      <Banner />
    </motion.section>
  );
};

export default PolitiqueDeConfidentialite;
