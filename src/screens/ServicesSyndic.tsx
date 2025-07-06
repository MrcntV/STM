import React from "react";
import { useNavigate } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

const ServicesSyndic: React.FC = () => {
  const navigate = useNavigate();
  return (
    <>
      <Helmet>
        <html lang="fr" />
        <title>Nettoyage de copropriétés à Saint-Étienne – STM</title>
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
          content="STM est spécialisé dans le nettoyage de copropriétés à Saint-Étienne : entretien des parties communes, relampage, gestion des containers, débarras et services ponctuels."
        />
        <meta
          name="keywords"
          content="nettoyage copropriété Saint-Étienne, entreprise entretien immeuble Loire, syndic Saint-Étienne propreté, nettoyage parties communes, relampage résidence, débarras cave copropriété, nettoyage cage escalier, STM copropriétés"
        />
        <link
          rel="canonical"
          href="https://stm-nettoyage.fr/services/syndics"
        />

        {/* Open Graph */}
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Nettoyage de copropriétés – STM Saint-Étienne"
        />
        <meta
          property="og:description"
          content="Prestations professionnelles pour syndics : entretien régulier, nettoyage des parties communes, débarras, relampage. Intervention à Saint-Étienne et alentours."
        />
        <meta
          property="og:url"
          content="https://stm-nettoyage.fr/services/syndics"
        />
        <meta property="og:site_name" content="STM Nettoyage" />
        <meta
          property="og:image"
          content="https://stm-nettoyage.fr/stm-logo-512px.png"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Nettoyage copropriété | STM Saint-Étienne"
        />
        <meta
          name="twitter:description"
          content="STM accompagne les syndics de copropriétés avec rigueur et discrétion : nettoyage, entretien, désinfection et plus encore."
        />
        <meta
          name="twitter:image"
          content="https://stm-nettoyage.fr/stm-logo-512px.png"
        />

        {/* Schema.org */}
        <script type="application/ld+json">
          {`
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Nettoyage de copropriétés",
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
        "description": "Nettoyage professionnel pour les copropriétés à Saint-Étienne : entretien des parties communes, relampage, débarras, gestion des containers et interventions ponctuelles."
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
        <h1>Syndics et copropriétés</h1>

        <div className="service-section">
          <div className="service-image">
            <div className="lazy-wrapper">
              <LazyLoadImage
                width={"100%"}
                height={"100%"}
                src="/images/services/images-optimized/service-copro-800.webp"
                srcSet="/images/services/images-optimized/service-copro-400.webp 400w, /images/services/images-optimized/service-copro-800.webp 800w, /images/services/images-optimized/service-copro-1200.webp 1200w"
                sizes="(max-width: 600px) 100vw, 50vw"
                alt="Nettoyage copropriété à Saint-Étienne"
                effect="blur"
              />
            </div>
          </div>

          <div className="service-content">
            <h2>Un partenaire fiable pour la gestion de vos immeubles</h2>
            <p>
              Vous recherchez une société de nettoyage spécialisée dans les
              immeubles d’habitation collectifs ? <strong>STM</strong> met à
              disposition des syndics et gestionnaires de copropriété toute son
              expertise pour garantir la propreté, la sécurité et le confort des
              résidents.
            </p>
            <p>
              Nos interventions sont <strong>flexibles</strong>,{" "}
              <strong>planifiées</strong> et exécutées avec{" "}
              <strong>rigueur</strong> pour préserver la valeur de votre
              patrimoine immobilier à Saint-Étienne et dans la Loire.
            </p>

            <h2>Nos prestations de nettoyage en copropriété</h2>
            <ul>
              <li>
                Entretien courant des <strong>parties communes</strong> : halls,
                cages d’escalier, ascenseurs, couloirs, caves
              </li>
              <li>
                <strong>Lavage des sols</strong> (carrelage, moquette, béton…)
              </li>
              <li>
                <strong>Essuyage et dépoussiérage</strong> des rambardes, boîtes
                aux lettres, interphones, plinthes
              </li>
              <li>
                <strong>Nettoyage des vitres</strong> et portes d’entrée
              </li>
              <li>
                <strong>Débarras des encombrants</strong> dans les caves et
                locaux communs
              </li>

              <li>
                <strong>Entretien des extérieurs</strong> : cour, parking,
                espaces verts, accès véhicules
              </li>
              <li>
                Interventions <strong>ponctuelles</strong> : nettoyage après
                sinistre, après travaux ou vandalisme
              </li>
            </ul>

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

            <button
              className="service-button"
              onClick={() => {
                navigate(
                  "/contact?type=syndic&message=Bonjour,%20je%20souhaite%20obtenir%20un%20devis%20pour%20l’entretien%20de%20notre%20copropriété.#contact-form"
                );
              }}
            >
              Demander un devis
            </button>
          </div>
        </div>

        <div className="materials-section">
          <h2>Moyens humains et techniques adaptés aux copropriétés</h2>
          <p>
            Nos agents de propreté sont encadrés, formés en continu et
            interviennent avec du matériel professionnel de qualité :{" "}
            <strong>
              aspirateurs industriels, balayeuses, autolaveuses, produits
              désinfectants et équipements de sécurité
            </strong>
            . Cette organisation garantit un nettoyage efficace, fiable et
            respectueux des espaces communs et des résidents.
          </p>
          <p>
            Notre flotte de véhicules utilitaires (Fiat Doblò, Opel Combo) nous
            permet d’assurer des interventions rapides et ponctuelles, que ce
            soit à <strong>Saint-Étienne</strong>, dans l’ensemble du
            département de la <strong>Loire (42)</strong>, ou dans les{" "}
            <strong>communes limitrophes</strong>. Que vous soyez syndic ou
            gestionnaire de copropriété, vous bénéficiez ainsi d'une logistique
            maîtrisée et d'une réactivité optimale.
          </p>

          <div className="lazy-wrapper">
            <LazyLoadImage
              width={"100%"}
              height={"100%"}
              src="/images/locaux/images-optimized/VoitureSTM-800.webp"
              srcSet="/images/locaux/images-optimized/VoitureSTM-400.webp 400w, /images/locaux/images-optimized/VoitureSTM-800.webp 800w, /images/locaux/images-optimized/VoitureSTM-1200.webp 1200w"
              sizes="(max-width: 600px) 100vw, 50vw"
              alt="Véhicule STM pour intervention copropriété"
              effect="blur"
            />
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default ServicesSyndic;
