import React, { useState } from "react";
import {
  Calendar,
  Clock,
  Users,
  FileText,
  Plus,
  Edit,
  Trash2,
  Eye,
  CheckCircle,
  AlertCircle,
  Search,
} from "lucide-react";
import SidebarLayout from "../../layouts/SidebarLayout"; // OR similar

const ExamsPage = () => {
  const [activeTab, setActiveTab] = useState("upcoming");
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState("create");
  const [selectedExam, setSelectedExam] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const [exams, setExams] = useState([
    {
      id: 1,
      title: "Mathematics Final",
      subject: "Mathematics",
      date: "2025-07-15",
      time: "09:00",
      duration: "3 hours",
      students: 45,
      status: "scheduled",
      room: "Room 101",
      type: "Final Exam",
    },
    {
      id: 2,
      title: "Physics Midterm",
      subject: "Physics",
      date: "2025-07-20",
      time: "14:00",
      duration: "2 hours",
      students: 38,
      status: "scheduled",
      room: "Lab 203",
      type: "Midterm",
    },
    {
      id: 3,
      title: "Chemistry Quiz",
      subject: "Chemistry",
      date: "2025-07-10",
      time: "10:00",
      duration: "1 hour",
      students: 42,
      status: "completed",
      room: "Room 105",
      type: "Quiz",
      averageScore: 85,
    },
  ]);

  const [formData, setFormData] = useState({
    title: "",
    subject: "",
    date: "",
    time: "",
    duration: "",
    room: "",
    type: "Quiz",
    students: 0,
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (modalType === "create") {
      const newExam = {
        ...formData,
        id: Date.now(),
        status: "scheduled",
        students: parseInt(formData.students) || 0,
      };
      setExams([...exams, newExam]);
    } else {
      setExams(
        exams.map((exam) =>
          exam.id === selectedExam.id ? { ...exam, ...formData } : exam
        )
      );
    }
    setShowModal(false);
    setFormData({
      title: "",
      subject: "",
      date: "",
      time: "",
      duration: "",
      room: "",
      type: "Quiz",
      students: 0,
    });
  };

  const handleEdit = (exam) => {
    setSelectedExam(exam);
    setFormData(exam);
    setModalType("edit");
    setShowModal(true);
  };

  const handleDelete = (id) => {
    setExams(exams.filter((exam) => exam.id !== id));
  };

  const filteredExams = exams.filter((exam) => {
    const matchesSearch =
      exam.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      exam.subject.toLowerCase().includes(searchTerm.toLowerCase());

    if (activeTab === "upcoming")
      return matchesSearch && exam.status === "scheduled";
    if (activeTab === "completed")
      return matchesSearch && exam.status === "completed";
    return matchesSearch;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case "scheduled":
        return "bg-blue-100 text-blue-800";
      case "completed":
        return "bg-green-100 text-green-800";
      case "cancelled":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const ExamCard = ({ exam }) => (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-l-4 border-purple-500">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-semibold text-gray-800">{exam.title}</h3>
          <p className="text-purple-600 font-medium">{exam.subject}</p>
        </div>
        <span
          className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(
            exam.status
          )}`}
        >
          {exam.status}
        </span>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4 text-sm text-gray-600">
        <div className="flex items-center">
          <Calendar className="w-4 h-4 mr-2" />
          {exam.date}
        </div>
        <div className="flex items-center">
          <Clock className="w-4 h-4 mr-2" />
          {exam.time}
        </div>
        <div className="flex items-center">
          <Users className="w-4 h-4 mr-2" />
          {exam.students} students
        </div>
        <div className="flex items-center">
          <FileText className="w-4 h-4 mr-2" />
          {exam.duration}
        </div>
      </div>

      <div className="flex justify-between items-center text-sm text-gray-500">
        <div>
          {exam.room} • {exam.type}
          {exam.averageScore && (
            <span className="ml-2 text-green-600 font-medium">
              Avg: {exam.averageScore}%
            </span>
          )}
        </div>
        <div className="flex space-x-2">
          <button className="p-2 text-purple-600 hover:bg-purple-50 rounded">
            <Eye className="w-4 h-4" />
          </button>
          <button
            onClick={() => handleEdit(exam)}
            className="p-2 text-blue-600 hover:bg-blue-50 rounded"
          >
            <Edit className="w-4 h-4" />
          </button>
          <button
            onClick={() => handleDelete(exam.id)}
            className="p-2 text-red-600 hover:bg-red-50 rounded"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );

  const Modal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4">
        <h2 className="text-xl font-bold mb-4 text-gray-800">
          {modalType === "create" ? "Schedule New Exam" : "Edit Exam"}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            placeholder="Exam Title"
            required
            className="w-full px-3 py-2 border rounded-md"
          />
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
            placeholder="Subject"
            required
            className="w-full px-3 py-2 border rounded-md"
          />
          <div className="grid grid-cols-2 gap-4">
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border rounded-md"
            />
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              name="duration"
              value={formData.duration}
              onChange={handleInputChange}
              placeholder="e.g., 2 hours"
              required
              className="w-full px-3 py-2 border rounded-md"
            />
            <input
              type="text"
              name="room"
              value={formData.room}
              onChange={handleInputChange}
              placeholder="e.g., Room 101"
              required
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <select
            name="type"
            value={formData.type}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-md"
          >
            <option value="Quiz">Quiz</option>
            <option value="Midterm">Midterm</option>
            <option value="Final Exam">Final Exam</option>
            <option value="Assessment">Assessment</option>
          </select>
          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={() => setShowModal(false)}
              className="px-4 py-2 text-gray-600 border rounded-md"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700"
            >
              {modalType === "create" ? "Schedule" : "Update"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );

  return (
    <SidebarLayout title="Exams">
      <div className="p-6">
        {/* Header and Stats */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Exams Management
          </h1>
          <p className="text-gray-600">
            Schedule, manage, and view exam results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <StatCard
            title="Total Exams"
            value={exams.length}
            icon={<FileText />}
            color="text-purple-600"
          />
          <StatCard
            title="Upcoming"
            value={exams.filter((e) => e.status === "scheduled").length}
            icon={<Clock />}
            color="text-blue-600"
          />
          <StatCard
            title="Completed"
            value={exams.filter((e) => e.status === "completed").length}
            icon={<CheckCircle />}
            color="text-green-600"
          />
          <StatCard
            title="Total Students"
            value={exams.reduce((t, e) => t + e.students, 0)}
            icon={<Users />}
            color="text-purple-600"
          />
        </div>

        {/* Filters and Actions */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex space-x-4">
              {["upcoming", "completed", "all"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded-md font-medium ${
                    activeTab === tab
                      ? "bg-purple-600 text-white"
                      : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
            <div className="flex gap-4 items-center">
              <div className="relative">
                <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search exams..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-md"
                />
              </div>
              <button
                onClick={() => {
                  setModalType("create");
                  setShowModal(true);
                  setFormData({
                    title: "",
                    subject: "",
                    date: "",
                    time: "",
                    duration: "",
                    room: "",
                    type: "Quiz",
                    students: 0,
                  });
                }}
                className="flex items-center bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700"
              >
                <Plus className="w-4 h-4 mr-2" /> New Exam
              </button>
            </div>
          </div>
        </div>

        {/* Exam Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredExams.map((exam) => (
            <ExamCard key={exam.id} exam={exam} />
          ))}
        </div>

        {filteredExams.length === 0 && (
          <div className="text-center py-12">
            <AlertCircle className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600">
              No exams found matching your criteria.
            </p>
          </div>
        )}

        {showModal && <Modal />}
      </div>
    </SidebarLayout>
  );
};

const StatCard = ({ title, value, icon, color }) => (
  <div className="bg-white rounded-lg shadow-md p-6">
    <div className="flex justify-between items-center">
      <div>
        <p className="text-sm text-gray-600">{title}</p>
        <p className={`text-2xl font-bold ${color}`}>{value}</p>
      </div>
      <div className="text-purple-400">{icon}</div>
    </div>
  </div>
);

export default ExamsPage;
