// Notifications.jsx placeholder
import React from 'react';
import useFetch from '../hooks/useFetch';

const Notifications = () => {
  const { data: notifications } = useFetch('/notifications');

  return (
    <div>
      <h2>Notifications</h2>
      {notifications?.map(note => (
        <div key={note.id}>
          <p>{note.message}</p>
        </div>
      ))}
    </div>
  );
};

export default Notifications;
