import React, { useEffect, useState } from "react";
import axios from "axios";
import HomeImg from "../assets/home-img.jpg";
import Bookmark from "../Components/Bookmark";
import { Link } from "react-router-dom";
import FilterModal from "../Components/FilterModal";
import Toast from "../Components/ToastMessage";

export function handleRequestBooking(propertyId, showToast) {
  const userId = localStorage.getItem("userId");

  axios
    .post(`${import.meta.env.VITE_BACKEND_URL}/api/bookings/request`, {
      propertyId,
      requesterId: userId,
    })
    .then((response) => {
      showToast(response.data.message, "success");
    })
    .catch((error) => {
      const errorMessage =
        error.response?.data?.message || "Failed to send booking request.";
      showToast(errorMessage, "error");
    });
}

function Properties() {
  const [properties, setProperties] = useState([]); // State to store properties data
  const [loading, setLoading] = useState(true); // State to manage loading state
  const [error, setError] = useState(null); // State to handle errors
  const [toast, setToast] = useState({ message: "", type: "" });

  const userId = localStorage.getItem("userId");

  // Fetch properties based on filters
  const fetchFilteredProperties = async (filters) => {
    try {
      setLoading(true); // Show loader
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/properties/filters`,
        filters
      );
      setProperties(response.data); // Update state with filtered properties
    } catch (err) {
      setError("Failed to fetch properties. Please try again.");
    } finally {
      setLoading(false); // Hide loader
    }
  };

  // Fetch properties from the backend
  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/properties/getAllProperty`
        ); // Replace with your backend URL
        setProperties(response.data); // Assuming the API returns an array of properties
      } catch (err) {
        setError("Failed to fetch properties. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  const showToast = (message, type) => {
    setToast({ message, type });

    // Clear toast after 5 seconds
    setTimeout(() => {
      setToast({ message: "", type: "" });
    }, 2000);
  };

  if (loading) {
    return <div className="text-center p-5">Loading properties...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500 p-5">{error}</div>;
  }

  return (
    <>
      <Toast message={toast.message} type={toast.type} />
      <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-12">
        <div className="mt-8 mb-8 md:mt-0 flex flex-wrap items-center justify-between text-sm md:border-b-2">
          {/* Left Section */}
          <div className="flex items-center justify-center md:mt-2 pb-2 pr-2 border-b-2 border-indigo-600 uppercase text-indigo-600 w-fit md:w-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 mr-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
            <span className="font-semibold inline-block">
              Properties Posted
            </span>
          </div>
          {/* Right Section */}
          <div className="flex w-fit justify-center items-center md:mb-6 md:mt-0 md:w-auto">
            <FilterModal onApplyFilters={fetchFilteredProperties} />
          </div>
        </div>

        {/* Conditional Rendering for Empty Properties */}
        {properties.length === 0 ? (
          <div className="text-center text-lg text-gray-500 p-5">
            No properties found.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {properties.map((property) => (
              <div
                key={property._id}
                className="rounded overflow-hidden shadow-lg flex flex-col bg-white"
              >
                <Link to={`/view/${property._id}`}>
                  <div className="relative">
                    <img
                      className="w-full h-48 lg:h-56 object-cover"
                      src={property.image || HomeImg} // Fallback to a static image
                      alt={property.address || "Property"}
                    />
                    <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-500 opacity-15"></div>
                  </div>
                </Link>
                <div className="px-6 py-4 mb-auto">
                  <a
                    href=""
                    className="font-medium text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out mb-2"
                  >
                    {new Intl.NumberFormat("en-IN", {
                      style: "currency",
                      currency: "INR",
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 0,
                    }).format(property.rentAmount)}{" "}
                    Per Month
                  </a>
                  <p className="text-gray-500 text-sm">
                    {property.description}
                  </p>
                </div>
                <div className="px-3 md:px-6 py-2 flex flex-row items-center justify-between bg-gray-100">
                  <span
                    href="#"
                    className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center"
                  >
                    <Bookmark propertyId={property._id} userId={userId} />
                    <span className="ml-1">Add to Favorites</span>
                  </span>
                  <span
                    onClick={() =>
                      handleRequestBooking(property._id, showToast)
                    }
                    className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center"
                  >
                    <span className="ml-1 bg-gradient-to-tl from-blue-600 to-violet-600 text-white  focus:outline-none hover:from-violet-600 hover:to-blue-600 focus:bg-blue-700 py-2 md:py-2.5 px-3 rounded-md hover:cursor-pointer">
                      Request to Book
                    </span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default Properties;
