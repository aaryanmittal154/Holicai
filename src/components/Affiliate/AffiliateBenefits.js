import React from "react";
import {
  FaMoneyBillWave,
  FaLaptop,
  FaDollarSign,
  FaBoxOpen,
} from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const benefits = [
  {
    title: "Passive Income",
    icon: <FaMoneyBillWave />,
    description:
      "Earn passive income by promoting products and services to your audience. Set up your affiliate links and receive commissions on every sale made through those links.",
  },
  {
    title: "Full Flexibility",
    icon: <FaLaptop />,
    description:
      "Experience the flexibility of affiliate marketing, allowing you to work from anywhere, anytime, and choose which products and services you want to promote. You get to decide EVERYTHING!",
  },
  {
    title: "No Start-up Costs",
    icon: <FaDollarSign />,
    description:
      "With no need for inventory or shipping management, affiliate marketing provides a low-cost business opportunity. Start your own venture without investing a large sum upfront.",
  },
  {
    title: "No Inventory",
    icon: <FaBoxOpen />,
    description:
      "Eliminate the need for inventory management or shipping products to customers. Focus on promoting products and services, and earn commissions.",
  },
];

// Helper function to disable animations on small screens
const shouldDisableAnimations = () => {
  if (typeof window === "undefined") {
    return false;
  }
  return window.innerWidth < 640;
};

const BenefitCard = ({ title, icon, description }) => (
  <motion.div
    className="bg-gray-900 p-6 rounded-xl shadow-2xl flex flex-col items-center w-full h-auto"
    whileHover={{ scale: shouldDisableAnimations() ? 1 : 1.1 }}
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
    <p className="text-white font-semibold text-justify text-base md:text-lg leading-relaxed">
      {description}
    </p>
  </motion.div>
);

export default function AffiliateBenefits() {
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
          className="text-4xl md:text-5xl text-center font-bold text-purple-400 mb-6"
          animate={{ scale: shouldDisableAnimations() ? 1 : [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        >
          WHY BE AN AFFILIATE?
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
