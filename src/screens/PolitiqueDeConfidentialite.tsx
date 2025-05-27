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
    <>
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
        <motion.p
          variants={fadeInVariants}
          className="legal-intro legal-section-0"
        >
          Mise à jour : 5 Mai, 2025
          <br />
          <br />
          <h2 className="legal-titre-secondaire">
            <strong>1. Responsable du traitement</strong>
          </h2>
          <p>
            <br />
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
          <br />
          <h2 className="legal-titre-secondaire">
            <strong>2. Données collectées</strong>
          </h2>
          <p>
            <br />
            Aucune donnée personnelle n'est collectée par le site.
            <br />
            Aucune inscription, connexion ou formulaire n'est proposé.
          </p>
          <br />
          <h2 className="legal-titre-secondaire">
            <strong>3. Analyse statistique</strong>
          </h2>
          <p>
            <br />
            Le site n'utilise pas d'analyse de statistiques, ni de cookies.
            <br />
            Les adresses IP ne sont ni stockées ni recoupées.
            <br />
            Aucune information permettant d'identifier un utilisateur n'est
            collectée.
          </p>
          <br />
          <h2 className="legal-titre-secondaire">
            <strong>4. Vos droits</strong>
          </h2>
          <p>
            <br />
            Conformément au RGPD, vous disposez des droits suivants :
            <br />
            - Droit à l'information
            <br />
            - Droit d'accès, de rectification ou d'effacement (non applicable
            ici car aucune donnée personnelle n'est collectée)
            <br />
            Contact : contact@stm-nettoyage.fr
          </p>
          <br />
          <h2 className="legal-titre-secondaire">
            <strong>5. Sécurité</strong>
          </h2>
          <p>
            <br />
            Le site est sécurisé via HTTPS.
            <br />
            Aucun tiers publicitaire ou traqueur n'est utilisé.
          </p>
          <br />
          <h2 className="legal-titre-secondaire">
            <strong>6. Modifications</strong>
          </h2>
          <p>
            <br />
            Cette politique peut évoluer.
            <br />
            Toute mise à jour sera indiquée sur cette page avec la date de
            révision.
          </p>
          <br />
          <h2 className="legal-titre-secondaire">
            <strong>7. Droit applicable</strong>
          </h2>
          <p>
            <br />
            Les présentes conditions sont soumises au droit français.
            <br />
            En cas de litige, les tribunaux compétents seront ceux de
            Saint-Étienne.
          </p>
        </motion.p>
      </motion.section>
    </>
  );
};

export default PolitiqueDeConfidentialite;
