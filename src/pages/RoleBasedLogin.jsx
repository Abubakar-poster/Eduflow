import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import {
  User,
  Lock,
  Mail,
  Eye,
  EyeOff,
  Shield,
  GraduationCap,
  BookOpen,
  ChevronDown,
  CheckCircle,
} from "lucide-react";
import { AuthContext } from "../App";

const RoleBasedLogin = () => {
  const [selectedRole, setSelectedRole] = useState("Admin");
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [roleDropdownOpen, setRoleDropdownOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { users, login } = useContext(AuthContext);

  const roles = [
    {
      id: "student",
      name: "Student",
      icon: GraduationCap,
      color: "from-pink-500 to-purple-600",
      bgColor: "bg-pink-50",
      textColor: "text-pink-600",
    },
    {
      id: "teacher",
      name: "Teacher",
      icon: BookOpen,
      color: "from-purple-500 to-pink-600",
      bgColor: "bg-purple-50",
      textColor: "text-purple-600",
    },
    {
      id: "admin",
      name: "Administrator",
      icon: Shield,
      color: "from-pink-600 to-purple-700",
      bgColor: "bg-pink-100",
      textColor: "text-pink-700",
    },
  ];

  const currentRole = roles.find((role) => role.id === selectedRole);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage("");

    try {
      if (!email || !password) {
        setErrorMessage("Email and password are required.");
        return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        setErrorMessage("Please enter a valid email address.");
        return;
      }

      if (password.length < 6) {
        setErrorMessage("Password must be at least 6 characters.");
        return;
      }

      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const user = users.find(
        (u) =>
          u.email === email &&
          u.password === password &&
          u.role === selectedRole
      );

      if (user) {
        login({
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role,
        });

        // ✅ Redirect to dashboard based on role
        if (user.role === "admin") {
          navigate("/admin/dashboard");
        } else if (user.role === "teacher") {
          navigate("/teacher");
        } else if (user.role === "student") {
          navigate("/student");
        }
      } else {
        setErrorMessage("Invalid credentials for the selected role");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 flex items-center justify-center p-4">
      <div className="max-w-6xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden">
        <div className="grid md:grid-cols-2 gap-0">
          <div className="bg-gradient-to-br from-pink-400 via-purple-400 to-pink-500 p-8 md:p-12 flex items-center justify-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute top-10 left-10 w-20 h-20 bg-white bg-opacity-20 rounded-full"></div>
              <div className="absolute bottom-20 right-10 w-16 h-16 bg-white bg-opacity-15 rounded-full"></div>
              <div className="absolute top-1/2 left-5 w-12 h-12 bg-white bg-opacity-10 rounded-full"></div>
              <div className="absolute bottom-10 left-1/3 w-8 h-8 bg-white bg-opacity-20 rounded-full"></div>
            </div>

            <div className="relative z-10 text-center">
              <div className="mb-8">
                <div className="relative inline-block">
                  <div className="w-64 h-64 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-6">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-white rounded-full mx-auto mb-4 flex items-center justify-center">
                        <User className="w-8 h-8 text-pink-500" />
                      </div>
                      <div className="w-32 h-20 bg-gray-800 rounded-lg mx-auto relative">
                        <div className="w-30 h-16 bg-white rounded-sm absolute top-1 left-1 flex items-center justify-center">
                          <div className="text-pink-500">
                            <currentRole.icon className="w-8 h-8" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                </div>
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">
                Welcome to SMS
              </h2>
              <p className="text-white text-opacity-90 text-lg">
                Access your learning dashboard and explore endless possibilities
              </p>
            </div>
          </div>

          <div className="p-8 md:p-12 flex flex-col justify-center">
            <div className="max-w-md mx-auto w-full">
              <div className="text-center mb-8">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                </div>
                <h1 className="text-3xl font-bold text-gray-800 mb-2">
                  Account Login
                </h1>
                <p className="text-gray-600">
                  Please select your role and sign in with your account
                </p>
              </div>

              {errorMessage && (
                <div className="mb-6 text-red-600 text-sm bg-red-100 border border-red-300 p-3 rounded-lg">
                  {errorMessage}
                </div>
              )}

              {/* Role Selector */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Select Role
                </label>
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setRoleDropdownOpen(!roleDropdownOpen)}
                    className={`w-full p-4 rounded-xl border-2 border-gray-200 focus:border-pink-500 focus:outline-none transition-colors ${currentRole.bgColor} ${currentRole.textColor} flex items-center justify-between`}
                  >
                    <div className="flex items-center space-x-3">
                      <currentRole.icon className="w-5 h-5" />
                      <span className="font-medium">{currentRole.name}</span>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 transition-transform ${
                        roleDropdownOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {roleDropdownOpen && (
                    <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-xl shadow-lg z-10">
                      {roles.map((role) => (
                        <button
                          key={role.id}
                          onClick={() => {
                            setSelectedRole(role.id);
                            setRoleDropdownOpen(false);
                          }}
                          className={`w-full p-4 text-left hover:bg-gray-50 flex items-center space-x-3 ${
                            selectedRole === role.id ? "bg-pink-50" : ""
                          }`}
                        >
                          <role.icon className={`w-5 h-5 ${role.textColor}`} />
                          <span className="font-medium">{role.name}</span>
                          {selectedRole === role.id && (
                            <CheckCircle className="w-5 h-5 text-pink-500 ml-auto" />
                          )}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Login Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border-2 border-gray-200 focus:border-pink-500 focus:outline-none transition-colors"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full pl-10 pr-12 py-3 rounded-xl border-2 border-gray-200 focus:border-pink-500 focus:outline-none transition-colors"
                      placeholder="Enter your password"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
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
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      className="w-4 h-4 text-pink-500 border-gray-300 rounded focus:ring-pink-500"
                    />
                    <span className="text-sm text-gray-600">Remember me</span>
                  </label>
                  <button
                    type="button"
                    className="text-sm text-pink-600 hover:text-pink-700 font-medium"
                  >
                    Forgot Password?
                  </button>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className={`w-full py-3 rounded-xl text-white font-semibold bg-gradient-to-r ${
                    currentRole.color
                  } hover:shadow-lg transition-all duration-200 ${
                    isLoading
                      ? "opacity-70 cursor-not-allowed"
                      : "transform hover:scale-105"
                  }`}
                >
                  {isLoading ? (
                    <span className="inline-flex items-center">
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Signing in...
                    </span>
                  ) : (
                    `Sign In as ${currentRole.name}`
                  )}
                </button>
              </form>

              <div className="mt-8 text-center">
                <p className="text-gray-600">
                  Don't have an account?{" "}
                  <button className="text-pink-600 hover:text-pink-700 font-medium">
                    Contact Administrator
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoleBasedLogin;
