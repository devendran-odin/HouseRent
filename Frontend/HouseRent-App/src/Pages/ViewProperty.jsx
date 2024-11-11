import Home from "../assets/Home.jpg";
function ViewProperty() {
  return (
    <>
      {/* Hero */}
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 mt-6 lg:mt-16 mb-7 ">
        {/* Grid */}
        <div className="grid lg:grid-cols-7 lg:gap-x-8 xl:gap-x-12 lg:items-center ">
          <div className="lg:col-span-4 mt-10 lg:mt-0">
            <img className="w-full rounded-xl" src={Home} alt="Home Image" />
          </div>
          {/* End Col */}
          <div className="lg:col-span-3 mt-8 md:mt-8 lg:mt-1 ">
            <h1 className=" block text-2xl font-bold text-gray-800 sm:text-2xl md:text-3xl lg:text-4xl">
              A beautiful 3-bedroom apartment with spacious living area
            </h1>
            <p className="mt-3 lg:mt-4 text-[16px] md:text-[17px] text-gray-800">
              No 123, ABC Street, Chennai, Tamilnadu 600034
            </p>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4 lg:mt-6">
              <div className="p-4 border border-gray-200 rounded-lg">
                <p className="font-semibold text-lg text-gray-800">
                  Rent Per Month
                </p>
                <p className="mt-1 text-[16px] text-gray-600">&#8377;12,000</p>
              </div>
              <div className="p-4 border border-gray-200 rounded-lg">
                <p className="font-semibold text-lg text-gray-800">
                  Property Type
                </p>
                <p className="mt-1 text-[16px] text-gray-600">2BHK, Chennai</p>
              </div>
              <a
                className=" mt-3 flex items-center gap-1 text-lg text-blue-800 hover:underline"
                target="_blank"
                href="https://www.google.com/maps/dir/13.029608,80.2727277/13.028158,80.2623556/@13.0251709,80.2675295,14.43z?entry=ttu&g_ep=EgoyMDI0MTAyNy4wIKXMDSoASAFQAw%3D%3D"
              >
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="black"
                    className="size-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                    />
                  </svg>
                </span>{" "}
                View on Map
              </a>
            </div>
            <p className="mt-3 text-[15px] text-gray-600">
              Posted on: 12 Oct 2024
            </p>
            <button className="py-3 px-3 my-4 lg:my-5  w-full items-center hover:text-gray-700 text-[16px] hover:border-green-600 font-medium  rounded-lg border border-black disabled:opacity-50  disabled:pointer-events-none">
              {" "}
              Add to Favorites
            </button>
            <button className="py-3 px-3 mt-1 lg:mt-2  w-full items-center  text-[16px] font-medium  rounded-lg border border-transparent bg-gradient-to-tl from-blue-600 to-violet-600 text-white  focus:outline-none hover:from-violet-600 hover:to-blue-600 focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
              {" "}
              Request to Book
            </button>

            {/* End Grid */}
          </div>
          {/* End Col */}
        </div>
        {/* End Grid */}
      </div>
      {/* End Hero */}
    </>
  );
}
export default ViewProperty;
