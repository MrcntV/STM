import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

const ServicesPart: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>
          Service de nettoyage pour particuliers à Saint-Étienne | STM
        </title>
        <meta
          name="description"
          content="STM propose des services de nettoyage pour particuliers à Saint-Étienne : ménage, vitres, débarras, entretien extérieur. Professionnalisme, efficacité et discrétion. Demandez votre devis gratuit."
        />
        <meta
          name="keywords"
          content="nettoyage particulier Saint-Étienne, entreprise nettoyage maison, ménage professionnel Loire, entretien vitres, débarras cave grenier garage, jardinage, haute pression, entreprise nettoyage fiable, STM propreté"
        />
      </Helmet>

      <motion.section
        className="services-page"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 60 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h1> Particuliers</h1>

        <div className="service-section">
          <div className="service-image">
            <img
              src="/images/services/service-particulier.png"
              alt="Service nettoyage maison particulier à Saint-Étienne"
            />
          </div>

          <div className="service-content">
            <h2>Un accompagnement complet pour votre domicile</h2>
            <p>
              Chez <strong>STM</strong>, nous mettons notre expertise au service
              des <strong>particuliers à Saint-Étienne</strong> et dans toute la{" "}
              <strong>Loire</strong>. Nos prestations de{" "}
              <strong>nettoyage à domicile</strong> s'adaptent à tous les
              besoins, qu'il s'agisse d’un <strong>ménage régulier</strong>,
              d’un <strong>grand nettoyage de printemps</strong>, ou d’une
              intervention après un événement (travaux, déménagement, sinistre,
              etc.).
            </p>
            <p>
              Nous intervenons avec <strong>discrétion</strong>,{" "}
              <strong>respect de votre intimité</strong> et dans le{" "}
              <strong>souci du détail</strong>. Nos agents sont formés,
              rigoureux et équipés de <strong>matériel professionnel</strong>{" "}
              pour garantir un résultat impeccable.
            </p>
            <ul>
              <li>Nettoyage des vitres, encadrements, baies vitrées</li>
              <li>
                Ménage complet : cuisine, salle de bain, sols, murs, moquettes
              </li>
              <li>Désinfection après maladie ou sinistre</li>
              <li>
                Nettoyage haute pression des extérieurs (terrasses, façades,
                dalles)
              </li>
              <li>
                Jardinage et entretien des espaces verts (tonte, haies,
                ramassage feuilles)
              </li>
              <li>Débarras de caves, greniers, garages et dépendances</li>
              <li>
                Accompagnement pour état des lieux de sortie ou de rentrée
              </li>
            </ul>

            <p>
              Nos prestations peuvent être <strong>ponctuelles</strong> ou sous
              forme de <strong>contrat régulier</strong>, selon vos préférences.
              Nous établissons un <strong>devis gratuit personnalisé</strong>{" "}
              sous 24h.
            </p>
            <div className="seo-section">
              <h2>Pourquoi faire appel à STM ?</h2>
              <ul>
                <li>Entreprise locale et réactive basée à Saint-Étienne</li>
                <li>
                  Plus de 20 ans d'expérience dans l'entretien et la propreté
                </li>
                <li>Tarifs transparents et devis détaillés</li>
                <li>Personnel formé, déclaré et assuré</li>
                <li>
                  Respect de l'environnement avec produits écoresponsables
                </li>
              </ul>
            </div>

            <button className="service-button">Demander un devis</button>
          </div>
        </div>

        <div className="materials-section">
          <h2>Des moyens professionnels au service des particuliers</h2>
          <p>
            Nous utilisons du{" "}
            <strong>matériel de qualité professionnelle</strong> pour garantir
            un nettoyage en profondeur, même dans les zones difficiles d’accès.
            Nos véhicules STM (Opel Combo, Fiat Scudo) sont équipés pour
            intervenir rapidement et efficacement.
          </p>
          <p>
            Grâce à notre <strong>monobrosse</strong>, nos{" "}
            <strong>aspirateurs eau et poussière</strong>, et notre{" "}
            <strong>nettoyeur haute pression</strong>, nous répondons à toutes
            les exigences d’un ménage haut de gamme chez le particulier.
          </p>
          <p>
            <strong>Zone d’intervention :</strong> Saint-Étienne, La Ricamarie,
            Le Chambon-Feugerolles, Firminy, Saint-Genest-Lerpt,
            Roche-la-Molière, etc.
          </p>
          <img src="/images/locaux/VoitureSTM.png" alt="" />
        </div>
      </motion.section>
    </>
  );
};

export default ServicesPart;
