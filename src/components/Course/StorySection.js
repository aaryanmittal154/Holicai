import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Collapse } from "react-collapse";
import AnimateHeight from "react-animate-height";

const StorySection = () => {
  const [activeIndex, setActiveIndex] = useState(-1);

  // ... (faqs array remains the same)
  const faqs = [
    {
      id: 1,
      question:
        "Coding and design mastery seemed an insurmountable, time-consuming quest. ⏳",
      answer:
        "AI Tools revolutionized the learning experience, making coding and design engaging and seamless. 😃",
    },
    {
      id: 2,
      question:
        "The complexities of design principles and coding nuances felt daunting and never-ending. 🌀",
      answer:
        "With AI Tools, the coder mastered design and coding techniques in record time, achieving a harmonious work-life balance. ⚖️",
    },
    {
      id: 3,
      question:
        "Traditional learning methods left the coder overwhelmed and disheartened. 😔",
      answer:
        "AI Tools offered tailored guidance and support, empowering the coder to surpass their goals and aspirations. 🌟",
    },
  ];

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  const variants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 30 },
  };

  return (
    <section className="bg-black py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-purple-400">
            IS WEB DEVELOPMENT HARD ?
          </h1>
          <h2 className="text-4xl font-extrabold text-white mt-2">
            I suck at designing websites ! <br /> Still, I built this website
            using AI Tools in just{" "}
            <span className="text-purple-400">ONE DAY </span> 🤖
          </h2>
        </div>
        <AnimatePresence initial={false}>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.id}
                className="bg-gray-900 rounded-lg shadow-md p-6 cursor-pointer hover:bg-gray-800 transition-colors duration-200"
                onClick={() => handleClick(index)}
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={variants}
                transition={{
                  duration: 0.3,
                  ease: "easeInOut",
                  delay: index * 0.1,
                }}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-semibold text-purple-400">
                    {faq.question}
                  </h3>
                  <span
                    className={`${
                      activeIndex === index ? "rotate-180" : "rotate-0"
                    } transition-transform duration-300 text-purple-400`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                </div>
                <AnimateHeight
                  duration={300}
                  height={activeIndex === index ? "auto" : 0}
                >
                  <Collapse isOpened={activeIndex === index}>
                    <p className="mt-4 text-gray-300">{faq.answer}</p>
                  </Collapse>
                </AnimateHeight>
              </motion.div>
            ))}
          </div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default StorySection;
