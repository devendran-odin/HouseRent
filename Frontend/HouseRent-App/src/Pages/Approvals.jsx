function Approvals() {
  return (
    <>
      {" "}
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        {/* <!-- Card --> */}
        <div className="flex flex-col">
          <div className="-m-1.5 overflow-x-auto">
            <div className="p-1.5 min-w-full inline-block align-middle">
              <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
                {/* <!-- Table --> */}
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-start">
                        <div className="flex items-center gap-x-2">
                          <span className="text-xs font-semibold uppercase tracking-wide text-gray-800">
                            Tenant Details
                          </span>
                        </div>
                      </th>

                      <th scope="col" className="px-6 py-3 text-start">
                        <div className="flex items-center gap-x-2">
                          <span className="text-xs font-semibold uppercase tracking-wide text-gray-800">
                            Requested Date
                          </span>
                        </div>
                      </th>

                      <th scope="col" className="px-6 py-3 text-start">
                        <div className="flex items-center gap-x-2">
                          <span className="text-xs font-semibold uppercase tracking-wide text-gray-800">
                            View Property
                          </span>
                        </div>
                      </th>
                      <th scope="col" className="px-6 py-3 text-start">
                        <div className="flex items-center gap-x-2">
                          <span className="text-xs font-semibold uppercase tracking-wide text-gray-800">
                            Actions
                          </span>
                        </div>
                      </th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-gray-200">
                    <tr className="bg-white hover:bg-gray-50">
                      <td className="size-px whitespace-nowrap align-middle">
                        <a className="block p-6" href="#">
                          <div className="flex items-center gap-x-3">
                            <div className="grow">
                              <span className="block text-sm font-semibold text-gray-800">
                                Christina Bersh
                              </span>
                              <span className="block text-sm text-gray-500">
                                christina@site.com
                              </span>
                            </div>
                          </div>
                        </a>
                      </td>

                      <td className="size-px whitespace-nowrap align-middle">
                        <a className="block p-6" href="#">
                          <span className="text-sm text-gray-600">
                            10 Jan 2022
                          </span>
                        </a>
                      </td>

                      <td className="size-px whitespace-nowrap align-middle">
                        <a className="block p-6" href="#">
                          <span className="md:text-[15px] text-blue-600 hover:underline">
                            More Info
                          </span>
                        </a>
                      </td>
                      <td className="size-px whitespace-nowrap align-middle">
                        <div className="flex">
                          <div>
                            <a className="block p-6" href="#">
                              <span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-green-200 text-green-800 hover:bg-green-300 rounded-full border">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth={1}
                                  stroke="currentColor"
                                  className="size-5"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                  />
                                </svg>
                                Accept
                              </span>
                            </a>
                          </div>
                          <div>
                            <a className="block p-6" href="#">
                              <span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-red-200 text-red-800 hover:bg-red-300 rounded-full border">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth={1}
                                  stroke="currentColor"
                                  className="size-5"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                  />
                                </svg>
                                Reject
                              </span>
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr>

                    <tr className="bg-white hover:bg-gray-50">
                      <td className="size-px whitespace-nowrap align-middle">
                        <a className="block p-6" href="#">
                          <div className="flex items-center gap-x-3">
                            <div className="grow">
                              <span className="block text-sm font-semibold text-gray-800">
                                David Harrison
                              </span>
                              <span className="block text-sm text-gray-500">
                                david@site.com
                              </span>
                            </div>
                          </div>
                        </a>
                      </td>

                      <td className="size-px whitespace-nowrap align-middle">
                        <a className="block p-6" href="#">
                          <span className="text-sm text-gray-600">
                            04 Aug 2020
                          </span>
                        </a>
                      </td>

                      <td className="size-px whitespace-nowrap align-middle">
                        <a className="block p-6" href="#">
                          <span className="md:text-[15px] text-blue-600 hover:underline">
                            More Info
                          </span>
                        </a>
                      </td>
                      <td className="size-px whitespace-nowrap align-middle">
                        <div className="flex">
                          <div>
                            <a className="block p-6" href="#">
                              <span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-green-200 text-green-800 hover:bg-green-300 rounded-full border">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth={1}
                                  stroke="currentColor"
                                  className="size-5"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                  />
                                </svg>
                                Accept
                              </span>
                            </a>
                          </div>
                          <div>
                            <a className="block p-6" href="#">
                              <span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-red-200 text-red-800 hover:bg-red-300 rounded-full border">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth={1}
                                  stroke="currentColor"
                                  className="size-5"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                  />
                                </svg>
                                Reject
                              </span>
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr>

                    <tr className="bg-white hover:bg-gray-50">
                      <td className="size-px whitespace-nowrap align-middle">
                        <a className="block p-6" href="#">
                          <div className="flex items-center gap-x-3">
                            <div className="grow">
                              <span className="block text-sm font-semibold text-gray-800">
                                Anne Richard
                              </span>
                              <span className="block text-sm text-gray-500">
                                anne@site.com
                              </span>
                            </div>
                          </div>
                        </a>
                      </td>

                      <td className="size-px whitespace-nowrap align-middle">
                        <a className="block p-6" href="#">
                          <span className="text-sm text-gray-600">
                            June 18 2022
                          </span>
                        </a>
                      </td>

                      <td className="size-px whitespace-nowrap align-middle">
                        <a className="block p-6" href="#">
                          <span className="md:text-[15px] text-blue-600 hover:underline">
                            More Info
                          </span>
                        </a>
                      </td>
                      <td className="size-px whitespace-nowrap align-middle">
                        <div className="flex">
                          <div>
                            <a className="block p-6" href="#">
                              <span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-green-200 text-green-800 hover:bg-green-300 rounded-full border">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth={1}
                                  stroke="currentColor"
                                  className="size-5"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                  />
                                </svg>
                                Accept
                              </span>
                            </a>
                          </div>
                          <div>
                            <a className="block p-6" href="#">
                              <span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-red-200 text-red-800 hover:bg-red-300 rounded-full border">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth={1}
                                  stroke="currentColor"
                                  className="size-5"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                  />
                                </svg>
                                Reject
                              </span>
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
                {/* <!-- End Table --> */}
              </div>
            </div>
          </div>
        </div>
        {/* <!-- End Card --> */}
      </div>
    </>
  );
}
export default Approvals;
