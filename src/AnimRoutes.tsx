import React from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// PAGES
import Home from "./screens/home";
import Contact from "./screens/Contact";

import ServicesPart from "./screens/ServicesPart";
import ServicesSyndic from "./screens/ServicesSyndic";
import ServicesPro from "./screens/ServicesPro";
import LegalMentions from "./screens/LegalMentions";
import PolitiqueDeConfidentialite from "./screens/PolitiqueDeConfidentialite";

const AnimRoutes: React.FC = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services-professionnels" element={<ServicesPro />} />
        <Route path="/services-coproprietes" element={<ServicesSyndic />} />
        <Route path="/services-particuliers" element={<ServicesPart />} />

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
