import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Collapse } from "react-collapse";
import AnimateHeight from "react-animate-height";

const AffiliateFAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(-1);

  // ... (faqs array remains the same)
  const faqs = [
    {
      id: 1,
      question: "How do I join the affiliate program?",
      answer:
        "To join the affiliate program, simply register through our website by filling out the required information. Once your application is approved, you will receive further instructions via email.",
    },
    {
      id: 2,
      question: "What is the commission rate for affiliates?",
      answer:
        "Our commission rate varies depending on the product or service you are promoting. We offer competitive commission rates to ensure our affiliates are rewarded fairly for their efforts.",
    },
    {
      id: 3,
      question: "When and how do I get paid?",
      answer:
        "Commissions are paid on sales basis, with a minimum payout threshold. Payments are made via PayPal or bank transfer, depending on your preferences.",
    },
    {
      id: 4,
      question:
        "Are there any fees associated with joining the affiliate program?",
      answer:
        "There are no fees to join our affiliate program. It is completely free to sign up and participate. However, please note that any expenses related to promoting our products or services are your responsibility.",
    },
    {
      id: 5,
      question: "What promotional materials are provided to affiliates?",
      answer:
        "You can create your own promotional materials, such as banners, ads, and landing pages. However, we do provide a list of recommended resources to help you get started.",
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
            QUESTION YOU MIGHT HAVE ?
          </h1>
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

export default AffiliateFAQSection;
