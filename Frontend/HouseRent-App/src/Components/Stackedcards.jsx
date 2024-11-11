function Stackedcards() {
  return (
    <>
      {/* <!-- Icon Blocks --> */}
      <div className="max-w-[85rem] my-3 md:my-8 px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto ">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 items-center gap-6 md:gap-10">
          {/* <!-- Card --> */}
          <div className="size-full bg-white shadow-lg rounded-lg p-5">
            <div className="flex items-center gap-x-4 mb-3">
              <div className="inline-flex justify-center items-center size-[62px] rounded-full border-4 border-blue-50 bg-blue-100">
                <svg
                  className="shrink-0 size-6 text-blue-600"
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
                  <path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7" />
                  <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                  <path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4" />
                  <path d="M2 7h20" />
                  <path d="M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7" />
                </svg>
              </div>

              <div className="shrink-0">
                <h3 className="block text-lg font-semibold text-gray-800">
                  Find Your Home
                </h3>
              </div>
            </div>
            <p className="text-gray-600">
              Discover a wide range of rental properties tailored to meet your
              preferences and budget. Whether you're looking for an apartment or
              a house, we've got you covered.
            </p>
          </div>
          {/* <!-- End Card --> */}

          {/* <!-- Card --> */}
          <div className="size-full bg-white shadow-lg rounded-lg p-5">
            <div className="flex items-center gap-x-4 mb-3">
              <div className="inline-flex justify-center items-center size-[62px] rounded-full border-4 border-blue-50 bg-blue-100 shrink-0  text-blue-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  className="bi bi-patch-check-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708" />
                </svg>
              </div>

              <div className="shrink-0">
                <h3 className="block text-lg font-semibold text-gray-800">
                  Owner Verification
                </h3>
              </div>
            </div>
            <p className="text-gray-600">
              All property owners are verified before listing their homes to
              ensure safety and reliability. This process guarantees that you’re
              dealing with legitimate owners.
            </p>
          </div>
          {/* <!-- End Card --> */}

          {/* <!-- Card --> */}
          <div className="size-full bg-white shadow-lg rounded-lg p-5">
            <div className="flex items-center gap-x-4 mb-3">
              <div className="inline-flex justify-center items-center size-[62px] rounded-full border-4 border-blue-50 bg-blue-100 shrink-0 text-blue-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  className="bi bi-bookmark-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2" />
                </svg>
              </div>
              <div className="shrink-0">
                <h3 className="block text-lg font-semibold text-gray-800">
                  {" "}
                  Bookmark Favorites
                </h3>
              </div>
            </div>
            <p className="text-gray-600">
              Save your favorite listings to your profile for easy access later.
              Keep track of properties you love without needing to search again.
            </p>
          </div>
          {/* <!-- End Card --> */}
          {/* 
    <!-- Card --> */}
          <div className="size-full bg-white shadow-lg rounded-lg p-5">
            <div className="flex items-center gap-x-4 mb-3">
              <div className="inline-flex justify-center items-center size-[62px] rounded-full border-4 border-blue-50 bg-blue-100 shrink-0  text-blue-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  className="bi bi-calendar-check-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2m-5.146-5.146-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708.708" />
                </svg>
              </div>
              <div className="shrink-0">
                <h3 className="block text-lg font-semibold text-gray-800">
                  Easy Booking
                </h3>
              </div>
            </div>
            <p className="text-gray-600">
              Our straightforward booking system allows you to schedule viewings
              and make inquiries with just a few clicks, streamlining your
              search for a new home.
            </p>
          </div>
          {/* <!-- End Card --> */}

          {/* <!-- Card --> */}
          <div className="size-full bg-white shadow-lg rounded-lg p-5">
            <div className="flex items-center gap-x-4 mb-3">
              <div className="inline-flex justify-center items-center size-[62px] rounded-full border-4 border-blue-50 bg-blue-100">
                <svg
                  className="shrink-0 size-6 text-blue-600 dark:text-blue-500"
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
                  <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z" />
                  <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" />
                </svg>
              </div>
              <div className="shrink-0">
                <h3 className="block text-lg font-semibold text-gray-800">
                  24/7 Support
                </h3>
              </div>
            </div>
            <p className="text-gray-600">
              Our dedicated customer support team is available around the clock
              to assist you with any questions or concerns, ensuring a seamless
              renting experience.
            </p>
          </div>
          {/* <!-- End Card --> */}

          {/* <!-- Card --> */}
          <div className="size-full bg-white shadow-lg rounded-lg p-5">
            <div className="flex items-center gap-x-4 mb-3">
              <div className="inline-flex justify-center items-center size-[62px] rounded-full border-4 border-blue-50 bg-blue-100">
                <svg
                  className="shrink-0 size-6 text-blue-600"
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
                  <rect width="10" height="14" x="3" y="8" rx="2" />
                  <path d="M5 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-2.4" />
                  <path d="M8 18h.01" />
                </svg>
              </div>
              <div className="shrink-0">
                <h3 className="block text-lg font-semibold text-gray-800">
                  {" "}
                  User-Friendly{" "}
                </h3>
              </div>
            </div>
            <p className="text-gray-600">
              Enjoy a clean and intuitive interface designed for easy
              navigation. Find what you need quickly and efficiently, whether on
              desktop or mobile. .
            </p>
          </div>
          {/* <!-- End Card --> */}
        </div>
      </div>
      {/* <!-- End Icon Blocks --> */}
    </>
  );
}

export default Stackedcards;
