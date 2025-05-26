import React from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// PAGES
import Home from "./screens/home";
import Contact from "./screens/Contact";
import LegalMentions from "./screens/LegalMentions";
import PolitiqueDeConfidentialite from "./screens/PolitiqueDeConfidentialite";

const AnimRoutes: React.FC = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/mentions-legales" element={<LegalMentions />} />
        <Route
          path="/politique-de-confidentialite"
          element={<PolitiqueDeConfidentialite />}
        />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimRoutes;
