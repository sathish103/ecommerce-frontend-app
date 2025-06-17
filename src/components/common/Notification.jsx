// src/components/common/Notification.jsx

import React from "react";

const Notification = ({ type = "info", message }) => {
  const baseStyles =
    "px-4 py-2 rounded shadow-md mb-4 text-sm font-medium text-white";
  const typeStyles = {
    success: "bg-green-500",
    error: "bg-red-500",
    info: "bg-blue-500",
    warning: "bg-yellow-500 text-black",
  };

  if (!message) return null;

  return (
    <div className={`${baseStyles} ${typeStyles[type] || typeStyles.info}`}>
      {message}
    </div>
  );
};

export default Notification;
