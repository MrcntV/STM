import React, { useRef, useState, useEffect, useCallback } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import { FaPaperPlane } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";
import Notification from "../components/Notifications/Notification";

const ContactForm: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const location = useLocation();

  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [notifications, setNotifications] = useState<
    { id: number; type: "success" | "error" | "info"; message: string }[]
  >([]);
  const [prefilledMessage, setPrefilledMessage] = useState("");
  const [userType, setUserType] = useState("");

  // Récupération du message pré-rempli si présent dans l'URL
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const message = queryParams.get("message") || "";
    const type = queryParams.get("type") || "";

    setPrefilledMessage(message);
    if (
      type === "particulier" ||
      type === "professionnel" ||
      type === "syndic"
    ) {
      setUserType(type);
    }
  }, [location.search]);

  // Suppression d'une notification
  const removeNotification = useCallback((id: number) => {
    setNotifications((prev) => prev.filter((notif) => notif.id !== id));
  }, []);

  // Ajout d'une notification
  const addNotification = useCallback(
    (type: "success" | "error" | "info", message: string) => {
      const id = Date.now();
      setNotifications((prev) => [...prev, { id, type, message }]);
      setTimeout(() => removeNotification(id), 5000);
    },
    [removeNotification]
  );

  // Validation du formulaire
  const validateForm = useCallback(() => {
    if (!form.current) return false;
    let isValid = true;

    const inputs = form.current.querySelectorAll("input, textarea");
    inputs.forEach((input) => {
      if (!(input as HTMLInputElement | HTMLTextAreaElement).value.trim()) {
        isValid = false;
      }
    });

    return isValid;
  }, []);

  // Envoi de l'email avec EmailJS
  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      addNotification("error", "Tous les champs sont requis.");
      return;
    }

    if (!captchaToken) {
      addNotification("error", "Veuillez valider le reCAPTCHA.");
      return;
    }

    if (!form.current) {
      addNotification("error", "Erreur lors de la soumission du formulaire.");
      return;
    }

    try {
      await emailjs.sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID as string,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID as string,
        form.current,
        process.env.REACT_APP_EMAILJS_USER_ID as string
      );

      addNotification("success", "Votre message a bien été envoyé !");
      form.current.reset();
      setCaptchaToken(null);
    } catch (error) {
      addNotification("error", "Une erreur est survenue. Veuillez réessayer.");
    }
  };

  return (
    <>
      {/* Zone des notifications */}
      <div className="notification-container">
        <AnimatePresence>
          {notifications.map((notif) => (
            <Notification
              key={notif.id}
              type={notif.type}
              message={notif.message}
              onClose={() => removeNotification(notif.id)}
            />
          ))}
        </AnimatePresence>
      </div>

      {/* Formulaire */}
      <motion.form
        ref={form}
        onSubmit={sendEmail}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="contact-form"
      >
        <label>
          Prénom
          <input
            type="text"
            name="first_name"
            placeholder="Votre prénom"
            required
          />
        </label>
        <label>
          Nom
          <input
            type="text"
            name="last_name"
            placeholder="Votre nom"
            required
          />
        </label>
        <label>
          Vous êtes
          <select
            name="user_type"
            value={userType}
            onChange={(e) => setUserType(e.target.value)}
            required
          >
            <option value="">-- Sélectionnez votre statut --</option>
            <option value="particulier">Particulier</option>
            <option value="professionnel">Professionnel</option>
            <option value="syndic">Syndic</option>
          </select>
        </label>
        <label>
          Lieu
          <input
            type="text"
            name="location"
            placeholder="Votre lieu"
            required
          />
        </label>
        <label>
          Email
          <input
            type="email"
            name="user_email"
            placeholder="Votre email"
            required
          />
        </label>
        <label>
          Message
          <textarea
            name="message"
            placeholder="Votre message"
            value={prefilledMessage}
            onChange={(e) => setPrefilledMessage(e.target.value)}
            rows={5}
            required
          ></textarea>
        </label>

        {/* Google reCAPTCHA */}

        <ReCAPTCHA
          sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY || ""}
          onChange={(token) => setCaptchaToken(token)}
          onExpired={() => setCaptchaToken(null)}
        />

        <p className="rgpd-note">
          En envoyant ce formulaire, vous acceptez que vos données soient
          utilisées exclusivement pour vous répondre. Aucune information n’est
          partagée ni conservée.
        </p>
        {/* Bouton d'envoi */}
        <div className="submit-button-container">
          <motion.button type="submit" className="submit-button">
            Envoyer <FaPaperPlane />
          </motion.button>
        </div>
      </motion.form>
    </>
  );
};

export default ContactForm;
