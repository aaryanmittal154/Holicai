import React, { useState, useEffect } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const CourseCurriculum = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Call the function initially to set the state based on the initial viewport size

    // Add an event listener that calls handleResize when the window is resized
    window.addEventListener("resize", handleResize);

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const courseModules = [
    {
      id: 1,
      title: "Basics of Frontend Web Development",
      description:
        "Learn the fundamentals of web development and Next.js. This module covers the basics of JavaScript, as well as the core concepts of Next.js.",
    },
    {
      id: 2,
      title: "Getting Started with AI Tools",
      description:
        "Master the prompts of AI tools and learn how to integrate it into your web development workflow. This module covers the setup, API usage, and customization options available in AI tools.",
    },
    {
      id: 3,
      title: "Building Responsive and Interactive Frontend Websites",
      description:
        "Explore techniques to create responsive and interactive websites. Learn how to utilize AI-powered design systems and components to create seamless user experiences.",
    },
    {
      id: 4,
      title: "Optimizing and Deploying Websites",
      description:
        "Learn how to optimize your websites for better performance and deploy them using modern web services. Discover best practices for improving website speed, search engine optimization, and security.",
    },
    {
      id: 5,
      title: "Ways to Make Money as a Web Developer",
      description:
        "Discover the different ways to monetize your web development skills. This module covers the various career paths and opportunities available for web developers, as well as the skills required to succeed in the industry.",
    },
  ];

  return (
    <section className={`bg-black py-6 px-4 sm:py-8 sm:px-6 lg:py-12 lg:px-8`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl lg:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-400">
            Course Curriculum
          </h2>
        </div>
        {!isMobile && (
          <VerticalTimeline>
            {courseModules.map((module, index) => {
              return (
                <VerticalTimelineElement
                  key={module.id}
                  contentStyle={{
                    background: "#1a202c",
                    color: "#805ad5",
                    borderTop:
                      index % 2 === 0
                        ? "5px solid #805ad5"
                        : "5px solid #805ad5",
                  }}
                  iconStyle={{
                    display: "none",
                    background: "#805ad5",
                    color: "#805ad5",
                  }}
                >
                  <h3
                    className={`vertical-timeline-element-title text-purple-400 font-bold text-lg sm:text-xl lg:text-3xl`}
                  >
                    {module.title}
                  </h3>
                  <p
                    className={`animate__animated text-white font-bold text-sm sm:text-base lg:text-base`}
                  >
                    {module.description}
                  </p>
                </VerticalTimelineElement>
              );
            })}
          </VerticalTimeline>
        )}
      </div>
    </section>
  );
};

export default CourseCurriculum;
