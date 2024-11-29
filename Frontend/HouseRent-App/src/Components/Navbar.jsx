import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";
import { useState, useEffect } from "react"; // Importing useState to manage the toggle state

function Navbar({ scrollToSteps }) {
  const { isLoggedIn, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [userRole, setUserRole] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Get user role from localStorage
    const role = localStorage.getItem("userRole");
    setUserRole(role);
  }, [isLoggedIn]);

  const handleAboutClick = () => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => scrollToSteps(), 400); // Ensures the page loads before scrolling
    } else {
      scrollToSteps();
    }
  };

  const handleMenuToggle = () => {
    setIsMenuOpen((prevState) => !prevState); // Toggle the menu open/close state
  };

  return (
    <>
      {/* <!-- ========== HEADER ========== --> */}
      <header className="sticky top-4 inset-x-0 before:absolute before:inset-0 before:max-w-[66rem] before:mx-2 before:lg:mx-auto before:rounded-[26px] before:border before:border-gray-200 after:absolute after:inset-0 after:-z-[1] after:max-w-[66rem] after:mx-2 after:lg:mx-auto after:rounded-[26px] after:bg-white flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full">
        <nav className="relative max-w-[66rem] w-full md:flex md:items-center md:justify-between md:gap-3 ps-5 pe-2 mx-2 lg:mx-auto py-2">
          {/* <!-- Logo w/ Collapse Button --> */}
          <div className="flex items-center justify-between">
            <Link
              className="flex-none font-semibold text-xl text-blue-700 focus:outline-none focus:opacity-80"
              to="/"
              aria-label="Brand"
            >
              <span className="bg-clip-text bg-gradient-to-tl from-blue-600 to-violet-600 text-transparent">
                Rentify
              </span>
            </Link>

            {/* <!-- Collapse Button --> */}
            <div className="md:hidden">
              <button
                type="button"
                className="relative size-9 flex justify-center items-center text-sm font-semibold rounded-full border border-gray-200 text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
                onClick={handleMenuToggle} // Trigger the menu toggle when clicked
                aria-expanded={isMenuOpen ? "true" : "false"} // Reflect menu open/closed state
                aria-controls="hs-header-classic"
                aria-label="Toggle navigation"
              >
                <svg
                  className={`size-4 ${isMenuOpen ? "hidden" : "block"}`} // Toggle visibility based on isMenuOpen
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="3" x2="21" y1="6" y2="6" />
                  <line x1="3" x2="21" y1="12" y2="12" />
                  <line x1="3" x2="21" y1="18" y2="18" />
                </svg>
                <svg
                  className={`size-4 ${isMenuOpen ? "block" : "hidden"}`} // Toggle visibility based on isMenuOpen
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
                <span className="sr-only">Toggle navigation</span>
              </button>
            </div>
            {/* <!-- End Collapse Button --> */}
          </div>
          {/* <!-- End Logo w/ Collapse Button --> */}

          {/* <!-- Collapse --> */}
          <div
            id="hs-header-classic"
            className={`overflow-hidden overflow-y-auto max-h-[75vh] transition-all duration-300 ${
              isMenuOpen ? "block" : "hidden"
            } md:block`}
            aria-labelledby="hs-header-classic-collapse"
          >
            <div className="py-2 md:py-0 flex flex-col md:flex-row md:items-center md:justify-end gap-0.5 md:gap-1">
              {userRole !== "admin" && (
                <Link
                  className="p-2 flex items-center text-sm text-gray-800 hover:text-gray-500 focus:outline-none focus:text-blue-600 "
                  to="/properties"
                  aria-current="page"
                >
                  <svg
                    className="shrink-0 size-4 me-3 md:me-2 block md:hidden"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
                    <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  </svg>
                  Properties
                </Link>
              )}

              <a
                className="p-2 flex items-center text-sm text-gray-800 
                hover:cursor-pointer hover:text-gray-500 focus:outline-none focus:text-gray-500"
                onClick={handleAboutClick}
              >
                <svg
                  className="shrink-0 size-4 me-3 md:me-2 block md:hidden"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 12h.01" />
                  <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
                  <path d="M22 13a18.15 18.15 0 0 1-20 0" />
                  <rect width="20" height="14" x="2" y="6" rx="2" />
                </svg>
                About
              </a>

              {isLoggedIn ? (
                <Link
                  className="p-2 flex items-center text-sm text-gray-800 hover:text-gray-500 focus:outline-none focus:text-blue-600"
                  to={userRole === "admin" ? "/admin" : "/profile"}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.3}
                    stroke="currentColor"
                    className="size-5 mr-2 md:mr-0.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                  </svg>
                  {userRole === "admin" ? "Admin" : "Profile"}
                </Link>
              ) : (
                <>
                  {" "}
                  <div className="relative flex flex-wrap items-center gap-x-1.5 md:ps-2.5  md:ms-1.5 before:block before:absolute before:top-1/2 before:-start-px before:w-px before:h-4 before:bg-gray-300 before:-translate-y-1/2">
                    <Link
                      className="p-2 w-full flex items-center text-sm text-gray-800 hover:text-gray-500 focus:outline-none focus:text-gray-500"
                      to="/register"
                    >
                      Signup
                    </Link>
                  </div>
                  <div className="relative flex flex-wrap items-center gap-x-1.5 md:ps-2.5  md:ms-1.5 before:block before:absolute before:top-1/2 before:-start-px before:w-px before:h-4 before:bg-gray-300 before:-translate-y-1/2">
                    <Link
                      className="p-2 w-full flex items-center text-sm text-gray-800 hover:text-gray-500 focus:outline-none focus:text-gray-500"
                      to="/login"
                    >
                      Login
                    </Link>
                  </div>
                </>
              )}
            </div>
          </div>
          {/* <!-- End Collapse --> */}
        </nav>
      </header>
      {/* <!-- ========== END HEADER ========== --> */}
    </>
  );
}

export default Navbar;
