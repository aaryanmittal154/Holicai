import Head from "next/head";
import React from "react";
import Header from "@/components/Header.js";
import Footer from "@/components/Footer.js";
import Link from "next/link";

export default function Testimonials() {
  return (
    <>
      <Head>
        <title>HolicAI - Master AI-Driven Web Development</title>
        <meta
          name="description"
          content="HolicAI offers the best AI-driven web development courses and a lucrative affiliate marketing program. Learn cutting-edge skills and earn from promoting our high-quality edtech content."
        />
        <meta
          name="keywords"
          content="HolicAI, holic ai, Holic AI, holic AI, holicai, AI-driven web development, affiliate marketing, edtech, web development course, AI-powered learning, front-end development, back-end development, AI tools"
        />
        <link rel="icon" href="/logo_holicai.ico" />
      </Head>
      <Header />
      <div className="bg-gradient-to-r from-black via-gray-900 to-black min-h-screen flex items-center justify-center">
        <div className="bg-white p-10 rounded-lg shadow-lg w-full md:w-2/3 lg:w-1/2">
          <h1 className="text-4xl font-bold mb-6 text-center">
            Testimonials - Coming Soon
          </h1>
          <p className="text-gray-700 text-lg">
            We are eager to showcase the transformative experiences and
            inspiring stories of our valued clients who have embraced the power
            of Holic AI. Our dedicated team is working tirelessly to develop a
            state-of-the-art Testimonials page that encapsulates their journey.
            We cannot wait to unveil this interactive and immersive experience
            to you. Stay connected for updates!
          </p>
          <div className="flex justify-center mt-8">
            <Link legacyBehavior href="/">
              <a>
                <button className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white py-2 px-6 rounded hover:opacity-90 transition ease-in duration-200">
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
