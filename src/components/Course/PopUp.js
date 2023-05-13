import React, { useState } from "react";
import Image from "next/image";

const PopUp = () => {
  const [show, setShow] = useState(true);

  return (
    <>
      {show && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="relative z-10 p-6 rounded-lg flex flex-col items-center w-full sm:w-4/5">
            <Image
              src="/logo_holicai.ico"
              alt="Logo"
              width={64}
              height={64}
              className="h-16 w-auto absolute -top-3"
            />
            <button
              className="absolute top-2 right-2 text-white text-lg"
              onClick={() => setShow(false)}
            >
              X
            </button>
            <div className="bg-gradient-to-br from-purple-700 via-purple-900 to-purple-700 p-6 rounded-lg shadow-md">
              <h2 className="text-5xl font-bold text-white tracking-wide mb-6 text-center">
                AI era is coming ? Are you prepared ?
              </h2>
              <p className="text-gray-100 font-mono tracking-wider text-center mb-4">
                <span className="text-red-500 font-bold">
                  Course button will not work.
                </span>{" "}
                The course is set to launch in a week. Website currently for
                marketers.
              </p>{" "}
              <p className="text-gray-100 font-mono tracking-wider text-center mb-4">
                We did not design this page to be convincing. We made it
                informative. We want you to know the truth.
              </p>{" "}
              <p className="text-gray-100 font-mono tracking-wider text-center mb-4">
                We do not believe in learning conventional coding. We teach how
                to use AI to get your coding work done.
                {/* This the work that the
                next generation will be doing. We are not talking about the
                distant future. We are talking about the next 5 years. */}
              </p>
              <p className="text-gray-100 font-mono tracking-wider text-center mb-6"></p>
              <div className="flex flex-col items-center justify-center">
                <button
                  className="bg-white text-purple-500 py-2 px-4 rounded-full hover:bg-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 transition-all duration-200 flex items-center mb-4"
                  onClick={() => setShow(false)}
                >
                  ⏳ Dont wait - Join us now!
                </button>
                <div className="flex items-center justify-center">
                  <p className="text-gray-100 text-xs">
                    COMPLETELY BUILT WITH THE HELP OF AI TOOLS
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PopUp;
