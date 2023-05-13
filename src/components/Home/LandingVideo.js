import React from "react";
import { motion } from "framer-motion";

const LandingVideo = () => {
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
        src="/Home/LandingVideo.mp4"
        type="video/mp4"
      ></video>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-50"></div>
      <div className="container mx-auto px-6 py-16 md:py-32 relative">
        <div className="md:w-2/3">
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold mb-4"
            {...fadeIn}
          >
            Master AI-Driven Web Development in ONE DAY
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
          <motion.a
            href="/course"
            className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-md hover:bg-blue-600 hover:text-white"
            {...fadeIn}
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { delay: 1, duration: 1 },
            }}
          >
            Explore Courses
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default LandingVideo;
