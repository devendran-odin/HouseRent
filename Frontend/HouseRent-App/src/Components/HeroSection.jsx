import { Link } from "react-router-dom";
import FilterModal from "./FilterModal.jsx";
function HeroSection() {
  return (
    <>
      {/* <!-- Hero --> */}
      <div className="relative overflow-hidden before:absolute before:top-0 before:start-1/2 before:bg-[url('https://preline.co/assets/svg/examples/squared-bg-element.svg')] before:bg-no-repeat before:bg-top before:size-full before:-z-[1] before:transform before:-translate-x-1/2">
        <div className="max-w-[85rem] mx-auto mb-6 md:mb-12 px-4 sm:px-6 lg:px-8 pt-24 pb-10">
          {/* <!-- Announcement Banner --> */}
          <div className="flex justify-center">
            <Link
              className="inline-flex items-center gap-x-2 bg-white border border-gray-200 text-xs text-gray-600 p-2 px-3 rounded-full transition hover:border-gray-300 focus:outline-none focus:border-gray-300"
              to="/properties"
            >
              Explore Available Rentals
              <span className="flex items-center gap-x-1">
                <span className="border-s border-gray-200 text-blue-600 ps-2">
                  Find a Home
                </span>
                <svg
                  className="shrink-0 size-4 text-blue-600"
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
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </span>
            </Link>
          </div>
          {/* <!-- End Announcement Banner --> */}

          {/* <!-- Title --> */}
          <div className="mt-5 max-w-xl text-center mx-auto">
            <h1 className="block font-bold text-gray-800 text-4xl md:text-5xl lg:text-6xl">
              Find Your Dream{" "}
              <span className="inline-flex animate-text-gradient bg-gradient-to-tl from-blue-800 via-[#887ce3] to-violet-800 bg-[200%_auto] bg-clip-text text-transparent">
                Home
              </span>
              Today
            </h1>
          </div>
          {/* <!-- End Title --> */}

          <div className="mt-5 max-w-3xl text-center mx-auto">
            <p className="text-[15px] md:text-lg text-gray-600">
              Discover a wide range of rental properties across prime locations.
              Whether you're a tenant or an owner, we've got you covered
            </p>
          </div>

          <FilterModal />
        </div>
      </div>
      {/* <!-- End Hero --> */}
    </>
  );
}

export default HeroSection;
