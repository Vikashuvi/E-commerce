import React, { createContext, useState, useContext } from 'react';

const ProfileContext = createContext();

export function ProfileProvider({ children }) {
  // Default profile data
  const [profileData, setProfileData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    profileImage: 'https://via.placeholder.com/150'
  });

  // Update the entire profile
  const updateProfile = (newProfileData) => {
    setProfileData(prevData => ({
      ...prevData,
      ...newProfileData
    }));
  };

  // Update a single field
  const updateProfileField = (field, value) => {
    setProfileData(prevData => ({
      ...prevData,
      [field]: value
    }));
  };

  return (
    <ProfileContext.Provider value={{
      profileData,
      updateProfile,
      updateProfileField
    }}>
      {children}
    </ProfileContext.Provider>
  );
}

// Custom hook to use profile context
export const useProfile = () => {
  const context = useContext(ProfileContext);
  if (!context) {
    throw new Error('useProfile must be used within a ProfileProvider');
  }
  return context;
};
