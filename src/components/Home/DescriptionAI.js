import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const DescriptionAI = () => {
  const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 1 } },
  };

  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsSmallScreen(window.innerWidth <= 768);
      const handleResize = () => {
        setIsSmallScreen(window.innerWidth <= 768);
      };
      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return (
    <section className="mx-auto min-h-[60vh] px-6 py-16 md:py-32 bg-black flex items-center">
      <div className="md:flex md:items-center w-full max-w-7xl mx-auto">
        <div className="md:w-1/2">
          <motion.h2
            className="text-3xl md:text-4xl font-semibold mb-4 text-white"
            {...fadeIn}
            initial={{ opacity: 0, y: -20 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { delay: 0.2, duration: 1 },
            }}
          >
            Become a SuperFast Web Developer using AI Tools.
          </motion.h2>
          <motion.p
            className="text-gray-300 text-lg mb-8"
            {...fadeIn}
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { delay: 0.4, duration: 1 },
            }}
          >
            Holic AI provides next-generation learning experiences by
            integrating cutting-edge AI technology. With a super fast course, you
            will master web development faster than ever regardless of your
            background.
          </motion.p>
          <motion.p
            className="text-gray-300 text-lg mb-8"
            {...fadeIn}
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { delay: 0.4, duration: 1 },
            }}
          >
            This is the future of web development. Are you ready to embrace it?
          </motion.p>
          {isSmallScreen && (
            <motion.div
              {...fadeIn}
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.4, duration: 1 },
              }}
            >
              <div className="mt-8 flex justify-center">
                <Link legacyBehavior href="/course">
                  <a className="bg-purple-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg text-2xl">
                    Explore The Course
                  </a>
                </Link>
              </div>
            </motion.div>
          )}
        </div>
        <div className="md:w-1/2">
          <motion.img
            src="/Home/DescriptionAI.jpg"
            alt="AI-Powered Learning"
            className="w-full h-auto mx-auto"
            {...fadeIn}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: 1,
              scale: 1,
              transition: { delay: 0.6, duration: 1 },
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default DescriptionAI;
