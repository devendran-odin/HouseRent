import React, { useState } from "react";
import Approvals from "./Approvals.jsx";
import NewProperty from "./NewProperty.jsx";
import OwnerProperties from "./OwnerProperties.jsx";

function OwnerDetails() {
  const [activeTab, setActiveTab] = useState("properties"); // Set default active tab

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
          onClick={() => setActiveTab("properties")}
          className={`${
            activeTab === "properties"
              ? "border-b-blue-600 text-gray-900"
              : "text-gray-500"
          } relative min-w-0 flex-1 bg-white border-s border-b-2 py-4 px-4 text-sm font-medium text-center overflow-hidden hover:text-gray-700 hover:bg-gray-50 focus:outline-none focus:text-blue-600`}
          id="bar-with-underline-item-1"
          aria-selected={activeTab === "properties"}
          role="tab"
        >
          My Properties
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("approvals")}
          className={`${
            activeTab === "approvals"
              ? "border-b-blue-600 text-gray-900"
              : "text-gray-500"
          } relative min-w-0 flex-1 bg-white border-s border-b-2 py-4 px-4 text-sm font-medium text-center overflow-hidden hover:text-gray-700 hover:bg-gray-50 focus:outline-none focus:text-blue-600`}
          id="bar-with-underline-item-2"
          aria-selected={activeTab === "approvals"}
          role="tab"
        >
          Pending Approvals
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("newProperty")}
          className={`${
            activeTab === "newProperty"
              ? "border-b-blue-600 text-gray-900"
              : "text-gray-500"
          } relative min-w-0 flex-1 bg-white border-s border-b-2 py-4 px-4 text-sm font-medium text-center overflow-hidden hover:text-gray-700 hover:bg-gray-50 focus:outline-none focus:text-blue-600`}
          id="bar-with-underline-item-3"
          aria-selected={activeTab === "newProperty"}
          role="tab"
        >
          Add New Property
        </button>
      </nav>

      <div className="mt-3 mx-2 md:mx-8 lg:mx-12">
        {/* Conditionally render each component based on the active tab */}
        {activeTab === "properties" && (
          <div
            id="bar-with-underline-1"
            role="tabpanel"
            aria-labelledby="bar-with-underline-item-1"
          >
            <OwnerProperties />
          </div>
        )}
        {activeTab === "approvals" && (
          <div
            id="bar-with-underline-2"
            role="tabpanel"
            aria-labelledby="bar-with-underline-item-2"
          >
            <Approvals />
          </div>
        )}
        {activeTab === "newProperty" && (
          <div
            id="bar-with-underline-3"
            role="tabpanel"
            aria-labelledby="bar-with-underline-item-3"
          >
            <NewProperty />
          </div>
        )}
      </div>
    </>
  );
}

export default OwnerDetails;
