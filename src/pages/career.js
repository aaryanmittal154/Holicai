import Head from "next/head";
import Header from "@/components/Header.js";
import LandingVideo from "@/components/Career/LandingVideo.js";
import JoinOurTeam from "@/components/Career/JoinOurTeam.js";
import OpenPositionForm from "@/components/Career/OpenPositionForm.js";
import WhyWorkWithUs from "@/components/Career/WhyWorkWithUs.js";
import OurValues from "@/components/Career/OurValues.js";
import PerksAndBenefits from "@/components/Career/PerksAndBenefits.js";
import Footer from "@/components/Footer.js";

export default function Careers() {
  return (
    <>
      <div>
        <Head>
          <title>Careers - Holic AI</title>
          <meta
            name="description"
            content="Discover a fulfilling career at Holic AI. Join our team and be a part of our mission to revolutionize web development through AI-driven solutions. Explore our values, perks, and open positions."
          />
          <meta
            name="keywords"
            content="Holic AI, Holic AI Private Limited, holic ai, HolicAI, holic AI, holicai, careers, AI-driven web development, jobs in tech, edtech careers, web development careers"
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="language" content="EN" />
          <meta name="robots" content="index,follow" />
          <link rel="canonical" href="https://www.holicai.com/careers" />
          <meta property="og:title" content="Careers - Holic AI" />
          <meta
            property="og:description"
            content="Discover a fulfilling career at Holic AI. Join our team and be a part of our mission to revolutionize web development through AI-driven solutions. Explore our values, perks, and open positions."
          />
          <meta property="og:image" content="/logo_holicai.ico" />
          <meta property="og:url" content="https://www.holicai.com/careers" />
          <meta property="og:type" content="website" />
          <link rel="icon" href="/logo_holicai.ico" />
        </Head>
        <Header />
        <LandingVideo />
        <JoinOurTeam />
        <WhyWorkWithUs />
        <OurValues />
        <PerksAndBenefits />
        <OpenPositionForm />
        <Footer />
      </div>
    </>
  );
}
