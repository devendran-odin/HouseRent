import React, { useEffect, useState } from "react";
import axios from "axios"; // For making API calls
import HomeImg from "../assets/home-img.jpg"; // Replace with dynamic images if available
import Bookmark from "../Components/Bookmark";
import { Link } from "react-router-dom";

function Properties() {
  const [properties, setProperties] = useState([]); // State to store properties data
  const [loading, setLoading] = useState(true); // State to manage loading state
  const [error, setError] = useState(null); // State to handle errors

  const userId = localStorage.getItem("userId");

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

  if (loading) {
    return <div className="text-center p-5">Loading properties...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500 p-5">{error}</div>;
  }

  return (
    <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
      <div className="border-b mb-6 mt-6 flex justify-between text-sm">
        <div className="text-indigo-600 flex items-center pb-2 pr-2 border-b-2 border-indigo-600 uppercase">
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
          <span className="font-semibold inline-block">Properties Posted</span>
        </div>
        <a href="#">See All</a>
      </div>
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
                href="#"
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
              <p className="text-gray-500 text-sm">{property.description}</p>
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
                onClick={() => handleRequestBooking(property.id)}
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
    </div>
  );

  function handleRequestBooking(propertyId) {
    // Call backend to handle booking requests
    console.log(`Requesting to book property with ID: ${propertyId}`);
  }
}

export default Properties;
