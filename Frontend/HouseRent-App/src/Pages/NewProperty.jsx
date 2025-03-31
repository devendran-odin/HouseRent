import { useState, useEffect } from "react";
import axios from "axios";
import Toast from "../Components/ToastMessage.jsx";
import { useNavigate } from "react-router-dom";

function NewProperty() {
  const [formData, setFormData] = useState({
    userId: "", // userId will be set from localStorage
    address: "",
    city: "",
    rentAmount: "",
    propertyType: "",
    description: "",
    locationLink: "",
    image: null, // For storing the uploaded image
    postedDate: "",
  });

  const [toast, setToast] = useState({ message: "", type: "" });

  const navigate = useNavigate();

  // Fetch the userId from localStorage when the component mounts
  useEffect(() => {
    const storedUserId = localStorage.getItem("userId"); // Retrieve userId from localStorage
    if (storedUserId) {
      setFormData((prevData) => ({
        ...prevData,
        userId: storedUserId,
      }));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "image") {
      // Handle image file upload
      setFormData((prevData) => ({
        ...prevData,
        image: e.target.files[0],
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const {
      userId,
      address,
      city,
      rentAmount,
      propertyType,
      description,
      locationLink,
      image,
      postedDate,
    } = formData;

    if (
      !userId ||
      !address ||
      !city ||
      !rentAmount ||
      !propertyType ||
      !description ||
      !postedDate ||
      !image
    ) {
      showToast("All fields are required", "error");
      return;
    }

    try {
      const data = new FormData();
      data.append("userId", userId);
      data.append("address", address);
      data.append("city", city);
      data.append("rentAmount", rentAmount);
      data.append("propertyType", propertyType);
      data.append("description", description);
      data.append("locationLink", locationLink);
      data.append("image", image);
      data.append("postedDate", postedDate);

      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/properties/addProperty`,
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 200) {
        showToast("Property added successfully!", "success");
        setFormData({
          userId: "", // Reset userId
          address: "",
          city: "",
          rentAmount: "",
          propertyType: "",
          description: "",
          locationLink: "",
          image: null,
          postedDate: "",
        });
        setTimeout(() => {
          navigate("/properties");
        }, 3000);
      } else {
        showToast(response.data || "Failed to add property", "error");
      }
    } catch (error) {
      showToast(
        error.response?.data || "Unable to connect to the server",
        "error"
      );
    }
  };

  const showToast = (message, type) => {
    setToast({ message, type });
    setTimeout(() => {
      setToast({ message: "", type: "" });
    }, 1500);
  };

  return (
    <>
      <Toast message={toast.message} type={toast.type} />

      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="max-w-xl mx-auto">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl">
              Post a New Property
            </h1>
            <p className="mt-1 text-gray-600">
              Fill in the details below to list your property for rent.
            </p>
          </div>
          <div className="mt-12">
            <form onSubmit={handleSubmit}>
              <div className="grid gap-4 lg:gap-6">
                {/* Removed userId input field */}
                <div>
                  <label
                    htmlFor="address"
                    className="block mb-2 text-sm text-gray-700 font-medium"
                  >
                    Address
                  </label>
                  <input
                    type="text"
                    name="address"
                    id="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="e.g., No 123, ABC Street, Chennai"
                    className="py-3 px-4 block w-full border border-gray-300 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="city"
                    className="block mt-1.5 md:mt-1 lg:mt-0 mb-2 text-sm text-gray-700 font-medium"
                  >
                    City
                  </label>
                  <select
                    name="city"
                    id="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="py-3 px-4 block w-full border border-gray-300 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500"
                  >
                    <option value="">Select City</option>
                    <option value="Chennai">Chennai</option>
                    <option value="Bengaluru">Bengaluru</option>
                    <option value="Kerala">Kerala</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Mumbai">Mumbai</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="rentAmount"
                    className="block mt-1.5 md:mt-1 lg:mt-0 mb-2 text-sm text-gray-700 font-medium"
                  >
                    Rent Amount (in &#8377;)
                  </label>
                  <input
                    type="number"
                    name="rentAmount"
                    id="rentAmount"
                    value={formData.rentAmount}
                    onChange={handleChange}
                    placeholder="e.g., 15000"
                    className="py-3 px-4 block w-full border border-gray-300 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="propertyType"
                    className="block mt-1.5 md:mt-1 lg:mt-0 mb-2 text-sm text-gray-700 font-medium"
                  >
                    Property Type
                  </label>
                  <select
                    name="propertyType"
                    id="propertyType"
                    value={formData.propertyType}
                    onChange={handleChange}
                    className="py-3 px-4 block w-full border border-gray-300 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500"
                  >
                    <option value="">Select Type</option>
                    <option value="1RK">1RK</option>
                    <option value="1BHK">1BHK</option>
                    <option value="2BHK">2BHK</option>
                    <option value="3BHK">3BHK</option>
                    <option value="4BHK">4BHK</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="description"
                    className="block mt-1.5 md:mt-1 lg:mt-0 mb-2 text-sm text-gray-700 font-medium"
                  >
                    Description
                  </label>
                  <textarea
                    name="description"
                    id="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="e.g., A beautiful 3-bedroom apartment"
                    rows={4}
                    className="py-3 px-4 block w-full border border-gray-300 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="locationLink"
                    className="block mt-1.5 md:mt-1 lg:mt-0 mb-2 text-sm text-gray-700 font-medium"
                  >
                    Google Maps Link
                  </label>
                  <input
                    type="url"
                    name="locationLink"
                    id="locationLink"
                    value={formData.locationLink}
                    onChange={handleChange}
                    placeholder="e.g., https://maps.google.com/?q=..."
                    className="py-3 px-4 block w-full border border-gray-300 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="image"
                    className="block mt-1.5 md:mt-1 lg:mt-0 mb-2 text-sm text-gray-700 font-medium"
                  >
                    Property Image
                  </label>
                  {/* <input
                    type="file"
                    name="image"
                    id="image"
                    accept="image/*"
                    onChange={handleChange}
                    className="py-3 px-4 block w-full border border-gray-300 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500"
                  /> */}
                  <input
                    type="file"
                    name="image"
                    id="image"
                    accept="image/*"
                    onChange={handleChange}
                    className="block w-full text-sm text-gray-500
                        file:me-4 file:py-2 file:px-4
                        file:rounded-lg file:border-0
                        file:text-sm file:font-semibold
                        file:bg-blue-500 file:text-white
                        hover:file:bg-blue-600
                        file:disabled:opacity-50 file:disabled:pointer-events-none"
                  />
                </div>
                <div>
                  <label
                    htmlFor="postedDate"
                    className="block mt-1.5 md:mt-1 lg:mt-0 mb-2 text-sm text-gray-700 font-medium"
                  >
                    Posted Date
                  </label>
                  <input
                    type="date"
                    name="postedDate"
                    id="postedDate"
                    value={formData.postedDate}
                    onChange={handleChange}
                    className="py-3 px-4 block w-full border border-gray-300 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
              </div>
              <div className="mt-7">
                <button
                  type="submit"
                  className="w-full bg-gradient-to-tl from-blue-600 to-violet-600 hover:from-violet-600 hover:to-blue-600 focus:outline-none focus:from-violet-600 focus:to-blue-600 border border-transparent text-white text-md font-medium rounded-md py-3 px-4 "
                >
                  Post Property
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewProperty;
