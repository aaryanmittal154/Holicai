import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const AffiliateDescription = () => {
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
        <div className="md:w-1/2 md:mr-4">
          <motion.img
            src="/Home/AffiliateDescription.png"
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
        <div className="md:w-1/2">
          <div className="text-justify">
            <motion.h2
              className="text-3xl md:text-4xl font-semibold mb-4 text-purple-500"
              {...fadeIn}
              initial={{ opacity: 0, y: -20 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.2, duration: 1 },
              }}
            >
              Soar to Success: Unleash Your Earnings with Our Elite Web Dev
              Course
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
              Are you ready to skyrocket your income while empowering others to
              hone their skills? By becoming an affiliate marketer for our
              cutting-edge web development course, you will unlock a world of
              limitless earnings. Our masterfully designed program covers both
              front-end and back-end development, enabling learners to create
              vibrant, interactive websites from scratch. As you champion our
              comprehensive course, you will be fueling the dreams of aspiring
              web developers and earning handsome rewards for every successful
              referral.
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
              Join our thriving community of affiliates and play a pivotal role
              in the growth of the web development industry, as you watch your
              own profits soar. Immerse yourself in this exceptional opportunity
              to not only enhance your earnings but also contribute to the
              success of others. With your influence and our top-notch course,
              together we can create a brighter future for web development
              professionals and transform the digital landscape.
            </motion.p>
          </div>
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
                <Link legacyBehavior href="/affiliate">
                  <a className="bg-purple-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg text-2xl">
                    Explore Affiliate Program
                  </a>
                </Link>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AffiliateDescription;
