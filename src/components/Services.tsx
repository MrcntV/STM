import React, { useRef, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Services: React.FC = () => {
  const navigate = useNavigate();

  // Référence pour détecter la visibilité
  const ref = useRef(null);

  const [showPopup, setShowPopup] = useState(false);

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

  const popupOverlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, transition: { duration: 0.3 } },
  };

  const popupVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.4 } },
    exit: { scale: 0.9, opacity: 0, transition: { duration: 0.2 } },
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
            onClick={() => setShowPopup(true)}
            variants={fadeUpVariants}
            transition={{ delay: 0.2 }}
          >
            {"Nos services"}
          </motion.button>
        </motion.div>
      </div>
      <AnimatePresence>
        {showPopup && (
          <motion.div
            className="popup-overlay"
            variants={popupOverlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(0, 0, 0, 0.3)",
              backdropFilter: "blur(6px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 9999,
            }}
          >
            <motion.div
              className="popup"
              variants={popupVariants}
              style={{
                background: "white",
                padding: "2rem",
                borderRadius: "8px",
                boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                textAlign: "center",
              }}
            >
              <h3 style={{ marginBottom: "1rem" }}>Vous êtes :</h3>
              <button onClick={() => navigate("/services-particuliers")}>
                Particulier
              </button>
              <button onClick={() => navigate("/services-professionnels")}>
                Professionnel
              </button>
              <button onClick={() => navigate("/services-coproprietes")}>
                Syndic
              </button>
              <br />
              <button
                onClick={() => setShowPopup(false)}
                style={{ marginTop: "1rem" }}
              >
                Annuler
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Services;
