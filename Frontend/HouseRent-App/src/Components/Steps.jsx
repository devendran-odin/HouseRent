import HomeBanner from "../assets/HomeBanner.jpg";
import React from "react";
import { Link } from "react-router-dom";

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
                      "Renters can inquire about properties through email.",
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
                <Link
                  className="group inline-flex items-center gap-x-2 py-2 px-3 bg-gradient-to-tl from-blue-600 to-violet-600 font-medium text-sm text-gray-50 rounded-full focus:outline-none"
                  to="/properties"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061A1.125 1.125 0 0 1 3 16.811V8.69ZM12.75 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061a1.125 1.125 0 0 1-1.683-.977V8.69Z"
                    />
                  </svg>
                  Get Started Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
});

export default Steps;
