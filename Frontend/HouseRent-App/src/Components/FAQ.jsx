import { useState } from "react";

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(0); // Default to first item open

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How do I contact a property owner?",
      answer:
        "Once you find a property you're interested in, click on the request to book button. You'll get an email from the property owner or manager.",
    },
    {
      question: "How do I update or remove a property listing?",
      answer:
        "As an Owner, you can log into your account, navigate to your listings, and click 'Edit' to update information or 'Delete' to remove a property from the listings.",
    },
    {
      question: "How is my personal data protected?",
      answer:
        "We take data privacy seriously. Your information is securely stored and protected using industry-standard encryption. We do not share your data with third parties without your consent.",
    },
    {
      question:
        "Is the owner required to be verified before posting a property?",
      answer:
        "Yes, owners must be verified before posting any properties to ensure the legitimacy of listings and maintain a secure platform for renters.",
    },
    {
      question: "Who do I contact for technical support?",
      answer:
        "If you experience technical issues or have questions about how to use the platform, please visit our 'Contact Us' page or reach out to our support team via email or live chat.",
    },
  ];

  return (
    <>
      {/* FAQ Section */}
      <div className="max-w-[85rem] mt-4 px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="grid md:grid-cols-5 gap-10">
          {/* FAQ Header */}
          <div className="md:col-span-2">
            <div className="max-w-xs">
              <h2 className="text-2xl font-bold md:text-4xl md:leading-tight">
                Frequently
                <br />
                asked questions
              </h2>
              <p className="mt-1 hidden md:block text-gray-600">
                Answers to the most frequently asked questions.
              </p>
            </div>
          </div>
          {/* FAQ Content */}
          <div className="md:col-span-3">
            {/* Accordion */}
            <div className="divide-y divide-gray-200">
              {faqs.map((faq, index) => (
                <div className="py-3" key={index}>
                  <button
                    className="flex items-center justify-between w-full text-start text-gray-800 font-semibold md:text-lg transition hover:text-gray-500 focus:outline-none"
                    onClick={() => toggleAccordion(index)}
                  >
                    {faq.question}
                    <svg
                      className={`size-5 text-gray-600 transition-transform ${
                        activeIndex === index ? "rotate-180" : ""
                      }`}
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
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </button>
                  <div
                    className={`mt-3 text-gray-600 overflow-hidden transition-all duration-300 ${
                      activeIndex === index ? "max-h-[100px]" : "max-h-0"
                    }`}
                    style={{
                      maxHeight: activeIndex === index ? "100px" : "0",
                    }}
                  >
                    <p>{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
            {/* End Accordion */}
          </div>
          {/* End FAQ Content */}
        </div>
      </div>
    </>
  );
}

export default FAQ;
