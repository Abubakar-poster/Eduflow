import React, { useEffect, useState, createContext, useContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";

// Public Pages
import SecondarySchoolLanding from "./pages/SecondarySchoolLanding";
import RoleBasedLogin from "./pages/RoleBasedLogin";
import Unauthorized from "./pages/Unauthorized";
import LoadingSpinner from "./components/LoadingSpinner";

// Dashboards
import AdminDashboard from "./pages/admin/Dashboard";
import TeacherDashboard from "./pages/teacher/Dashboard";
import StudentDashboard from "./pages/student/Dashboard";

// Admin Pages
import StudentsPage from "./pages/admin/StudentsPage";
import TeachersPage from "./pages/admin/TeachersPage";
import UsersPage from "./pages/admin/UsersPage";
import ClassesPage from "./pages/admin/ClassesPage";
import AcademicsPage from "./pages/admin/AcademicsPage";
import ExamsPage from "./pages/admin/ExamsPage";
import FinancePage from "./pages/admin/FinancePage";
import SettingsPage from "./pages/admin/SettingsPage";
import RolesPage from "./pages/admin/RolesPage";
import ReportsPage from "./pages/admin/ReportsPage";

// Teacher Pages
import CoursesPage from "./pages/teacher/CoursesPage";

export const AuthContext = createContext();

function App() {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const initializeApp = async () => {
      try {
        // Simulated users (replace with API call in real app)
        const mockUsers = [
          {
            id: 1,
            email: "admin@example.com",
            password: "password123",
            role: "admin",
            name: "Admin User",
          },
          {
            id: 2,
            email: "teacher@example.com",
            password: "password123",
            role: "teacher",
            name: "Teacher User",
          },
          {
            id: 3,
            email: "student@example.com",
            password: "password123",
            role: "student",
            name: "Student User",
          },
        ];
        setUsers(mockUsers);

        const storedUser = localStorage.getItem("currentUser");
        if (storedUser) {
          setCurrentUser(JSON.parse(storedUser));
        }
      } catch (err) {
        console.error("Initialization error:", err);
      } finally {
        setIsLoading(false);
      }
    };

    initializeApp();
  }, []);

  const login = (userData) => {
    setCurrentUser(userData);
    localStorage.setItem("currentUser", JSON.stringify(userData));
  };

  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem("currentUser");
  };

  if (isLoading) return <LoadingSpinner fullScreen />;

  return (
    <AuthContext.Provider value={{ currentUser, users, login, logout }}>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<SecondarySchoolLanding />} />
          <Route path="/login" element={<RoleBasedLogin />} />
          <Route path="/unauthorized" element={<Unauthorized />} />

          {/* Admin Protected Routes */}
          <Route element={<ProtectedRoute allowedRoles={["admin"]} />}>
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/admin/students" element={<StudentsPage />} />
            <Route path="/admin/teachers" element={<TeachersPage />} />
            <Route path="/admin/users" element={<UsersPage />} />
            <Route path="/admin/classes" element={<ClassesPage />} />
            <Route path="/admin/academics" element={<AcademicsPage />} />
            <Route path="/admin/exams" element={<ExamsPage />} />
            <Route path="/admin/finance" element={<FinancePage />} />
            <Route path="/admin/settings" element={<SettingsPage />} />
            <Route path="/admin/roles" element={<RolesPage />} />
            <Route path="/admin/reports" element={<ReportsPage />} />
          </Route>

          {/* Teacher Protected Routes */}
          <Route element={<ProtectedRoute allowedRoles={["teacher"]} />}>
            <Route path="/teacher" element={<TeacherDashboard />} />
            <Route path="/teacher/courses" element={<CoursesPage />} />
          </Route>

          {/* Student Protected Routes */}
          <Route element={<ProtectedRoute allowedRoles={["student"]} />}>
            <Route path="/student" element={<StudentDashboard />} />
          </Route>

          {/* Fallback Route */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </AuthContext.Provider>
  );
}

const ProtectedRoute = ({ allowedRoles }) => {
  const { currentUser } = useContext(AuthContext);

  if (!currentUser) return <Navigate to="/login" replace />;
  if (!allowedRoles.includes(currentUser.role))
    return <Navigate to="/unauthorized" replace />;

  return <Outlet />;
};

export default App;
