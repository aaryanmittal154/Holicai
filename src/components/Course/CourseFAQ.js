import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Collapse } from "react-collapse";
import AnimateHeight from "react-animate-height";

const CourseFAQ = () => {
  const [activeIndex, setActiveIndex] = useState(-1);

  // ... (faqs array remains the same)
  const faqs = [
    {
      id: 1,
      question: "What prerequisites do I need to take this course?",
      answer:
        "No prior knowledge of AI or web development is required. We designed the course to cater to beginners as well as experienced developers looking to learn AI-driven web development.",
    },
    {
      id: 2,
      question: "How long does it take to complete the course?",
      answer:
        "The course duration varies depending on your learning pace, but most students complete it within one day.",
    },
    {
      id: 3,
      question: "Is the course content available after completion?",
      answer:
        "Yes, you will have lifetime access to the course content, including any future updates and improvements.",
    },
    {
      id: 4,
      question: "Can I access the course materials offline?",
      answer:
        "No, you will need an internet connection to access the course materials.",
    },
    {
      id: 5,
      question: "What if I get stuck on a particular topic?",
      answer:
        "Our support team is available to assist you with any questions or concerns you may have. You can also contact us at team@holicai.com",
    },
    {
      id: 6,
      question: "Are there any payment plans available?",
      answer:
        "Yes, we offer flexible payment options, including monthly installments. Reach out to us at team@holicai.com to learn more about available payment plans.",
    },
    {
      id: 7,
      question: "Will I receive a certificate upon completion?",
      answer: "No, we do not offer certificates at this time.",
    },
    {
      id: 8,
      question: "What if my question is not listed here?",
      answer: "You can reach out to us at team@holicai.com",
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
          <h2 className="text-5xl font-extrabold text-purple-400">
            Frequently Asked Questions
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

export default CourseFAQ;
