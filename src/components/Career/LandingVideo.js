import React from "react";
import { motion } from "framer-motion";

const LandingVideo = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: (index) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: index * 0.2 },
    }),
  };

  return (
    <section
      className="relative text-white overflow-hidden"
      style={{ minHeight: "calc(94vh - 6rem)" }}
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 min-w-full min-h-full object-cover"
        src="/Career/LandingVideo.mp4"
        type="video/mp4"
      ></video>
      <div className="absolute inset-0 "></div>
      <div className="container mx-auto px-6 py-24 md:py-40 relative">
        {/* Removed titleText rendering */}
      </div>
      {/* Add the scroll down icon */}
      <div className="absolute bottom-0 left-0 w-full flex justify-center pb-8"></div>
    </section>
  );
};

export default LandingVideo;
