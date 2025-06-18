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
        <html lang="fr" />
        <title>Accueil – STM Nettoyage à Saint-Étienne</title>
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
          content="STM est votre partenaire de confiance pour le nettoyage de locaux professionnels et particuliers à Saint-Étienne. Qualité, fiabilité et réactivité depuis 1996."
        />
        <meta
          name="keywords"
          content="nettoyage, STM, ménage, entreprise de nettoyage, propreté, entretien, Saint-Étienne, particuliers, professionnels, désinfection, bureaux, locaux"
        />
        <link rel="canonical" href="https://stm-nettoyage.fr" />

        {/* Open Graph */}
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="STM Nettoyage" />
        <meta
          property="og:title"
          content="Accueil – STM Nettoyage à Saint-Étienne"
        />
        <meta
          property="og:description"
          content="Services de nettoyage modernes et efficaces pour particuliers et professionnels à Saint-Étienne. Faites appel à STM, expert local depuis 1996."
        />
        <meta property="og:url" content="https://stm-nettoyage.fr" />
        <meta
          property="og:image"
          content="https://stm-nettoyage.fr/stm-logo-512px.png"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="STM Nettoyage – Propreté à Saint-Étienne"
        />
        <meta
          name="twitter:description"
          content="Entreprise de nettoyage à Saint-Étienne depuis 1996. Locaux, bureaux, commerces, logements : un service fiable, rapide et sur-mesure."
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
        "@type": "WebSite",
        "name": "STM Nettoyage",
        "url": "https://stm-nettoyage.fr",
        "description": "Entreprise de nettoyage à Saint-Étienne depuis 1996. Particuliers et professionnels : nettoyage, entretien, désinfection, vitres, débarras, etc.",
        "inLanguage": "fr-FR",
        "publisher": {
          "@type": "Organization",
          "name": "STM Nettoyage",
          "logo": {
            "@type": "ImageObject",
            "url": "https://stm-nettoyage.fr/stm-logo-512px.png"
          }
        }
      }
    `}
        </script>
      </Helmet>

      <STMIntroSection />

      <Services />

      <ServicesSection />

      <Banner />
    </>
  );
};

export default Home;
