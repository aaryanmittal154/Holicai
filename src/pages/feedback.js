import Head from "next/head";
import React from "react";
import Header from "@/components/Header.js";
import Footer from "@/components/Footer.js";
import Link from "next/link";

export default function Feedback() {
  return (
    <>
      <Head>
        <title>Feedback - Holic AI</title>
        <meta
          name="description"
          content="We value your opinion at Holic AI. Our feedback page is under development and we look forward to hearing your thoughts on our AI-driven web development courses and affiliate marketing program."
        />
        <meta
          name="keywords"
          content="Holic AI, Holic AI Private Limited, holic ai, HolicAI, holic AI, holicai, AI-driven web development, affiliate marketing, edtech, web development course, AI-powered learning, front-end development, back-end development, AI tools, feedback, customer feedback"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="language" content="EN" />
        <meta name="robots" content="index,follow" />
        <link rel="canonical" href="https://www.holicai.com/feedback" />
        <meta
          property="og:title"
          content="Feedback - HolicAI's AI-Driven Web Development Courses"
        />
        <meta
          property="og:description"
          content="We value your opinion at HolicAI. Our feedback page is under development and we look forward to hearing your thoughts on our AI-driven web development courses and affiliate marketing program."
        />
        <meta property="og:image" content="/logo_holicai.ico" />
        <meta property="og:url" content="https://www.holicai.com/feedback" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/logo_holicai.ico" />
      </Head>
      <Header />
      <div className="bg-gradient-to-r from-black via-gray-900 to-black min-h-screen flex items-center justify-center">
        <div className="bg-white p-10 rounded-lg shadow-lg w-full md:w-2/3 lg:w-1/2">
          <h1 className="text-4xl font-bold mb-6 text-center">
            Feedback - Coming Soon
          </h1>
          <p className="text-gray-700 text-lg">
            At HolicAI, we highly value your opinions and feedback. Our
            dedicated feedback page is currently under development. We are
            excited about launching it soon to gather your thoughts and
            experiences about our AI-driven web development courses and
            affiliate marketing program. Stay tuned!
          </p>
          <div className="flex justify-center mt-8">
            <Link legacyBehavior href="/">
              <a>
                <button className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 text-white py-2 px-6 rounded hover:opacity-90 transition ease-in duration-200">
                  Home
                </button>
              </a>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
