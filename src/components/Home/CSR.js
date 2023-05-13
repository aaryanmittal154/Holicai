import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

export default function CSR() {
  return (
    <>
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-8 text-center">
            Together,{" "}
            <span className="text-purple-400">We Make a Difference </span>
          </h1>
          <p className="text-2xl font-bold mb-4 text-center">
            For <span className="text-purple-400">each sale </span> on our
            platform, a portion of the proceeds will be donated to charities and
            social service organizations.
          </p>
          <p className="text-2xl font-bold mb-8 text-center">
            Join us in making a{" "}
            <span className="text-purple-400">positive impact </span> on the
            world as we share a percentage of our{" "}
            <span className="text-purple-400">
              {" "}
              profits with those in need !{" "}
            </span>
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col items-center">
              <Image
                src="/Home/CSR/Charity.png"
                alt="Charity Image"
                width={380}
                height={380}
                className="rounded-full"
              />
              <h2 className="text-3xl font-bold text-purple-400 mb-2">
                Charities
              </h2>
              <p className="text-center text-xl font-bold">
                We support various local and international charities dedicated
                to improving lives and making the world a better place.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <Image
                src="/Home/CSR/SocialService.png"
                alt="Social Service Image"
                width={380}
                height={380}
                className="rounded-full"
              />
              <h2 className="text-3xl font-bold text-purple-400 mb-2">
                Social Services
              </h2>
              <p className="text-center text-xl font-bold">
                By partnering with social service organizations, we help provide
                essential resources and assistance to those in need.
              </p>
            </div>
          </div>

          <div className="mt-8 flex justify-center">
            <Link legacyBehavior href="/course">
              <a className="bg-purple-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg text-2xl">
                Explore Courses
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
