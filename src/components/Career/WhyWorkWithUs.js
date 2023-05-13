import React from "react";
import Image from "next/image";

const WhyWorkWithUs = () => {
  return (
    <section className="bg-gradient-to-r from-black via-gray-900 to-black py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center text-white mb-10">
          Why Work With Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cardInfo.map((card, index) => (
            <BenefitsCard key={index} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
};

const BenefitsCard = ({ card }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-md flex flex-col items-center transform hover:scale-105 transition-transform duration-200 ease-in-out">
      <div className="w-full h-48 mb-4 rounded-lg overflow-hidden">
        <Image
          src={card.image}
          alt={card.title}
          layout="responsive"
          objectFit="cover"
          objectPosition="center"
          width={320}
          height={192}
        />
      </div>
      <h3 className="text-2xl font-semibold text-white mb-4">{card.title}</h3>
      <p className="text-gray-300">{card.description}</p>
    </div>
  );
};

const cardInfo = [
  {
    title: "Innovative Projects",
    image: "/Career/WhyWorkWithUs/innovative.jpeg",
    description:
      "Join Holic AI to work on groundbreaking AI technologies that drive real-world impact. Be part of a team shaping the future of the industry.",
  },
  {
    title: "Full Remote Work",
    image: "/Career/WhyWorkWithUs/remote.jpeg",
    description:
      "Embrace flexibility with remote work options for all employees, regardless of location. We are dedicated to fostering a healthy work-life balance for our team.",
  },
  {
    title: "Global Opportunities",
    image: "/Career/WhyWorkWithUs/global.jpeg",
    description:
      "Apply from anywhere and join our diverse, inclusive team. No prior experience? No problem – we are committed to helping you develop your skills.",
  },
  {
    title: "Competitive Compensation",
    image: "/Career/WhyWorkWithUs/competitve_compensation.jpeg",
    description:
      "Enjoy industry-leading salaries, paid holidays, and comprehensive benefits, reflecting our commitment to rewarding your hard work and dedication.",
  },
];

export default WhyWorkWithUs;
