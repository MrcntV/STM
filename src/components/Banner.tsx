import React, { useRef } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";

import { motion } from "framer-motion";

const Banner: React.FC = () => {
  const navigate = useNavigate();
  const { lang } = useParams<{ lang?: string }>();
  const location = useLocation(); // Récupération de l'URL pour forcer le re-render

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
      key={location.pathname} // ⚡ Force le re-render à chaque changement de page
      ref={ref}
      className="banner"
      initial="hidden"
      animate="show"
      exit="exit"
    >
      {/* Animation du texte */}
      <motion.p
        variants={fadeUpVariants}
        dangerouslySetInnerHTML={{ __html: "banner.text" }}
      />

      {/* Animation du bouton avec léger délai */}
      <motion.button
        className="contact-button"
        onClick={() => navigate(`/${selectedLang}/contact`)}
        variants={fadeUpVariants}
        transition={{ delay: 0.2 }}
      >
        {"banner.contact"}
      </motion.button>
    </motion.div>
  );
};

export default Banner;
