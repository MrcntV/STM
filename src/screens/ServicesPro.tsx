import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

const ServicesPro: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Nettoyage professionnel à Saint-Étienne – STM</title>
        <meta
          name="description"
          content="Nettoyage de salles de sport, commerces, garages, bureaux et ERP : STM propose un service professionnel, sur mesure et réactif à Saint-Étienne et dans la Loire."
        />
        <meta
          name="keywords"
          content="nettoyage professionnel Saint-Étienne, entreprise nettoyage ERP, propreté bureaux commerces, entretien garage auto, nettoyage concessionnaire, désinfection ERP, entretien Saint-Étienne Loire, nettoyage salle de sport, STM propreté"
        />
        <meta name="author" content="V. Marconnet" />
        <meta name="robots" content="index, follow" />
        <meta charSet="UTF-8" />
        <meta httpEquiv="Content-Language" content="fr" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href="https://stm-nettoyage.fr/services/professionnels"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Nettoyage professionnel – STM Saint-Étienne"
        />
        <meta
          property="og:description"
          content="STM intervient dans vos locaux pro : bureaux, cinémas, garages, commerces. Service fiable, réactif et discret à Saint-Étienne."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://stm-nettoyage.fr/services/professionnels"
        />
        <meta
          property="og:image"
          content="https://stm-nettoyage.fr/images/services/service-pro.png"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Nettoyage professionnel | STM Saint-Étienne"
        />
        <meta
          name="twitter:description"
          content="Nettoyage pro à Saint-Étienne : STM entretient vos locaux avec rigueur et adaptabilité. Showroom, salle de sport, vitres, désinfection."
        />
        <meta
          name="twitter:image"
          content="https://stm-nettoyage.fr/images/services/service-pro.png"
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
            <div className="lazy-wrapper">
              <LazyLoadImage
                width={"100%"}
                height={"100%"}
                src="/images/services/images-optimized/service-pro-800.webp"
                srcSet="/images/services/images-optimized/service-pro-400.webp 400w, /images/services/images-optimized/service-pro-800.webp 800w, /images/services/images-optimized/service-pro-1200.webp 1200w"
                sizes="(max-width: 600px) 100vw, 50vw"
                alt="Nettoyage professionnel Saint-Étienne"
                effect="blur"
              />
            </div>
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
              Tous nos agents sont <strong>formés, équipés et discrets</strong>.
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
            <div className="seo-section">
              <h2>Pourquoi faire appel à STM ?</h2>
              <p>
                Dans un secteur d'activité où le <strong>turn-over</strong> est
                fréquent, nous avons la particularité d'avoir des collaborateurs
                fidèles, présents dans notre entreprise depuis de nombreuses
                années. Nous nous efforçons de recruter des{" "}
                <strong>agents de propreté</strong> qui aiment leur métier et
                qui ont le <strong>sens du service</strong>. Ce{" "}
                <strong>sérieux professionnel</strong> nous permet d’assurer des{" "}
                <strong>prestations de nettoyage à domicile</strong> fiables,
                régulières et de haute qualité à <strong>Saint-Étienne</strong>{" "}
                et dans toute la <strong>Loire</strong>.
              </p>
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
          <div className="lazy-wrapper">
            <LazyLoadImage
              width={"100%"}
              height={"100%"}
              src="/images/locaux/images-optimized/VoitureSTM-800.webp"
              srcSet="/images/locaux/images-optimized/VoitureSTM-400.webp 400w, /images/locaux/images-optimized/VoitureSTM-800.webp 800w, /images/locaux/images-optimized/VoitureSTM-1200.webp 1200w"
              sizes="(max-width: 600px) 100vw, 50vw"
              alt="Véhicule STM"
              effect="blur"
            />
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default ServicesPro;
