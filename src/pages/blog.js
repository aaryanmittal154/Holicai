import Head from "next/head";
import Header from "@/components/Header.js";
import Footer from "@/components/Footer.js";

export default function Blog() {
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
      <div className="min-h-screen bg-gradient-to-r from-black via-gray-900 to-black text-white flex items-center justify-center">
        <div className="max-w-5xl px-4 py-6 bg-black bg-opacity-70 rounded-xl shadow-lg border border-purple-900">
          <h1 className="text-5xl font-bold mb-4 text-purple-500 tracking-wider">
            Holic AI Blog
          </h1>
          <h2 className="text-2xl font-semibold mb-2 tracking-wider">
            <span className="text-yellow-400">Unveiling Soon!</span> Embrace the
            Revolution in AI Blogging.
          </h2>
          <p className="text-lg leading-relaxed tracking-wide mb-4">
            Our dedicated team of AI enthusiasts and experts is working around
            the clock to bring you a game-changing AI blogging platform. Keep
            pace with the rapidly evolving AI landscape through in-depth
            articles, expert opinions, and the latest breakthroughs in the
            industry. Learn, share, and grow with Holic AI Blog while earning
            rewards for your contributions. Are you ready to be part of the
            future? We are!
          </p>
          <p className="text-base text-purple-400 font-semibold mb-2">
            While you eagerly anticipate our launch, here is some AI humor to
            brighten your day:
          </p>
          <p className="text-lg italic mb-4">
            Why did the neural network go to art school? To master its deep
            learning techniques!
          </p>
          <p className="text-sm text-gray-400">
            Rest assured, our blog content will be far more captivating than our
            jokes! 😉
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
