import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Toast from "../Components/ToastMessage.jsx";

function OwnerProperties() {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [toast, setToast] = useState({ message: "", type: "" });

  // Fetch owner properties
  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const token = localStorage.getItem("authToken");
        const response = await axios.get(
          `${
            import.meta.env.VITE_BACKEND_URL
          }/api/properties/getOwnerProperties`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setProperties(response.data);
      } catch (error) {
        setError("Failed to fetch properties. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  // Delete a property
  const handleDelete = async (propertyId) => {
    try {
      const token = localStorage.getItem("authToken");
      const response = await axios.delete(
        `${import.meta.env.VITE_BACKEND_URL}/api/properties/${propertyId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        showToast(response.data.message, "success");
      }
      setProperties((prevProperties) =>
        prevProperties.filter((property) => property._id !== propertyId)
      );
    } catch (error) {
      showToast(error.response.data.message, "error");
    }
  };

  if (loading) {
    return <div>Loading properties...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (loading) {
    return <div>Loading properties...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (properties.length === 0) {
    return (
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto border mt-8 bg-gray-50 rounded-md">
        <div className="text-center py-10">
          <p className="text-lg text-gray-500">
            <span className="text-gray-800 font-medium">
              No properties found.
            </span>
            <br />
            <span className="text-[15px]">
              Please add a property to view it here.
            </span>
          </p>
        </div>
      </div>
    );
  }

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
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        {/* Card */}
        <div className="flex flex-col">
          <div className="-m-1.5 overflow-x-auto">
            <div className="p-1.5 min-w-full inline-block align-middle">
              <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
                {/* Table */}
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-start">
                        <div className="flex items-center gap-x-2">
                          <span className="text-xs font-semibold uppercase tracking-wide text-gray-800">
                            Property ID
                          </span>
                        </div>
                      </th>

                      <th scope="col" className="px-6 py-3 text-start">
                        <div className="flex items-center gap-x-2">
                          <span className="text-xs font-semibold uppercase tracking-wide text-gray-800">
                            Posted Date
                          </span>
                        </div>
                      </th>

                      <th scope="col" className="px-6 py-3 text-start">
                        <div className="flex items-center gap-x-2">
                          <span className="text-xs font-semibold uppercase tracking-wide text-gray-800">
                            View Property
                          </span>
                        </div>
                      </th>

                      <th scope="col" className="px-6 py-3 text-start">
                        <div className="flex items-center gap-x-2">
                          <span className="text-xs font-semibold uppercase tracking-wide text-gray-800">
                            Action
                          </span>
                        </div>
                      </th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-gray-200">
                    {properties.map((property) => (
                      <tr
                        key={property._id}
                        className="bg-white hover:bg-gray-50"
                      >
                        <td className="whitespace-nowrap px-6 py-4">
                          <span className="block text-sm font-semibold text-gray-500">
                            {"#" + property._id.slice(-8).toUpperCase()}
                          </span>
                        </td>

                        <td className="whitespace-nowrap px-6 py-4">
                          <span className="text-sm text-gray-700">
                            {property.postedDate
                              ? formatDate(property.postedDate)
                              : "Date not available"}
                          </span>
                        </td>

                        <td className="whitespace-nowrap px-6 py-4 text-sm">
                          <Link
                            to={`/view/${property._id}`}
                            className="text-blue-600 hover:underline"
                          >
                            More Info
                          </Link>
                        </td>

                        <td className="whitespace-nowrap px-6 py-4">
                          <button
                            onClick={() => handleDelete(property._id)}
                            className="text-red-600 hover:underline"
                          >
                            <span className="py-2 px-3 inline-flex items-center gap-x-1 text-xs font-semibold bg-red-100 text-red-800 rounded-full">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="size-4"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                                />
                              </svg>
                              Delete
                            </span>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {/* End Table */}
              </div>
            </div>
          </div>
        </div>
        {/* End Card */}
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

export default OwnerProperties;
