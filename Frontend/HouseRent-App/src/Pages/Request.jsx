import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Request() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const authToken = localStorage.getItem("authToken");
        if (!authToken) {
          console.error("No auth token found");
          return;
        }

        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/bookings/getAllRequest`,
          {
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
          }
        );

        setBookings(response.data); // Update state with fetched bookings
      } catch (error) {
        console.error(
          "Error fetching bookings:",
          error.response || error.message
        );
      } finally {
        setLoading(false); // Stop the loading indicator
      }
    };

    fetchBookings();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (bookings.length === 0) {
    return (
      <div className="text-center bg-gray-50 mt-10 md:mt-16 py-16 md:py-24">
        <h2 className="text-lg font-semibold text-gray-600">
          No requests found
        </h2>
        <p className="text-gray-600 text-sm mt-0.5">
          You currently have no booking requests.
        </p>
      </div>
    );
  }

  return (
    <>
      {/* <!-- Table Section --> */}
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        {/* <!-- Card --> */}
        <div className="flex flex-col">
          <div className="-m-1.5 overflow-x-auto">
            <div className="p-1.5 min-w-full inline-block align-middle">
              <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
                {/* <!-- Table --> */}
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
                            Requested Date
                          </span>
                        </div>
                      </th>
                      <th scope="col" className="px-6 py-3 text-start">
                        <div className="flex items-center gap-x-2">
                          <span className="text-xs font-semibold uppercase tracking-wide text-gray-800">
                            Status
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
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {bookings.map((booking) => (
                      <tr
                        key={booking._id}
                        className="bg-white hover:bg-gray-50"
                      >
                        <td className="size-px whitespace-nowrap align-middle">
                          <span className="block p-6">
                            <div className="flex items-center gap-x-3">
                              <div className="grow">
                                <span className="block text-sm font-semibold text-gray-800">
                                  {booking.owner.userName}
                                </span>
                                <span className="block text-sm text-gray-500">
                                  {booking.owner.userEmail}
                                </span>
                              </div>
                            </div>
                          </span>
                        </td>
                        <td className="size-px whitespace-nowrap align-middle">
                          <a className="block p-6" href="#">
                            <span className="text-sm text-gray-600">
                              {booking.createdAt
                                ? formatDate(booking.createdAt)
                                : "Date not available"}
                            </span>
                          </a>
                        </td>
                        <td className="size-px whitespace-nowrap align-middle">
                          <a className="block p-6" href="#">
                            <span
                              className={`py-2 px-3 inline-flex items-center gap-x-1 text-xs font-medium rounded-full ${
                                booking.status === "Accepted"
                                  ? "bg-teal-100 text-teal-800"
                                  : booking.status === "Rejected"
                                  ? "bg-red-100 text-red-800"
                                  : "bg-gray-200 text-gray-800"
                              }`}
                            >
                              {booking.status}
                            </span>
                          </a>
                        </td>
                        <td className="size-px whitespace-nowrap align-middle">
                          <Link
                            className="block p-6"
                            to={`/view/${booking.propertyId}`}
                          >
                            <span className="md:text-[15px] text-blue-600 hover:underline">
                              More Info
                            </span>
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {/* <!-- End Table --> */}
              </div>
            </div>
          </div>
        </div>
        {/* <!-- End Card --> */}
      </div>
      {/* <!-- End Table Section --> */}
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
    if (day > 3 && day < 21) return "th";
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
export default Request;
