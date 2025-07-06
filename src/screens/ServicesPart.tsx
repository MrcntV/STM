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
      "/contact?type=particulier&message=Bonjour,%20je%20souhaite%20obtenir%20un%20devis%20pour%20le%20nettoyage%20à%20domicile.#contact-form"
    );
  };
  return (
    <>
      <Helmet>
        <html lang="fr" />
        <title>
          Nettoyage à domicile pour particuliers à Saint-Étienne – STM
        </title>
        <meta charSet="UTF-8" />
        <meta httpEquiv="Content-Language" content="fr" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="STM Nettoyage" />
        <meta name="copyright" content="STM Nettoyage" />
        <meta
          name="image"
          content="https://stm-nettoyage.fr/stm-logo-512px.png"
        />
        <meta
          name="description"
          content="Ménage, vitres, débarras et désinfection à domicile : STM propose un service professionnel pour les particuliers à Saint-Étienne et dans la Loire. Devis gratuit sous 24h."
        />
        <meta
          name="keywords"
          content="nettoyage domicile Saint-Étienne, ménage particulier, nettoyage vitres maison, désinfection appartement, débarras garage cave, STM nettoyage Loire, nettoyage haute pression, devis ménage particulier"
        />
        <link
          rel="canonical"
          href="https://stm-nettoyage.fr/services/particuliers"
        />

        {/* Open Graph */}
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Service de nettoyage pour particuliers – STM à Saint-Étienne"
        />
        <meta
          property="og:description"
          content="Nettoyage régulier, vitres, débarras ou désinfection : STM intervient avec professionnalisme à votre domicile. Demandez un devis gratuit."
        />
        <meta
          property="og:url"
          content="https://stm-nettoyage.fr/services/particuliers"
        />
        <meta property="og:site_name" content="STM Nettoyage" />
        <meta
          property="og:image"
          content="https://stm-nettoyage.fr/stm-logo-512px.png"
        />

        {/* Twitter Card */}
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
          content="https://stm-nettoyage.fr/stm-logo-512px.png"
        />

        {/* JSON-LD Schema.org */}
        <script type="application/ld+json">
          {`
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Nettoyage à domicile pour particuliers",
        "provider": {
          "@type": "Organization",
          "name": "STM Nettoyage",
          "url": "https://stm-nettoyage.fr",
          "logo": {
            "@type": "ImageObject",
            "url": "https://stm-nettoyage.fr/stm-logo-512px.png"
          }
        },
        "areaServed": {
          "@type": "Place",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Saint-Étienne",
            "addressCountry": "FR"
          }
        },
        "description": "Ménage, vitres, débarras et désinfection à domicile : STM propose un service professionnel pour les particuliers à Saint-Étienne et dans la Loire."
      }
    `}
        </script>
      </Helmet>

      <motion.section
        className="services-page"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 60 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h1>Particuliers</h1>

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
              <br />
              Nous proposons également le{" "}
              <strong>nettoyage après déménagement</strong>, l'
              <strong>
                entretien de maison ou d'appartement avant location
              </strong>{" "}
              ou encore la <strong>remise en état après sinistre</strong>.
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
                Mise en propreté de vos locaux avant relocation, démenagement ou
                vente.
              </li>
            </ul>

            <p>
              Nous établissons un <strong>devis gratuit personnalisé</strong>{" "}
              sous 24h.
            </p>
            <div className="seo-section">
              <h2>
                Pourquoi faire appel à STM pour l'entretien de votre domicile ?
              </h2>
              <p>
                Dans un secteur où le <strong>turn-over est élevé</strong>,
                notre entreprise se distingue par la stabilité et l'expérience
                de ses équipes. Nos <strong>agents de propreté</strong> sont
                rigoureusement sélectionnés et passionnés par leur métier. Nous
                garantissons ainsi des
                <strong>prestations de nettoyage à domicile</strong> fiables,
                discrètes et de haute qualité, à <strong>Saint-Étienne</strong>,
                dans la
                <strong>Loire</strong> et les communes environnantes.
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
            Chez STM, nous mettons à disposition des particuliers le même niveau
            d’exigence et d'équipement que pour nos prestations
            professionnelles. Nos véhicules (Opel Combo, Fiat Doblò) sont
            équipés pour nous permettre d’intervenir rapidement et efficacement
            à votre domicile.
          </p>
          <p>
            Nos équipes utilisent du <strong>matériel haut de gamme</strong>{" "}
            adapté au nettoyage en profondeur : <strong>monobrosses</strong>{" "}
            pour les sols, <strong>aspirateurs eau et poussière</strong>{" "}
            puissants, <strong>nettoyeurs haute pression</strong> pour les
            extérieurs, le tout complété par des produits d’entretien
            professionnels respectueux des surfaces et de l’environnement.
          </p>
          <p>
            <strong>Zone d’intervention :</strong> Saint-Étienne, La Ricamarie,
            Le Chambon-Feugerolles, Firminy, Saint-Genest-Lerpt,
            Roche-la-Molière, ainsi que dans les communes limitrophes de la
            Loire.
          </p>

          <div className="lazy-wrapper">
            <LazyLoadImage
              width={"100%"}
              height={"100%"}
              src="/images/locaux/images-optimized/VoitureSTM-800.webp"
              srcSet="/images/locaux/images-optimized/VoitureSTM-400.webp 400w, /images/locaux/images-optimized/VoitureSTM-800.webp 800w, /images/locaux/images-optimized/VoitureSTM-1200.webp 1200w"
              sizes="(max-width: 600px) 100vw, 50vw"
              alt="Véhicule STM - Service de nettoyage à domicile pour particuliers à Saint-Étienne"
              effect="blur"
            />
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default ServicesPart;
