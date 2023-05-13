import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
};

const AffiliateCTA = () => {
  const blinkingAnimation = {
    initial: { backgroundColor: "rgb(255, 255, 102)" },
    animate: {
      backgroundColor: "rgb(255, 204, 51)",
      transition: { yoyo: Infinity, duration: 1 },
    },
  };

  return (
    <motion.section
      className="bg-black py-8 px-4 sm:py-12 sm:px-6 lg:px-8 relative"
      initial="initial"
      animate="animate"
      variants={fadeInUp}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <motion.h2
            className="text-base font-semibold tracking-wide uppercase bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-green-500"
            variants={fadeInUp}
          >
            Affiliate Program 💸
          </motion.h2>
          <motion.p
            className="mt-2 text-3xl leading-9 font-extrabold tracking-tight text-purple-400 sm:text-4xl"
            variants={fadeInUp}
          >
            <span className="text-white"> LETS GROW</span> TOGETHER
          </motion.p>
          <motion.p
            className="mt-4 text-2xl font-bold text-gray-300 mx-auto"
            variants={fadeInUp}
          >
            Become our Affiliate Program today!
          </motion.p>
          <motion.p
            className="mt-2 text-xl text-gray-300 mx-auto"
            variants={fadeInUp}
          >
            Promote our top-notch course & earn up to 50% commission!
          </motion.p>
          <motion.p
            className="mt-2 text-xl text-gray-300 mx-auto"
            variants={fadeInUp}
          >
            Transform your passion into profit - lets thrive together!
          </motion.p>
        </div>
      </div>
    </motion.section>
  );
};

export default AffiliateCTA;
