import React from "react";
import { motion } from "framer-motion";

import AnimatedSVG from "./AnimatedSVG";

const Loader: React.FC = () => {
  return (
    <div className="loader-container">
      {/* SVG animé */}

      <AnimatedSVG />

      {/* Texte animé */}
      <motion.div
        className="loader-text"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      >
        <p>Site réalisé par V. MARCONNET</p>
      </motion.div>
    </div>
  );
};

export default Loader;
