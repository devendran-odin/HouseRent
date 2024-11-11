function NewProperty() {
  return (
    <>
      {/* New Property Form */}
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="max-w-xl mx-auto">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl">
              Post a New Property
            </h1>
            <p className="mt-1 text-gray-600">
              Fill in the details below to list your property for rent.
            </p>
          </div>
          <div className="mt-12">
            {/* Form */}
            <form>
              <div className="grid gap-4 lg:gap-6">
                {/* Address Details */}
                <div>
                  <label
                    htmlFor="address"
                    className="block mb-2 text-sm text-gray-700 font-medium"
                  >
                    Address
                  </label>
                  <input
                    type="text"
                    name="address"
                    id="address"
                    placeholder="e.g., No 123, ABC Street, Chennai, Tamilnadu 600034"
                    className="py-3 px-4 block w-full border border-gray-300 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>

                {/* City */}
                <div>
                  <label
                    htmlFor="city"
                    className="block mb-2 text-sm text-gray-700 font-medium"
                  >
                    City
                  </label>
                  <select
                    id="city"
                    name="city"
                    className="py-3 px-4 block w-full border border-gray-300 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500"
                  >
                    <option value="">Select City</option>
                    <option value="Chennai">Chennai</option>
                    <option value="Bengaluru">Bengaluru</option>
                    <option value="Kerala">Kerala</option>
                    <option value="Delhi">Delhi</option>
                    <option>Mumbai</option>
                  </select>
                </div>

                {/* Rent Amount */}
                <div>
                  <label
                    htmlFor="rent-amount"
                    className="block mb-2 text-sm text-gray-700 font-medium"
                  >
                    Rent Amount (in &#8377;)
                  </label>
                  <input
                    type="number"
                    name="rent-amount"
                    id="rent-amount"
                    placeholder="e.g., 15000"
                    className="py-3 px-4 block w-full border border-gray-300 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>

                {/* Property Type */}
                <div>
                  <label
                    htmlFor="property-type"
                    className="block mb-2 text-sm text-gray-700 font-medium"
                  >
                    Property Type
                  </label>
                  <select
                    id="property-type"
                    name="property-type"
                    className="py-3 px-4 block w-full border border-gray-300 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500"
                  >
                    <option value="">Select Type</option>
                    <option value="1RK">1RK</option>
                    <option value="1BHK">1BHK</option>
                    <option value="2BHK">2BHK</option>
                    <option value="3BHK">3BHK</option>
                    <option value="4BHK">4BHK</option>
                  </select>
                </div>

                {/* Property Description */}
                <div>
                  <label
                    htmlFor="property-description"
                    className="block mb-2 text-sm text-gray-700 font-medium"
                  >
                    Property Description
                  </label>
                  <textarea
                    id="property-description"
                    name="property-description"
                    rows={4}
                    placeholder="e.g., A beautiful 3-bedroom apartment with spacious living area"
                    className="py-3 px-4 block w-full border border-gray-300 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>

                {/* Location Link */}
                <div>
                  <label
                    htmlFor="location-link"
                    className="block mb-2 text-sm text-gray-700 font-medium"
                  >
                    Google Maps Link
                  </label>
                  <input
                    type="url"
                    name="location-link"
                    id="location-link"
                    placeholder="e.g., https://maps.google.com/?q=..."
                    className="py-3 px-4 block w-full border border-gray-300 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>

                {/* Property Image */}
                <div>
                  <label
                    htmlFor="property-image"
                    className="block mb-2 text-sm text-gray-700 font-medium"
                  >
                    Property Image
                  </label>
                  <input
                    type="file"
                    name="property-image"
                    id="property-image"
                    accept="image/*"
                    className="block w-full text-sm text-gray-600
                            file:me-4 file:py-2 file:px-4
                            file:rounded-lg file:border-0
                            file:text-sm file:font-semibold
                            file:bg-blue-600 file:text-white
                            hover:file:bg-blue-700
                            file:disabled:opacity-50 file:disabled:pointer-events-none
                          focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>

                {/* Posted Date */}
                <div>
                  <label
                    htmlFor="posted-date"
                    className="block mb-2 text-sm text-gray-700 font-medium"
                  >
                    Posted Date
                  </label>
                  <input
                    type="date"
                    name="posted-date"
                    id="posted-date"
                    className="py-3 px-4 block w-full border border-gray-300 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="mt-6 grid">
                <button
                  type="submit"
                  className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg bg-gradient-to-tl from-blue-600 to-violet-600 text-white  focus:outline-none hover:from-violet-600 hover:to-blue-600"
                >
                  Post Property
                </button>
              </div>
              <div className="mt-3 text-center">
                <p className="text-sm text-gray-500">
                  Your property will be reviewed before it goes live.
                </p>
              </div>
            </form>
            {/* End Form */}
          </div>
        </div>
      </div>
      {/* End New Property Form */}
    </>
  );
}

export default NewProperty;
