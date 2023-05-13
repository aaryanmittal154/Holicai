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
