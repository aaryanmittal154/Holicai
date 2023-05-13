import React from "react";
import {
  FaGlobe,
  FaMoneyBillWave,
  FaIndustry,
  FaGraduationCap,
} from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const benefits = [
  {
    title: "Designed for Global Demand",
    icon: <FaGlobe />,
    description:
      "This course is crafted to cater to the ever-growing global market, preparing you to excel in diverse environments and industries.",
  },
  {
    title: "To Help You Stay Ahead of the Curve",
    icon: <FaMoneyBillWave />,
    description:
      "Believe it or not, AI is the future. This course will equip you with the necessary skills to stay ahead of the curve and thrive in the future.",
  },
  {
    title: "Frontend Development",
    icon: <FaIndustry />,
    description:
      "Our curriculum is tailored to help you build frontend websites for various industries.",
  },
  {
    title: "Comprehensive Learning Experience",
    icon: <FaGraduationCap />,
    description:
      "Immerse yourself in an all-encompassing learning journey that combines theoretical knowledge with practical application.",
  },
];

const BenefitCard = ({ title, icon, description }) => (
  <motion.div
    className="bg-gray-900 p-6 rounded-xl shadow-2xl flex flex-col items-center w-85 h-80" // Add fixed width and height here
    whileHover={{ scale: 1.1 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <motion.div
      className="text-4xl text-white mb-4"
      animate={{ rotate: 360 }}
      transition={{ ease: "linear", duration: 5, repeat: Infinity }}
    >
      {icon}
    </motion.div>
    <h2 className="text-2xl font-bold text-purple-400 mb-4">{title}</h2>
    <p className="text-white font-semibold text-justify text-lg leading-relaxed">
      {description}
    </p>
  </motion.div>
);

export default function WhyCourseWasBuilt() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.3 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

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

  return (
    <>
      <div className="bg-black flex flex-col items-center justify-center py-16">
        <h1 className="text-5xl font-bold text-purple-400 mb-6 animate-pulse">
          Why This Course Was Built
        </h1>
        <motion.div
          ref={contentRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl w-full"
          variants={containerVariants}
          initial="hidden"
          animate={animation}
        >
          {benefits.map(({ title, icon, description }) => (
            <motion.div key={title} variants={cardVariants}>
              <BenefitCard
                title={title}
                icon={icon}
                description={description}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
}
