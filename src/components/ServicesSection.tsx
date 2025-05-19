import React, { useRef } from "react";

import { motion } from "framer-motion";

import { FaCar, FaSearch, FaStar } from "react-icons/fa";

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
      icon: <FaCar size={50} />,
      title: "servicesSection.saleTitle",
      description: "servicesSection.saleDescription",
    },
    {
      id: 2,
      icon: <FaSearch size={50} />,
      title: "servicesSection.searchTitle",
      description: "servicesSection.searchDescription",
    },
    {
      id: 3,
      icon: <FaStar size={50} />,
      title: "servicesSection.exceptionTitle",
      description: "servicesSection.exceptionDescription",
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
      {services.map((service, index) => (
        <motion.div
          key={service.id}
          className="service-item"
          transition={{ delay: index * 0.2 }} // Délai progressif entre chaque service
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
