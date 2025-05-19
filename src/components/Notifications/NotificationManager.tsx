import React, { useState } from "react";
import Notification from "./Notification";

interface NotificationItem {
  id: number;
  message: string;
  type: "success" | "error" | "info";
}

const NotificationManager: React.FC = () => {
  const [notifications, setNotifications] = useState<NotificationItem[]>([]);

  const addNotification = (
    message: string,
    type: "success" | "error" | "info"
  ) => {
    const newNotification = {
      id: Date.now(),
      message,
      type,
    };
    setNotifications((prev) => [...prev, newNotification]);
  };

  const removeNotification = (id: number) => {
    setNotifications((prev) => prev.filter((notif) => notif.id !== id));
  };

  return (
    <>
      {/* Boutons temporaires pour tester  
      <div className="test-buttons">
        <button
          onClick={() =>
            addNotification("Succès ! Tout s'est bien passé.", "success")
          }
        >
          ✅ Succès
        </button>
        <button
          onClick={() => addNotification("Une erreur est survenue !", "error")}
        >
          ❌ Erreur
        </button>
        <button
          onClick={() =>
            addNotification("Information : Mettez à jour vos données.", "info")
          }
        >
          ℹ️ Info
        </button>
      </div>*/}

      {/* Notifications affichées */}
      <div className="notification-container">
        {notifications.map((notif) => (
          <Notification
            key={notif.id}
            message={notif.message}
            type={notif.type}
            onClose={() => removeNotification(notif.id)}
          />
        ))}
      </div>
    </>
  );
};

export default NotificationManager;
