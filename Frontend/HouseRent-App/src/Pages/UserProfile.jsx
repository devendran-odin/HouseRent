import React, { useState, useEffect } from "react";
import axios from "axios"; // If you're using axios to make API calls
import { useAuth } from "../context/AuthContext.jsx"; // Import the useAuth hook
import { useNavigate } from "react-router-dom"; // Import useNavigate
import PlaceHolderImage from "../assets/PlaceHolderImage.jpg";
import OwnerDetails from "./OwnerDetails";
import TenantDetails from "./TenantDetails";
import Toast from "../Components/ToastMessage.jsx";

function UserProfile() {
  const { logout } = useAuth(); // Get the logout function from the AuthContext
  const [view, setView] = useState("tenant"); // 'tenant' is the default view
  const [userData, setUserData] = useState(null); // State to store user data
  const [loading, setLoading] = useState(true); // Loading state
  const [toast, setToast] = useState({ message: "", type: "" });
  const navigate = useNavigate();
  useEffect(() => {
    // Retrieve userId from localStorage
    const userId = localStorage.getItem("userId");

    if (userId) {
      // Fetch user data from backend
      fetchUserData(userId);
    }
  }, []);

  const fetchUserData = async (userId) => {
    try {
      setLoading(true); // Set loading to true before making the request
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/api/users/getUser`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("authToken")}`, // If you're using JWT
          },
        }
      );

      // Assuming the response data contains username and email
      setUserData(response.data); // Set user data in state
      setLoading(false); // Set loading to false after the data is fetched
    } catch (error) {
      console.error("Error fetching user data", error);
      setLoading(false); // Set loading to false on error
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

      <div className="rounded-3xl shadow-md mx-3.5 md:mx-5 lg:mx-32 xl:mx-40 px-4 sm:px-6 lg:px-8 pt-10 mt-16 pb-10 mb-12 flex flex-col md:flex-row justify-center items-center gap-8 md:gap-20 bg-gradient-to-tl from-blue-600 to-violet-600 ">
        {/* <!-- Profile --> */}
        <div className="flex items-center gap-x-3 md:gap-x-4 ">
          <div className="shrink-0">
            <img
              className="shrink-0 size-16 rounded-full"
              src={PlaceHolderImage}
              alt="Avatar"
            />
          </div>

          <div className="grow">
            <h1 className="text-xl md:text-3xl font-medium text-gray-100">
              {loading ? "Loading..." : userData?.userName}{" "}
              {/* Display username */}
            </h1>
            <p className="text-sm md:text-lg text-gray-300">
              {loading ? "Loading..." : userData?.userEmail}{" "}
              {/* Display email */}
            </p>
          </div>
        </div>

        {/* Buttons  */}
        <div className="flex flex-col w-[85%] md:w-auto  md:flex-row gap-5 md:gap-7">
          <button
            type="button"
            onClick={() => setView("tenant")}
            className="inline-flex justify-center items-center px-9 py-3 gap-x-2 text-sm font-medium rounded-lg bg-gray-100 text-gray-900 shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-4 focus:bg-gray-100 focus:ring-green-500 disabled:opacity-50 disabled:pointer-events-none"
          >
            As a Tenant
            <svg
              className="shrink-0 size-4"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </button>
          <button
            type="button"
            onClick={() => setView("owner")}
            className="inline-flex justify-center items-center px-9 py-3 gap-x-2 text-sm font-medium rounded-lg bg-gray-100 text-gray-900 shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-4 focus:bg-gray-100 focus:ring-green-500 disabled:opacity-50 disabled:pointer-events-none"
          >
            As a Owner
            <svg
              className="shrink-0 size-4"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </button>
          <button
            type="button"
            onClick={handleLogout} // Call logout function on click
            className="inline-flex justify-center items-center px-9 py-3 gap-x-2 text-sm font-medium rounded-lg bg-gray-100 text-gray-900 shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-4 focus:bg-gray-100 focus:ring-green-500 disabled:opacity-50 disabled:pointer-events-none"
          >
            Logout
            <svg
              className="shrink-0 size-4"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </div>
      {/* <!-- End Profile --> */}
      <div className="mt-8">
        {view === "tenant" ? <TenantDetails /> : <OwnerDetails />}
      </div>
    </>
  );
}

export default UserProfile;
