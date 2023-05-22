import Head from "next/head";
import Header from "@/components/Header.js";
import ContactUs from "@/components/Contact/ContactUs.js";
import Footer from "@/components/Footer.js";

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact Us - Holic AI</title>
        <meta
          name="description"
          content="Reach out to us at Holic AI. We offer AI-driven web development courses and a lucrative affiliate marketing program. We are ready to answer any of your questions or provide more information."
        />
        <meta
          name="keywords"
          content="Holic AI, Holic AI Private Limited, holic ai, HolicAI, holic AI, holicai, AI-driven web development, affiliate marketing, edtech, web development course, AI-powered learning, front-end development, back-end development, AI tools, contact us"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="language" content="EN" />
        <meta name="robots" content="index,follow" />
        <link rel="canonical" href="https://www.holicai.com/contact" />
        <meta property="og:title" content="Contact Us - HolicAI" />
        <meta
          property="og:description"
          content="Reach out to us at HolicAI. We offer AI-driven web development courses and a lucrative affiliate marketing program. We are ready to answer any of your questions or provide more information."
        />
        <meta property="og:image" content="/logo_holicai.ico" />
        <meta property="og:url" content="https://www.holicai.com/contact" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/logo_holicai.ico" />
      </Head>
      <Header />
      <ContactUs />
      <Footer />
    </>
  );
}
