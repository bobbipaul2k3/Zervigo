import { useState } from 'react';
import { MapPin, Mail, Home, Loader2, Lock, Edit2, Save, X } from "lucide-react";

const SecureProfileWindow = () => {
  const [location, setLocation] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Editable states
  const [isEditing, setIsEditing] = useState(false);
  const [address, setAddress] = useState('123 Tech Street, San Francisco, CA 94105');
  const [email, setEmail] = useState('jane.doe@example.com');
  const [bio, setBio] = useState('Jane Doe is a seasoned cybersecurity professional with extensive experience in ethical hacking and network security.');
  const [skills, setSkills] = useState(['Cybersecurity Expert', 'Ethical Hacking', 'Network Security', 'Penetration Testing', 'Microsoft Security Fundamentals']);

  const handleLocationRequest = () => {
    setIsLoading(true);
    // Mock geolocation request
    setTimeout(() => {
      setLocation("37.7749° N, 122.4194° W");
      setIsLoading(false);
    }, 2000);
  };

  const handlePasswordChange = (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      alert("New passwords do not match.");
      return;
    }
    if (newPassword.length < 8) {
      alert("Password must be at least 8 characters long.");
      return;
    }
    alert("Password changed successfully.");
    setCurrentPassword('');
    setNewPassword('');
    setConfirmPassword('');
  };

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = () => {
    setIsEditing(false);
    alert("Profile updated successfully.");
  };

  const handleSkillChange = (index, value) => {
    const updatedSkills = [...skills];
    updatedSkills[index] = value;
    setSkills(updatedSkills);
  };

  const addSkill = () => {
    setSkills([...skills, '']);
  };

  const removeSkill = (index) => {
    const updatedSkills = skills.filter((_, i) => i !== index);
    setSkills(updatedSkills);
  };

  return (
    
      <div className="max-w-4xl mx-auto p-6 bg-white w-screen  overflow-y-auto">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Profile</h2>
          <button
            onClick={isEditing ? handleSave : handleEditToggle}
            className="px-4 py-2 bg-gradient-to-r from-teal-400 to-blue-400 text-white rounded-md hover:bg-blue-700 flex items-center"
          >
            {isEditing ? <Save className="mr-2 h-5 w-5" /> : <Edit2 className="mr-2 h-5 w-5" />}
            {isEditing ? 'Save' : 'Edit'}
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {/* Left Column: Profile Info */}
          <div>
            <div className="flex flex-col items-center">
              <div className="w-32 h-32 rounded-full overflow-hidden">
                <img
                  src="/johny.jpg"
                  alt="Jane Doe"
                  className="w-full h-full object-cover"
                />
              </div>
              <h2 className="mt-4 text-2xl font-bold">Jane Doe</h2>
            </div>

            <div className="mt-6 space-y-4">
              <div className="flex items-center">
                <Home className="w-5 h-5 mr-2 text-gray-500" />
                {isEditing ? (
                  <input
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md"
                  />
                ) : (
                  <span>{address}</span>
                )}
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-2 text-gray-500" />
                {isEditing ? (
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md"
                  />
                ) : (
                  <span>{email}</span>
                )}
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-gray-500" />
                {location ? (
                  <span>{location}</span>
                ) : (
                  <button
                    onClick={handleLocationRequest}
                    disabled={isLoading}
                    className="px-4 py-2 bg-gradient-to-r from-teal-400 to-blue-400 text-white rounded-md hover:bg-blue-700 disabled:bg-gray-400"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Accessing Location...
                      </>
                    ) : (
                      'Request Location Access'
                    )}
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Right Column: Skills and Bio */}
          <div className="space-y-6">
            {/* Skills Section */}
            <div>
              <h3 className="text-lg font-semibold mb-2">Skills</h3>
              {isEditing ? (
                <div>
                  {skills.map((skill, index) => (
                    <div key={index} className="flex items-center space-x-2 mb-2">
                      <input
                        type="text"
                        value={skill}
                        onChange={(e) => handleSkillChange(index, e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-md"
                      />
                      <button onClick={() => removeSkill(index)} className="text-red-500">
                        <X className="w-5 h-5" />
                      </button>
                    </div>
                  ))}
                  <button onClick={addSkill} className="px-4 py-2 bg-green-500 text-white rounded-md">
                    Add Skill
                  </button>
                </div>
              ) : (
                <ul className="list-disc pl-5 space-y-1">
                  {skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
                </ul>
              )}
            </div>

            {/* Bio Section */}
            <div>
              <h3 className="text-lg font-semibold mb-2">Bio</h3>
              {isEditing ? (
                <textarea
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  rows={4}
                />
              ) : (
                <p>{bio}</p>
              )}
            </div>
          </div>
        </div>

        {/* Password Change Section */}
        <div className="mt-8 pt-4 border-t border-gray-200">
          <h3 className="text-lg font-semibold mb-2 flex items-center">
            <Lock className="w-5 h-5 mr-2" />
            Change Password
          </h3>
          <form onSubmit={handlePasswordChange} className="space-y-4">
            <div>
              <label
                htmlFor="currentPassword"
                className="block text-sm font-medium text-gray-700"
              >
                Current Password
              </label>
              <input
                id="currentPassword"
                type="password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                required
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
              />
            </div>
            <div>
              <label
                htmlFor="newPassword"
                className="block text-sm font-medium text-gray-700"
              >
                New Password
              </label>
              <input
                id="newPassword"
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
              />
            </div>
            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-700"
              >
                Confirm New Password
              </label>
              <input
                id="confirmPassword"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 bg-gradient-to-r from-teal-400 to-blue-400 text-white rounded-md hover:bg-blue-700"
            >
              Change Password
            </button>
          </form>
        </div>
      </div>
    
  );
};

export default SecureProfileWindow;
