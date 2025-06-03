import React from "react";
import { motion } from "framer-motion";

import { Helmet } from "react-helmet";
import { FaPhone, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import ContactForm from "../components/05_ContactForm";
import { IoTime } from "react-icons/io5";

const Contact: React.FC = () => {
  const currentDate = new Date();

  return (
    <>
      <Helmet>
        <title>STM - Contact</title>
        <meta name="description" content={"helmet.contact.description"} />
        <meta charSet="UTF-8" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>
      <section className="DecalageHeader">
        <section className="contact-section">
          <h1>CONTACT</h1>

          <motion.div
            className="contact-info"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h2>
              STM
              <br />
              Services et Travaux de Maintenance
            </h2>
            <p>
              <FaMapMarkerAlt />
              Adresse :{" "}
              <a
                href="https://www.google.com/maps/place/Stm+Entreprise+De+Propret%C3%A9/@45.4611741,4.378661,17z/data=!3m1!4b1!4m6!3m5!1s0x47f5ac6b410c1d93:0x5e1d508422f3285c!8m2!3d45.4611741!4d4.3812359!16s%2Fg%2F11ddwwj3nc?entry=ttu&g_ep=EgoyMDI1MDUyMS4wIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
              >
                {process.env.REACT_APP_ADDRESS}
              </a>
            </p>
            <p>
              {" "}
              <IoTime />
              Horaires : Lundi – Vendredi : 8h00 – 18h00
            </p>
            <p>
              <FaPhone />
              Tel.: {process.env.REACT_APP_PHONE}
            </p>
            <p>
              <FaEnvelope />{" "}
              <a href={`mailto:${process.env.REACT_APP_CONTACT_EMAIL}`}>
                {process.env.REACT_APP_CONTACT_EMAIL}
              </a>
            </p>
          </motion.div>

          <div className="signature">
            <img src="/images/logo/signature-white.png" alt="" />
          </div>
        </section>
        <div className="contact-form-container">
          <ContactForm />
        </div>
      </section>
    </>
  );
};

export default Contact;
