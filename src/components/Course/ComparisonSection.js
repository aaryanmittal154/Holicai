import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ComparisonSection = () => {
  return (
    <section>
      <div className="bg-black text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-purple-400 mb-6 animate-pulse text-center">
            Why is Frontend Software Better?
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {comparisonItems.map((item, index) => (
              <AnimatedCard key={index} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const AnimatedCard = ({ item, index }) => {
  const animation = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  React.useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        y: 0,
        transition: { duration: 1, delay: index * 0.25 },
      });
    }
  }, [inView, animation, index]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100, scale: 1 }}
      animate={animation}
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="bg-gray-900 text-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow duration-300"
    >
      <div className="flex items-center mb-4">
        <div className="p-2 rounded-full bg-blue-500 text-white">
          {item.icon}
        </div>
        <h3 className="ml-4 text-xl text-purple-400 font-semibold">
          {item.title}
        </h3>
      </div>
      <p className="text-white font-semibold text-justify text-lg leading-relaxed">
        {item.description}
      </p>
    </motion.div>
  );
};

const comparisonItems = [
  {
    title: "Frontend Software vs Stocks",
    icon: (
      <span role="img" aria-label="Stock market">
        💹
      </span>
    ),
    description:
      "Frontend software development offers a more stable income compared to stocks. Unlike stocks, which are subject to market volatility, a career in frontend software development provides consistent work and income.",
  },
  {
    title: "Frontend Software vs Dropshipping",
    icon: (
      <span role="img" aria-label="Dropshipping">
        📦
      </span>
    ),
    description:
      "Frontend software development is not reliant on third-party suppliers or shipping logistics. By creating and maintaining software, you have full control over your product, leading to higher profit margins and greater flexibility.",
  },
  {
    title: "Frontend Software vs Airbnb Renting",
    icon: (
      <span role="img" aria-label="Airbnb house">
        🏠
      </span>
    ),
    description:
      "Unlike Airbnb renting, which requires property ownership and management, frontend software development has low upfront costs and minimal overhead. You can work remotely from anywhere, and your income potential is only limited by your skills and effort.",
  },
  {
    title: "Frontend Software vs Selling Digital Products",
    icon: (
      <span role="img" aria-label="Digital products">
        🛍️
      </span>
    ),
    description:
      "Frontend software development offers the opportunity for continuous growth and improvement. With ever-evolving technology and tools, you can stay at the cutting edge of the industry, making it easier to create and sell high-quality digital products.",
  },
];

export default ComparisonSection;
