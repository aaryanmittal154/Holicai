import Head from "next/head";

export default function PrivacyPolicy() {
  return (
    <div>
      <Head>
        <title>Contact Privacy Policy - Holic AI</title>
        <meta
          name="description"
          content="Review the privacy policy for contact interactions at Holic AI."
        />
        <meta
          name="keywords"
          content="Holic AI, Holic AI Private Limited, holic ai, HolicAI, holic AI, holicai, AI-driven web development, affiliate marketing, edtech, web development course, AI-powered learning, front-end development, back-end development, AI tools, contact privacy policy"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index,follow" />
        <link
          rel="canonical"
          href="https://www.holicai.com/contact/privacy-policy"
        />
        <meta property="og:title" content="Contact Privacy Policy - Holic AI" />
        <meta
          property="og:description"
          content="Review the privacy policy for contact interactions at Holic AI."
        />
        <meta
          property="og:url"
          content="https://www.holicai.com/contact/privacy-policy"
        />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/logo_holicai.ico" />
      </Head>
      <main>
        <iframe
          src="/Contact/ContactPolicy.pdf"
          width="100%"
          height="1000px"
          style={{ border: "none" }}
        />
      </main>
    </div>
  );
}
