import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // To get the id from the URL
import axios from "axios"; // For making API calls
import Toast from "../Components/ToastMessage.jsx";
import HomeImg from "../assets/home-img.jpg";
import { handleRequestBooking } from "./Properties.jsx";

function ViewProperty() {
  const { id } = useParams(); // Get the property id from URL
  const [property, setProperty] = useState(null); // State to store property data
  const [loading, setLoading] = useState(true); // State to manage loading state
  const [error, setError] = useState(null); // State to handle errors
  const [toast, setToast] = useState({ message: "", type: "" });

  const showToast = (message, type) => {
    setToast({ message, type });
    setTimeout(() => {
      setToast({ message: "", type: "" });
    }, 2000);
  };

  useEffect(() => {
    const fetchPropertyDetails = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/properties/${id}` // Fetch data for the specific property
        );
        setProperty(response.data); // Store the property data
      } catch (err) {
        setError("Failed to fetch property details. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchPropertyDetails();
  }, [id]); // Fetch data when id changes

  if (loading) {
    return <div className="text-center p-5">Loading property details...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500 p-5">{error}</div>;
  }

  if (!property) {
    return (
      <div className="text-center text-red-500 p-5">Property not found.</div>
    );
  }

  const userId = localStorage.getItem("userId");

  const handleFavorites = async () => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/wishlist/add`,
        {
          userId,
          propertyId: property._id,
        }
      );

      if (response.status == 200) {
        showToast(response.data.message, "success");
      }
    } catch (err) {
      // Check for specific error message
      if (err.response && err.response.data.message) {
        showToast(err.response.data.message, "error");
      } else {
        // Generic error message
        showToast("An error occurred. Please try again.", "error");
      }
    }
  };
  return (
    <>
      {/* Hero */}
      <Toast message={toast.message} type={toast.type} />
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 mt-6 lg:mt-16 mb-7 ">
        {/* Grid */}
        <div className="grid lg:grid-cols-7 lg:gap-x-8 xl:gap-x-12 lg:items-center ">
          <div className="lg:col-span-4 mt-10 lg:mt-0">
            <img
              className="w-full h-[20rem] lg:h-[38rem] object-cover rounded-xl"
              src={property.image || HomeImg}
              alt={property.address || "Home Image"}
            />
          </div>
          <div className="lg:col-span-3 mt-8 md:mt-8 lg:mt-1 ">
            <h1 className="block text-2xl font-bold text-gray-800 sm:text-2xl md:text-3xl lg:text-4xl">
              {property.description || "A beautiful home"}{" "}
              {/* Use dynamic data */}
            </h1>
            <p className="mt-3 lg:mt-4 text-[16px] md:text-[17px] text-gray-800">
              {property.address || "No address provided"}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4 lg:mt-6">
              <div className="p-4 border border-gray-200 rounded-lg bg-white">
                <p className="font-semibold text-lg text-gray-800">
                  Rent Per Month
                </p>
                <p className="mt-1 text-[16px] text-gray-600">
                  {new Intl.NumberFormat("en-IN", {
                    style: "currency",
                    currency: "INR",
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 0,
                  }).format(property.rentAmount || 0)}{" "}
                  {/* Use dynamic rent */}
                </p>
              </div>
              <div className="p-4 border border-gray-200 rounded-lg bg-white">
                <p className="font-semibold text-lg text-gray-800">
                  Property Type
                </p>
                <p className="mt-1 text-[16px] text-gray-600">
                  {property.propertyType || "N/A"}
                  {", "}
                  {property.city || "N/A"}
                </p>
              </div>
              <a
                className="mt-3 flex items-center gap-1 text-lg text-blue-800 hover:underline"
                target="_blank"
                href={`${property.locationLink || ""}`}
              >
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="black"
                    className="size-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                    />
                  </svg>
                </span>
                View on Map
              </a>
            </div>
            <p className="mt-3 text-[15px] text-gray-600">
              Posted on:{" "}
              {property.postedDate
                ? formatDate(property.postedDate)
                : "Date not available"}
            </p>
            <button
              className="py-3 px-3 my-4 lg:my-5 w-full items-center hover:text-gray-700 text-[16px] hover:border-green-600 font-medium rounded-lg border border-black disabled:opacity-50 disabled:pointer-events-none"
              onClick={handleFavorites}
            >
              Add to Favorites
            </button>
            <button
              className="py-3 px-3 mt-1 lg:mt-2 w-full items-center text-[16px] font-medium rounded-lg border border-transparent bg-gradient-to-tl from-blue-600 to-violet-600 text-white focus:outline-none hover:from-violet-600 hover:to-blue-600 focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
              onClick={() => handleRequestBooking(property._id, showToast)}
            >
              Request to Book
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

function formatDate(dateString) {
  const date = new Date(dateString);

  const day = date.getDate();
  const month = date.toLocaleString("default", { month: "short" }); // 'Nov', 'Dec', etc.
  const year = date.getFullYear();

  // Adding the suffix for day (st, nd, rd, th)
  const suffix = (day) => {
    if (day > 3 && day < 21) return "th"; // Handles 11th, 12th, 13th
    switch (day % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };

  return `${day}${suffix(day)} ${month} ${year}`;
}
export default ViewProperty;
