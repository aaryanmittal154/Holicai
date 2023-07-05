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
        <title>
          Holic AI - Master AI-Driven Web Development
        </title>
        <meta
          name="description"
          content="Holic AI offers advanced courses in AI-driven web development and provides a lucrative affiliate marketing program. Join us to learn cutting-edge skills and earn by promoting our top-tier edtech content."
        />
        <meta
          name="keywords"
          content="Holic AI, Holic AI Private Limited, holic ai, HolicAI, holic AI, holicai, AI-driven web development, affiliate marketing, edtech, web development course, AI-powered learning, front-end development, back-end development, AI tools"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="language" content="EN" />
        <meta name="robots" content="index,follow" />
        <link rel="canonical" href="https://www.holicai.com" />
        <meta
          property="og:title"
          content="HolicAI - Master AI-Driven Web Development and Affiliate Marketing"
        />
        <meta
          property="og:description"
          content="HolicAI offers advanced courses in AI-driven web development and provides a lucrative affiliate marketing program. Join us to learn cutting-edge skills and earn by promoting our top-tier edtech content."
        />
        <meta property="og:image" content="/logo_holicai.ico" />
        <meta property="og:url" content="https://www.holicai.com" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/logo_holicai.ico" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "HolicAI",
              "description": "HolicAI offers advanced courses in AI-driven web development and provides a lucrative affiliate marketing program. Join us to learn cutting-edge skills and earn by promoting our top-tier edtech content.",
              "url": "https://www.holicai.com",
              "logo": "/logo_holicai.ico"
            }
          `}
        </script>
      </Head>
      <Header />
      {/* <PopUp /> */}
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
