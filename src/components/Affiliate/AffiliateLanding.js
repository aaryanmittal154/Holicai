import React from "react";
import { motion } from "framer-motion";

const AffiliateLanding = () => {
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
      style={{ minHeight: "calc(84vh - 6rem)" }}
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 min-w-full min-h-full object-cover"
        src="/Affiliate/AffiliateLanding.mp4"
        type="video/mp4"
      ></video>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-10"></div>
      <div className="absolute inset-0 flex items-center justify-center px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center">
          EARN UPTO <span className="text-purple-500"> $75 </span> WITH EACH
          SALE!
        </h1>
      </div>
    </section>
  );
};

export default AffiliateLanding;
