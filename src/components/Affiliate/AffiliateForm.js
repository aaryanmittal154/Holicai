import React, { useState, useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { useRouter } from "next/router";

const Tooltip = ({ children, text }) => (
  <div className="relative">
    {children}
    <div className="absolute z-10 hidden w-48 p-2 mt-1 -ml-8 text-sm leading-tight text-white whitespace-nowrap bg-purple-600 rounded-lg shadow-md tooltip">
      {text}
    </div>
  </div>
);

const AffiliateForm = () => {
  const router = useRouter();
  const [state, handleSubmit] = useForm("mqkowjdb");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    instagram: "",
    facebook: "",
    youtube: "",
    otherLink: "",
    comments: "",
    website: "",
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
      alert(
        "Application submitted successfully! You will receive a confirmation email."
      );
      setFormData({
        name: "",
        email: "",
        phone: "",
        country: "",
        instagram: "",
        facebook: "",
        youtube: "",
        otherLink: "",
        comments: "",
        website: "",
        agree: false,
        policy: false,
      });
    }
  }, [state.succeeded]);

  return (
    <div className="bg-black py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gray-900 p-8 rounded-lg shadow-md">
          <h2 className="text-4xl font-extrabold text-center text-purple-400 mb-10">
            AFFILIATE FORM
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col">
              <Tooltip text="Enter your full name">
                <label htmlFor="name" className="text-purple-400">
                  Name
                </label>
              </Tooltip>
              <input
                required
                type="text"
                id="name"
                value={formData.name}
                name="name"
                placeholder="Enter your full name"
                className="w-full p-2 mb-4 border-b border-gray-300 text-white bg-transparent focus:outline-none focus:border-purple-500"
                onChange={handleChange}
              />
              <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
              />
              <Tooltip text="Enter your email address">
                <label htmlFor="email" className="text-purple-400">
                  Email
                </label>
              </Tooltip>
              <input
                required
                type="email"
                id="email"
                name="email"
                value={formData.email}
                placeholder="Enter your email address"
                className="w-full p-2 mb-4 border-b border-gray-300 text-white bg-transparent focus:outline-none focus:border-purple-500"
                onChange={handleChange}
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
              <Tooltip text="Enter your phone number">
                <label htmlFor="phone" className="text-purple-400">
                  Phone
                </label>
              </Tooltip>
              <input
                required
                type="text"
                id="phone"
                name="phone"
                value={formData.phone}
                placeholder="Enter your phone number"
                className="w-full p-2 mb-4 border-b border-gray-300 text-white bg-transparent focus:outline-none focus:border-purple-500"
                onChange={handleChange}
              />
              <ValidationError
                prefix="Phone"
                field="phone"
                errors={state.errors}
              />
              <Tooltip text="Enter your country">
                <label htmlFor="country" className="text-purple-400">
                  Country
                </label>
              </Tooltip>
              <input
                required
                type="text"
                id="country"
                name="country"
                value={formData.country}
                placeholder="Enter your country"
                className="w-full p-2 mb-4 border-b border-gray-300 text-white bg-transparent focus:outline-none focus:border-purple-500"
                onChange={handleChange}
              />
              <ValidationError
                prefix="Country"
                field="country"
                errors={state.errors}
              />
              <Tooltip text="Enter your Instagram username">
                <label htmlFor="instagram" className="text-purple-400">
                  Instagram (Optional)
                </label>
              </Tooltip>
              <input
                type="text"
                id="instagram"
                name="instagram"
                value={formData.instagram}
                placeholder="Enter your Instagram username"
                className="w-full p-2 mb-4 border-b border-gray-300 text-white bg-transparent focus:outline-none focus:border-purple-500"
                onChange={handleChange}
              />
              <ValidationError
                prefix="Instagram"
                field="instagram"
                errors={state.errors}
              />
              <Tooltip text="Enter your Facebook profile URL">
                <label htmlFor="facebook" className="text-purple-400">
                  Facebook (Optional)
                </label>
              </Tooltip>
              <input
                type="text"
                id="facebook"
                name="facebook"
                value={formData.facebook}
                placeholder="Enter your Facebook profile URL"
                className="w-full p-2 mb-4 border-b border-gray-300 text-white bg-transparent focus:outline-none focus:border-purple-500"
                onChange={handleChange}
              />
              <ValidationError
                prefix="Facebook"
                field="facebook"
                errors={state.errors}
              />
              <Tooltip text="Enter your YouTube channel URL">
                <label htmlFor="youtube" className="text-purple-400">
                  Youtube (Optional)
                </label>
              </Tooltip>
              <input
                type="text"
                id="youtube"
                name="youtube"
                value={formData.youtube}
                placeholder="Enter your YouTube channel URL"
                className="w-full p-2 mb-4 border-b border-gray-300 text-white bg-transparent focus:outline-none focus:border-purple-500"
                onChange={handleChange}
              />
              <ValidationError
                prefix="Youtube"
                field="youtube"
                errors={state.errors}
              />
              <Tooltip text="Enter any other relevant link">
                <label htmlFor="otherLink" className="text-purple-400">
                  Other Link (Optional)
                </label>
              </Tooltip>
              <input
                type="text"
                id="otherLink"
                name="otherLink"
                value={formData.otherLink}
                placeholder="Enter any other  link"
                className="w-full p-2 mb-4 border-b border-gray-300 text-white bg-transparent focus:outline-none focus:border-purple-500"
                onChange={handleChange}
              />
              <ValidationError
                prefix="Other Link"
                field="otherLink"
                errors={state.errors}
              />
              <Tooltip text="Enter your website URL">
                <label htmlFor="website" className="text-purple-400">
                  Your Website (Optional)
                </label>
              </Tooltip>
              <input
                type="text"
                id="website"
                name="website"
                value={formData.website}
                placeholder="Enter your website URL"
                className="w-full p-2 mb-4 border-b border-gray-300 text-white bg-transparent focus:outline-none focus:border-purple-500"
                onChange={handleChange}
              />
              <ValidationError
                prefix="Website"
                field="website"
                errors={state.errors}
              />
              <Tooltip text="Share any additional comments or information">
                <label htmlFor="comments" className="text-purple-400">
                  Additional Comments (Optional)
                </label>
              </Tooltip>
              <textarea
                id="comments"
                name="comments"
                value={formData.comments}
                placeholder="Share any additional comments or information"
                className="w-full p-2 mb-4 border-b border-gray-300 text-white bg-transparent focus:outline-none focus:border-purple-500"
                onChange={handleChange}
              />
              <ValidationError
                prefix="Comments"
                field="comments"
                errors={state.errors}
              />
              <div className="flex items-center justify-between text-purple-400 mb-2">
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
                  href="/terms/affiliate"
                  target="_blank"
                  className="text-red-400 hover:text-red-500"
                >
                  View terms
                </a>
              </div>
              <div className="flex items-center justify-between text-purple-400 mb-2">
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
                  href="/policy/affiliate"
                  target="_blank"
                  className="text-red-400 hover:text-red-500"
                >
                  View Policy
                </a>
              </div>
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
              <h4 className="text-purple-400 text-justify">
                <span className="font-bold">Disclaimer:</span> At Holicai, we
                prioritize the trust and security of our affiliate partnerships.
                Be aware that Holicai will never ask our affiliate partners for
                money or financial contributions. If you receive a message
                claiming to be from Holicai that requests payment, please
                exercise caution and report it to us at team@holicai.com. To
                protect yourself from scams, always verify the legitimacy of any
                communication you receive. Holicai will not be held liable for
                losses resulting from scams or fraudulent activities.
              </h4>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AffiliateForm;
