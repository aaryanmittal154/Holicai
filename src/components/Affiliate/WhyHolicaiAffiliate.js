import React from "react";
import { Slide } from "react-awesome-reveal";

const WhyHolicaiAffiliate = () => {
  return (
    <div className="bg-black py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <Slide direction="up" triggerOnce>
          <h2 className="text-6xl font-bold text-center text-purple-400 mb-10">
            Holic AI Affiliate Program ?
          </h2>
        </Slide>
        <div className="flex flex-wrap justify-center items-center gap-8">
          {valuesInfo.map((value, index) => (
            <Slide direction="up" triggerOnce key={index} delay={index * 100}>
              <ValueCard value={value} />
            </Slide>
          ))}
        </div>
      </div>
    </div>
  );
};

const ValueCard = ({ value }) => {
  return (
    <div className="w-80 sm:w-auto p-4 bg-gray-900 rounded-lg shadow-md flex flex-col items-justify justify-center transform hover:scale-105 transition-transform duration-200 ease-in-out text-center">
      <h3 className="text-3xl font-semibold text-purple-400 mb-2">
        {value.title}
      </h3>
      <p className="text-white font-semibold text-center text-lg leading-relaxed">
        {value.description}
      </p>
    </div>
  );
};

const valuesInfo = [
  {
    title: "Top-Tier Commissions",
    description:
      "Our unbeatable commission structure offers the highest payouts in the industry, ensuring you're rewarded handsomely for your efforts",
  },
  {
    title: "Fast & Secure Payments",
    description:
      "Enjoy hassle-free payments through reliable and secure payment options, ensuring you receive your hard-earned commissions on time",
  },
  {
    title: "Advanced Tracking Technology",
    description:
      "Our modern tracking system ensures accurate, real-time reporting of your referrals , providing full transparency & maximized earnings.",
  },
  {
    title: "Dedicated Affiliate Support",
    description:
      "Our experienced affiliate managers provide personalized support & guidance, ensuring your success with the Holic AI Affiliate Program.",
  },
];

export default WhyHolicaiAffiliate;
