import React from "react";
import { FaLightbulb, FaClock, FaTrophy, FaRocket } from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const benefits = [
  {
    title: "Effortless Learning",
    icon: <FaLightbulb />,
    description:
      "AI tools demystify complex concepts for a smooth learning experience, making even the most difficult subjects enjoyable and easy to grasp. 🧩",
  },
  {
    title: "Time Efficiency",
    icon: <FaClock />,
    description:
      "Optimize your time by learning faster and more effectively with our tailored curriculum, giving you the freedom to explore other passions! 🕰️",
  },
  {
    title: "Exceptional Results",
    icon: <FaTrophy />,
    description:
      "Leverage AI's expertise to create remarkable web projects, exceed expectations, and impress clients with outstanding outcomes. 🏆",
  },
  {
    title: "Competitive Edge",
    icon: <FaRocket />,
    description:
      "Fuel industry growth and innovation for a sustainable future by acquiring the latest skills and knowledge to stay ahead in the competitive landscape. 🚀",
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

export default function WhyCourseSection() {
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
        <motion.h1
          className="text-5xl font-bold text-purple-400 mb-6"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        >
          BENEFITS
        </motion.h1>
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
