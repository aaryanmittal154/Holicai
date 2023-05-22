import Head from "next/head";
import Header from "@/components/Header.js";
import AffiliateLanding from "@/components/Affiliate/AffiliateLanding.js";
import AffiliateCTA from "@/components/Affiliate/AffiliateCTA.js";
import AffiliateBenefits from "@/components/Affiliate/AffiliateBenefits.js";
import WhyHolicaiAffiliate from "@/components/Affiliate/WhyHolicaiAffiliate.js";
import AffiliateSteps from "@/components/Affiliate/AffiliateSteps.js";
import AffiliateFAQSection from "@/components/Affiliate/AffiliateFAQSection.js";
import AffiliateForm from "@/components/Affiliate/AffiliateForm.js";
import Footer from "@/components/Footer";

const Affiliate = () => {
  return (
    <>
      <Head>
        <title>Affiliate Program - Holic AI</title>
        <meta
          name="description"
          content="Join Holic AI's lucrative affiliate marketing program. Promote our high-quality edtech content and AI-driven web development courses, and earn rewards."
        />
        <meta
          name="keywords"
          content="Holic AI, Holic AI Private Limited, holic ai, HolicAI, holic AI, holicai, Affiliate Program, Affiliate Marketing, Online Marketing, Earn Money Online"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="language" content="EN" />
        <meta name="robots" content="index,follow" />
        <link rel="canonical" href="https://www.holicai.com/affiliate" />
        <meta property="og:title" content="Affiliate Program - Holic AI" />
        <meta
          property="og:description"
          content="Join Holic AI's lucrative affiliate marketing program. Promote our high-quality edtech content and AI-driven web development courses, and earn rewards."
        />
        <meta property="og:image" content="/logo_holicai.ico" />
        <meta property="og:url" content="https://www.holicai.com/affiliate" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/logo_holicai.ico" />
      </Head>
      <Header />
      <AffiliateLanding />
      <AffiliateCTA />
      <AffiliateBenefits />
      <WhyHolicaiAffiliate />
      <AffiliateSteps />
      <AffiliateFAQSection />
      <AffiliateForm />
      <Footer />
    </>
  );
};

export default Affiliate;
