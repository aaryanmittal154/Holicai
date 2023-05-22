import React from "react";
import Head from "next/head";
import Header from "@/components/Header.js";
import PopUp from "@/components/Course/PopUp.js";
import LandingSection from "@/components/Course/LandingSection.js";
import SectionOne from "@/components/Course/SectionOne.js";
import WhatIsCourse from "@/components/Course/WhatIsCourse.js";
import WhyCourseSection from "@/components/Course/WhyCourseSection.js";
import WaysToEarn from "@/components/Course/WaysToEarn.js";
import StorySection from "@/components/Course/StorySection.js";
import ComparisonSection from "@/components/Course/ComparisonSection.js";
import WhyCourseWasBuilt from "@/components/Course/WhyCourseWasBuilt.js";
import TargetAudience from "@/components/Course/TargetAudience.js";
import ToolsSection from "@/components/Course/ToolsSection.js";
import CourseCurriculum from "@/components/Course/CourseCurriculum.js";
import CourseFAQ from "@/components/Course/CourseFAQ.js";
import LastSection from "@/components/Course/LastSection.js";
import Footer from "@/components/Footer.js";

function Course() {
  return (
    <div>
      <Head>
        <title>Holic AI - Master AI-Driven Web Development Course</title>
        <meta
          name="description"
          content="Join the Holic AI Web development course to become a next GEN frontend web developer, freelancer, entrepreneur in less than a day. Learning everything from frontend web development to making money from it!"
        />
        <meta
          name="keywords"
          content="Holic AI, Holic AI Private Limited, holic ai, HolicAI, holic AI, holicai, AI-driven web development, affiliate marketing, edtech, web development course, AI-powered learning, front-end development, back-end development, AI tools"
        />
        <meta name="language" content="EN" />
        <meta name="robots" content="index,follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://www.holicai.com/course" />
        <meta
          property="og:title"
          content="HolicAI Private Limited - Master AI-Driven Web Development"
        />
        <meta
          property="og:description"
          content="Join the Holic AI Web development course to become a next GEN frontend web developer, freelancer, entrepreneur in less than a day. Learning everything from frontend web development to making money from it!"
        />
        <meta property="og:image" content="/logo_holicai.ico" />
        <meta property="og:url" content="https://www.holicai.com/course" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/logo_holicai.ico" />
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "Course",
            "name": "Master AI-Driven Web Development",
            "description": "Join the Holic AI Web development course to become a next GEN frontend web developer, freelancer, entrepreneur in less than a day. Learning everything from frontend web development to making money from it!",
            "provider": {
              "@type": "Organization",
              "name": "Holic AI Private Limited"
            }
          }
        `}
        </script>
      </Head>
      <Header />
      {/* <PopUp /> */}
      <LandingSection />
      <SectionOne />
      <WhatIsCourse />
      <WhyCourseSection />
      <WaysToEarn />
      <StorySection />
      <ComparisonSection />
      <WhyCourseWasBuilt />
      <TargetAudience />
      <ToolsSection />
      <CourseCurriculum />
      <CourseFAQ />
      <LastSection />
      <Footer />
    </div>
  );
}

export default Course;
