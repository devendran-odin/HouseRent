import HomeImg from "./assets/Home.jpg";
import Bookmark from "./Components/Bookmark";
function Properties() {
  return (
    <>
      <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
        <div className="border-b mb-5 flex justify-between text-sm">
          <div className="text-indigo-600 flex items-center pb-2 pr-2 border-b-2 border-indigo-600 uppercase">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 mr-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>

            <a href="#" className="font-semibold inline-block">
              Properties Posted
            </a>
          </div>
          <a href="#">See All</a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {/* CARD 1 */}
          <div className="rounded overflow-hidden shadow-lg flex flex-col bg-white">
            <a href="#" />
            <div className="relative">
              <a href="#">
                <img className="w-full" src={HomeImg} alt="House Image" />
                <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-15"></div>
              </a>
              <a href="#!">
                <div className="text-xs absolute top-0 right-0 px-4 py-2 mt-3 mr-3 bg-white text-green-600 transition duration-500 ease-in-out rounded-md">
                  For Rent
                </div>
              </a>
            </div>
            <div className="px-6 py-4 mb-auto">
              <a
                href="#"
                className="font-medium text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out mb-2"
              >
                &#8377;18,500 Per Month
              </a>
              <p className="text-gray-500 text-sm">
                A beautiful 2-bedroom apartment with spacious living areas,
                located near the city center
              </p>
            </div>
            <div className="px-3 md:px-6 py-2 flex flex-row items-center justify-between bg-gray-100">
              <span
                href="#"
                className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center"
              >
                <Bookmark />
                <span className="ml-1">Add to Favorites</span>
              </span>
              <span
                href="#"
                className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center"
              >
                <span className="ml-1 bg-gradient-to-tl from-blue-600 to-violet-600 text-white  focus:outline-none hover:from-violet-600 hover:to-blue-600 focus:bg-blue-700 py-2 md:py-2.5 px-3 rounded-md hover:cursor-pointer">
                  Request to Book
                </span>
              </span>
            </div>
          </div>
          {/* CARD 2 */}
          <div className="rounded overflow-hidden shadow-lg flex flex-col bg-white">
            <a href="#" />
            <div className="relative">
              <a href="#">
                <img className="w-full" src={HomeImg} alt="House Image" />
                <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-15"></div>
              </a>
              <a href="#!">
                <div className="text-xs absolute top-0 right-0 px-4 py-2 mt-3 mr-3 bg-white text-green-600 transition duration-500 ease-in-out rounded-md">
                  For Rent
                </div>
              </a>
            </div>
            <div className="px-6 py-4 mb-auto">
              <a
                href="#"
                className="font-medium text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out mb-2"
              >
                &#8377;25,000 Per Month
              </a>
              <p className="text-gray-500 text-sm">
                A beautiful 3-bedroom apartment with spacious living areas,
                located near the city center
              </p>
            </div>
            <div className="px-3 md:px-6 py-2 flex flex-row items-center justify-between bg-gray-100">
              <span
                href="#"
                className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center"
              >
                <Bookmark />
                <span className="ml-1">Add to Favorites</span>
              </span>
              <span
                href="#"
                className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center"
              >
                <span className="ml-1 bg-gradient-to-tl from-blue-600 to-violet-600 text-white  focus:outline-none hover:from-violet-600 hover:to-blue-600 focus:bg-blue-700 py-2 md:py-2.5 px-3 rounded-md hover:cursor-pointer">
                  Request to Book
                </span>
              </span>
            </div>
          </div>
          {/* CARD 3 */}
          <div className="rounded overflow-hidden shadow-lg flex flex-col bg-white">
            <a href="#" />
            <div className="relative">
              <a href="#">
                <img className="w-full" src={HomeImg} alt="House Image" />
                <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-15"></div>
              </a>
              <a href="#!">
                <div className="text-xs absolute top-0 right-0 px-4 py-2 mt-3 mr-3 bg-white text-red-600 transition duration-500 ease-in-out rounded-md">
                  Booked
                </div>
              </a>
            </div>
            <div className="px-6 py-4 mb-auto">
              <a
                href="#"
                className="font-medium text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out mb-2"
              >
                &#8377;12,000 Per Month
              </a>
              <p className="text-gray-500 text-sm">
                A beautiful 3-bedroom apartment with spacious living areas,
                located near the city center
              </p>
            </div>
            <div className="px-3 md:px-6 py-2 flex flex-row items-center justify-between bg-gray-100">
              <span
                href="#"
                className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center"
              >
                <Bookmark />
                <span className="ml-1">Add to Favorites</span>
              </span>
              <span
                href="#"
                className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center"
              >
                <span className="ml-1 bg-gradient-to-tl from-blue-600 to-violet-600 text-white  focus:outline-none hover:from-violet-600 hover:to-blue-600 focus:bg-blue-700 py-2 md:py-2.5 px-3 rounded-md hover:cursor-pointer">
                  Request to Book
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Properties;
