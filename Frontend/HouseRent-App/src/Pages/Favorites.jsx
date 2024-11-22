import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Toast from "../Components/ToastMessage.jsx";

function Favorites() {
  const [wishlist, setWishlist] = useState([]);
  const [toast, setToast] = useState({ message: "", type: "" });
  const navigate = useNavigate();

  const token = localStorage.getItem("authToken");

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/wishlist/getAll`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setWishlist(response.data);
      })
      .catch((error) => {
        console.error("Error fetching wishlist:", error);
      });
  }, []);

  const handleRemove = (propertyId) => {
    // Make DELETE request to remove from wishlist
    axios
      .delete(
        `${import.meta.env.VITE_BACKEND_URL}/api/wishlist/${propertyId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`, // Include the token
          },
        }
      )
      .then((response) => {
        setWishlist(wishlist.filter((property) => property._id !== propertyId));
        if (response.status === 200) {
          showToast(response.data.message, "success");
        }
      })
      .catch((error) => {
        console.error("Error removing property:", error);
      });
  };

  const showToast = (message, type) => {
    setToast({ message, type });

    // Clear toast after 5 seconds
    setTimeout(() => {
      setToast({ message: "", type: "" });
    }, 2000);
  };

  const handleMoreInfo = (propertyId) => {
    // Navigate to property detail page
    navigate(`/view/${propertyId}`);
  };

  return (
    <>
      <Toast message={toast.message} type={toast.type} />
      {/* Table Section */}
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="flex flex-col">
          <div className="-m-1.5 overflow-x-auto">
            <div className="p-1.5 min-w-full inline-block align-middle">
              <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-start">
                        <div className="flex items-center gap-x-2">
                          <span className="text-xs font-semibold uppercase tracking-wide text-gray-800">
                            Owner Details
                          </span>
                        </div>
                      </th>

                      <th scope="col" className="px-6 py-3 text-start">
                        <div className="flex items-center gap-x-2">
                          <span className="text-xs font-semibold uppercase tracking-wide text-gray-800">
                            Rent Per Month
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
                    {wishlist.map((property) => (
                      <tr
                        key={property._id}
                        className="bg-white hover:bg-gray-50"
                      >
                        <td className="size-px whitespace-nowrap align-middle">
                          <div className="block p-6">
                            <div className="flex items-center gap-x-3">
                              <div className="grow">
                                <span className="block text-sm font-semibold text-gray-800">
                                  {property.userId.userName}
                                </span>
                                <span className="block text-sm text-gray-500">
                                  {property.userId.userEmail}
                                </span>
                              </div>
                            </div>
                          </div>
                        </td>

                        <td className="size-px whitespace-nowrap align-middle">
                          <div className="block p-6">
                            <span className="text-sm text-gray-800">
                              &#8377;{property.rentAmount}
                            </span>
                          </div>
                        </td>

                        <td className="size-px whitespace-nowrap align-middle">
                          <div
                            className="block p-6 cursor-pointer"
                            onClick={() => handleMoreInfo(property._id)}
                          >
                            <span className="md:text-[15px] text-blue-600 hover:underline">
                              More Info
                            </span>
                          </div>
                        </td>

                        <td className="size-px whitespace-nowrap align-middle">
                          <div
                            className="block p-6 cursor-pointer"
                            onClick={() => handleRemove(property._id)}
                          >
                            <span className="py-2 px-2 inline-flex items-center gap-x-1 text-xs font-semibold bg-red-100 text-red-800 rounded-full">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                className="size-4"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                />
                              </svg>
                              Remove
                            </span>
                          </div>
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
      </div>
      {/* End Table Section */}
    </>
  );
}

export default Favorites;
