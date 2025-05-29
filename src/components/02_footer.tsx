import React from "react";
import { IoTime } from "react-icons/io5";
import { NavLink, useParams } from "react-router-dom";
// import { FaInstagram, FaYoutube, FaFacebook } from "react-icons/fa";

const Footer: React.FC = () => {
  const { lang } = useParams<{ lang?: string }>();

  // Vérifie si la langue est valide, sinon met "fr" par défaut
  const selectedLang = lang && ["en", "fr", "de"].includes(lang) ? lang : "fr";

  // Obtenir la date actuelle formatée
  const currentDate = new Date();
  const options: Intl.DateTimeFormatOptions = {
    month: "long",
    year: "numeric",
    day: "numeric",
  };
  const formattedDate = currentDate.toLocaleDateString(selectedLang, options);

  // Récupérer les variables d'environnement avec valeurs par défaut
  // const instagramUrl = process.env.REACT_APP_INSTAGRAM_URL || "#";
  //const youtubeUrl = process.env.REACT_APP_YOUTUBE_URL || "#";
  // const facebookUrl = process.env.REACT_APP_FACEBOOK_URL || "#";
  const contactEmail =
    process.env.REACT_APP_CONTACT_EMAIL || "contact@example.com";
  const copyrightName = process.env.REACT_APP_COPYRIGHT_NAME || "Auto Idéaly";

  return (
    <footer>
      <div className="VSlide4-menu-info">
        <div>
          <p>{formattedDate}</p>
        </div>
        <a href={`mailto:${contactEmail}`} style={{ display: "inline-block" }}>
          <p>{contactEmail}</p>
        </a>
        <p>
          {" "}
          <IoTime />
          Horaires : Lundi – Vendredi : 8h00 – 18h00
        </p>

        {/* Réseaux sociaux 
        <div className="VSlide4-menu-social-list">
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Instagram - ${copyrightName}`}
            style={{ display: "inline-block" }}
          >
            <FaInstagram style={{ height: "16px", width: "16px" }} />
          </a>
          <a
            href={youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`YouTube - ${copyrightName}`}
            style={{ display: "inline-block" }}
          >
            <FaYoutube style={{ height: "16px", width: "16px" }} />
          </a>
          <a
            href={facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Facebook - ${copyrightName}`}
            style={{ display: "inline-block" }}
          >
            <FaFacebook style={{ height: "16px", width: "16px" }} />
          </a>
        </div>
         */}

        {/* Mentions légales et politique de confidentialité */}
        <p>
          <NavLink to={`/mentions-legales`} style={{ padding: "2px" }}>
            Mention légale
          </NavLink>{" "}
          |
          <NavLink
            to={`/politique-de-confidentialite`}
            style={{ padding: "2px" }}
          >
            Politique de confidentialité
          </NavLink>
        </p>
      </div>

      <div className="VSlide4-menu-info">
        <p>
          © {copyrightName} {currentDate.getFullYear()} | Tous droits réservés
        </p>
        <p>Site réalisé par V. MARCONNET</p>
      </div>
    </footer>
  );
};

export default Footer;
