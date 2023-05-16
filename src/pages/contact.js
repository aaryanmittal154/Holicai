import Head from "next/head";
import Header from "@/components/Header.js";
import ContactUs from "@/components/Contact/ContactUs.js";
import Footer from "@/components/Footer.js";

export default function ContactPage() {
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
          content="HolicAI, holic ai, Holic AI, holic AI, holicai, AI-driven web development, affiliate marketing, edtech, web development course, AI-powered learning, front-end development, back-end development, AI tools"
        />
        <link rel="icon" href="/logo_holicai.ico" />
      </Head>
      <Header />
      <ContactUs />
      <Footer />
    </>
  );
}
