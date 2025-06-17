import React, { useEffect, useState } from "react";
import userService from "../../services/userService";

const Profile = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const loadProfile = async () => {
      try {
        const data = await userService.getProfile();
        setProfile(data);
      } catch (err) {
        console.error("Failed to load profile", err);
      }
    };

    loadProfile();
  }, []);

  if (!profile) return <p>Loading profile...</p>;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Your Profile</h2>
      <p><strong>Name:</strong> {profile.name}</p>
      <p><strong>Email:</strong> {profile.email}</p>
    </div>
  );
};

export default Profile;
