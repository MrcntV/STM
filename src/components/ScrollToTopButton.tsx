import React, { useState, useEffect } from "react";
import { FaArrowAltCircleUp } from "react-icons/fa";

const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const scrollThreshold = 300;

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.pageYOffset;
      if (currentPosition > scrollThreshold) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fonction pour défiler vers le haut
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`scroll-to-top-button ${isVisible ? "visible" : ""}`}
      onClick={scrollToTop}
      style={{
        position: "fixed",
        bottom: "2rem",
        right: "2rem",
        cursor: "pointer",
        fontSize: "2rem",
        display: isVisible ? "block" : "none",
      }}
    >
      <FaArrowAltCircleUp />
    </div>
  );
};

export default ScrollToTopButton;
