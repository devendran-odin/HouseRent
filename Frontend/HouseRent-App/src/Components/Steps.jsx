import HomeBanner from "../assets/HomeBanner.jpg";
import React from "react";

const Steps = React.forwardRef((props, ref) => {
  return (
    <>
      {/* <!-- Approach --> */}
      <div ref={ref}>
        <div className="bg-gray-800">
          {/* <!-- Approach --> */}
          <div className="max-w-5xl px-4 xl:px-0 py-10 lg:pt-20 lg:pb-20 mx-auto">
            {/* <!-- Title --> */}
            <div className="max-w-3xl mb-10 lg:mb-14">
              <h2 className="text-white font-semibold text-2xl md:text-4xl md:leading-tight">
                Our approach
              </h2>
              <p className="mt-1 text-neutral-400">
                Our strategy is centered around creating a user-friendly
                platform that simplifies the house renting process. We ensure a
                smooth journey from property search to booking confirmation
                through the following steps:
              </p>
            </div>
            {/* <!-- Grid --> */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 lg:items-center">
              <div className="aspect-w-16 aspect-h-9 lg:aspect-none">
                <img
                  className="w-full object-cover rounded-xl"
                  src={HomeBanner}
                  alt="Features Image"
                />
              </div>
              {/* <!-- Timeline --> */}
              <div>
                <div className="mb-4">
                  <h3 className="text-gray-50 text-xs font-medium uppercase">
                    Steps
                  </h3>
                </div>

                {/* Steps 1-6 */}
                {[
                  {
                    step: 1,
                    title: "User Registration",
                    description:
                      "Renters and owners create accounts for personalized access.",
                  },
                  {
                    step: 2,
                    title: "Property Search and Filtering",
                    description:
                      "Users browse and filter rental properties based on preferences.",
                  },
                  {
                    step: 3,
                    title: "Inquiry and Communication",
                    description:
                      "Renters can inquire about properties directly.",
                  },
                  {
                    step: 4,
                    title: "Owner Approval",
                    description: "Owners review and approve or deny requests.",
                  },
                  {
                    step: 5,
                    title: "Booking Confirmation",
                    description:
                      "Renters receive booking confirmations upon approval.",
                  },
                  {
                    step: 6,
                    title: "Feedback and Support",
                    description:
                      "Users provide feedback to help improve our services.",
                  },
                ].map(({ step, title, description }) => (
                  <div key={step} className="flex gap-x-5 ms-1">
                    <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-gray-500">
                      <div className="relative z-10 size-8 flex justify-center items-center">
                        <span className="flex shrink-0 justify-center items-center size-8 border border-gray-500 text-gray-50 font-semibold text-xs uppercase rounded-full">
                          {step}
                        </span>
                      </div>
                    </div>
                    <div className="grow pt-0.5 pb-8 sm:pb-12">
                      <p className="text-sm md:text-base text-neutral-400">
                        <span className="text-white">{title}: </span>
                        {description}
                      </p>
                    </div>
                  </div>
                ))}
                <a
                  className="group inline-flex items-center gap-x-2 py-2 px-3 bg-gradient-to-tl from-blue-600 to-violet-600 font-medium text-sm text-gray-50 rounded-full focus:outline-none"
                  href="#"
                >
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
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    <path
                      className="opacity-0 group-hover:opacity-100 group-focus:opacity-100 group-hover:delay-100 transition"
                      d="M14.05 2a9 9 0 0 1 8 7.94"
                    ></path>
                    <path
                      className="opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition"
                      d="M14.05 6A5 5 0 0 1 18 10"
                    ></path>
                  </svg>
                  Schedule a call
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
});

export default Steps;
