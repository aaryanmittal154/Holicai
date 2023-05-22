import Head from "next/head";

export default function TermsAndConditions() {
  return (
    <div>
      <Head>
        <title>Contact Terms and Conditions - Holic AI</title>
        <meta
          name="description"
          content="Read the terms and conditions for using Holic AI's web development courses and affiliate marketing program."
        />
        <meta
          name="keywords"
          content="Holic AI, Holic AI Private Limited, holic ai, HolicAI, holic AI, holicai, AI-driven web development, affiliate marketing, edtech, web development course, AI-powered learning, front-end development, back-end development, AI tools, terms and conditions"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index,follow" />
        <link
          rel="canonical"
          href="https://www.holicai.com/terms-and-conditions"
        />
        <meta property="og:title" content="Terms and Conditions - Holic AI" />
        <meta
          property="og:description"
          content="Read the terms and conditions for using Holic AI's web development courses and affiliate marketing program."
        />
        <meta
          property="og:url"
          content="https://www.holicai.com/terms-and-conditions"
        />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/logo_holicai.ico" />
      </Head>
      <main>
        <iframe
          src="/Contact/ContactTerms.pdf"
          width="100%"
          height="1000px"
          style={{ border: "none" }}
        />
      </main>
    </div>
  );
}
