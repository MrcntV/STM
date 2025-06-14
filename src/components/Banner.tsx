"use client";

import React, { useRef } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Banner: React.FC = () => {
  const location = useLocation();
  const ref = useRef(null);

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

  const logos = [
    {
      href: "https://www.cabinet-tardy.fr/",
      src: "/images/references/Cabinet_tardy.png",
      alt: "Cabinet Tardy - partenaire nettoyage copropriétés",
    },
    {
      href: "https://www.century21.fr/",
      src: "/images/references/Century_21.png",
      alt: "Century 21 - agence immobilière partenaire nettoyage",
    },
    {
      href: "https://www.aldi.fr/.html",
      src: "/images/references/ALDI.svg",
      alt: "ALDI - grande surface faisant confiance à STM",
    },
    {
      href: "https://www.citya.com/",
      src: "/images/references/Citya.svg",
      alt: "Citya - gestionnaire de copropriétés à Saint-Étienne",
    },
    {
      href: "https://www.immodefrance.com/",
      src: "/images/references/Immo_de_france-removebg-preview.png",
      alt: "Immo de France - partenaire entretien immeubles",
    },
    {
      href: "https://www.guitareavenue.fr/",
      src: "/images/references/Guitare_Avenue.avif",
      alt: "Guitare Avenue - magasin faisant appel à STM pour le ménage",
    },
    {
      href: "https://fr.foncia.com/",
      src: "/images/references/logo_foncia.svg",
      alt: "Foncia - syndic partenaire de l’entreprise STM",
    },
  ];

  return (
    <motion.div
      key={location.pathname}
      ref={ref}
      className="banner"
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <motion.h2
        variants={fadeUpVariants}
        dangerouslySetInnerHTML={{
          __html: "ILS NOUS FONT CONFIANCE",
        }}
      />

      {/* Mode responsive fixe */}
      <div
        className="References_logo_container"
        aria-label="Références clients STM"
      >
        {logos.map((logo, idx) => (
          <a
            href={logo.href}
            key={idx}
            target="_blank"
            rel="noopener noreferrer"
            title={logo.alt}
          >
            <LazyLoadImage
              src={logo.src}
              alt={logo.alt}
              effect="blur"
              width="100%"
              height="auto"
            />
          </a>
        ))}
      </div>

      {/* Bande défilante dès 1024px */}
      <div className="banderole-wrapper" aria-hidden="true">
        <motion.div
          className="banderole-inner"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        >
          {[...logos, ...logos].map((logo, idx) => (
            <a
              href={logo.href}
              key={`scroll-${idx}`}
              target="_blank"
              rel="noopener noreferrer"
              title={logo.alt}
            >
              <LazyLoadImage
                src={logo.src}
                alt={logo.alt}
                effect="blur"
                width="100%"
                height="auto"
              />
            </a>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Banner;
