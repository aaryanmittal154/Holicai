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
        <title>HolicAI - Master AI-Driven Web Development</title>
        <meta
          name="description"
          content="HolicAI offers AI-driven web development courses and a lucrative affiliate marketing program. Learn cutting-edge skills and earn from promoting our high-quality edtech content."
        />
        <meta
          name="keywords"
          content="HolicAI, holic ai, Holic AI, holic AI, holicai, AI-driven web development, affiliate marketing, edtech, web development course, AI-powered learning, front-end development, back-end development, AI tools"
        />
        <link rel="icon" href="/logo_holicai.ico" />
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
