import React, { useState } from "react";
import axios from "axios";
import Toast from "../Components/ToastMessage.jsx";

const Bookmark = ({ propertyId, userId }) => {
  const [isFilled, setIsFilled] = useState(false);
  const [toast, setToast] = useState({ message: "", type: "" });

  const showToast = (message, type) => {
    setToast({ message, type });

    // Clear toast after 2 seconds (or any time you want)
    setTimeout(() => {
      setToast({ message: "", type: "" });
    }, 2000);
  };

  const handleClick = async () => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/wishlist/add`,
        {
          userId,
          propertyId,
        }
      );
      setIsFilled(true); // Mark the bookmark as filled

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
      <Toast message={toast.message} type={toast.type} />

      <div>
        <svg
          onClick={handleClick}
          xmlns="http://www.w3.org/2000/svg"
          fill={isFilled ? "red" : "none"}
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="red"
          className="size-6 cursor-pointer"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
          />
        </svg>
      </div>
    </>
  );
};

export default Bookmark;
