import Head from "next/head";
import Header from "@/components/Header.js";
import PopUp from "@/components/Home/PopUp.js";
import LandingVideo from "@/components/Home/LandingVideo.js";
import DescriptionAI from "@/components/Home/DescriptionAI.js";
import ParallaxAI from "@/components/Home/ParallaxAI.js";
import AffiliateDescription from "@/components/Home/AffiliateDescription.js";
import AffiliateParallax from "@/components/Home/AffiliateParallax.js";
import CSR from "@/components/Home/CSR.js";
import Footer from "@/components/Footer.js";

export default function Home() {
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
          content="HolicAI, AI-driven web development, affiliate marketing, edtech, web development course, AI-powered learning, front-end development, back-end development, AI tools"
        />
        <link rel="icon" href="/logo_holicai.ico" />
      </Head>
      <Header />
      <PopUp />
      <LandingVideo />
      <DescriptionAI />
      <ParallaxAI />
      <AffiliateDescription />
      <AffiliateParallax />
      <CSR />
      <Footer />
    </div>
  );
}
