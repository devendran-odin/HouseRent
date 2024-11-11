import React, { useState } from "react";
import Favorites from "./Favorites.jsx";
import Request from "./Request.jsx";

function TenantDetails() {
  const [activeTab, setActiveTab] = useState("requested"); // Default tab set to "Requested"

  return (
    <>
      <nav
        className="relative z-0 flex border rounded-xl overflow-hidden mx-2 md:mx-8 lg:mx-12"
        aria-label="Tabs"
        role="tablist"
        aria-orientation="horizontal"
      >
        <button
          type="button"
          onClick={() => setActiveTab("requested")}
          className={`${
            activeTab === "requested"
              ? "border-b-blue-600 text-gray-900"
              : "text-gray-500"
          } relative min-w-0 flex-1 bg-white border-s border-b-2 py-4 px-4 text-sm font-medium text-center overflow-hidden hover:text-gray-700 hover:bg-gray-50 focus:outline-none focus:text-blue-600`}
          id="bar-with-underline-item-1"
          aria-selected={activeTab === "requested"}
          role="tab"
        >
          Requested
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("favorites")}
          className={`${
            activeTab === "favorites"
              ? "border-b-blue-600 text-gray-900"
              : "text-gray-500"
          } relative min-w-0 flex-1 bg-white border-s border-b-2 py-4 px-4 text-sm font-medium text-center overflow-hidden hover:text-gray-700 hover:bg-gray-50 focus:outline-none focus:text-blue-600`}
          id="bar-with-underline-item-2"
          aria-selected={activeTab === "favorites"}
          role="tab"
        >
          Favorites
        </button>
      </nav>

      <div className="mt-3 mx-2 md:mx-8 lg:mx-12">
        {activeTab === "requested" && (
          <div
            id="bar-with-underline-1"
            role="tabpanel"
            aria-labelledby="bar-with-underline-item-1"
          >
            <Request />
          </div>
        )}
        {activeTab === "favorites" && (
          <div
            id="bar-with-underline-2"
            role="tabpanel"
            aria-labelledby="bar-with-underline-item-2"
          >
            <Favorites />
          </div>
        )}
      </div>
    </>
  );
}

export default TenantDetails;
