function Request() {
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
                            Requested Date
                          </span>
                        </div>
                      </th>

                      <th scope="col" className="px-6 py-3 text-start">
                        <div className="flex items-center gap-x-2">
                          <span className="text-xs font-semibold uppercase tracking-wide text-gray-800">
                            Status
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
                            10 Oct 2024
                          </span>
                        </a>
                      </td>
                      <td className="size-px whitespace-nowrap align-middle">
                        <a className="block p-6" href="#">
                          <span className="py-2 px-2 inline-flex items-center gap-x-1 text-xs font-medium bg-teal-100 text-teal-800 rounded-full">
                            <svg
                              className="size-2.5"
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              viewBox="0 0 16 16"
                            >
                              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                            </svg>
                            Accepted
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
                            04 Aug 2024
                          </span>
                        </a>
                      </td>
                      <td className="size-px whitespace-nowrap align-middle">
                        <a className="block p-6" href="#">
                          <span className="py-2 px-2 inline-flex items-center gap-x-1 text-xs font-medium bg-red-100 text-red-800 rounded-full">
                            <svg
                              className="size-2.5"
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              viewBox="0 0 16 16"
                            >
                              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
                            </svg>
                            Rejected
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
                            July 10 2024
                          </span>
                        </a>
                      </td>
                      <td className="size-px whitespace-nowrap align-middle">
                        <a className="block p-6" href="#">
                          <span className="py-2 px-2 inline-flex items-center gap-x-1 text-xs font-medium bg-gray-200 rounded-full border">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="12"
                              height="12"
                              fill="black"
                              className="bi bi-clock"
                              viewBox="0 0 16 16"
                            >
                              <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
                              <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" />
                            </svg>
                            Pending
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

export default Request;
