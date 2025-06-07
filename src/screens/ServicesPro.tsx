import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

const ServicesPro: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Service de nettoyage professionnel à Saint-Étienne | STM</title>
        <meta
          name="description"
          content="STM propose des services de nettoyage professionnel à Saint-Étienne pour salles de sport, garages, concessions automobiles, cinémas, commerces et établissements recevant du public. Nettoyage régulier ou ponctuel, sur mesure."
        />
        <meta
          name="keywords"
          content="nettoyage professionnel Saint-Étienne, nettoyage salle de sport, entretien garage automobile, nettoyage concessionnaire Saint-Étienne, propreté cinéma, nettoyage ERP, entreprise nettoyage commerce Loire, hygiène établissement recevant du public, STM propreté"
        />
      </Helmet>

      <motion.section
        className="services-page"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 60 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h1>Professionnel </h1>

        <div className="service-section">
          <div className="service-image">
            <img
              src="/images/services/service-pro.png"
              alt="Nettoyage professionnel Saint-Étienne"
            />
          </div>

          <div className="service-content">
            <h2>Hygiène et propreté pour vos locaux recevant du public</h2>
            <p>
              Avec plus de 20 ans d’expérience, <strong>STM</strong> est le
              partenaire de confiance des{" "}
              <strong>
                entreprises et établissements recevant du public à Saint-Étienne
              </strong>{" "}
              et dans la Loire. Nos équipes spécialisées assurent l’
              <strong>entretien complet de vos locaux professionnels</strong> :
              commerces, agences, entrepôts, mais aussi lieux à forte affluence
              comme les <strong>salles de sport</strong>,{" "}
              <strong>cinémas</strong>, <strong>garages automobiles</strong> ou{" "}
              <strong>concessions</strong>.
            </p>
            <p>
              Nous proposons des <strong>prestations sur mesure</strong>,
              régulières ou ponctuelles, pour garantir la propreté, la sécurité
              sanitaire et l’image de votre structure auprès de votre clientèle
              et de vos collaborateurs.
            </p>
            <ul>
              <li>Nettoyage de showroom, réception et bureaux</li>
              <li>
                Entretien de salles de sport : machines, vestiaires, douches
              </li>
              <li>Nettoyage de parkings, ateliers et halls d’exposition</li>
              <li>Dépoussiérage de mobilier et équipements électroniques</li>
              <li>Lavage de vitres, vitrines, enseignes et accès vitrés</li>
              <li>Traitement des sols : aspiration, monobrosse, décapage</li>
              <li>
                Désinfection des zones de contact : poignées, sanitaires,
                comptoirs
              </li>
            </ul>

            <p>
              Tous nos agents sont <strong>formés, équipés et discrets</strong>,
              avec une{" "}
              <strong>
                intervention possible en dehors des heures d’ouverture
              </strong>
              .
            </p>

            <div className="seo-section">
              <h2>STM, votre expert propreté à Saint-Étienne</h2>
              <ul>
                <li>Spécialiste du nettoyage pour les ERP et commerces</li>
                <li>Contrats d’entretien personnalisés selon vos horaires</li>
                <li>Service réactif et suivi qualité permanent</li>
                <li>Matériel haute performance pour résultats durables</li>
                <li>Prestations écoresponsables sur demande</li>
              </ul>
            </div>

            <button className="service-button">Demander un devis</button>
          </div>
        </div>

        <div className="materials-section">
          <h2>Des moyens techniques professionnels</h2>
          <p>
            Notre flotte (Fiat Scudo, Opel Combo) est équipée pour assurer une
            logistique fluide et ponctuelle. Nos techniciens disposent de{" "}
            <strong>
              monobrosses, aspirateurs industriels, balayeuses et nettoyeurs
              haute pression
            </strong>{" "}
            adaptés aux grandes surfaces ou zones complexes.
          </p>
          <p>
            Nous intervenons à Saint-Étienne, La Talaudière,
            Andrézieux-Bouthéon, Firminy, Saint-Chamond, et dans toute la Loire.
          </p>
          <img src="/images/locaux/VoitureSTM.png" alt="" />
        </div>
      </motion.section>
    </>
  );
};

export default ServicesPro;
