import React from "react";

const PerksAndBenefits = () => {
  return (
    <div className="bg-gradient-to-r from-black via-gray-900 to-black py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center text-white mb-10">
          Perks & Benefits
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* You can replace the content inside each 'div' with your own */}
          <div className="text-center">
            <i className="fas fa-laptop text-5xl text-holic-blue mb-4"></i>
            <h3 className="text-2xl font-semibold text-white mb-4">
              Remote Work
            </h3>
            <p className="text-gray-300">
              We offer flexible remote work options to help you maintain a
              healthy work-life balance.
            </p>
          </div>

          <div className="text-center">
            <i className="fas fa-plane text-5xl text-holic-blue mb-4"></i>
            <h3 className="text-2xl font-semibold text-white mb-4">
              Travel Opportunities
            </h3>
            <p className="text-gray-300">
              Expand your horizons with travel opportunities for conferences,
              workshops, and team building.
            </p>
          </div>

          <div className="text-center">
            <i className="fas fa-graduation-cap text-5xl text-holic-blue mb-4"></i>
            <h3 className="text-2xl font-semibold text-white mb-4">
              Learning & Development
            </h3>
            <p className="text-gray-300">
              We provide resources and support for ongoing learning to help you
              grow professionally.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerksAndBenefits;
