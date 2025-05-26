import { NavLink } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import {
  FaInstagram,
  FaYoutube,
  FaFacebook,
  FaPhone,
  FaMapMarkerAlt,
  FaEnvelope,
} from "react-icons/fa";
import { motion, useAnimate, stagger } from "framer-motion";

const MenuBurger: React.FC = () => {
  const [showLinks, setShowLinks] = useState(false);
  const [isInitialRender, setIsInitialRender] = useState(true);
  const menuRef = useRef<HTMLUListElement>(null);
  const [scope, animate] = useAnimate();

  const instagramUrl = process.env.REACT_APP_INSTAGRAM_URL || "#";
  const youtubeUrl = process.env.REACT_APP_YOUTUBE_URL || "#";
  const facebookUrl = process.env.REACT_APP_FACEBOOK_URL || "#";
  const contactEmail =
    process.env.REACT_APP_CONTACT_EMAIL || "contact@default.com";
  const contactAddress = process.env.REACT_APP_ADDRESS || "123 Default Street";
  const contactPhone = process.env.REACT_APP_PHONE || "+00 0 000 000 000";

  const handleShowLinks = () => {
    setShowLinks((prev) => {
      const newState = !prev;

      // Logs pour l'ouverture/fermeture du menu
      if (newState) {
        console.log("Menu de navigation ouvert.");
      } else {
        console.log("Menu de navigation fermé.");
      }

      return newState;
    });
  };

  const closeMenu = () => {
    if (showLinks) {
      console.log("Menu de navigation fermé via une action externe.");
    }
    setShowLinks(false);
  };

  useEffect(() => {
    if (isInitialRender) {
      setIsInitialRender(false);
      return;
    }

    const menuAnimations = showLinks
      ? [
          [
            ".navbar_links",
            { x: 0, visibility: "visible" },
            { ease: [0.08, 0.65, 0.53, 0.96], duration: 0.6 },
          ],
          [
            ".navbar_item",
            { transform: "scale(1)", opacity: 1, filter: "blur(0px)" },
            { delay: stagger(0.05), at: "-0.1" },
          ],
        ]
      : [
          [
            ".navbar_item",
            { transform: "scale(0.5)", opacity: 0, filter: "blur(10px)" },
            { delay: stagger(0.05, { from: "last" }), at: "<" },
          ],
          [
            ".navbar_links",
            { x: "100%", visibility: "hidden" },
            { at: "-0.1" },
          ],
        ];

    animate(menuAnimations as any);
  }, [showLinks, animate, isInitialRender]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (["Escape", "Backspace", "Delete"].includes(e.key)) {
        closeMenu();
      }
      if (showLinks && [" ", "ArrowUp", "ArrowDown"].includes(e.key)) {
        e.preventDefault();
      }
    };

    if (showLinks) {
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", handleKeyDown);
      menuRef.current?.querySelector("a")?.focus();
    } else {
      document.body.style.overflow = "auto";
      document.removeEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "auto";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [showLinks]);

  const menuItems = [
    { label: "menu.home", path: `/` },
    { label: "menu.vehicles", path: `cars` },
    { label: "menu.contact", path: `/contact` },
  ];

  return (
    <nav
      className={`navbar ${showLinks ? "show-nav" : "hide-nav"}`}
      ref={scope}
    >
      <motion.ul ref={menuRef} className="navbar_links">
        <div className="navbar_links_left">
          {menuItems.map((item, index) => (
            <motion.li className="navbar_item" key={index}>
              <NavLink
                to={item.path}
                onClick={closeMenu}
                className={({ isActive }) => (isActive ? "active" : "")}
                end // Permet de correspondre uniquement si le chemin est exactement celui spécifié
              >
                {item.label}
              </NavLink>
            </motion.li>
          ))}
        </div>

        <div className="navbar_links_right">
          <motion.div className="navbar_links_right_mid">
            <div className="contact">
              <h2>Contact</h2>
              <div className="contact-infos">
                <a href="">
                  <FaMapMarkerAlt /> {contactAddress}
                </a>
              </div>
              <div className="contact-infos">
                <a href={`tel:${contactPhone}`}>
                  {" "}
                  <FaPhone /> {contactPhone}
                </a>
              </div>
              <div className="contact-infos">
                <a href={`mailto:${contactEmail}`}>
                  <FaEnvelope /> {contactEmail}
                </a>
              </div>
              <div className="Menu-social-list">
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </a>
                <a
                  href={youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                >
                  <FaYoutube />
                </a>
                <a
                  href={facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <FaFacebook />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div className="navbar_links_right_right">
            <input
              className="dark_mode_input"
              type="checkbox"
              id="darkmode-toggle"
              onChange={(e) =>
                document.body.setAttribute(
                  "data-theme",
                  e.target.checked ? "light" : "dark"
                )
              }
            />
            <motion.div className="navbar_links_right-lien">
              <NavLink to={`/cgv`} onClick={closeMenu}>
                "footer.legal" |
              </NavLink>
              <NavLink to={`/$privacy`} onClick={closeMenu}>
                "footer.privacy"
              </NavLink>
            </motion.div>
          </motion.div>
          <motion.div className="navbar_links_right_left">
            <p>
              © "footer.copyrightName". {new Date().getFullYear()} |{" "}
              "footer.siteBy"
            </p>
          </motion.div>
        </div>
      </motion.ul>

      <button
        className="navbar_burger"
        aria-label="Ouvrir le menu de navigation"
        onClick={handleShowLinks}
      >
        <span className="burger-bar"></span>
      </button>
    </nav>
  );
};

export default MenuBurger;
