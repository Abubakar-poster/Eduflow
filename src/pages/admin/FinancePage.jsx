import React, { useState } from "react";
import {
  DollarSign,
  CreditCard,
  TrendingUp,
  Users,
  Calendar,
  Download,
  Plus,
  Search,
  Filter,
  Eye,
  Edit,
  Trash2,
  AlertCircle,
  CheckCircle,
  Clock,
  X,
} from "lucide-react";
import SidebarLayout from "../../layouts/SidebarLayout";

const FinancePage = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [showAddFee, setShowAddFee] = useState(false);
  const [showPaymentDetails, setShowPaymentDetails] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState(null);

  // [Same logic and modal code as before — unchanged for brevity]

  const stats = [
    {
      label: "Total Revenue",
      value: "$124,500",
      change: "+12%",
      icon: DollarSign,
      color: "from-purple-600 to-purple-700",
    },
    {
      label: "Pending Payments",
      value: "$18,200",
      change: "+5%",
      icon: Clock,
      color: "from-purple-500 to-purple-600",
    },
    {
      label: "Students Paid",
      value: "348",
      change: "+8%",
      icon: Users,
      color: "from-purple-400 to-purple-500",
    },
    {
      label: "Payment Rate",
      value: "94%",
      change: "+2%",
      icon: TrendingUp,
      color: "from-purple-300 to-purple-400",
    },
  ];

  const feeStructure = [
    {
      id: 1,
      name: "Tuition Fee",
      class: "Grade 10",
      amount: 1200,
      dueDate: "2025-08-15",
      status: "Active",
    },
    {
      id: 2,
      name: "Lab Fee",
      class: "Grade 11",
      amount: 150,
      dueDate: "2025-08-20",
      status: "Active",
    },
    {
      id: 3,
      name: "Library Fee",
      class: "All Classes",
      amount: 50,
      dueDate: "2025-08-25",
      status: "Active",
    },
    {
      id: 4,
      name: "Sports Fee",
      class: "Grade 9",
      amount: 100,
      dueDate: "2025-08-30",
      status: "Draft",
    },
  ];

  const payments = [
    {
      id: 1,
      student: "John Doe",
      class: "Grade 10",
      amount: 1200,
      date: "2025-07-08",
      status: "Paid",
      method: "Bank Transfer",
    },
    {
      id: 2,
      student: "Jane Smith",
      class: "Grade 11",
      amount: 150,
      date: "2025-07-09",
      status: "Paid",
      method: "Card",
    },
    {
      id: 3,
      student: "Mike Johnson",
      class: "Grade 9",
      amount: 100,
      date: "2025-07-10",
      status: "Pending",
      method: "Cash",
    },
    {
      id: 4,
      student: "Sarah Wilson",
      class: "Grade 10",
      amount: 1200,
      date: "2025-07-05",
      status: "Overdue",
      method: "Bank Transfer",
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Paid":
        return "bg-green-100 text-green-800";
      case "Pending":
        return "bg-yellow-100 text-yellow-800";
      case "Overdue":
        return "bg-red-100 text-red-800";
      case "Active":
        return "bg-blue-100 text-blue-800";
      case "Draft":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const AddFeeModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      {/* Modal content remains unchanged */}
    </div>
  );

  const PaymentDetailsModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      {/* Modal content remains unchanged */}
    </div>
  );

  return (
    <SidebarLayout title="Finance Management">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-purple-800 mb-2">
            Finance Management
          </h1>
          <p className="text-purple-600">
            Monitor fees, payments, and financial reports
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`bg-gradient-to-r ${stat.color} rounded-lg p-6 text-white shadow-lg`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-100 text-sm">{stat.label}</p>
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <p className="text-purple-200 text-sm">
                    {stat.change} from last month
                  </p>
                </div>
                <stat.icon size={32} className="text-purple-200" />
              </div>
            </div>
          ))}
        </div>

        {/* Tabs Navigation */}
        <div className="bg-white rounded-lg shadow-md mb-6">
          <div className="flex border-b">
            {["overview", "fees", "payments", "reports"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 font-medium capitalize ${
                  activeTab === tab
                    ? "text-purple-600 border-b-2 border-purple-600"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="bg-white rounded-lg shadow-md">
          {/* You can keep all your tab content blocks here — unchanged */}
          {activeTab === "overview" && (
            // Overview section
            <div className="p-6">{/* ... */}</div>
          )}

          {activeTab === "fees" && (
            // Fees table
            <div className="p-6">{/* ... */}</div>
          )}

          {activeTab === "payments" && (
            // Payments table
            <div className="p-6">{/* ... */}</div>
          )}

          {activeTab === "reports" && (
            // Reports section
            <div className="p-6">{/* ... */}</div>
          )}
        </div>
      </div>

      {/* Modals */}
      {showAddFee && <AddFeeModal />}
      {showPaymentDetails && <PaymentDetailsModal />}
    </SidebarLayout>
  );
};

export default FinancePage;
