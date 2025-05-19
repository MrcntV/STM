import React, { createContext, useContext, useState, ReactNode } from "react";
import Notification from "./Notification";

interface NotificationItem {
  id: number;
  message: string;
  type: "success" | "error" | "info";
}

interface NotificationContextType {
  notifications: NotificationItem[];
  addNotification: (
    message: string,
    type: "success" | "error" | "info"
  ) => void;
}

const NotificationContext = createContext<NotificationContextType | undefined>(
  undefined
);

export const useNotification = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error(
      "useNotification must be used within a NotificationProvider"
    );
  }
  return context;
};

export const NotificationProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [notifications, setNotifications] = useState<NotificationItem[]>([]);

  const addNotification = (
    message: string,
    type: "success" | "error" | "info"
  ) => {
    const newNotification: NotificationItem = {
      id: Date.now(),
      message,
      type,
    };
    setNotifications((prev) => [...prev, newNotification]);

    setTimeout(() => {
      setNotifications((prev) =>
        prev.filter((notif) => notif.id !== newNotification.id)
      );
    }, 3000);
  };

  return (
    <NotificationContext.Provider value={{ notifications, addNotification }}>
      {children}
      <div className="notification-container">
        {notifications.map((notif) => (
          <Notification
            key={notif.id}
            message={notif.message}
            type={notif.type}
            onClose={() =>
              setNotifications((prev) => prev.filter((n) => n.id !== notif.id))
            }
          />
        ))}
      </div>
    </NotificationContext.Provider>
  );
};
