import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

const ServicesPro: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Nettoyage professionnel à Saint-Étienne | STM</title>
        <meta
          name="description"
          content="STM propose des services de nettoyage professionnel à Saint-Étienne pour bureaux, entreprises, commerces, laboratoires et cabinets. Service sur mesure, réactif et rigoureux."
        />
        <meta
          name="keywords"
          content="nettoyage professionnel Saint-Étienne, entretien bureaux entreprises, nettoyage locaux commerciaux, service de propreté Loire, STM nettoyage professionnel"
        />
      </Helmet>

      <motion.section
        className="services-page"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 60 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h1>Professionnels</h1>

        <div className="service-hero">
          <img
            src="/images/services/service-pro.png"
            alt="Nettoyage professionnel Saint-Étienne"
          />
        </div>

        <div className="service-content">
          <p>
            <strong>
              Vous êtes une entreprise, un commerce, un cabinet médical ou un
              espace industriel ?
            </strong>{" "}
            STM vous accompagne avec une offre de nettoyage sur mesure, discrète
            et efficace.
          </p>
          <p>
            Basés à Saint-Étienne, nous intervenons rapidement sur l'ensemble de
            la Loire. Nos équipes expérimentées assurent un entretien
            irréprochable de vos locaux selon un cahier des charges strictement
            défini avec vous.
          </p>

          <h2>Nos prestations</h2>
          <ul>
            <li>
              Nettoyage et désinfection de bureaux, open space et locaux
              partagés
            </li>
            <li>Entretien des sanitaires, cuisines et espaces de pause</li>
            <li>Lavage de vitres, même en hauteur ou accès difficile</li>
            <li>Remise en état après travaux ou sinistres</li>
            <li>Décapage des sols, lessivage des murs</li>
            <li>
              Dépoussiérage de matériel informatique, mobilier et équipements
            </li>
            <li>Gestion des déchets et vidage des poubelles</li>
            <li>Débarras d'encombrants et nettoyage en profondeur</li>
          </ul>

          <h2>Pourquoi choisir STM ?</h2>
          <ul>
            <li>Un interlocuteur unique et réactif</li>
            <li>
              Des agents formés, discrets et respectueux des normes d'hygiène
            </li>
            <li>Des produits écologiques et respectueux de l’environnement</li>
            <li>
              Un suivi qualité régulier et des ajustements possibles à tout
              moment
            </li>
            <li>
              Une flexibilité d’intervention selon vos horaires et contraintes
            </li>
          </ul>

          <h2>Demandez votre devis personnalisé</h2>
          <p>
            N'hésitez pas à nous contacter pour une étude gratuite de vos
            besoins. Notre équipe se déplace sur site afin d'évaluer les
            spécificités de vos locaux et établir une proposition claire et
            transparente.
          </p>

          <button className="service-button">Demander un devis</button>
        </div>
      </motion.section>
    </>
  );
};

export default ServicesPro;
