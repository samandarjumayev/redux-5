import { useState } from 'react';
import { Camera, ChevronDown } from 'lucide-react';

export default function Profile() {
  const [activeTab, setActiveTab] = useState('profile');
  const [formData, setFormData] = useState({
    firstName: 'Jonathan',
    lastName: 'Doe',
    headline: '',
    language: 'English',
    link: 'www.kitani.io',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Jonathan'
  });

  const tabs = [
    { id: 'profile', label: 'Profile' },
    { id: 'personalisation', label: 'Personalisation' },
    { id: 'account', label: 'Account' },
    { id: 'payment', label: 'Payment Methods' },
    { id: 'notifications', label: 'Notifications' },
    { id: 'privacy', label: 'Privacy' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSave = () => {
    console.log('[v0] Profile saved:', formData);
    alert('Profile updated successfully!');
  };

  const handleAvatarChange = () => {
    const seeds = ['Jonathan', 'Sarah', 'Alex', 'Jordan', 'Casey'];
    const randomSeed = seeds[Math.floor(Math.random() * seeds.length)];
    setFormData(prev => ({
      ...prev,
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${randomSeed}`
    }));
  };

  return (
    <div className="min-h-screen bg-background">

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* Page Title */}
        <h1 className="text-3xl font-bold text-foreground mb-8 text-center">My Account</h1>

        {/* Tabs Navigation */}
        <div className="flex items-center justify-center gap-8 border-b border-border pb-4 mb-12 flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`pb-4 font-medium transition relative ${
                activeTab === tab.id
                  ? 'text-foreground'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {tab.label}
              {activeTab === tab.id && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-teal-500"></div>
              )}
            </button>
          ))}
        </div>

        {/* Profile Content */}
        {activeTab === 'profile' && (
          <div className="space-y-8">
            {/* Avatar Section */}
            <div className="flex justify-center">
              <div className="relative">
                <img
                  src={formData.avatar || "/placeholder.svg"}
                  alt="User avatar"
                  className="w-32 h-32 rounded-full border-4 border-teal-500"
                />
                <button
                  onClick={handleAvatarChange}
                  className="absolute bottom-0 right-0 w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center text-white hover:bg-teal-600 transition shadow-lg"
                >
                  <Camera size={20} />
                </button>
              </div>
            </div>

            {/* Form Fields */}
            <div className="space-y-6">
              {/* First Name */}
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-border rounded-lg bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition"
                />
              </div>

              {/* Last Name */}
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-border rounded-lg bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition"
                />
              </div>

              {/* Headline */}
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2">
                  Headline
                </label>
                <input
                  type="text"
                  name="headline"
                  placeholder="Enter your headline"
                  value={formData.headline}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-border rounded-lg bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition"
                />
              </div>

              {/* Language Dropdown */}
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2">
                  Language
                </label>
                <div className="relative">
                  <select
                    name="language"
                    value={formData.language}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-border rounded-lg bg-card text-foreground appearance-none focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition cursor-pointer"
                  >
                    <option>English</option>
                    <option>Spanish</option>
                    <option>French</option>
                    <option>German</option>
                    <option>Russian</option>
                    <option>Chinese</option>
                    <option>Japanese</option>
                    <option>Uzbek</option>
                  </select>
                  <ChevronDown
                    size={20}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground pointer-events-none"
                  />
                </div>
              </div>

              {/* Link */}
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2">
                  Link
                </label>
                <input
                  type="text"
                  name="link"
                  value={formData.link}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-border rounded-lg bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition"
                />
              </div>
            </div>

            {/* Save Button */}
            <div className="flex justify-center pt-8">
              <button
                onClick={handleSave}
                className="px-12 py-3 bg-teal-500 text-white font-medium rounded-full hover:bg-teal-600 transition shadow-lg hover:shadow-xl"
              >
                Save
              </button>
            </div>
          </div>
        )}

        {/* Other Tabs Content */}
        {activeTab !== 'profile' && (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg">
              {tabs.find(t => t.id === activeTab)?.label} section coming soon...
            </p>
          </div>
        )}
      </main>
    </div>
  );
}
