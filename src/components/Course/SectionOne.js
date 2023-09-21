import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
};

const SectionOne = () => {
  const blinkingAnimation = {
    initial: { backgroundColor: "rgb(255, 255, 102)" },
    animate: {
      backgroundColor: "rgb(255, 204, 51)",
      transition: { yoyo: Infinity, duration: 1 },
    },
  };

  return (
    <motion.section
      className="bg-black py-12 px-4 sm:px-6 lg:px-8 relative"
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
            Exclusive Course 🚀
          </motion.h2>
          <motion.p
            className="mt-2 text-4xl leading-10 font-extrabold tracking-tight text-purple-400 sm:text-5xl"
            variants={fadeInUp}
          >
            🤖 Welcome to the Age of AI: Adapt or Perish 🚀
          </motion.p>
          <motion.p
            className="mt-4 text-4xl font-bold text-gray-400 mx-auto"
            variants={fadeInUp}
          >
            AI MIGHT BE coming for YOU !
          </motion.p>
          <motion.p
            className="  text-2xl text-gray-400 mx-auto"
            variants={fadeInUp}
          >
            People throughout the world are losing their jobs to AI.
          </motion.p>
          <motion.p
            className=" text-2xl text-gray-400 mx-auto"
            variants={fadeInUp}
          >
            So, we built a course to help you adapt to the Age of AI.
          </motion.p>
          <motion.div className="mt-8" variants={fadeInUp}>
            <div className="relative group inline-block">
              <button className="bg-purple-600 text-white font-bold text-2xl py-2 px-4 rounded-lg shadow-lg hover:bg-purple-800 transition duration-300">
                <Link href="https://course.holicai.com/">
                  Enroll Now 🎓 in just $10
                </Link>{" "}
              </button>
            </div>
          </motion.div>
        </div>
        <p className="mt-4 text-gray-400 mx-auto">
          Disclaimer: Please note that while we strive to provide helpful
          guidance and resources, we cannot guarantee any specific results or
          financial outcomes. Success ultimately depends on individual efforts,
          diligence, and hard work. Any financial decisions or investments made
          based on information obtained from our services are at your own risk.
        </p>
      </div>
    </motion.section>
  );
};

export default SectionOne;
