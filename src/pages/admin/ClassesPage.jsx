import React, { useState } from "react";
import {
  Plus,
  Search,
  Filter,
  Edit,
  Users,
  Clock,
  Calendar,
  MapPin,
} from "lucide-react";
import SidebarLayout from "../../layouts/SidebarLayout"; // Ensure this path matches your folder structure

const ClassesPage = () => {
  const [classes, setClasses] = useState([
    {
      id: 1,
      name: "Advanced Mathematics",
      subject: "Mathematics",
      instructor: "Dr. Sarah Johnson",
      students: 28,
      schedule: "Mon, Wed, Fri 10:00 AM",
      room: "Room 101",
      duration: "90 min",
      status: "Active",
      startDate: "2024-01-15",
      endDate: "2024-05-15",
    },
    {
      id: 2,
      name: "English Literature",
      subject: "English",
      instructor: "Prof. Michael Brown",
      students: 22,
      schedule: "Tue, Thu 2:00 PM",
      room: "Room 205",
      duration: "75 min",
      status: "Active",
      startDate: "2024-01-16",
      endDate: "2024-05-16",
    },
    {
      id: 3,
      name: "Physics Lab",
      subject: "Physics",
      instructor: "Dr. Emily Davis",
      students: 15,
      schedule: "Wed 3:00 PM",
      room: "Lab 301",
      duration: "120 min",
      status: "Inactive",
      startDate: "2024-01-17",
      endDate: "2024-05-17",
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [editingClass, setEditingClass] = useState(null);

  const [newClass, setNewClass] = useState({
    name: "",
    subject: "",
    instructor: "",
    schedule: "",
    room: "",
    duration: "",
    startDate: "",
    endDate: "",
  });

  const filteredClasses = classes.filter((cls) => {
    const matchesSearch =
      cls.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cls.instructor.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cls.subject.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === "All" || cls.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const handleCreateClass = () => {
    if (newClass.name && newClass.subject && newClass.instructor) {
      const classToAdd = {
        ...newClass,
        id: Date.now(),
        students: 0,
        status: "Active",
      };
      setClasses([...classes, classToAdd]);
      setNewClass({
        name: "",
        subject: "",
        instructor: "",
        schedule: "",
        room: "",
        duration: "",
        startDate: "",
        endDate: "",
      });
      setShowCreateModal(false);
    }
  };

  const handleUpdateClass = () => {
    setClasses(
      classes.map((cls) => (cls.id === editingClass.id ? editingClass : cls))
    );
    setEditingClass(null);
  };

  const toggleClassStatus = (id) => {
    setClasses(
      classes.map((cls) =>
        cls.id === id
          ? { ...cls, status: cls.status === "Active" ? "Inactive" : "Active" }
          : cls
      )
    );
  };

  return (
    <SidebarLayout title="Manage Classes">
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Classes</h1>
            <p className="text-gray-600 mt-1">
              Manage your classes and schedules
            </p>
          </div>
          <button
            onClick={() => setShowCreateModal(true)}
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg hover:from-purple-700 hover:to-pink-700 transition"
          >
            <Plus className="inline-block mr-2" size={18} />
            Create Class
          </button>
        </div>

        {/* Search & Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-3 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div className="relative">
            <Filter className="absolute left-3 top-3 text-gray-400" size={20} />
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="pl-10 pr-8 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 bg-white"
            >
              <option value="All">All</option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>
        </div>

        {/* Classes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredClasses.map((cls) => (
            <div key={cls.id} className="bg-white p-6 rounded-xl shadow border">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl font-semibold text-gray-800">
                  {cls.name}
                </h3>
                <span
                  className={`px-3 py-1 text-xs rounded-full ${
                    cls.status === "Active"
                      ? "bg-green-100 text-green-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {cls.status}
                </span>
              </div>
              <div className="text-gray-600 space-y-2 mb-4 text-sm">
                <p>
                  <Users size={16} className="inline-block mr-1" />
                  {cls.students} students
                </p>
                <p>
                  <Clock size={16} className="inline-block mr-1" />
                  {cls.schedule}
                </p>
                <p>
                  <MapPin size={16} className="inline-block mr-1" />
                  {cls.room}
                </p>
                <p>
                  <Calendar size={16} className="inline-block mr-1" />
                  {cls.duration}
                </p>
              </div>
              <p className="text-sm text-gray-800 mb-3">
                <span className="font-semibold">Instructor:</span>{" "}
                {cls.instructor}
              </p>
              <div className="flex gap-2">
                <button
                  onClick={() => setEditingClass(cls)}
                  className="bg-purple-100 text-purple-700 px-3 py-1 rounded hover:bg-purple-200"
                >
                  <Edit className="inline-block mr-1" size={14} />
                  Edit
                </button>
                <button
                  onClick={() => toggleClassStatus(cls.id)}
                  className={`px-3 py-1 rounded ${
                    cls.status === "Active"
                      ? "bg-red-100 text-red-700 hover:bg-red-200"
                      : "bg-green-100 text-green-700 hover:bg-green-200"
                  }`}
                >
                  {cls.status === "Active" ? "Deactivate" : "Activate"}
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredClasses.length === 0 && (
          <div className="text-center mt-12 text-gray-500">
            No classes found.
          </div>
        )}
      </div>
    </SidebarLayout>
  );
};

export default ClassesPage;
