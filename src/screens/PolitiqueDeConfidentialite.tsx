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
