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
