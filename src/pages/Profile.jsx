// Profile.jsx placeholder
import React from 'react';
import useAuth from '../hooks/useAuth';

const Profile = () => {
  const { user } = useAuth();

  return (
    <div>
      <h2>My Profile</h2>
      <p>Email: {user?.attributes?.email}</p>
      <p>Username: {user?.username}</p>
    </div>
  );
};

export default Profile;
