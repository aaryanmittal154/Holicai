import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const LastSection = () => {
  const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 1 } },
  };

  return (
    <section
      className="relative text-white overflow-hidden"
      style={{ minHeight: "calc(82vh - 6rem)" }}
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 min-w-full min-h-full object-cover"
        src="/Course/LastSection.mp4"
        type="video/mp4"
      ></video>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-50"></div>
      <div className="container mx-auto px-6 py-16 md:py-32 relative">
        <div className="md:w-2/3">
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold mb-4"
            {...fadeIn}
          >
            Unlock Your Potential
          </motion.h1>
          <motion.p
            className="text-md md:text-lg mb-8"
            {...fadeIn}
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { delay: 0.5, duration: 1 },
            }}
          >
            Unleash the future of web design and development with AI. Join Holic
            AI today.
          </motion.p>
          <motion.div className="mt-8">
            <div className="relative group inline-block">
              <button className="bg-purple-600 text-white font-bold text-2xl py-2 px-4 rounded-lg shadow-lg hover:bg-purple-800 transition duration-300">
                <Link href="https://course.holicai.com/">
                  Enroll Now 🎓 in just $200
                </Link>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LastSection;
