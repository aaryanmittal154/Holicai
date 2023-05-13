import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Parallax } from "react-parallax";
import { FaBusinessTime, FaCode, FaLaptopCode } from "react-icons/fa";

const AffiliateSteps = () => {
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
      bgImage="/Affiliate/AffiliateSteps.jpeg"
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
          <h2 className="text-5xl font-extrabold text-purple-600 mb-12">
            HOW IT WORKS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <motion.div
              className="bg-white p-8 rounded-lg shadow-md"
              variants={item}
            >
              <FaBusinessTime className="text-4xl text-indigo-600 mb-4 mx-auto" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">APPLY</h3>
              <p className="text-gray-600 text-justify font-bold">
                Fill out the application form below to join our affiliate
                program. We will review your application and respond within 24-48
                hours. Upon approval, you will receive a confirmation email.
              </p>
            </motion.div>
            <motion.div
              className="bg-white p-8 rounded-lg shadow-md"
              variants={item}
            >
              <FaCode className="text-4xl text-indigo-600 mb-4 mx-auto" />
              <h3 className="text-2xl font-bold  text-gray-900 mb-4">REVIEW</h3>
              <p className="text-gray-600 text-justify font-bold">
                Once approved, you will receive an email with all the details
                about our affiliate program. Take your time to review the
                information and decide whether to join. If you are ready to move
                forward, simply reply to the email.
              </p>
            </motion.div>
            <motion.div
              className="bg-white p-8 rounded-lg shadow-md"
              variants={item}
            >
              <FaLaptopCode className="text-4xl text-indigo-600 mb-4 mx-auto" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">EARN</h3>
              <p className="text-gray-600 text-justify font-bold">
                Once you have joined the program, you will receive a unique
                referral. You will earn up to 40% of the total amount of the
                course purchased by your referrals, helping you earn passive.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </Parallax>
  );
};

export default AffiliateSteps;
