import React, { useRef } from "react";

import { useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";

const RMGservices: React.FC = () => {
  const navigate = useNavigate();
  const { lang } = useParams<{ lang?: string }>();

  const selectedLang = lang && ["en", "fr", "de"].includes(lang) ? lang : "fr";

  // Référence pour détecter la visibilité
  const ref = useRef(null);

  // **Variants d'animation (montée douce)**
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.6, ease: "easeIn" },
    },
  };

  return (
    <motion.div
      ref={ref}
      className="auto-services-container"
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <div className="auto-services-content">
        {/* Image avec animation */}
        <motion.img
          src="/images/locaux/local.png"
          alt={"images local"}
          className="auto-services-image"
        />

        {/* Texte avec animations */}
        <motion.div className="auto-services-text" variants={fadeUpVariants}>
          <h2 className="auto-services-title">
            Une expertise locale depuis 1996
          </h2>
          <p className="auto-services-description">
            STM entretient vos locaux depuis 29 ans. <br />
            Créée en 1996 et reprise en 2012 par Bernard POLLET, STM assure au
            quotidien le nettoyage et l’entretien de plus de 40 000 m² de locaux
            professionnels et particuliers (bureaux, parties communes,
            commerces, etc.) sur l’agglomération de Saint-Étienne.
          </p>
          <motion.button
            className="auto-services-button"
            onClick={() => navigate(`/${selectedLang}/services`)}
            variants={fadeUpVariants}
            transition={{ delay: 0.2 }}
          >
            {"Nos services"}
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default RMGservices;
