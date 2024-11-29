import { useState, useEffect } from "react";
import axios from "axios";
import UserManagement from "./UserManagement.jsx";
import PropertyListings from "./PropertyListings.jsx";
import { useAuth } from "../context/AuthContext.jsx";
import Toast from "../Components/ToastMessage.jsx";
import { useNavigate } from "react-router-dom";

function AdminDashboard() {
  const { logout } = useAuth();
  const [toast, setToast] = useState({ message: "", type: "" });
  const [activeTab, setActiveTab] = useState("UserManagement");
  const [totalOwners, setTotalOwners] = useState(0);
  const [totalProperties, setTotalProperties] = useState(0);
  const [totalUsers, setTotalUsers] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    fetchStatistics();
  }, []);

  const fetchStatistics = async () => {
    try {
      const [usersRes, propertiesRes, ownersRes] = await Promise.all([
        axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/users/userCount`),
        axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/properties/propertyCount`
        ),
        axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/users/ownerCount`),
      ]);

      setTotalUsers(usersRes.data.totalUsers || 0);
      setTotalProperties(propertiesRes.data.totalProperties || 0);
      setTotalOwners(ownersRes.data.totalOwners || 0);
    } catch (error) {
      console.error("Failed to fetch statistics:", error);
      showToast("Failed to fetch statistics. Please try again.", "error");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("userId");
    localStorage.removeItem("authToken");
    localStorage.removeItem("userRole");
    showToast("Logout successful!", "success");
    setTimeout(() => {
      navigate("/");
    }, 1000);
    logout();
  };

  const showToast = (message, type) => {
    setToast({ message, type });

    // Clear toast after 5 seconds
    setTimeout(() => {
      setToast({ message: "", type: "" });
    }, 2000);
  };

  return (
    <>
      <Toast message={toast.message} type={toast.type} />
      <div className="rounded-3xl shadow-md mx-3.5 md:mx-5 lg:mx-32 xl:mx-40 px-4 sm:px-6 lg:px-8 pt-10 mt-16 pb-10 mb-12 flex flex-col gap-6 bg-gradient-to-tl from-blue-600 to-violet-600 text-center">
        <h1 className="text-3xl font-medium text-gray-100">Admin Panel</h1>

        <div className="flex flex-col w-full md:flex-row justify-center items-center gap-4">
          <button
            type="button"
            className="inline-flex w-full justify-center items-center px-6 py-3 gap-x-2 text-[15px] font-medium rounded-lg bg-gray-100 text-gray-900 shadow-md hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-blue-500"
          >
            Total Owners: <span className="font-bold">{totalOwners}</span>
          </button>
          <button
            type="button"
            className="inline-flex w-full justify-center items-center px-6 py-3 gap-x-2 text-[15px] font-medium rounded-lg bg-gray-100 text-gray-900 shadow-md hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-blue-500"
          >
            Total Properties:{" "}
            <span className="font-bold">{totalProperties}</span>
          </button>
          <button
            type="button"
            className="inline-flex w-full justify-center items-center px-6 py-3 gap-x-2 text-[15px] font-medium rounded-lg bg-gray-100 text-gray-900 shadow-md hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-blue-500"
          >
            Total Users: <span className="font-bold">{totalUsers}</span>
          </button>
          <button
            type="button"
            onClick={handleLogout}
            className="inline-flex w-full justify-center items-center px-6 py-3 gap-x-2 text-[15px] font-medium rounded-lg bg-gray-100 text-gray-900 shadow-md hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-blue-500"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Tabs Section */}
      <nav
        className="relative z-0 flex border rounded-xl overflow-hidden mx-2 md:mx-8 lg:mx-12"
        aria-label="Tabs"
        role="tablist"
        aria-orientation="horizontal"
      >
        <button
          type="button"
          onClick={() => setActiveTab("UserManagement")}
          className={`${
            activeTab === "UserManagement"
              ? "border-b-blue-600 text-gray-900"
              : "text-gray-500"
          } relative min-w-0 flex-1 bg-white border-s border-b-2 py-4 px-4 text-sm font-medium text-center overflow-hidden hover:text-gray-700 hover:bg-gray-50 focus:outline-none focus:text-blue-600`}
          id="bar-with-underline-item-1"
          aria-selected={activeTab === "UserManagement"}
          role="tab"
        >
          User Management
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("PropertyListings")}
          className={`${
            activeTab === "PropertyListings"
              ? "border-b-blue-600 text-gray-900"
              : "text-gray-500"
          } relative min-w-0 flex-1 bg-white border-s border-b-2 py-4 px-4 text-sm font-medium text-center overflow-hidden hover:text-gray-700 hover:bg-gray-50 focus:outline-none focus:text-blue-600`}
          id="bar-with-underline-item-3"
          aria-selected={activeTab === "PropertyListings"}
          role="tab"
        >
          Property Listings
        </button>
      </nav>

      {/* Tab Content Section */}
      <div className="mt-3 mx-2 md:mx-8 lg:mx-12">
        {activeTab === "UserManagement" && <UserManagement />}
        {activeTab === "PropertyListings" && <PropertyListings />}
      </div>
    </>
  );
}

export default AdminDashboard;
