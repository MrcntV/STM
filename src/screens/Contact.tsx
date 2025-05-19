import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

import { Helmet } from "react-helmet";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaPhone,
  FaMapMarkerAlt,
  FaEnvelope,
} from "react-icons/fa";
import ContactForm from "../components/05_ContactForm";

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const currentDate = new Date();

  return (
    <>
      <Helmet>
        <title>{"helmet.contact.title"}</title>
        <meta name="description" content={"helmet.contact.description"} />
        <meta charSet="UTF-8" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>
      <section className="DecalageHeader">
        <section className="contact-section">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h1>{process.env.REACT_APP_COPYRIGHT_NAME}</h1>
            <h2>{process.env.REACT_APP_COPYRIGHT_TITLE}</h2>
            <p>
              <FaMapMarkerAlt />
              Legal address: {process.env.REACT_APP_ADDRESS}
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
            <div className="Copyright">
              <p>
                © {process.env.REACT_APP_COPYRIGHT_NAME}{" "}
                {currentDate.getFullYear()} | {"footer.copyright"} |
              </p>
              <p>{"footer.siteBy"}</p>
            </div>
          </motion.div>

          <motion.div
            className="social-links"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <a
              href={process.env.REACT_APP_FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebook size={24} className="social-icon" />
            </a>
            <a
              href={process.env.REACT_APP_INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram size={24} className="social-icon" />
            </a>
            <a
              href={process.env.REACT_APP_YOUTUBE_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <FaYoutube size={24} className="social-icon" />
            </a>
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
