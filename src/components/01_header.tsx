import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import MenuBurger from "./03_MenuBurger";

const Headers: React.FC = () => {
  // État pour suivre si l'utilisateur a scrollé en dessous de la hauteur du header
  const [scrolled, setScrolled] = useState(false);

  //  Référence pour le `<header>` afin de mesurer sa hauteur
  const headerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        const headerHeight = headerRef.current.offsetHeight / 2; // 📏 Hauteur du header
        setScrolled(window.scrollY > headerHeight);
      }
    };

    //  Ajout de l'écouteur d'événements pour détecter le scroll
    window.addEventListener("scroll", handleScroll);

    //  Nettoyage de l'écouteur lors du démontage du composant
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      ref={headerRef} // Associe la référence pour récupérer la hauteur
      id="Header"
      className="scrolled"
    >
      {/* Conteneur du menu burger */}
      <div className="containerBurger">
        <MenuBurger />
      </div>

      {/* Logo principal avec lien vers la page d'accueil */}
      <div className="containerlogo">
        <Link className="LinkHome" to="/">
          <img src="/images/logo/LogoSTM.png" alt="logo race motors group" />
        </Link>
      </div>
      <div className="containerlogo">
        <Link to="/contact">
          <button>Contactez-nous</button>
        </Link>
      </div>
    </header>
  );
};

export default Headers;
