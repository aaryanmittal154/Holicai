import React from "react";

const WhatIsCourse = () => {
  return (
    <div
      className="bg-fixed bg-center bg-cover py-10 sm:py-16 px-4 sm:px-8 text-white min-h-screen flex flex-col justify-center"
      style={{
        backgroundImage: "url('/Course/WhatIsCourse.jpeg')",
      }}
    >
      <div className="bg-black bg-opacity-60 p-4 sm:p-10 rounded-xl">
        <h2 className="text-3xl sm:text-5xl font-bold mb-6 text-center">
          What is <span className="text-purple-600">THE</span> course that
          everyone is talking about?
        </h2>
        <h1 className="text-5xl sm:text-8xl font-extrabold mb-6 sm:mb-10 text-center leading-tight">
          Become a next GEN frontend web developer, freelancer, entrepreneur{" "}
          <br className="hidden sm:block" />{" "}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 mb-12">
          <div className="flex flex-col items-center">
            <span className="bg-purple-600 p-3 rounded-full text-3xl font-bold mb-4 animate-pulse">
              FAST
            </span>
            <p className="font-bold text-center text-3xl">
              Takes less than a day <br /> TO LEARN
            </p>
          </div>
          <div className="flex flex-col items-center">
            <span className="bg-purple-600 p-3 rounded-full text-3xl font-bold mb-4 animate-pulse">
              EASY
            </span>
            <p className="font-bold text-center text-3xl">
              Leverage AI to <br /> CREATE frontend WEBSITES
            </p>
          </div>
          <div className="flex flex-col items-center">
            <span className="bg-purple-600 p-3 rounded-full text-3xl font-bold mb-4 animate-pulse">
              CHEAP
            </span>
            <p className="font-bold text-center text-3xl">
              It is only <br /> $200
            </p>
          </div>
        </div>
        <div className="text-center">
          <p className="text-xl sm:text-2xl mb-6">
            The course does not teach conventional coding. We teach the required
            frontend-basics and then help you create phenomenal frontend
            websites using AI tools.
          </p>
          <p className="text-4xl text-purple-500 font-bold mb-6">
            We teach everything, from learning frontend web development to
            making money from it!
          </p>
          <p className=" text-red-500 font-bold mb-6 text-4xl">
            FYI, AI Tools were used to Build this website
          </p>
          <div className="relative group inline-block">
            <button className="bg-purple-600 text-white font-bold text-2xl py-2 px-4 rounded-lg shadow-lg hover:bg-purple-800 transition duration-300">
              Enroll Now 🎓 in just $200
            </button>
            <span className="hidden absolute bottom-full left-1/2 transform -translate-x-1/2 translate-y-2 px-6 py-4 text-sm text-white bg-gray-700 rounded shadow-lg group-hover:block">
              This button currently does not connect to any link as the course
              is under process and has not been launched yet.
            </span>
          </div>
          <p className="mt-4 text-xl text-gray-400 mx-auto">
            Disclaimer: Please note that while we strive to provide helpful
            guidance and resources, we cannot guarantee any specific results or
            financial outcomes. Success ultimately depends on individual
            efforts, diligence, and hard work. Any financial decisions or
            investments made based on information obtained from our services are
            at your own risk.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhatIsCourse;
