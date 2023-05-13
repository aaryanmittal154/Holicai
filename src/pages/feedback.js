import Head from "next/head";
import React from "react";
import Header from "@/components/Header.js";
import Footer from "@/components/Footer.js";
import Link from "next/link";

export default function Feedback() {
  return (
    <>
      <Head>
        <title>HolicAI - Master AI-Driven Web Development</title>
        <meta
          name="description"
          content="HolicAI offers AI-driven web development courses and a lucrative affiliate marketing program. Learn cutting-edge skills and earn from promoting our high-quality edtech content."
        />
        <meta
          name="keywords"
          content="HolicAI, AI-driven web development, affiliate marketing, edtech, web development course, AI-powered learning, front-end development, back-end development, AI tools"
        />
        <link rel="icon" href="/logo_holicai.ico" />
      </Head>
      <Header />
      <div className="bg-gradient-to-r from-black via-gray-900 to-black min-h-screen flex items-center justify-center">
        <div className="bg-white p-10 rounded-lg shadow-lg w-full md:w-2/3 lg:w-1/2">
          <h1 className="text-4xl font-bold mb-6 text-center">
            Feedback - Coming Soon
          </h1>
          <p className="text-gray-700 text-lg">
            We value your opinion and look forward to receiving your feedback.
            Our Feedback page is under development, and we will be launching it
            soon. Stay tuned and get ready to share your thoughts with us!
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
