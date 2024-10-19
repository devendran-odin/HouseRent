import { Link } from "react-router-dom";
function SignUp() {
  return (
    <>
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
            {/* <!-- Form --> */}
            <form>
              <div className="grid gap-y-4">
                {/* <!-- Form Group --> */}
                <div>
                  <label htmlFor="username" className="block text-sm mb-2">
                    Username
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="username"
                      name="username"
                      className="py-3 px-4 block w-full border-2 border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                      required
                      aria-describedby="username-error"
                    />
                    <div className="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
                      <svg
                        className="size-5 text-red-500"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                        aria-hidden="true"
                      >
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                      </svg>
                    </div>
                  </div>
                  <p
                    className="hidden text-xs text-red-600 mt-2"
                    id="username-error"
                  >
                    Please include a valid Username
                  </p>
                </div>
                {/* <!-- Form Group --> */}
                <div>
                  <label htmlFor="email" className="block text-sm mb-2">
                    Email address
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="py-3 px-4 block w-full border-2 border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                      required
                      aria-describedby="email-error"
                    />
                    <div className="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
                      <svg
                        className="size-5 text-red-500"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                        aria-hidden="true"
                      >
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                      </svg>
                    </div>
                  </div>
                  <p
                    className="hidden text-xs text-red-600 mt-2"
                    id="email-error"
                  >
                    Please include a valid email address so we can get back to
                    you
                  </p>
                </div>
                {/* <!-- End Form Group --> */}

                {/* <!-- Form Group --> */}
                <div>
                  <label htmlFor="password" className="block text-sm mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type="password"
                      id="password"
                      name="password"
                      className="py-3 px-4 block w-full border-2 border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                      required
                      aria-describedby="password-error"
                    />
                    <div className="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
                      <svg
                        className="size-5 text-red-500"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                        aria-hidden="true"
                      >
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                      </svg>
                    </div>
                  </div>
                  <p
                    className="hidden text-xs text-red-600 mt-2"
                    id="password-error"
                  >
                    8+ characters required
                  </p>
                </div>
                {/* <!-- End Form Group --> */}

                {/* <!-- Form Group --> */}
                <div>
                  <label
                    htmlFor="confirm-password"
                    className="block text-sm mb-2"
                  >
                    Confirm Password
                  </label>
                  <div className="relative">
                    <input
                      type="password"
                      id="confirm-password"
                      name="confirm-password"
                      className="py-3 px-4 block w-full border-2 border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                      required
                      aria-describedby="confirm-password-error"
                    />
                    <div className="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
                      <svg
                        className="size-5 text-red-500"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                        aria-hidden="true"
                      >
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                      </svg>
                    </div>
                  </div>
                  <p
                    className="hidden text-xs text-red-600 mt-2"
                    id="confirm-password-error"
                  >
                    Password does not match the password
                  </p>
                </div>
                {/* <!-- End Form Group --> */}

                {/* <!-- Checkbox --> */}
                <div className="flex items-center">
                  <div className="flex">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500"
                    />
                  </div>
                  <div className="ms-3">
                    <label htmlFor="remember-me" className="text-sm">
                      I accept the{" "}
                      <a
                        className="text-blue-600 decoration-2 hover:underline focus:outline-none focus:underline font-medium"
                        href="#"
                      >
                        Terms and Conditions
                      </a>
                    </label>
                  </div>
                </div>
                {/* <!-- End Checkbox --> */}

                <button
                  type="submit"
                  className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-gradient-to-tl from-blue-600 to-violet-600 text-white  focus:outline-none hover:from-violet-600 hover:to-blue-600 focus:bg-blue-700  disabled:opacity-50 disabled:pointer-events-none"
                >
                  Sign up
                </button>
              </div>
            </form>
            {/* <!-- End Form --> */}
          </div>
        </div>
      </div>
    </>
  );
}
export default SignUp;
