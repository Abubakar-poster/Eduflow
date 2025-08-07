import React, { useState } from "react";
import {
  Users,
  UserPlus,
  Edit3,
  Trash2,
  Shield,
  Eye,
  Search,
  Filter,
  MoreVertical,
  CheckCircle,
  XCircle,
} from "lucide-react";
import SidebarLayout from "../../layouts/SidebarLayout";

const RolesPage = () => {
  const [activeTab, setActiveTab] = useState("roles");
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [showAddModal, setShowAddModal] = useState(false);
  const [showAssignModal, setShowAssignModal] = useState(false);
  const [selectedRole, setSelectedRole] = useState(null);

  // Sample data
  const [roles, setRoles] = useState([
    {
      id: 1,
      name: "Administrator",
      description: "Full system access and management",
      permissions: ["all"],
      userCount: 3,
      status: "active",
      color: "bg-purple-100 text-purple-800",
    },
    {
      id: 2,
      name: "Principal",
      description: "School-wide management and oversight",
      permissions: ["manage_staff", "view_reports", "manage_students"],
      userCount: 1,
      status: "active",
      color: "bg-pink-100 text-pink-800",
    },
    {
      id: 3,
      name: "Teacher",
      description: "Classroom and student management",
      permissions: ["manage_classes", "view_students", "create_assignments"],
      userCount: 45,
      status: "active",
      color: "bg-purple-100 text-purple-700",
    },
    {
      id: 4,
      name: "Student",
      description: "Access to courses and assignments",
      permissions: ["view_courses", "submit_assignments"],
      userCount: 850,
      status: "active",
      color: "bg-pink-100 text-pink-700",
    },
    {
      id: 5,
      name: "Parent",
      description: "View child's progress and communicate",
      permissions: ["view_child_progress", "communicate_teachers"],
      userCount: 623,
      status: "active",
      color: "bg-purple-100 text-purple-600",
    },
  ]);

  const [users, setUsers] = useState([
    {
      id: 1,
      name: "John Smith",
      email: "john@school.edu",
      role: "Administrator",
      status: "active",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      email: "sarah@school.edu",
      role: "Principal",
      status: "active",
    },
    {
      id: 3,
      name: "Mike Brown",
      email: "mike@school.edu",
      role: "Teacher",
      status: "active",
    },
    {
      id: 4,
      name: "Emily Davis",
      email: "emily@school.edu",
      role: "Teacher",
      status: "inactive",
    },
    {
      id: 5,
      name: "David Wilson",
      email: "david@school.edu",
      role: "Student",
      status: "active",
    },
  ]);

  const permissions = [
    "all",
    "manage_staff",
    "view_reports",
    "manage_students",
    "manage_classes",
    "view_students",
    "create_assignments",
    "view_courses",
    "submit_assignments",
    "view_child_progress",
    "communicate_teachers",
  ];

  const filteredRoles = roles.filter(
    (role) =>
      role.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (filterStatus === "all" || role.status === filterStatus)
  );

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (filterStatus === "all" || user.status === filterStatus)
  );

  const AddRoleModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          Add New Role
        </h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Role Name
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              rows="3"
            ></textarea>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Permissions
            </label>
            <div className="grid grid-cols-2 gap-2 max-h-32 overflow-y-auto">
              {permissions.map((perm) => (
                <label key={perm} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                  />
                  <span className="text-sm text-gray-700">
                    {perm.replace("_", " ")}
                  </span>
                </label>
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-end space-x-3 mt-6">
          <button
            onClick={() => setShowAddModal(false)}
            className="px-4 py-2 text-gray-600 hover:text-gray-800"
          >
            Cancel
          </button>
          <button className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700">
            Create Role
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <SidebarLayout title="Roles Management">
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="p-6">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              Roles Management
            </h1>
            <p className="text-gray-600">
              Manage user roles and permissions across your school system
            </p>
          </div>

          {/* Tabs */}
          <div className="flex space-x-1 mb-6">
            <button
              onClick={() => setActiveTab("roles")}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                activeTab === "roles"
                  ? "bg-purple-600 text-white"
                  : "bg-white text-gray-600 hover:bg-purple-50"
              }`}
            >
              <Shield className="inline w-4 h-4 mr-2" />
              Roles
            </button>
            <button
              onClick={() => setActiveTab("users")}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                activeTab === "users"
                  ? "bg-purple-600 text-white"
                  : "bg-white text-gray-600 hover:bg-purple-50"
              }`}
            >
              <Users className="inline w-4 h-4 mr-2" />
              User Assignments
            </button>
          </div>

          {/* Search and Filter Bar */}
          <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder={
                    activeTab === "roles" ? "Search roles..." : "Search users..."
                  }
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="flex gap-2">
                <select
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                >
                  <option value="all">All Status</option>
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </select>
                <button
                  onClick={() =>
                    activeTab === "roles"
                      ? setShowAddModal(true)
                      : setShowAssignModal(true)
                  }
                  className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 flex items-center space-x-2"
                >
                  <UserPlus className="w-4 h-4" />
                  <span>
                    {activeTab === "roles" ? "Add Role" : "Assign Role"}
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Roles Tab Content */}
          {activeTab === "roles" && (
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredRoles.map((role) => (
                <div
                  key={role.id}
                  className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div
                          className={`w-10 h-10 rounded-lg ${role.color} flex items-center justify-center`}
                        >
                          <Shield className="w-5 h-5" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-800">
                            {role.name}
                          </h3>
                          <p className="text-sm text-gray-600">
                            {role.userCount} users
                          </p>
                        </div>
                      </div>
                      <button className="text-gray-400 hover:text-gray-600">
                        <MoreVertical className="w-4 h-4" />
                      </button>
                    </div>

                    <p className="text-gray-600 text-sm mb-4">
                      {role.description}
                    </p>

                    <div className="mb-4">
                      <p className="text-xs font-medium text-gray-500 mb-2">
                        PERMISSIONS
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {role.permissions.slice(0, 3).map((perm) => (
                          <span
                            key={perm}
                            className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded"
                          >
                            {perm.replace("_", " ")}
                          </span>
                        ))}
                        {role.permissions.length > 3 && (
                          <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                            +{role.permissions.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        {role.status === "active" ? (
                          <CheckCircle className="w-4 h-4 text-green-500" />
                        ) : (
                          <XCircle className="w-4 h-4 text-red-500" />
                        )}
                        <span
                          className={`text-sm font-medium ${
                            role.status === "active"
                              ? "text-green-600"
                              : "text-red-600"
                          }`}
                        >
                          {role.status}
                        </span>
                      </div>
                      <div className="flex space-x-2">
                        <button className="text-purple-600 hover:text-purple-800">
                          <Edit3 className="w-4 h-4" />
                        </button>
                        <button className="text-red-600 hover:text-red-800">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Users Tab Content */}
          {activeTab === "users" && (
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        User
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Role
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {filteredUsers.map((user) => (
                      <tr key={user.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white font-medium">
                              {user.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">
                                {user.name}
                              </div>
                              <div className="text-sm text-gray-500">
                                {user.email}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">
                            {user.role}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            {user.status === "active" ? (
                              <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                            ) : (
                              <XCircle className="w-4 h-4 text-red-500 mr-2" />
                            )}
                            <span
                              className={`text-sm font-medium ${
                                user.status === "active"
                                  ? "text-green-600"
                                  : "text-red-600"
                              }`}
                            >
                              {user.status}
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <div className="flex space-x-2">
                            <button className="text-purple-600 hover:text-purple-900">
                              <Edit3 className="w-4 h-4" />
                            </button>
                            <button className="text-blue-600 hover:text-blue-900">
                              <Eye className="w-4 h-4" />
                            </button>
                            <button className="text-red-600 hover:text-red-900">
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8">
            <div className="bg-white rounded-lg shadow-sm p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Roles</p>
                  <p className="text-2xl font-bold text-purple-600">
                    {roles.length}
                  </p>
                </div>
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Shield className="w-5 h-5 text-purple-600" />
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Active Users</p>
                  <p className="text-2xl font-bold text-green-600">
                    {users.filter((u) => u.status === "active").length}
                  </p>
                </div>
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 text-green-600" />
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Permissions</p>
                  <p className="text-2xl font-bold text-blue-600">
                    {permissions.length}
                  </p>
                </div>
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Shield className="w-5 h-5 text-blue-600" />
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Inactive Users</p>
                  <p className="text-2xl font-bold text-red-600">
                    {users.filter((u) => u.status === "inactive").length}
                  </p>
                </div>
                <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                  <XCircle className="w-5 h-5 text-red-600" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modals */}
        {showAddModal && <AddRoleModal />}
      </div>
    </SidebarLayout>
  );
};

export default RolesPage;
