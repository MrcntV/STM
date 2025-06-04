import React from "react";
import { Helmet } from "react-helmet";

import Services from "../components/Services";
import ServicesSection from "../components/ServicesSection";
import Banner from "../components/Banner";
import STMIntroSection from "../components/STMIntroSection";

const Home: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>STM - Services de Nettoyage</title>
        <meta
          name="description"
          content="STM est votre partenaire de confiance pour le nettoyage de locaux professionnels et d’habitations. Des services efficaces, accessibles et modernes pour particuliers et entreprises."
        />
        <meta charSet="UTF-8" />
        <meta httpEquiv="Content-Language" content="fr" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="nettoyage, STM, ménage, entreprise de nettoyage, propreté, entretien, locaux, particuliers, professionnels, services, désinfection"
        />
        <meta name="author" content="V. Marconnet" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph / Facebook */}
        <meta property="og:title" content="STM - Services de Nettoyage" />
        <meta
          property="og:description"
          content="Services de nettoyage efficaces et accessibles pour particuliers et professionnels. Découvrez une approche moderne et soignée du ménage."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://stm-nettoyage.fr" />
        <meta
          property="og:image"
          content="https://stm-nettoyage.fr/og-image.jpg"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="STM - Services de Nettoyage" />
        <meta
          name="twitter:description"
          content="Une entreprise de nettoyage à l’approche moderne, ludique et professionnelle. Pour vos locaux, bureaux, ou maison."
        />
        <meta
          name="twitter:image"
          content="https://stm-nettoyage.fr/twitter-card.jpg"
        />

        <link rel="canonical" href="https://stm-nettoyage.fr" />
      </Helmet>

      <STMIntroSection />

      <Services />

      <ServicesSection />

      <Banner />
    </>
  );
};

export default Home;
