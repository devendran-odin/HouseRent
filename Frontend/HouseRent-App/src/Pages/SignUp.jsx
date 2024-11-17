import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import Toast from "../Components/ToastMessage.jsx";

function SignUp() {
  const [formData, setFormData] = useState({
    username: "",
    useremail: "",
    password: "",
    confirmPassword: "",
  });
  const [toast, setToast] = useState({ message: "", type: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validations
    const { username, useremail, password, confirmPassword } = formData;

    // Check Username Length
    if (username.length < 3) {
      showToast("Username must be at least 3 characters long", "error");
      return;
    }

    // Validate useremail
    const useremailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!useremailRegex.test(useremail)) {
      showToast("Please enter a valid useremail address", "error");
      return;
    }

    // Validate Password Length
    if (password.length < 8) {
      showToast("Password must be at least 8 characters long", "error");
      return;
    }

    // Check if Passwords match
    if (password !== confirmPassword) {
      showToast("Passwords do not match", "error");
      return;
    }

    try {
      // Make API request
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/users/signup`,
        {
          username,
          useremail,
          password,
        }
      );

      // Handle success response
      if (response.status === 200) {
        showToast("Sign up successful!", "success");

        // Clear form after successful sign up
        setFormData({
          username: "",
          useremail: "",
          password: "",
          confirmPassword: "",
        });

        setTimeout(() => {
          navigate("/login");
        }, 1000);
      } else {
        showToast(response.data || "Signup failed", "error");
      }
    } catch (error) {
      // Handle errors
      if (error.response) {
        // Server responded with a status other than 2xx
        showToast(error.response.data || "Something went wrong", "error");
      } else {
        // Network or other errors
        showToast(
          "Unable to connect to the server. Please try again.",
          "error"
        );
      }
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

      <div className="mt-12 md:mt-20 bg-white border border-gray-200 rounded-xl shadow-sm w-[90%] md:w-[70%] lg:w-[45%] mx-auto">
        <div className="p-4 sm:p-7">
          <div className="text-center">
            <h1 className="block text-2xl font-bold text-gray-800">Sign up</h1>
            <p className="mt-2 text-sm text-gray-600">
              Already have an account?{" "}
              <Link
                className="text-blue-600 decoration-2 hover:underline focus:outline-none focus:underline font-medium"
                to="/login"
              >
                Sign in
              </Link>
            </p>
          </div>

          <div className="mt-8 md:mt-12">
            {/* Form */}
            <form onSubmit={handleSubmit}>
              <div className="grid gap-y-4">
                {/* Username */}
                <div>
                  <label htmlFor="username" className="block text-sm mb-2">
                    Username
                  </label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    className="py-3 px-4 block w-full border-2 border-gray-200 rounded-lg text-sm"
                    required
                  />
                </div>

                {/* useremail */}
                <div>
                  <label htmlFor="useremail" className="block text-sm mb-2">
                    Email address
                  </label>
                  <input
                    type="email"
                    id="useremail"
                    name="useremail"
                    value={formData.useremail}
                    onChange={handleChange}
                    className="py-3 px-4 block w-full border-2 border-gray-200 rounded-lg text-sm"
                    required
                  />
                </div>

                {/* Password */}
                <div>
                  <label htmlFor="password" className="block text-sm mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="py-3 px-4 block w-full border-2 border-gray-200 rounded-lg text-sm"
                    required
                  />
                </div>

                {/* Confirm Password */}
                <div>
                  <label
                    htmlFor="confirm-password"
                    className="block text-sm mb-2"
                  >
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    id="confirm-password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="py-3 px-4 block w-full border-2 border-gray-200 rounded-lg text-sm"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-gradient-to-tl from-blue-600 to-violet-600 text-white"
                >
                  Sign up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
