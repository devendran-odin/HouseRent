import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Toast from "../Components/ToastMessage.jsx";

function Approvals() {
  const [approvalData, setApprovalData] = useState([]);
  const [toast, setToast] = useState({ message: "", type: "" });

  // Fetch Approvals on Component Mount
  useEffect(() => {
    const fetchApprovals = async () => {
      try {
        const token = localStorage.getItem("authToken");
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/bookings/approvals`,
          {
            headers: {
              Authorization: `Bearer ${token}`, // Set token in Authorization header
            },
          }
        );
        setApprovalData(response.data); // Update state with fetched data
      } catch (error) {
        console.error("Error fetching approvals:", error);
      }
    };

    fetchApprovals();
  }, []);

  // Handle Accept Action
  const handleAccept = async (bookingId, tenantEmail, tenantName) => {
    const token = localStorage.getItem("authToken");
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/bookings/${bookingId}/accept`,
        {
          tenantEmail,
          tenantName,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setApprovalData(
        (prevData) => prevData.filter((item) => item._id !== bookingId) // Remove the approved item from the list
      );
      if (response.status === 200) {
        showToast(response.data.message, "success");
      }
    } catch (error) {
      console.error("Error accepting request:", error);
    }
  };

  // Handle Reject Action
  const handleReject = async (bookingId) => {
    const token = localStorage.getItem("authToken");
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/bookings/${bookingId}/reject`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      showToast(response.data.message, "success");
      setApprovalData(
        (prevData) => prevData.filter((item) => item._id !== bookingId) // Remove the rejected item from the list
      );
    } catch (error) {
      console.error("Error rejecting request:", error);
    }
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
      <Toast message={toast.message} type={toast.type} />{" "}
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="flex flex-col">
          <div className="-m-1.5 overflow-x-auto">
            <div className="p-1.5 min-w-full inline-block align-middle">
              <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
                {approvalData.length === 0 ? (
                  // Render message when approvalData is empty
                  <div className="text-center py-20 bg-gray-50">
                    <p className="text-lg text-gray-600">
                      No pending approvals at the moment.
                    </p>
                  </div>
                ) : (
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-start">
                          <div className="flex items-center gap-x-2">
                            <span className="text-xs font-semibold uppercase tracking-wide text-gray-800">
                              Tenant Details
                            </span>
                          </div>
                        </th>
                        <th className="px-6 py-3 text-start">
                          <div className="flex items-center gap-x-2">
                            <span className="text-xs font-semibold uppercase tracking-wide text-gray-800">
                              Requested Date
                            </span>
                          </div>
                        </th>
                        <th className="px-6 py-3 text-start">
                          <div className="flex items-center gap-x-2">
                            <span className="text-xs font-semibold uppercase tracking-wide text-gray-800">
                              View Property
                            </span>
                          </div>
                        </th>
                        <th className="px-6 py-3 text-start">
                          <div className="flex items-center gap-x-2">
                            <span className="text-xs font-semibold uppercase tracking-wide text-gray-800">
                              Actions
                            </span>
                          </div>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {approvalData.map((approval) => (
                        <tr
                          key={approval._id}
                          className="bg-white hover:bg-gray-50"
                        >
                          <td className="size-px whitespace-nowrap align-middle">
                            <a className="block p-6" href="#">
                              <div className="flex items-center gap-x-3">
                                <div className="grow">
                                  <span className="block text-sm font-semibold text-gray-800">
                                    {approval.tenantName}
                                  </span>
                                  <span className="block text-sm text-gray-500">
                                    {approval.tenantEmail}
                                  </span>
                                </div>
                              </div>
                            </a>
                          </td>
                          <td className="size-px whitespace-nowrap align-middle">
                            <a className="block p-6" href="#">
                              <span className="text-sm text-gray-600">
                                {approval.requestedDate
                                  ? formatDate(approval.requestedDate)
                                  : "Date not available"}
                              </span>
                            </a>
                          </td>
                          <td className="size-px whitespace-nowrap align-middle">
                            <Link
                              className="block p-6"
                              to={`/view/${approval.propertyId}`}
                            >
                              <span className="md:text-[15px] text-blue-600 hover:underline">
                                More Info
                              </span>
                            </Link>
                          </td>
                          <td className="size-px whitespace-nowrap align-middle">
                            <div className="flex">
                              <div>
                                <button
                                  className="block p-6"
                                  onClick={() =>
                                    handleAccept(
                                      approval._id,
                                      approval.tenantEmail,
                                      approval.tenantName
                                    )
                                  }
                                >
                                  <span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-green-200 text-green-900 hover:bg-green-300 rounded-full border">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      strokeWidth={1}
                                      stroke="currentColor"
                                      className="size-5"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                      />
                                    </svg>
                                    Accept
                                  </span>
                                </button>
                              </div>
                              <div>
                                <button
                                  className="block p-6"
                                  onClick={() => handleReject(approval._id)}
                                >
                                  <span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-red-200 text-red-900 hover:bg-red-300 rounded-full border">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      strokeWidth={1}
                                      stroke="currentColor"
                                      className="size-5"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                      />
                                    </svg>
                                    Reject
                                  </span>
                                </button>
                              </div>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
            </div>
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

export default Approvals;
