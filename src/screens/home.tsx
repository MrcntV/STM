import React from "react";
import { Helmet } from "react-helmet";

import RMGservices from "../components/RMGservices";
import ServicesSection from "../components/ServicesSection";
import Banner from "../components/Banner";

const Home: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>{"helmet.home.title"}</title>
        <meta name="description" content={"helmet.home.description"} />
        <meta charSet="UTF-8" />
        <meta httpEquiv="Content-Language" content="fr" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>

      <section className="video-container-home"></section>

      <RMGservices />

      <ServicesSection />

      <Banner />
    </>
  );
};

export default Home;
