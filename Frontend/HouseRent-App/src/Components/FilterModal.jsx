import React, { useState } from "react";
import Toast from "./ToastMessage.jsx";

function FilterModal({ onApplyFilters }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [toast, setToast] = useState({ message: "", type: "" });
  const [filters, setFilters] = useState({
    bhk: "",
    location: "",
    priceRange: "",
  });

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const applyFilters = () => {
    // Check if all fields are selected
    const { bhk, location, priceRange } = filters;
    if (bhk && location && priceRange) {
      onApplyFilters(filters); // Pass the filters to the parent component
      setIsModalOpen(false); // Close the modal
    } else {
      showToast("All filters are required.", "error");
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
      <Toast message={toast.message} type={toast.type} />
      {/* Filter Button */}
      <div className="mt-8 gap-3 flex justify-center">
        <div className="text-center">
          <button
            type="button"
            className="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 hover:from-violet-600 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-violet-500 border border-transparent text-white text-sm font-medium rounded-xl py-3 px-4 disabled:opacity-50 disabled:pointer-events-none"
            onClick={toggleModal}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-5 w-5 md:w-6 md:h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
              />
            </svg>
            BHK & Location Filter
          </button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed  inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          role="dialog"
        >
          <div className="relative flex flex-col bg-white border shadow-sm rounded-xl overflow-hidden sm:max-w-md sm:w-full">
            {/* Close Button */}
            <div className="absolute top-2 right-2">
              <button
                type="button"
                className="w-8 h-8 inline-flex justify-center items-center rounded-full bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300"
                onClick={toggleModal}
              >
                <svg
                  className="w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path d="M18 6L6 18" />
                  <path d="M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="p-4 sm:p-10">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-gray-800">
                  Filter Preferences
                </h3>
                <p className="text-gray-500">
                  Refine your search based on your requirements
                </p>
              </div>

              {/* Filters */}
              <div className="space-y-4">
                {/* BHK Type */}
                <div>
                  <label className="text-gray-600 ml-3 py-1 block">
                    BHK Type
                  </label>
                  <select
                    name="bhk"
                    value={filters.bhk}
                    onChange={handleChange}
                    className="w-full py-3 px-4 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Choose</option>
                    <option>1 RK</option>
                    <option>1 BHK</option>
                    <option>2 BHK</option>
                    <option>3 BHK</option>
                    <option>4 BHK</option>
                  </select>
                </div>

                {/* Location */}
                <div>
                  <label className="text-gray-600 ml-3 py-1 block">
                    Location
                  </label>
                  <select
                    name="location"
                    value={filters.location}
                    onChange={handleChange}
                    className="w-full py-3 px-4 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Choose</option>
                    <option>Chennai</option>
                    <option>Bengaluru</option>
                    <option>Kerala</option>
                    <option>Delhi</option>
                    <option>Mumbai</option>
                  </select>
                </div>

                {/* Price Range */}
                <div>
                  <label className="text-gray-600 ml-3 py-1 block">
                    Price Range
                  </label>
                  <select
                    name="priceRange"
                    value={filters.priceRange}
                    onChange={handleChange}
                    className="w-full py-3 px-4 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Choose</option>
                    <option value="2000-6000">₹2,000 - ₹6,000</option>
                    <option value="6001-10000">₹6,001 - ₹10,000</option>
                    <option value="10001-15000">₹10,001 - ₹15,000</option>
                    <option value="15001-25000">₹15,001 - ₹25,000</option>
                    <option value="25001-50000">₹25,001 - ₹50,000</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="flex justify-end items-center gap-x-2 py-3 px-4 bg-gray-50 border-t">
              <button
                type="button"
                className="py-2 px-3 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 hover:bg-gray-50 focus:outline-none"
                onClick={toggleModal}
              >
                Cancel
              </button>
              <button
                className="py-2 px-3 text-sm font-medium rounded-lg border border-transparent bg-gradient-to-tl from-blue-600 to-violet-600 text-white hover:from-violet-600 hover:to-blue-600 focus:outline-none"
                onClick={applyFilters}
              >
                Apply Filters
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default FilterModal;
