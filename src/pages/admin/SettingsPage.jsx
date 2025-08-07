import React, { useState } from "react";
import {
  Settings,
  User,
  Bell,
  Shield,
  Palette,
  Globe,
  Database,
  Wifi,
  Moon,
  Sun,
  Volume2,
  Monitor,
  Smartphone,
  Mail,
  Lock,
  Eye,
  EyeOff,
  Save,
  RotateCcw,
  Download,
  Upload,
  Trash2,
  Key,
  Camera,
  Calendar,
  Clock,
  FileText,
  MapPin,
  Zap,
  Cpu,
  HardDrive,
  Activity,
} from "lucide-react";
import SidebarLayout from "../../layouts/SidebarLayout";

const SettingsPage = () => {
  const [activeTab, setActiveTab] = useState("general");
  const [darkMode, setDarkMode] = useState(false);
  const [autoSave, setAutoSave] = useState(true);
  const [twoFactorAuth, setTwoFactorAuth] = useState(false);
  const [notifications, setNotifications] = useState({
    email: true,
    push: false,
    sms: true,
    desktop: true,
    marketing: false,
    security: true,
  });
  const [privacy, setPrivacy] = useState({
    profileVisible: true,
    dataCollection: false,
    analytics: true,
    cookies: true,
    location: false,
    camera: true,
    microphone: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [volume, setVolume] = useState(75);
  const [language, setLanguage] = useState("en");
  const [timezone, setTimezone] = useState("UTC");
  const [theme, setTheme] = useState("default");
  const [fontSize, setFontSize] = useState("medium");
  const [systemInfo] = useState({
    os: "Windows 11",
    version: "22H2",
    storage: "256GB SSD",
    memory: "16GB RAM",
    processor: "Intel i7-12700K",
  });

  const tabs = [
    { id: "general", label: "General", icon: Settings },
    { id: "account", label: "Account", icon: User },
    { id: "notifications", label: "Notifications", icon: Bell },
    { id: "privacy", label: "Privacy", icon: Shield },
    { id: "appearance", label: "Appearance", icon: Palette },
    { id: "system", label: "System", icon: Monitor },
  ];

  const handleNotificationChange = (type) => {
    setNotifications((prev) => ({ ...prev, [type]: !prev[type] }));
  };

  const handlePrivacyChange = (type) => {
    setPrivacy((prev) => ({ ...prev, [type]: !prev[type] }));
  };

  const renderContent = () => {
    switch (activeTab) {
      case "general":
        return renderGeneralSettings();
      case "account":
        return renderAccountSettings();
      case "notifications":
        return renderNotificationSettings();
      case "privacy":
        return renderPrivacySettings();
      case "appearance":
        return renderAppearanceSettings();
      case "system":
        return renderSystemSettings();
      default:
        return renderGeneralSettings();
    }
  };

  const renderGeneralSettings = () => (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow border border-purple-100">
        <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
          <Globe className="w-5 h-5 mr-2 text-purple-600" />
          Language & Region
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Language
            </label>
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="w-full px-3 py-2 border border-purple-200 rounded-md focus:ring-2 focus:ring-purple-500"
            >
              <option value="en">English</option>
              <option value="es">Spanish</option>
              <option value="fr">French</option>
              <option value="de">German</option>
              <option value="ja">Japanese</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Timezone
            </label>
            <select
              value={timezone}
              onChange={(e) => setTimezone(e.target.value)}
              className="w-full px-3 py-2 border border-purple-200 rounded-md focus:ring-2 focus:ring-purple-500"
            >
              <option value="UTC">UTC</option>
              <option value="EST">Eastern Time</option>
              <option value="PST">Pacific Time</option>
              <option value="GMT">Greenwich Mean Time</option>
              <option value="JST">Japan Standard Time</option>
            </select>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow border border-purple-100">
        <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
          <Volume2 className="w-5 h-5 mr-2 text-purple-600" />
          Audio & Performance
        </h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              System Volume
            </label>
            <div className="flex items-center space-x-4">
              <input
                type="range"
                min="0"
                max="100"
                value={volume}
                onChange={(e) => setVolume(e.target.value)}
                className="flex-1 h-2 bg-purple-200 rounded-lg appearance-none cursor-pointer"
              />
              <span className="text-sm text-gray-600 w-12">{volume}%</span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-700">
              Auto-save settings
            </span>
            <button
              onClick={() => setAutoSave(!autoSave)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                autoSave ? "bg-purple-600" : "bg-gray-200"
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  autoSave ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderAccountSettings = () => (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow border border-purple-100">
        <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
          <User className="w-5 h-5 mr-2 text-purple-600" />
          Profile Information
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Full Name
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full px-3 py-2 border border-purple-200 rounded-md focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
              placeholder="john@example.com"
              className="w-full px-3 py-2 border border-purple-200 rounded-md focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              placeholder="+1 (555) 123-4567"
              className="w-full px-3 py-2 border border-purple-200 rounded-md focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Department
            </label>
            <select className="w-full px-3 py-2 border border-purple-200 rounded-md focus:ring-2 focus:ring-purple-500">
              <option>Engineering</option>
              <option>Marketing</option>
              <option>Sales</option>
              <option>HR</option>
            </select>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow border border-purple-100">
        <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
          <Lock className="w-5 h-5 mr-2 text-purple-600" />
          Security Settings
        </h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Current Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                className="w-full px-3 py-2 border border-purple-200 rounded-md focus:ring-2 focus:ring-purple-500 pr-10"
              />
              <button
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <span className="text-sm font-medium text-gray-700">
                Two-Factor Authentication
              </span>
              <p className="text-xs text-gray-500">
                Add an extra layer of security
              </p>
            </div>
            <button
              onClick={() => setTwoFactorAuth(!twoFactorAuth)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                twoFactorAuth ? "bg-purple-600" : "bg-gray-200"
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  twoFactorAuth ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderNotificationSettings = () => (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow border border-purple-100">
        <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
          <Bell className="w-5 h-5 mr-2 text-purple-600" />
          Notification Preferences
        </h3>
        <div className="space-y-4">
          {Object.entries(notifications).map(([key, value]) => (
            <div key={key} className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                {key === "email" && <Mail className="w-5 h-5 text-blue-500" />}
                {key === "push" && (
                  <Smartphone className="w-5 h-5 text-green-500" />
                )}
                {key === "sms" && (
                  <Smartphone className="w-5 h-5 text-yellow-500" />
                )}
                {key === "desktop" && (
                  <Monitor className="w-5 h-5 text-purple-500" />
                )}
                {key === "marketing" && (
                  <FileText className="w-5 h-5 text-pink-500" />
                )}
                {key === "security" && (
                  <Shield className="w-5 h-5 text-red-500" />
                )}
                <div>
                  <span className="text-sm font-medium text-gray-700 capitalize">
                    {key} notifications
                  </span>
                  <p className="text-xs text-gray-500">
                    Receive {key} notifications
                  </p>
                </div>
              </div>
              <button
                onClick={() => handleNotificationChange(key)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  value ? "bg-purple-600" : "bg-gray-200"
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    value ? "translate-x-6" : "translate-x-1"
                  }`}
                />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderPrivacySettings = () => (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow border border-purple-100">
        <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
          <Shield className="w-5 h-5 mr-2 text-purple-600" />
          Privacy Controls
        </h3>
        <div className="space-y-4">
          {Object.entries(privacy).map(([key, value]) => (
            <div key={key} className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                {key === "profileVisible" && (
                  <User className="w-5 h-5 text-blue-500" />
                )}
                {key === "dataCollection" && (
                  <Database className="w-5 h-5 text-green-500" />
                )}
                {key === "analytics" && (
                  <Activity className="w-5 h-5 text-yellow-500" />
                )}
                {key === "cookies" && (
                  <Globe className="w-5 h-5 text-purple-500" />
                )}
                {key === "location" && (
                  <MapPin className="w-5 h-5 text-red-500" />
                )}
                {key === "camera" && (
                  <Camera className="w-5 h-5 text-pink-500" />
                )}
                {key === "microphone" && (
                  <Volume2 className="w-5 h-5 text-orange-500" />
                )}
                <div>
                  <span className="text-sm font-medium text-gray-700 capitalize">
                    {key.replace(/([A-Z])/g, " $1").toLowerCase()}
                  </span>
                  <p className="text-xs text-gray-500">
                    Control {key.replace(/([A-Z])/g, " $1").toLowerCase()}{" "}
                    access
                  </p>
                </div>
              </div>
              <button
                onClick={() => handlePrivacyChange(key)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  value ? "bg-purple-600" : "bg-gray-200"
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    value ? "translate-x-6" : "translate-x-1"
                  }`}
                />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderAppearanceSettings = () => (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow border border-purple-100">
        <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
          <Palette className="w-5 h-5 mr-2 text-purple-600" />
          Theme & Display
        </h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              {darkMode ? (
                <Moon className="w-5 h-5 text-blue-500" />
              ) : (
                <Sun className="w-5 h-5 text-yellow-500" />
              )}
              <span className="text-sm font-medium text-gray-700">
                Dark Mode
              </span>
            </div>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                darkMode ? "bg-purple-600" : "bg-gray-200"
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  darkMode ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Theme
            </label>
            <div className="grid grid-cols-4 gap-2">
              {["default", "blue", "green", "orange"].map((color) => (
                <button
                  key={color}
                  onClick={() => setTheme(color)}
                  className={`p-3 rounded-lg border-2 ${
                    theme === color ? "border-purple-500" : "border-gray-200"
                  }`}
                >
                  <div
                    className={`w-full h-8 rounded ${
                      color === "default"
                        ? "bg-gradient-to-r from-purple-500 to-pink-500"
                        : color === "blue"
                        ? "bg-blue-500"
                        : color === "green"
                        ? "bg-green-500"
                        : "bg-orange-500"
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Font Size
            </label>
            <select
              value={fontSize}
              onChange={(e) => setFontSize(e.target.value)}
              className="w-full px-3 py-2 border border-purple-200 rounded-md focus:ring-2 focus:ring-purple-500"
            >
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );

  const renderSystemSettings = () => (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow border border-purple-100">
        <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
          <Monitor className="w-5 h-5 mr-2 text-purple-600" />
          System Information
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center space-x-2 mb-2">
              <Cpu className="w-4 h-4 text-blue-500" />
              <span className="text-sm font-medium">Processor</span>
            </div>
            <p className="text-sm text-gray-600">{systemInfo.processor}</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center space-x-2 mb-2">
              <HardDrive className="w-4 h-4 text-green-500" />
              <span className="text-sm font-medium">Storage</span>
            </div>
            <p className="text-sm text-gray-600">{systemInfo.storage}</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center space-x-2 mb-2">
              <Zap className="w-4 h-4 text-purple-500" />
              <span className="text-sm font-medium">Memory</span>
            </div>
            <p className="text-sm text-gray-600">{systemInfo.memory}</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center space-x-2 mb-2">
              <Settings className="w-4 h-4 text-orange-500" />
              <span className="text-sm font-medium">OS Version</span>
            </div>
            <p className="text-sm text-gray-600">
              {systemInfo.os} {systemInfo.version}
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow border border-purple-100">
        <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
          <Database className="w-5 h-5 mr-2 text-purple-600" />
          Data Management
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="flex items-center justify-center p-4 border border-purple-200 rounded-lg hover:bg-purple-50 transition-colors">
            <Download className="w-5 h-5 mr-2 text-blue-500" />
            <span className="text-sm font-medium">Export Data</span>
          </button>
          <button className="flex items-center justify-center p-4 border border-purple-200 rounded-lg hover:bg-purple-50 transition-colors">
            <Upload className="w-5 h-5 mr-2 text-green-500" />
            <span className="text-sm font-medium">Import Data</span>
          </button>
          <button className="flex items-center justify-center p-4 border border-red-200 rounded-lg hover:bg-red-50 transition-colors">
            <Trash2 className="w-5 h-5 mr-2 text-red-500" />
            <span className="text-sm font-medium">Clear Cache</span>
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <SidebarLayout title="Settings">
      <div className="bg-gradient-to-br from-purple-100 via-pink-100 to-purple-200 p-6 rounded-lg">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-6">
            <h1 className="text-3xl font-bold text-white flex items-center">
              <Settings className="w-8 h-8 mr-3" />
              System Settings
            </h1>
            <p className="text-purple-100 mt-2">
              Customize your system configuration and preferences
            </p>
          </div>

          <div className="flex flex-col lg:flex-row">
            <div className="w-full lg:w-64 bg-gray-50 border-r border-gray-200">
              <nav className="p-4">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center px-4 py-3 text-left rounded-lg mb-2 transition-colors ${
                        activeTab === tab.id
                          ? "bg-purple-600 text-white"
                          : "text-gray-700 hover:bg-purple-100"
                      }`}
                    >
                      <Icon className="w-5 h-5 mr-3" />
                      {tab.label}
                    </button>
                  );
                })}
              </nav>
            </div>

            <div className="flex-1 p-6">
              {renderContent()}
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <button className="flex items-center justify-center px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                  <Save className="w-5 h-5 mr-2" />
                  Save Changes
                </button>
                <button className="flex items-center justify-center px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors">
                  <RotateCcw className="w-5 h-5 mr-2" />
                  Reset Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SidebarLayout>
  );
};

export default SettingsPage;
