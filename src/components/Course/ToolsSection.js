import React from "react";
import { useInView } from "react-intersection-observer";

const Card = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={`bg-gray-900 rounded-lg p-4 transition-all duration-300 ${
        inView ? "transform scale-100" : "transform scale-90"
      } hover:scale-100 hover:bg-gray-700`}
    >
      {children}
    </div>
  );
};

const ToolsSection = () => {
  return (
    <div className="bg-black p-4 min-h-screen">
      <div className="py-12 px-4 sm:px-6 lg:px-8 p-8 rounded-lg flex flex-col items-center justify-center text-center mt-2">
        <h2 className="text-6xl font-bold mb-8 text-purple-400 text-center">
          Discover the Future of Web Development
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-1 gap-8 ">
          <Card>
            <h1 className="text-4xl font-bold mb-4 text-purple-400">
              🚀 Empower Your Web Development with AI 🤖
            </h1>
            <p className="text-white font-semibold text-justify text-lg leading-relaxed text-xl">
              Embrace the future of web development by harnessing the power of{" "}
              <b>Artificial Intelligence (AI)</b> to create innovative and
              efficient solutions with unprecedented speed and ease. 💡
            </p>
            <p className="text-white font-semibold text-justify text-lg leading-relaxed text-xl">
              🌐 Experience the revolution in web development with AI Tools and
              CoPilot! 🌟
            </p>
          </Card>
          <Card>
            <h1 className="text-4xl font-bold mb-4 text-purple-400">
              🤖 AI: Your Ultimate Development Partner 🔧
            </h1>
            <ul className="list-disc pl-8 mb-4">
              <li className="text-white font-semibold text-justify text-lg leading-relaxed text-xl">
                🌱 Beginner-Friendly: Simplify complex concepts and make coding
                accessible for all by leveraging AI Tools to assist your work.
                📘
              </li>
              <li className="text-white font-semibold text-justify text-lg leading-relaxed text-xl">
                🚀 Accelerate Development: Boost your productivity and
                efficiency with AI-powered tools, achieving more in less time.
                ⏱️
              </li>
            </ul>
          </Card>
          <Card>
            <h1 className="text-4xl font-bold mb-4 text-purple-400">
              Outperform with AI: The Future of Coding 💻
            </h1>
            <p className="text-white font-semibold text-justify text-lg leading-relaxed text-xl">
              Unleash the full potential of AI Tools, transforming your coding
              capabilities to new heights. 🌟
            </p>
          </Card>
          <Card>
            <h1 className="text-4xl font-bold mb-4 text-purple-400">
              Join the AI-Powered Web Development Movement 🌐
            </h1>
            <p className="text-white font-semibold text-justify text-lg leading-relaxed text-xl">
              Get ready to redefine the boundaries of web development with
              advanced AI tools and technologies. Welcome to the future! 🎉
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ToolsSection;
