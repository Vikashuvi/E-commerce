import React, { useState } from 'react';
import { useProfile } from './ProfileContext';
import { toast, Toaster } from 'sonner';
import { FiEdit2, FiSave, FiUser, FiX } from 'react-icons/fi';

const Profile = () => {
  const { profileData, updateProfile } = useProfile();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(profileData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateProfile(formData);
    setIsEditing(false);
    toast.success('Profile updated successfully!');
  };

  const toggleEdit = () => {
    if (isEditing) {
      // Discard changes
      setFormData(profileData);
    }
    setIsEditing(!isEditing);
  };

  return (
    <div className="min-h-screen p-4 max-w-4xl mx-auto">
      <Toaster position="top-center" />
      <div className="bg-white rounded-lg shadow-md p-6 mt-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">My Profile</h1>
          <button
            onClick={toggleEdit}
            className={`flex items-center px-4 py-2 rounded-md ${
              isEditing
                ? 'bg-gray-200 text-gray-700'
                : 'bg-green-600 text-white hover:bg-green-700'
            }`}
          >
            {isEditing ? (
              <>
                <FiX className="mr-2" /> Cancel
              </>
            ) : (
              <>
                <FiEdit2 className="mr-2" /> Edit Profile
              </>
            )}
          </button>
        </div>

        <div className="flex flex-col md:flex-row">
          {/* Profile Image Section */}
          <div className="md:w-1/3 flex flex-col items-center mb-6 md:mb-0">
            <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-green-600 mb-4">
              {profileData.profileImage ? (
                <img
                  src={profileData.profileImage}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                  <FiUser size={60} className="text-gray-400" />
                </div>
              )}
            </div>
            {isEditing && (
              <div className="text-center">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Profile Image URL
                </label>
                <input
                  type="text"
                  name="profileImage"
                  value={formData.profileImage}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
            )}
          </div>

          {/* Profile Details Section */}
          <div className="md:w-2/3 md:pl-8">
            {isEditing ? (
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Address
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                      placeholder="Enter your address"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      City
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                      placeholder="Enter your city"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      State
                    </label>
                    <input
                      type="text"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                      placeholder="Enter your state"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Pincode
                    </label>
                    <input
                      type="text"
                      name="pincode"
                      value={formData.pincode}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                      placeholder="Enter your pincode"
                    />
                  </div>
                </div>
                <div className="mt-6">
                  <button
                    type="submit"
                    className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 flex items-center"
                  >
                    <FiSave className="mr-2" /> Save Changes
                  </button>
                </div>
              </form>
            ) : (
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Full Name</h3>
                    <p className="text-lg">{profileData.name || 'Not set'}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Email</h3>
                    <p className="text-lg">{profileData.email || 'Not set'}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Phone</h3>
                    <p className="text-lg">{profileData.phone || 'Not set'}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Address</h3>
                    <p className="text-lg">{profileData.address || 'Not set'}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">City</h3>
                    <p className="text-lg">{profileData.city || 'Not set'}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">State</h3>
                    <p className="text-lg">{profileData.state || 'Not set'}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Pincode</h3>
                    <p className="text-lg">{profileData.pincode || 'Not set'}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Order History Section - Placeholder for future implementation */}
      <div className="bg-white rounded-lg shadow-md p-6 mt-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Order History</h2>
        <p className="text-gray-600">You haven't placed any orders yet.</p>
      </div>
    </div>
  );
};

export default Profile;
