import React from "react";

export default function OurObjective() {
  const objective = [
    {
      desc: "To ensure that indigenous cows at our Gaushalas receive a proper nutritious diet, medical facilities, and a spacious and healthy environment to produce high-quality milk.",
    },
 
    {
      desc: "To implement natural feeding methods and ensure access to clean water, resulting in superior milk quality from cows in our Gaushalas.",
    },
    {
      desc: "To encourage the production of high-quality indigenous cow milk by offering consistent veterinary care and optimal nutrition, fostering health and longevity in the cows.",
    },
    {
      desc: "To create an ethical and transparent process for sourcing and delivering milk from indigenous cows, ensuring it remains fresh, nutritious, and beneficial for consumers.",
    },
  ];

  return (
    <div className="container mx-auto px-5 md:px-12 xl:px-32 py-5 md:py-10 lg:py-16">
      <div className="flex flex-col lg:flex-row lg:gap-10">
        {/* Image Section */}
        <div className="w-full lg:w-[40%] relative rounded-lg overflow-hidden shadow-lg">
          <img
            src="https://i.pinimg.com/736x/e2/66/56/e266561409af0aea5f5db681e63e3933.jpg"
            alt="Gaushala"
            className="w-full h-full object-cover object-center rounded-lg shadow-md"
          />
          <div className="absolute inset-0 bg-[#1f801849] blur-2xl -z-10"></div>
        </div>

        {/* Objectives Section */}
        <div className="w-full lg:w-[60%] mt-6 lg:mt-0">
          <h6 className="font-semibold text-2xl md:text-3xl mb-6 text-center lg:text-left">
            Our Objectives
          </h6>
          <ul className="space-y-4">
            {objective.map((elm, ind) => (
              <li key={ind} className="flex items-start gap-x-4 text-lg md:text-xl text-gray-700">
                <img
                  src="/images/check-mark.webp"
                  alt="Check"
                  className="w-6 h-6 lg:mt-4"
                />
                <p>{elm.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
