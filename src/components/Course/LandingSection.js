import React from "react";

const LandingSection = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: (index) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: index * 0.2 },
    }),
  };

  return (
    <section
      className="relative text-white overflow-hidden"
      style={{ minHeight: "calc(88vh - 6rem)" }}
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 min-w-full min-h-full object-cover"
        src="/Course/CourseLandingSection.mp4"
        type="video/mp4"
      ></video>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-50"></div>
    </section>
  );
};

export default LandingSection;
