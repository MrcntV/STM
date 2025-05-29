import React, { useRef } from "react";

import { motion } from "framer-motion";

import { FaBriefcase, FaBuilding, FaHome } from "react-icons/fa";

const ServicesSection: React.FC = () => {
  // Référence pour détecter la visibilité
  const ref = useRef(null);

  // Variants d'animation (montée douce)
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
      icon: <FaBriefcase size={50} />,
      title: "Professionnels",
      description: "Bureaux, commerces et locaux pros.",
    },
    {
      id: 2,
      icon: <FaBuilding size={50} />,
      title: "Copropriétés",
      description: "Entretien des parties communes.",
    },
    {
      id: 3,
      icon: <FaHome size={50} />,
      title: "Particuliers",
      description: "Logements, jardins, débarras.",
    },
  ];
  return (
    <motion.div
      ref={ref}
      className="services-container"
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <h2 className="services-header">NOS SERVICES</h2>
      {services.map((service, index) => (
        <motion.div
          key={service.id}
          className="service-item"
          transition={{ delay: index * 0.2 }}
        >
          <motion.div className="service-icon">{service.icon}</motion.div>
          <motion.h3 className="service-title" variants={fadeUpVariants}>
            {service.title}
          </motion.h3>
          <motion.p className="service-description" variants={fadeUpVariants}>
            {service.description}
          </motion.p>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ServicesSection;
