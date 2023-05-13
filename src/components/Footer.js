import { React, useState, useEffect } from "react";
import Link from "next/link";
import { useForm, ValidationError } from "@formspree/react";

const Footer = () => {
  const [state, handleSubmit] = useForm("xayzagbl");
  const [formData, setFormData] = useState({
    email: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckbox = (e) => {
    setFormData({ ...formData, agree: e.target.checked });
  };

  useEffect(() => {
    if (state.succeeded) {
      alert(
        "Thank you for subscribing! You will receive a confirmation email."
      );
      setFormData({ email: "" }); // Clear the input box
    }
  }, [state.succeeded]);
  return (
    <footer className="bg-black text-gray-200 py-12">
      <div className="container mx-auto px-6 md:grid md:grid-cols-4 md:gap-6">
        <div className="text-center md:text-left mb-8 md:mb-0">
          <h3 className="text-2xl font-semibold mb-4">Holic AI</h3>
          <p className="mb-4">
            Empowering the next generation of web developers with AI-driven
            learning experiences.
          </p>
        </div>
        <div className="text-center md:text-left mb-8 md:mb-0">
          <h3 className="text-xl font-semibold mb-4">Explore</h3>
          <nav className="flex flex-col space-y-2">
            <Link
              legacyBehavior
              href="/"
              className="text-gray-300 hover:text-white transition duration-300"
            >
              Home
            </Link>
            <Link
              legacyBehavior
              href="/course"
              className="text-gray-300 hover:text-white transition duration-300"
            >
              Course
            </Link>
            <Link
              legacyBehavior
              href="/blog"
              className="text-gray-300 hover:text-white transition duration-300"
            >
              Blog
            </Link>
            <Link
              legacyBehavior
              href="/contact"
              className="text-gray-300 hover:text-white transition duration-300"
            >
              Contact
            </Link>
          </nav>
        </div>
        <div className="text-center md:text-left mb-8 md:mb-0">
          <h3 className="text-xl font-semibold mb-4">Opportunities</h3>
          <nav className="flex flex-col space-y-2">
            <Link
              legacyBehavior
              href="/affiliate"
              className="text-gray-300 hover:text-white transition duration-300"
            >
              Affiliate
            </Link>
            <Link
              legacyBehavior
              href="/career"
              className="text-gray-300 hover:text-white transition duration-300"
            >
              Career
            </Link>
            <Link
              legacyBehavior
              href="/testimonial"
              className="text-gray-300 hover:text-white transition duration-300"
            >
              Testimonial
            </Link>
            <Link
              legacyBehavior
              href="/feedback"
              className="text-gray-300 hover:text-white transition duration-300"
            >
              Feedback
            </Link>
          </nav>
        </div>
        <div className="text-center md:text-left">
          <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
          <form className="mb-4" onSubmit={handleSubmit}>
            <input
              type="email"
              className="w-full bg-gray-700 text-white py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600"
              placeholder="Enter your email"
              onChange={handleChange}
              required
              name="email"
              id="email"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
              className="text-red-600 text-sm mt-1"
            />
            <button
              className="mt-6 bg-purple-600 text-white font-semibold text-lg py-2 px-4 rounded-lg shadow-lg hover:bg-purple-800 transition duration-300"
              type="submit"
              disabled={state.submitting}
            >
              {state.submitting ? (
                <span>Subscribing...</span>
              ) : (
                <span>Subscribe</span>
              )}
            </button>
          </form>
        </div>
      </div>
      <div className="container mx-auto px-6 mt-8 md:mt-12 border-t border-gray-700 pt-8">
        <p className="text-center text-gray-400">
          &copy; {new Date().getFullYear()} Holic AI. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
