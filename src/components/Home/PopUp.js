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
              <h2 className="text-3xl font-bold text-white tracking-wide mb-6 text-center">
                Holic AI Marketing Team
              </h2>
              <p className="text-gray-100 font-mono tracking-wider text-center mb-4">
                🌟 Welcome, Marketers, to HolicAI: The Ultimate Game Changer! 🌟
              </p>
              <p className="text-gray-100 font-mono tracking-wider text-center mb-4">
                At this stage, HolicAI is open only for
                marketers, ready to redefine the marketing landscape by
                promoting our groundbreaking course, which launches in just ONE
                WEEK! ⏰🎉
              </p>
              <p className="text-gray-100 font-mono tracking-wider text-center mb-6"></p>
              <div className="flex flex-col items-center justify-center">
                <button
                  className="bg-white text-purple-500 py-2 px-4 rounded-full hover:bg-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 transition-all duration-200 flex items-center mb-4"
                  onClick={() => setShow(false)}
                >
                  ⏳ Dont wait - Exclusively for marketers like you!
                </button>
                <div className="flex items-center justify-center">
                  <p className="text-gray-100 text-xs text-capital">
                    COMPLETELY BUILT WITH THE HELP OF AI TOOLS!
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
