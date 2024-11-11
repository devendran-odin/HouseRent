function Favorites() {
  return (
    <>
      {/* <!-- Table Section --> */}
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
                            Owner Details
                          </span>
                        </div>
                      </th>

                      <th scope="col" className="px-6 py-3 text-start">
                        <div className="flex items-center gap-x-2">
                          <span className="text-xs font-semibold uppercase tracking-wide text-gray-800">
                            Rent Per Month
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
                            Action
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
                          <span className="text-sm text-gray-800">
                            &#8377;12,000
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
                        <a className="block p-6" href="#">
                          <span className="py-2 px-2 inline-flex items-center gap-x-1 text-xs font-semibold bg-red-100 text-red-800 rounded-full">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={2}
                              stroke="currentColor"
                              className="size-4"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                              />
                            </svg>
                            Remove
                          </span>
                        </a>
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
                          <span className="text-sm text-gray-800">
                            &#8377;25,000
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
                        <a className="block p-6" href="#">
                          <span className="py-2 px-2 inline-flex items-center gap-x-1 text-xs font-semibold bg-red-100 text-red-800 rounded-full">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={2}
                              stroke="currentColor"
                              className="size-4"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                              />
                            </svg>
                            Remove
                          </span>
                        </a>
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
                          <span className="text-sm text-gray-800">
                            &#8377;20,000
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
                        <a className="block p-6" href="#">
                          <span className="py-2 px-2 inline-flex items-center gap-x-1 text-xs font-semibold bg-red-100 text-red-800 rounded-full">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={2}
                              stroke="currentColor"
                              className="size-4"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                              />
                            </svg>
                            Remove
                          </span>
                        </a>
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
      {/* <!-- End Table Section --> */}
    </>
  );
}

export default Favorites;
