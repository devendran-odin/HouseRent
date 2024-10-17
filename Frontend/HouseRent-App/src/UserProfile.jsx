import PlaceHolderImage from "./assets/PlaceHolderImage.jpg";
function UserProfile() {
  return (
    <>
      <div className="rounded-3xl shadow-md mx-3.5 md:mx-5 lg:mx-32 xl:mx-40 px-4 sm:px-6 lg:px-8 pt-10 mt-16 pb-10 mb-12 flex flex-col md:flex-row justify-center items-center gap-8 md:gap-20 bg-gradient-to-tl from-blue-600 to-violet-600 ">
        {/* <!-- Profile --> */}
        <div className="flex items-center gap-x-3 md:gap-x-4 ">
          <div className="shrink-0">
            <img
              className="shrink-0 size-16 rounded-full"
              src={PlaceHolderImage}
              alt="Avatar"
            />
          </div>

          <div className="grow">
            <h1 className="text-xl md:text-3xl font-medium text-gray-100">
              Devendran{" "}
            </h1>
            <p className="text-sm md:text-lg text-gray-300">dev@gmail.com</p>
          </div>
        </div>

        {/* Buttons  */}
        <div className="flex flex-col w-[85%] md:w-auto  md:flex-row gap-5 md:gap-7">
          <button
            type="button"
            className="inline-flex justify-center items-center px-9 py-3 gap-x-2  text-sm font-medium rounded-lg  bg-gray-100 text-gray-900 shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-4 focus:bg-gray-100 focus:ring-green-500 disabled:opacity-50 disabled:pointer-events-none"
          >
            As a Tenant
            <svg
              className="shrink-0 size-4"
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
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </button>
          <button
            type="button"
            className="inline-flex justify-center items-center px-9 py-3 gap-x-2  text-sm font-medium rounded-lg  bg-gray-100 text-gray-900 shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-4 focus:bg-gray-100 focus:ring-green-500 disabled:opacity-50 disabled:pointer-events-none"
          >
            As a Owner
            <svg
              className="shrink-0 size-4"
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
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </div>
      {/* <!-- End Profile --> */}
    </>
  );
}

export default UserProfile;
