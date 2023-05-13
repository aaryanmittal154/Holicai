import React from "react";
import { Slide } from "react-awesome-reveal";

const OurValues = () => {
  return (
    <div className="bg-gradient-to-r from-black via-gray-900 to-black py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <Slide direction="up" triggerOnce>
          <h2 className="text-4xl font-extrabold text-center text-white mb-10">
            Our Values
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
    <div className="w-full sm:w-auto p-4 bg-gray-800 rounded-lg shadow-md flex flex-col items-center justify-center transform hover:scale-105 transition-transform duration-200 ease-in-out text-center">
      <h3 className="text-2xl font-semibold text-white mb-2">{value.title}</h3>
      <p className="text-gray-300">{value.description}</p>
    </div>
  );
};

const valuesInfo = [
  {
    title: "Integrity",
    description:
      "At Holic AI, we're committed to conducting our business with honesty, transparency, and respect. We believe in ethical practices and holding ourselves accountable to the highest standards.",
  },
  {
    title: "Innovation",
    description:
      "We strive for continuous improvement and encourage creativity in solving complex problems. Our team members are empowered to think outside the box and challenge the status quo.",
  },
  {
    title: "Collaboration",
    description:
      "We believe in the power of teamwork and foster a culture of open communication and support. Our collaborative environment allows us to learn from one another and achieve great results together.",
  },
  {
    title: "Inclusivity",
    description:
      "We embrace diversity and inclusion, creating a welcoming environment for people from all backgrounds. Our commitment to inclusivity allows us to innovate and grow as a company.",
  },
];

export default OurValues;
