import React, { useState } from "react";
import SidebarLayout from "../../layouts/SidebarLayout";
import {
  Search,
  Plus,
  Edit,
  Trash2,
  Mail,
  Phone,
  Shield,
  User,
  Filter,
  Download,
  MoreVertical,
} from "lucide-react";

const UsersPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterRole, setFilterRole] = useState("all");
  const [showAddModal, setShowAddModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Sarah Johnson",
      email: "sarah.johnson@company.com",
      role: "Admin",
      status: "Active",
      phone: "+1 (555) 123-4567",
      department: "IT",
      joinDate: "2023-01-15",
      avatar: "SJ",
    },
    {
      id: 2,
      name: "Michael Chen",
      email: "michael.chen@company.com",
      role: "User",
      status: "Active",
      phone: "+1 (555) 234-5678",
      department: "Marketing",
      joinDate: "2023-03-22",
      avatar: "MC",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      email: "emily.rodriguez@company.com",
      role: "Manager",
      status: "Inactive",
      phone: "+1 (555) 345-6789",
      department: "Sales",
      joinDate: "2022-11-08",
      avatar: "ER",
    },
    {
      id: 4,
      name: "David Wilson",
      email: "david.wilson@company.com",
      role: "User",
      status: "Active",
      phone: "+1 (555) 456-7890",
      department: "Support",
      joinDate: "2023-05-12",
      avatar: "DW",
    },
    {
      id: 5,
      name: "Lisa Anderson",
      email: "lisa.anderson@company.com",
      role: "Admin",
      status: "Active",
      phone: "+1 (555) 567-8901",
      department: "HR",
      joinDate: "2023-02-28",
      avatar: "LA",
    },
  ]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "User",
    department: "",
    phone: "",
  });

  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.department.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = filterRole === "all" || user.role === filterRole;
    return matchesSearch && matchesRole;
  });

  const handleAddUser = () => {
    if (formData.name && formData.email) {
      const newUser = {
        id: users.length + 1,
        ...formData,
        status: "Active",
        joinDate: new Date().toISOString().split("T")[0],
        avatar: formData.name
          .split(" ")
          .map((n) => n[0])
          .join("")
          .toUpperCase(),
      };
      setUsers([...users, newUser]);
      setFormData({
        name: "",
        email: "",
        role: "User",
        department: "",
        phone: "",
      });
      setShowAddModal(false);
    }
  };

  const handleDeleteUser = () => {
    setUsers(users.filter((user) => user.id !== selectedUser.id));
    setShowDeleteModal(false);
    setSelectedUser(null);
  };

  const getRoleColor = (role) => {
    switch (role) {
      case "Admin":
        return "bg-purple-100 text-purple-800";
      case "Manager":
        return "bg-pink-100 text-pink-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusColor = (status) => {
    return status === "Active"
      ? "bg-green-100 text-green-800"
      : "bg-red-100 text-red-800";
  };

  return (
    <SidebarLayout title="Users">
      <div className="min-h-screen">
        {/* Header Actions */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-semibold text-gray-800">
              Users Management
            </h2>
            <p className="text-gray-600 text-sm">
              Manage all system users and their permissions.
            </p>
          </div>
          <div className="flex space-x-3">
            <button className="flex items-center px-4 py-2 text-purple-600 bg-purple-100 rounded-lg hover:bg-purple-200 transition-colors">
              <Download className="w-4 h-4 mr-2" />
              Export
            </button>
            <button
              onClick={() => setShowAddModal(true)}
              className="flex items-center px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all shadow-md"
            >
              <Plus className="w-4 h-4 mr-2" />
              Add User
            </button>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-6 border border-purple-100">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search users..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
            <div className="flex items-center space-x-3">
              <Filter className="w-5 h-5 text-gray-400" />
              <select
                value={filterRole}
                onChange={(e) => setFilterRole(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="all">All Roles</option>
                <option value="Admin">Admin</option>
                <option value="Manager">Manager</option>
                <option value="User">User</option>
              </select>
            </div>
          </div>
        </div>

        {/* Users Table */}
        <div className="bg-white rounded-xl shadow-sm border border-purple-100 overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-gradient-to-r from-purple-50 to-pink-50">
              <tr>
                <th className="text-left px-6 py-4 text-sm font-medium text-gray-700">
                  User
                </th>
                <th className="text-left px-6 py-4 text-sm font-medium text-gray-700">
                  Role
                </th>
                <th className="text-left px-6 py-4 text-sm font-medium text-gray-700">
                  Department
                </th>
                <th className="text-left px-6 py-4 text-sm font-medium text-gray-700">
                  Status
                </th>
                <th className="text-left px-6 py-4 text-sm font-medium text-gray-700">
                  Join Date
                </th>
                <th className="text-left px-6 py-4 text-sm font-medium text-gray-700">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredUsers.map((user) => (
                <tr
                  key={user.id}
                  className="hover:bg-purple-50 transition-colors"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-medium text-sm">
                        {user.avatar}
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          {user.name}
                        </div>
                        <div className="text-sm text-gray-500 flex items-center">
                          <Mail className="w-4 h-4 mr-1" />
                          {user.email}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-2 py-1 text-xs font-medium rounded-full ${getRoleColor(
                        user.role
                      )}`}
                    >
                      {user.role}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    {user.department}
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(
                        user.status
                      )}`}
                    >
                      {user.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    {user.joinDate}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-2">
                      <button className="p-2 text-purple-600 hover:bg-purple-100 rounded-lg transition-colors">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => {
                          setSelectedUser(user);
                          setShowDeleteModal(true);
                        }}
                        className="p-2 text-red-600 hover:bg-red-100 rounded-lg transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                        <MoreVertical className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Add and Delete modals stay unchanged */}
        {showAddModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl shadow-xl p-6 w-full max-w-md mx-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Add New User
              </h3>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-2 border rounded-lg"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-2 border rounded-lg"
                />
                <select
                  value={formData.role}
                  onChange={(e) =>
                    setFormData({ ...formData, role: e.target.value })
                  }
                  className="w-full px-4 py-2 border rounded-lg"
                >
                  <option value="User">User</option>
                  <option value="Manager">Manager</option>
                  <option value="Admin">Admin</option>
                </select>
                <input
                  type="text"
                  placeholder="Department"
                  value={formData.department}
                  onChange={(e) =>
                    setFormData({ ...formData, department: e.target.value })
                  }
                  className="w-full px-4 py-2 border rounded-lg"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full px-4 py-2 border rounded-lg"
                />
              </div>
              <div className="flex justify-end mt-4">
                <button
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2 text-gray-600"
                >
                  Cancel
                </button>
                <button
                  onClick={handleAddUser}
                  className="ml-3 px-4 py-2 bg-purple-600 text-white rounded-lg"
                >
                  Add User
                </button>
              </div>
            </div>
          </div>
        )}

        {showDeleteModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl shadow-xl p-6 w-full max-w-md mx-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Delete User
              </h3>
              <p className="text-gray-600 mb-6">
                Are you sure you want to delete {selectedUser?.name}?
              </p>
              <div className="flex justify-end">
                <button
                  onClick={() => setShowDeleteModal(false)}
                  className="px-4 py-2 text-gray-600"
                >
                  Cancel
                </button>
                <button
                  onClick={handleDeleteUser}
                  className="ml-3 px-4 py-2 bg-red-600 text-white rounded-lg"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </SidebarLayout>
  );
};

export default UsersPage;
