import React, { lazy, Suspense } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// Lazy loaded pages
const Home = lazy(() => import("./screens/home"));
const Contact = lazy(() => import("./screens/Contact"));
const ServicesPart = lazy(() => import("./screens/ServicesPart"));
const ServicesSyndic = lazy(() => import("./screens/ServicesSyndic"));
const ServicesPro = lazy(() => import("./screens/ServicesPro"));
const LegalMentions = lazy(() => import("./screens/LegalMentions"));
const PolitiqueDeConfidentialite = lazy(
  () => import("./screens/PolitiqueDeConfidentialite")
);

const AnimRoutes: React.FC = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={<div className="loader"></div>}>
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
      </Suspense>
    </AnimatePresence>
  );
};

export default AnimRoutes;
