import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { FaBuilding, FaUsers, FaHome } from "react-icons/fa";

const ServicesPage: React.FC = () => {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Helmet>
        <title>Nos services de nettoyage à Saint-Étienne | STM</title>
        <meta
          name="description"
          content="Découvrez les services de nettoyage professionnels, pour particuliers et copropriétés proposés par STM à Saint-Étienne. Nettoyage bureaux, vitres, espaces verts, débarras et entretien sur mesure."
        />
        <meta
          name="keywords"
          content="nettoyage professionnel Saint-Étienne, entretien bureaux, nettoyage copropriété, ménage particulier, nettoyage vitres, entretien espaces verts, STM nettoyage, entreprise de propreté Loire, débarras Saint-Étienne"
        />
      </Helmet>

      <motion.section
        className="services-page"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 60 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h1>NOS SERVICES</h1>
        <div className="services-links">
          <h2 className="services-link-title">Vous êtes ?</h2>
          <div
            className="services-link-block"
            onClick={() => scrollToSection("pro-section")}
          >
            <FaBuilding size={20} /> <span>Professionnel</span>
          </div>
          <div
            className="services-link-block"
            onClick={() => scrollToSection("copro-section")}
          >
            <FaUsers size={20} /> <span>Copropriété</span>
          </div>
          <div
            className="services-link-block"
            onClick={() => scrollToSection("particulier-section")}
          >
            <FaHome size={20} /> <span>Particulier</span>
          </div>
        </div>

        <div className="service-section" id="pro-section">
          <div className="service-image">
            <img
              src="/images/services/service-pro.png"
              alt="Nettoyage professionnel Saint-Étienne"
            />
          </div>
          <div className="service-content">
            <h2>Service aux professionnels</h2>
            <p>
              <strong>STM</strong> intervient auprès des{" "}
              <strong>entreprises, bureaux, laboratoires, ateliers</strong> pour
              un <strong>nettoyage régulier ou ponctuel</strong> adapté à vos
              besoins.
            </p>
            <ul>
              <li>Remise en état après travaux</li>
              <li>Décapage des sols, lessivage des murs</li>
              <li>Nettoyage des faïences et sanitaires</li>
              <li>Lavage de vitres, y compris en accès difficile</li>
              <li>Débarras d'encombrants</li>
              <li>Remise en état après sinistre</li>
            </ul>
            <button className="service-button">Demander un devis</button>
          </div>
        </div>

        <div className="service-section" id="copro-section">
          <div className="service-image">
            <img
              src="/images/services/service-copro.png"
              alt="Nettoyage copropriété Saint-Étienne"
            />
          </div>
          <div className="service-content">
            <h2>Syndics et copropriétés</h2>
            <p>
              <strong>STM</strong> assure l’
              <strong>entretien des parties communes</strong> d’immeubles sur la
              région de Saint-Étienne.
            </p>
            <ul>
              <li>Remplacement de conciergerie</li>
              <li>Remise en état d’immeubles</li>
              <li>Nettoyage avant relocation</li>
              <li>Entretien des espaces verts</li>
              <li>Relampage et enlèvement des encombrants</li>
            </ul>
            <button className="service-button">Demander un devis</button>
          </div>
        </div>

        <div className="service-section" id="particulier-section">
          <div className="service-image">
            <img
              src="/images/services/service-particulier.png"
              alt="Service nettoyage particulier STM"
            />
          </div>
          <div className="service-content">
            <h2>Services aux particuliers</h2>
            <p>
              <strong>STM</strong> vous propose un service complet pour votre
              domicile ou vos dépendances.
            </p>
            <ul>
              <li>
                <strong>Nettoyage :</strong> vitres, moquettes, cuisine, salle
                de bain, peinture murale, sols
              </li>
              <li>
                <strong>Espaces verts :</strong> tonte, taille de haies, lavage
                haute pression
              </li>
              <li>
                <strong>Débarras :</strong> caves, greniers, garages,
                dépendances
              </li>
            </ul>
            <button className="service-button">Demander un devis</button>
          </div>
        </div>

        <div className="materials-section">
          <h3>Moyens matériels</h3>
          <p>
            Nos équipes disposent de véhicules utilitaires tels que{" "}
            <strong>Opel Combo</strong> ou <strong>Fiat Scudo</strong>, ainsi
            que de matériel professionnel :{" "}
            <strong>
              monobrosse, aspirateur eau et poussière, nettoyeur haute pression
            </strong>
            , etc.
            <br />
            Grâce à nos équipements modernes, nous assurons un travail{" "}
            <strong>efficace</strong>, <strong>rigoureux</strong> et{" "}
            <strong>discret</strong>.
          </p>
        </div>
      </motion.section>
    </>
  );
};

export default ServicesPage;
