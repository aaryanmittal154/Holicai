import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Parallax } from "react-parallax";
import { FaBusinessTime, FaCode, FaLaptopCode } from "react-icons/fa";

const WaysToEarn = () => {
  const animation = useAnimation();
  const [contentRef, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  React.useEffect(() => {
    if (inView) {
      animation.start("visible");
    }
  }, [animation, inView]);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <Parallax
      bgImage="/Course/money.jpeg"
      strength={500}
      bgClassName="bg-cover bg-fixed"
      className="flex flex-col items-center justify-center text-white"
    >
      <div className="w-full h-full absolute inset-0 bg-gradient-to-r" />
      <motion.section
        ref={contentRef}
        initial="hidden"
        animate={animation}
        variants={container}
        className="relative z-10 py-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl font-extrabold text-purple-500 mb-12">
            Ways to Make Money After Taking Our Course
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <motion.div
              className="bg-white p-8 rounded-lg shadow-md"
              variants={item}
            >
              <FaBusinessTime className="text-4xl text-indigo-600 mb-4 mx-auto" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                IT Consultation Firm
              </h3>
              <p className="text-gray-600">
                Use the knowledge you gain from our course to establish your own
                IT consultation firm, helping businesses with web development,
                and digital strategies.
              </p>
            </motion.div>
            <motion.div
              className="bg-white p-8 rounded-lg shadow-md"
              variants={item}
            >
              <FaCode className="text-4xl text-indigo-600 mb-4 mx-auto" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Work for a Software Company
              </h3>
              <p className="text-gray-600">
                Join a software company and contribute to their projects with
                your newfound skills in web development. Become an invaluable
                asset in the fast-paced tech industry as skills matter the most!
              </p>
            </motion.div>
            <motion.div
              className="bg-white p-8 rounded-lg shadow-md"
              variants={item}
            >
              <FaLaptopCode className="text-4xl text-indigo-600 mb-4 mx-auto" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Freelance
              </h3>
              <p className="text-gray-600">
                Work as a freelancer, taking on frontend web development
                projects from clients around the world. Set your own schedule
                and workload while building a diverse portfolio.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </Parallax>
  );
};

export default WaysToEarn;
