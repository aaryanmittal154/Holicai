import React, { useState, useEffect } from "react";
import { Parallax } from "react-parallax";
import Link from "next/link";

const ParallaxAI = () => {
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

  if (isSmallScreen) {
    return null;
  }

  return (
    <>
      <Parallax
        bgImage="/Home/ParallaxAI.jpeg"
        strength={400}
        style={{ height: "70vh" }}
        bgImageStyle={{ backgroundSize: "cover" }}
        className="flex items-center justify-center text-white"
      >
        <Content />
      </Parallax>
    </>
  );
};

const Content = () => (
  <div className="text-center">
    <h1 className="text-6xl font-bold mb-4">Check Out the Course</h1>
    <p className="text-lg mb-8"></p>
    <Link legacyBehavior href="/course">
      <a>
        <button className="px-8 py-4 bg-white text-black rounded-full hover:bg-gray-200">
          Learn More
        </button>
      </a>
    </Link>
  </div>
);

export default ParallaxAI;
