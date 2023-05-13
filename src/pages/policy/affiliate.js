import Head from "next/head";

export default function TermsAndConditions() {
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

      <main>
        <iframe
          src="/Affiliate/AffiliatePolicy.pdf"
          width="100%"
          height="1000px"
          style={{ border: "none" }}
        />
      </main>
    </div>
  );
}
