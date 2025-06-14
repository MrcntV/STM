import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

const ServicesSyndic: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Nettoyage de copropriétés à Saint-Étienne – STM</title>
        <meta
          name="description"
          content="STM est spécialisé dans le nettoyage de copropriétés à Saint-Étienne : entretien des parties communes, relampage, gestion des containers, débarras et services ponctuels."
        />
        <meta
          name="keywords"
          content="nettoyage copropriété Saint-Étienne, entreprise entretien immeuble Loire, syndic Saint-Étienne propreté, nettoyage parties communes, relampage résidence, débarras cave copropriété, nettoyage cage escalier, STM copropriétés"
        />
        <meta name="author" content="V. Marconnet" />
        <meta name="robots" content="index, follow" />
        <meta charSet="UTF-8" />
        <meta httpEquiv="Content-Language" content="fr" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href="https://stm-nettoyage.fr/services/syndics"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Nettoyage de copropriétés – STM Saint-Étienne"
        />
        <meta
          property="og:description"
          content="Prestations professionnelles pour syndics : entretien régulier, nettoyage des parties communes, débarras, relampage. Intervention à Saint-Étienne et alentours."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://stm-nettoyage.fr/services/syndics"
        />
        <meta
          property="og:image"
          content="https://stm-nettoyage.fr/images/services/service-copro.png"
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
          content="https://stm-nettoyage.fr/images/services/service-copro.png"
        />
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

            <button className="service-button">Demander un devis</button>
          </div>
        </div>

        <div className="materials-section">
          <h2>Moyens humains et techniques</h2>
          <p>
            Nos agents de propreté sont encadrés, suivis régulièrement et
            interviennent avec du matériel adapté :{" "}
            <strong>
              aspirateurs professionnels, balayeuses, autolaveuses
            </strong>
            , produits désinfectants normés, équipements de sécurité…
          </p>
          <p>
            Nos véhicules utilitaires nous permettent d’intervenir rapidement
            sur toute la métropole stéphanoise, y compris dans les zones à accès
            restreint.
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
