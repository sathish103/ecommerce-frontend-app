import React, { useEffect, useState } from "react";
import notificationService from "../../services/notificationService";

const NotificationBar = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const loadNotifications = async () => {
      try {
        const data = await notificationService.getNotifications();
        setNotifications(data);
      } catch (err) {
        console.error("Failed to fetch notifications", err);
      }
    };

    loadNotifications();
  }, []);

  return (
    <div className="bg-yellow-100 p-2 text-sm text-gray-800">
      {notifications.length === 0 ? (
        <p>No new notifications</p>
      ) : (
        <ul className="list-disc pl-4">
          {notifications.map((n) => (
            <li key={n.id}>{n.message}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NotificationBar;
