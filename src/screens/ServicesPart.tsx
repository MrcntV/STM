import React from "react";
import { useNavigate } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

const ServicesPart: React.FC = () => {
  const navigate = useNavigate();
  const handleDevisClick = () => {
    navigate(
      "/contact?message=Bonjour, je souhaite obtenir un devis pour un service de nettoyage à domicile (STM - particulier).#contact-form"
    );
  };
  return (
    <>
      <Helmet>
        <title>
          Nettoyage à domicile pour particuliers à Saint-Étienne – STM
        </title>
        <meta
          name="description"
          content="Ménage, vitres, débarras et désinfection à domicile : STM propose un service professionnel pour les particuliers à Saint-Étienne et dans la Loire. Devis gratuit sous 24h."
        />
        <meta
          name="keywords"
          content="nettoyage domicile Saint-Étienne, ménage particulier, nettoyage vitres maison, désinfection appartement, débarras garage cave, STM nettoyage Loire, nettoyage haute pression, devis ménage particulier"
        />
        <meta name="author" content="V. Marconnet" />
        <meta name="robots" content="index, follow" />
        <meta charSet="UTF-8" />
        <meta httpEquiv="Content-Language" content="fr" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href="https://stm-nettoyage.fr/services/particuliers"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Service de nettoyage pour particuliers – STM à Saint-Étienne"
        />
        <meta
          property="og:description"
          content="Nettoyage régulier, vitres, débarras ou désinfection : STM intervient avec professionnalisme à votre domicile. Demandez un devis gratuit."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://stm-nettoyage.fr/services/particuliers"
        />
        <meta
          property="og:image"
          content="https://stm-nettoyage.fr/images/services/service-particulier.png"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Nettoyage à domicile – Particuliers | STM"
        />
        <meta
          name="twitter:description"
          content="Service de ménage et entretien pour particuliers à Saint-Étienne. Prestations sur-mesure avec matériel professionnel. Demande de devis rapide."
        />
        <meta
          name="twitter:image"
          content="https://stm-nettoyage.fr/images/services/service-particulier.png"
        />
      </Helmet>

      <motion.section
        className="services-page"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 60 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h1> Particuliers</h1>

        <div className="service-section">
          <div className="service-image">
            <div className="lazy-wrapper">
              <LazyLoadImage
                width={"100%"}
                height={"100%"}
                src="/images/services/images-optimized/service-particulier-800.webp"
                srcSet="/images/services/images-optimized/service-particulier-400.webp 400w, /images/services/images-optimized/service-particulier-800.webp 800w, /images/services/images-optimized/service-particulier-1200.webp 1200w"
                sizes="(max-width: 600px) 100vw, 50vw"
                alt="Service nettoyage maison particulier à Saint-Étienne"
                effect="blur"
              />
            </div>
          </div>

          <div className="service-content">
            <h2>Un accompagnement complet pour votre domicile</h2>
            <p>
              Chez <strong>STM</strong>, nous mettons notre expertise au service
              des <strong>particuliers à Saint-Étienne</strong> et dans toute la{" "}
              <strong>Loire</strong>. Nos prestations de{" "}
              <strong>nettoyage à domicile</strong> s'adaptent à tous les
              besoins, qu'il s'agisse d’un <strong>ménage régulier</strong>,
              d’un <strong>grand nettoyage de printemps</strong>, ou d’une
              intervention après un événement (travaux, déménagement, sinistre,
              etc.).
            </p>
            <p>
              Nous intervenons avec <strong>discrétion</strong>,{" "}
              <strong>respect de votre intimité</strong> et dans le{" "}
              <strong>souci du détail</strong>. Nos agents sont formés,
              rigoureux et équipés de <strong>matériel professionnel</strong>{" "}
              pour garantir un résultat impeccable.
            </p>
            <ul>
              <li>Nettoyage des vitres, encadrements, baies vitrées</li>
              <li>
                Ménage complet : cuisine, salle de bain, sols, murs, moquettes
              </li>
              <li>Désinfection après maladie ou sinistre</li>
              <li>
                Nettoyage haute pression des extérieurs (terrasses, façades,
                dalles)
              </li>

              <li>Débarras de caves, greniers, garages et dépendances</li>
              <li>
                Accompagnement pour état des lieux de sortie ou de rentrée
              </li>
            </ul>

            <p>
              Nous établissons un <strong>devis gratuit personnalisé</strong>{" "}
              sous 24h.
            </p>
            <div className="seo-section">
              <h2>Pourquoi faire appel à STM ?</h2>
              <p>
                Dans un secteur où le <strong>turn-over est élevé</strong>,
                notre entreprise se distingue par la stabilité de ses équipes.
                Nos <strong>collaborateurs expérimentés</strong> sont présents
                depuis de nombreuses années.
                <br />
                <br />
                Nous recrutons avec exigence des{" "}
                <strong>agents de propreté</strong> passionnés par leur métier
                et engagés dans la <strong>qualité du service</strong>. Ce{" "}
                <strong>sérieux professionnel</strong> nous permet d’assurer des{" "}
                <strong>prestations de nettoyage à domicile</strong> fiables,
                régulières et hautement qualitatives à{" "}
                <strong>Saint-Étienne</strong> et dans toute la{" "}
                <strong>Loire</strong>.
              </p>
            </div>

            <button className="service-button" onClick={handleDevisClick}>
              Demander un devis
            </button>
          </div>
        </div>

        <div className="materials-section">
          <h2>Des moyens professionnels au service des particuliers</h2>
          <p>
            Nous utilisons du{" "}
            <strong>matériel de qualité professionnelle</strong> pour garantir
            un nettoyage en profondeur. Nos véhicules STM (Opel Combo, Fiat
            Scudo) sont équipés pour intervenir rapidement et efficacement.
          </p>
          <p>
            Grâce à notre <strong>monobrosse</strong>, nos{" "}
            <strong>aspirateurs eau et poussière</strong>, et notre{" "}
            <strong>nettoyeur haute pression</strong>, nous répondons à toutes
            les exigences d’un ménage haut de gamme chez le particulier.
          </p>
          <p>
            <strong>Zone d’intervention :</strong> Saint-Étienne, La Ricamarie,
            Le Chambon-Feugerolles, Firminy, Saint-Genest-Lerpt,
            Roche-la-Molière, etc.
          </p>
          <div className="lazy-wrapper">
            <LazyLoadImage
              width={"100%"}
              height={"100%"}
              src="/images/locaux/images-optimized/VoitureSTM-800.webp"
              srcSet="/images/locaux/images-optimized/VoitureSTM-400.webp 400w, /images/locaux/images-optimized/VoitureSTM-800.webp 800w, /images/locaux/images-optimized/VoitureSTM-1200.webp 1200w"
              sizes="(max-width: 600px) 100vw, 50vw"
              alt="Véhicule STM nettoyage"
              effect="blur"
            />
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default ServicesPart;
