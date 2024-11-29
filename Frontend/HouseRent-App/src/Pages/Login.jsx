import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import Toast from "../Components/ToastMessage.jsx";
import { useAuth } from "../context/AuthContext.jsx";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [toast, setToast] = useState({ message: "", type: "" });
  const navigate = useNavigate();

  const { setIsLoggedIn } = useAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = formData;

    // Validations
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showToast("Please enter a valid email address", "error");
      return;
    }

    if (password.length < 8) {
      showToast("Password must be at least 8 characters long", "error");
      return;
    }

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/users/login`, // Same backend login endpoint
        { userEmail: email, userPassword: password }
      );
      showToast("Login successful!", "success");
      if (response.status === 200 && response.data.token) {
        // Store token and user info in localStorage
        localStorage.setItem("authToken", response.data.token);
        localStorage.setItem("userId", response.data.userId);

        // Store the role (admin or user)
        if (response.data.role) {
          localStorage.setItem("userRole", response.data.role); // Store user role (admin/user)
        }

        setIsLoggedIn(true);
        // Redirect to either Admin or User Dashboard based on role
        if (response.data.role === "admin") {
          showToast(
            response.data.message || "Admin login successful!",
            "success"
          );

          setTimeout(() => {
            navigate("/admin");
            window.location.reload();
          }, 1000);
        } else {
          showToast(response.data.message || "Login successful!", "success");
          setTimeout(() => {
            navigate("/");
            window.location.reload();
          }, 1000);
        }
      } else {
        showToast(response.data.message || "Login failed", "error");
      }
    } catch (error) {
      if (error.response) {
        showToast(
          error.response.data.message || "Something went wrong",
          "error"
        );
      } else {
        showToast(
          "Unable to connect to the server. Please try again.",
          "error"
        );
      }
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
      <div className="mt-16 md:mt-28 bg-white border border-gray-200 rounded-xl w-[90%] md:w-[70%] lg:w-[45%] mx-auto shadow-sm">
        <div className="p-4 sm:p-7">
          <div className="text-center">
            <h1 className="block text-2xl font-bold text-gray-800">Sign in</h1>
            <p className="mt-2 text-sm text-gray-600">
              Don't have an account yet?{" "}
              <Link
                className="text-blue-600 decoration-2 hover:underline focus:outline-none focus:underline font-medium"
                to="/register"
              >
                Sign up
              </Link>
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mt-6 md:mt-8">
            <div className="grid gap-y-4">
              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm mb-2">
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
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

              <button
                type="submit"
                className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-gradient-to-tl from-blue-600 to-violet-600 text-white"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
