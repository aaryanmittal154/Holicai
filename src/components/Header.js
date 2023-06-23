import React, { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link legacyBehavior href="/">
            <a className="text-xl font-semibold text-gray-800">Holic AI</a>
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link legacyBehavior href="/course">
              <a className="text-gray-800 hover:text-gray-600">Course</a>
            </Link>
            <Link legacyBehavior href="/affiliate">
              <a className="text-gray-800 hover:text-gray-600">Affiliate</a>
            </Link>
            <Link legacyBehavior href="https://holicai.tech/">
              <a className="text-gray-800 hover:text-gray-600">Consultancy</a>
            </Link>
            <Link legacyBehavior href="/contact">
              <a className="text-gray-800 hover:text-gray-600">Contact</a>
            </Link>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-800 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`}>
          <div className="pt-4 pb-3 space-y-1 flex flex-col items-start">
            <Link legacyBehavior href="/course">
              <a className="text-gray-800 hover:text-gray-600 block py-1">
                Course
              </a>
            </Link>
            <Link legacyBehavior href="/affiliate">
              <a className="text-gray-800 hover:text-gray-600 block py-1">
                Affiliate
              </a>
            </Link>
            <Link legacyBehavior href="/blog">
              <a className="text-gray-800 hover:text-gray-600 block py-1">
                Blog
              </a>
            </Link>
            <Link legacyBehavior href="/contact">
              <a className="text-gray-800 hover:text-gray-600 block py-1">
                Contact
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
