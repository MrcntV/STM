import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Loader from "./components/Loader";

// Importation des fichiers CSS
import "./App.css";
import "../src/styles/components/Header.css";
import "../src/styles/components/Footer.css";
import "../src/styles/components/MenuBurger.css";
import "../src/styles/components/ScrollToTopButton.css";
import "../src/styles/components/Button.css";
import "../src/styles/components/Loader.css";
import "../src/styles/components/Services.css";
import "../src/styles/components/ServicesSection.css";
import "../src/styles/components/Banner.css";
import "../src/styles/components/Notification.css";
import "../src/styles/components/AudioPlayer.css";
import "../src/styles/components/STMIntroSection.css";

import "../src/styles/screens/Accueil.css";
import "../src/styles/screens/contact.css";
import "../src/styles/screens/LegalMentions.css";
import "../src/styles/screens/ServicesPage.css";
import "../src/styles/screens/ServicesPro.css";
import "../src/styles/screens/ServicesPart.css";

// Importation des composants nécessaires
import Headers from "./components/01_header";
import Footer from "./components/02_footer";
import AnimRoutes from "./AnimRoutes";
import ScrollToTopButton from "./components/ScrollToTopButton";

// Importation du fournisseur de contexte

// Importation du hook de scroll
import useSmoothScroll from "./useSmoothScroll";
import NotificationManager from "./components/Notifications/NotificationManager";
import { NotificationProvider } from "./components/Notifications/NotificationContext";

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const scrollRef = useSmoothScroll(); // Utilisation du hook

  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [location.pathname]);

  useEffect(() => {
    // Simule un chargement initial de 2 secondes
    const timer = setTimeout(() => setLoading(false), 3400);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <NotificationProvider>
        <Headers />
        <main ref={scrollRef} data-scroll-container>
          <AnimRoutes />
          <ScrollToTopButton />
        </main>
        <NotificationManager />
        <Footer />
      </NotificationProvider>
    </>
  );
};

export default App;
