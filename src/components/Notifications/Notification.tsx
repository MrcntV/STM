import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCheckCircle, FaTimesCircle, FaInfoCircle } from "react-icons/fa";

interface NotificationProps {
  message: string;
  type: "success" | "error" | "info";
  onClose: () => void;
  duration?: number;
}

const Notification: React.FC<NotificationProps> = ({
  message,
  type,
  onClose,
  duration = 3000,
}) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onClose, 300); // Petite transition avant suppression
    }, duration);
    return () => clearTimeout(timer);
  }, [onClose, duration]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className={`notification ${type}`}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <span className="icon">
            {type === "success" && <FaCheckCircle />}
            {type === "error" && <FaTimesCircle />}
            {type === "info" && <FaInfoCircle />}
          </span>
          <span className="message">{message}</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Notification;
