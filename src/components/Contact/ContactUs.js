import React, { useState, useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";

const ContactUs = () => {
  const [state, handleSubmit] = useForm("xoqzybpk");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    agree: false,
    policy: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckbox = (e) => {
    setFormData({
      ...formData,
      agree: e.target.checked,
    });
  };
  const handleCheckbox1 = (e) => {
    setFormData({
      ...formData,
      policy: e.target.checked,
    });
  };

  useEffect(() => {
    if (state.succeeded) {
      alert("Thank You for Contacting! You will receive a confirmation email.");
      setFormData({
        name: "",
        email: "",
        message: "",
        agree: false,
        policy: false,
      });
    }
  }, [state.succeeded]);

  return (
    <div className="bg-gradient-to-r from-black via-black to-black min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mt-8 bg-gradient-to-br from-blue-900 to-gray-900 shadow-lg sm:rounded-lg p-8">
          <h2 className="text-center text-4xl font-extrabold text-purple-100 mb-8">
            Contact Us
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="mt-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-purple-100"
              >
                Name
              </label>
              <input
                required
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full border-0 bg-purple-200 bg-opacity-40 rounded-md shadow-sm py-2 px-3 text-base text-purple-100 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:bg-opacity-50"
              />
              <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
              />
            </div>
            <div className="mt-6">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-purple-100"
              >
                Email
              </label>
              <input
                required
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                autoComplete="email"
                className="mt-1 block w-full border-0 bg-purple-200 bg-opacity-40 rounded-md shadow-sm py-2 px-3 text-base text-purple-100 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:bg-opacity-50"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>
            <div className="mt-6">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-purple-100"
              >
                Message
              </label>
              <textarea
                required
                name="message"
                id="message"
                rows="4"
                onChange={handleChange}
                value={formData.message}
                className="mt-1 block w-full border-0 bg-purple-200 bg-opacity-40 rounded-md shadow-sm py-2 px-3 text-base text-purple-100 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:bg-opacity-50"
              ></textarea>
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>
            <div className="flex items-center justify-between text-gray-300 mb-2">
              <label htmlFor="agree" className="flex items-center">
                <input
                  required
                  type="checkbox"
                  name="agree"
                  className="mr-2"
                  checked={formData.agree}
                  onChange={handleCheckbox}
                />
                I agree to the Terms and Conditions.
              </label>
              <a
                href="/terms/contact"
                target="_blank"
                className="text-red-400 hover:text-red-500"
              >
                View terms
              </a>
            </div>
            <div className="flex items-center justify-between text-gray-300 mb-2">
              <label htmlFor="policy" className="flex items-center">
                <input
                  required
                  type="checkbox"
                  name="policy"
                  className="mr-2"
                  checked={formData.policy}
                  onChange={handleCheckbox1}
                />
                I agree to the Privacy Policy.
              </label>
              <a
                href="/policy/contact"
                target="_blank"
                className="text-red-400 hover:text-red-500"
              >
                View Policy
              </a>
            </div>
            <div className="mt-6">
              <button
                type="submit"
                className="w-full py-2 px-4 border border-transparent shadow-sm text-sm font-large rounded-md text-white bg-gradient-to-br from-blue-700 to-purple-400 hover:from-blue-400 hover:to-purple-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                disabled={state.submitting}
              >
                {state.submitting ? (
                  <span>Submitting...</span>
                ) : (
                  <span>Submit</span>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
