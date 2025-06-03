import React, { useRef } from "react";
import { useLocation } from "react-router-dom";

import { motion } from "framer-motion";

const Banner: React.FC = () => {
  const location = useLocation(); // Récupération de l'URL pour forcer le re-render

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
        dangerouslySetInnerHTML={{ __html: "ILS NOUS FONT CONFIANCE" }}
      />
      <div className="References_logo_container">
        <a href="https://www.cabinet-tardy.fr/">
          <img src="/images/references/Cabinet_tardy.png" alt="" />
        </a>
        <a href="https://www.century21.fr/">
          {" "}
          <img src="/images/references/Century_21.png" alt="" />
        </a>

        <a href="https://www.aldi.fr/.html">
          <img src="/images/references/ALDI.svg" alt="" />
        </a>
        <a href="https://www.citya.com/">
          <img src="/images/references/Citya.svg" alt="" />
        </a>
        <a href="https://www.immodefrance.com/">
          <img
            src="/images/references/Immo_de_france-removebg-preview.png"
            alt=""
          />
        </a>
        <a href="https://www.guitareavenue.fr/">
          <img src="/images/references/Guitare_Avenue.avif" alt="" />
        </a>
        <a href="https://fr.foncia.com/">
          <img src="/images/references/logo_foncia.svg" alt="" />
        </a>
      </div>
    </motion.div>
  );
};

export default Banner;
