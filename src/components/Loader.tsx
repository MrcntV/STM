"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import AnimatedSVG from "./AnimatedSVG";

const Loader: React.FC = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 2500); // Total 2.5s
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="loader-container">
      {/* SVG animé avec fondu */}
      <AnimatePresence>
        {visible && (
          <motion.div
            key="logo"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <AnimatedSVG />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Texte animé avec fondu d'entrée et sortie */}
      <AnimatePresence>
        {visible && (
          <motion.div
            key="text"
            className="loader-text"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              ease: "easeInOut",
            }}
          >
            <p>Site réalisé par V. MARCONNET</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Loader;
