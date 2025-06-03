import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import LogoIntro from "./SVG/LogoIntro";
import LogoEtude from "./SVG/LogoEtude";

const STMIntroSection: React.FC = () => {
  const sectionRef = useRef(null);

  // Scroll relatif à la section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Applique un déplacement en Y selon la progression
  const yBackground = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const ySvg = useTransform(scrollYProgress, [0, 1], [0, -40]);

  const fadeInUp = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      y: -50,
      transition: { duration: 0.6, ease: "easeIn" },
    },
  };

  return (
    <motion.section
      className="stm-intro-wrapper"
      ref={sectionRef}
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={fadeInUp}
    >
      {/* Arrière-plan avec parallaxe */}
      <motion.div className="stm-intro-background" style={{ y: yBackground }} />

      {/* SVG avec parallaxe plus légère */}
      <motion.div className="stm-intro-svg" style={{ y: ySvg }}>
        <LogoIntro />
        <motion.div
          className="etude-logo"
          initial={{ scale: 0.2, opacity: 0, rotate: 0 }}
          animate={{
            scale: 1,
            opacity: 1,
            rotate: 360,
            transition: {
              rotate: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
              duration: 1.2,
              ease: "easeOut",
            },
          }}
          style={{ display: "inline-block" }}
        >
          <LogoEtude />
        </motion.div>
      </motion.div>

      {/* Contenu principal */}
      <motion.div className="stm-intro-content" variants={fadeInUp}>
        <div className="stm-meta">
          <div className="stm-intro-slogan">
            <span className="label">
              Services de nettoyage
              <p>
                Nettoyage <strong>professionnel</strong> &{" "}
                <strong>particulier</strong>, sur-mesure et efficace.
              </p>
            </span>
            <span className="label">
              Simplicité & efficacité
              <p>
                À votre service depuis <strong>1996</strong>.
              </p>
            </span>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default STMIntroSection;
