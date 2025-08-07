import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Home,
  Users,
  UserCheck,
  BookOpen,
  GraduationCap,
  FileText,
  DollarSign,
  Settings,
  Shield,
  BarChart3,
  LogOut,
} from "lucide-react";

export default function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  const items = [
    { icon: Home, label: "Dashboard", path: "/admin/dashboard" },
    { icon: Users, label: "Students", path: "/admin/students" },
    { icon: Users, label: "Teachers", path: "/admin/teachers" },
    { icon: UserCheck, label: "Users", path: "/admin/users" },
    { icon: BookOpen, label: "Manage Classes", path: "/admin/classes" },
    { icon: GraduationCap, label: "Academics", path: "/admin/academics" },
    { icon: FileText, label: "Exams", path: "/admin/exams" },
    { icon: DollarSign, label: "Finance", path: "/admin/finance" },
    { icon: Settings, label: "Settings", path: "/admin/settings" },
    { icon: Shield, label: "Manage Roles", path: "/admin/roles" },
    { icon: BarChart3, label: "Reports", path: "/admin/reports" }, // Report route
  ];

  const handleLogout = () => {
    const confirmLogout = window.confirm("Are you sure you want to logout?");
    if (confirmLogout) {
      localStorage.removeItem("token");
      navigate("/login");
    }
  };

  return (
    <div className="h-full flex flex-col bg-gradient-to-b from-pink-500 to-purple-600 text-white">
      <div className="h-16 flex items-center justify-center font-bold text-xl border-b border-white border-opacity-20">
        SMS
      </div>

      <nav className="mt-4 flex-1 overflow-y-auto px-2">
        {items.map((it) => {
          const active = location.pathname === it.path;
          return (
            <div
              key={it.label}
              onClick={() => navigate(it.path)}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg mb-1 cursor-pointer ${
                active
                  ? "bg-white bg-opacity-20 text-white"
                  : "hover:bg-white hover:bg-opacity-10"
              }`}
            >
              <it.icon className="w-5 h-5" />
              <span className="text-sm font-medium">{it.label}</span>
            </div>
          );
        })}
      </nav>

      <div className="border-t border-white border-opacity-20 px-2 py-4">
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-white hover:bg-white hover:bg-opacity-10"
        >
          <LogOut className="w-5 h-5" />
          <span className="text-sm font-medium">Logout</span>
        </button>
      </div>
    </div>
  );
}
