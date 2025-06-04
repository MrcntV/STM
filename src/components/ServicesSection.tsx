"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { FaBriefcase, FaBuilding, FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

const ServicesSection: React.FC = () => {
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

  const services = [
    {
      id: 1,
      icon: <FaBriefcase size={50} aria-hidden="true" />,
      title: "Professionnels",
      slug: "/services-professionnels",
      description: "Bureaux, commerces et locaux prosessionnels.",
    },
    {
      id: 2,
      icon: <FaBuilding size={50} aria-hidden="true" />,
      title: "Copropriétés",
      slug: "/services-coproprietes",
      description: "Entretien des parties communes.",
    },
    {
      id: 3,
      icon: <FaHome size={50} aria-hidden="true" />,
      title: "Particuliers",
      slug: "/services-particuliers",
      description: "Logements, jardins, débarras.",
    },
  ];

  return (
    <motion.section
      ref={ref}
      className="services-container"
      initial="hidden"
      animate="show"
      exit="exit"
      aria-labelledby="services-title"
    >
      <h2 className="services-header" id="services-title">
        NOS SERVICES
      </h2>

      <div className="services-container">
        {services.map((service, index) => (
          <motion.article
            key={service.id}
            className="service-item"
            transition={{ delay: index * 0.2 }}
            variants={fadeUpVariants}
          >
            <Link
              to={service.slug}
              title={`En savoir plus sur notre service de nettoyage pour ${service.title.toLowerCase()}`}
              aria-label={`Accéder à la page dédiée au nettoyage pour ${service.title.toLowerCase()}`}
              className="service-link"
            >
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </Link>
          </motion.article>
        ))}
      </div>
      <span className="sr-only">
        STM propose des prestations de nettoyage professionnel pour bureaux,
        copropriétés, logements, garages, concessionnaires automobiles,
        commerces, salles de sport et cinémas à Saint-Étienne et dans toute la
        Loire.
      </span>
    </motion.section>
  );
};

export default ServicesSection;
