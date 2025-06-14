import React, { useRef } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Services: React.FC = () => {
  const navigate = useNavigate();

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
        <div className="auto-services-image">
          <div className="lazy-wrapper">
            <LazyLoadImage
              src="/images//locaux/local.png"
              alt="Véhicule STM"
              effect="blur"
            />
          </div>
        </div>

        {/* Texte avec animations */}
        <motion.div className="auto-services-text" variants={fadeUpVariants}>
          <h2 className="auto-services-title">
            Une expertise locale depuis 1996
          </h2>
          <p className="auto-services-description">
            STM entretient vos locaux depuis 29 ans. <br />
            Créée en 1996 et reprise en 2012 par Bernard POLLET, STM assure au
            quotidien le nettoyage et l’entretien de plus de 8 500 m² de locaux
            professionnels et particuliers (bureaux, parties communes,
            commerces, etc.) sur l’agglomération de Saint-Étienne.
          </p>
          <motion.button
            className="auto-services-button"
            onClick={() => navigate(`/services`)}
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

export default Services;
