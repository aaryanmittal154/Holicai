import { React, useState, useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";

const OpenPositionForm = () => {
  const [state, handleSubmit] = useForm("meqwvdpl");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    role: "",
    experience: "",
    linkedin: "",
    github: "",
    portfolio: "",
    salary: "",
    resume: "",
    letter: "",
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
        role: "",
        experience: "",
        linkedin: "",
        github: "",
        portfolio: "",
        salary: "",
        resume: "",
        letter: "",
        agree: false,
        policy: false,
      });
    }
  }, [state.succeeded]);

  return (
    <div className="bg-gradient-to-r from-black via-gray-900 to-black py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gray-800 bg-opacity-70 backdrop-blur-lg p-8 rounded-lg shadow-md">
          <h2 className="text-4xl font-extrabold text-center text-white mb-10">
            Open Positions
          </h2>
          <p className="text-lg text-center text-gray-300 mb-8">
            We are always looking for talented individuals to join our team. If
            you are passionate about AI and believe in creating a better future,
            we would love to hear from you! This form is also open for
            Internships!
          </p>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-300"
              >
                Full Name
              </label>
              <input
                required
                type="text"
                value={formData.name}
                name="name"
                id="name"
                onChange={handleChange}
                className="mt-1 block w-full py-2 px-3 border-2 border-gray-600 bg-opacity-70 bg-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-holic-blue focus:border-holic-blue text-gray-300"
              />
              <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
                className="text-red-600 text-sm mt-1"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-300"
              >
                Email
              </label>
              <input
                required
                type="email"
                value={formData.email}
                name="email"
                id="email"
                onChange={handleChange}
                autoComplete="email"
                className="mt-1 block w-full py-2 px-3 border-2 border-gray-600 bg-opacity-70 bg-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-holic-blue focus:border-holic-blue text-gray-300"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
                className="text-red-600 text-sm mt-1"
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-300"
              >
                Phone number
              </label>
              <input
                required
                type="tel"
                value={formData.phone}
                name="phone"
                id="phone"
                onChange={handleChange}
                autoComplete="tel"
                className="mt-1 block w-full py-2 px-3 border-2 border-gray-600 bg-opacity-70 bg-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-holic-blue focus:border-holic-blue text-gray-300"
              />
              <ValidationError
                prefix="Phone"
                field="phone"
                errors={state.errors}
                className="text-red-600 text-sm mt-1"
              />
            </div>
            <div>
              <label
                htmlFor="country"
                className="block text-sm font-medium text-gray-300"
              >
                Country
              </label>
              <input
                required
                type="text"
                name="country"
                value={formData.country}
                id="country"
                onChange={handleChange}
                className="mt-1 block w-full py-2 px-3 border-2 border-gray-600 bg-opacity-70 bg-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-holic-blue focus:border-holic-blue text-gray-300"
              />
              <ValidationError
                prefix="Country"
                field="country"
                errors={state.errors}
                className="text-red-600 text-sm mt-1"
              />
            </div>
            <div>
              <label
                htmlFor="role"
                className="block text-sm font-medium text-gray-300"
              >
                Role
              </label>
              <input
                required
                type="text"
                name="role"
                value={formData.role}
                id="role"
                onChange={handleChange}
                className="mt-1 block w-full py-2 px-3 border-2 border-gray-600 bg-opacity-70 bg-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-holic-blue focus:border-holic-blue text-gray-300"
              />
              <ValidationError
                prefix="Role"
                field="role"
                errors={state.errors}
                className="text-red-600 text-sm mt-1"
              />
            </div>
            <div>
              <label
                htmlFor="experience"
                className="block text-sm font-medium text-gray-300"
              >
                Experience (in Years)
              </label>
              <input
                required
                type="number"
                name="experience"
                value={formData.experience}
                id="experience"
                onChange={handleChange}
                className="mt-1 block w-full py-2 px-3 border-2 border-gray-600 bg-opacity-70 bg-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-holic-blue focus:border-holic-blue text-gray-300"
              />
              <ValidationError
                prefix="Experience"
                field="experience"
                errors={state.errors}
                className="text-red-600 text-sm mt-1"
              />
            </div>
            <div>
              <label
                htmlFor="linkedin"
                className="block text-sm font-medium text-gray-300"
              >
                LinkedIn Profile (Optional)
              </label>
              <input
                type="text"
                name="linkedin"
                value={formData.linkedin}
                id="linkedin"
                autoComplete="off"
                onChange={handleChange}
                className="mt-1 block w-full py-2 px-3 border-2 border-gray-600 bg-opacity-70 bg-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-holic-blue focus:border-holic-blue text-gray-300"
              />
              <ValidationError
                prefix="LinkedIn"
                field="linkedin"
                errors={state.errors}
                className="text-red-600 text-sm mt-1"
              />
            </div>
            <div>
              <label
                htmlFor="github"
                className="block text-sm font-medium text-gray-300"
              >
                Github Profile (Optional)
              </label>
              <input
                type="text"
                name="github"
                value={formData.github}
                id="github"
                autoComplete="url"
                onChange={handleChange}
                className="mt-1 block w-full py-2 px-3 border-2 border-gray-600 bg-opacity-70 bg-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-holic-blue focus:border-holic-blue text-gray-300"
              />
              <ValidationError
                prefix="Github"
                field="github"
                errors={state.errors}
                className="text-red-600 text-sm mt-1"
              />
            </div>
            <div>
              <label
                htmlFor="portfolio"
                className="block text-sm font-medium text-gray-300"
              >
                Portfolio or personal website (Optional)
              </label>
              <input
                type="text"
                name="portfolio"
                value={formData.portfolio}
                id="portfolio"
                autoComplete="url"
                onChange={handleChange}
                className="mt-1 block w-full py-2 px-3 border-2 border-gray-600 bg-opacity-70 bg-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-holic-blue focus:border-holic-blue text-gray-300"
              />
              <ValidationError
                prefix="Portfolio"
                field="portfolio"
                errors={state.errors}
                className="text-red-600 text-sm mt-1"
              />
            </div>

            <div>
              <label
                htmlFor="salary"
                className="block text-sm font-medium text-gray-300"
              >
                Expected Salary($) (Yearly)
              </label>
              <input
                required
                type="number"
                name="salary"
                value={formData.salary}
                id="salary"
                autoComplete="number"
                onChange={handleChange}
                className="mt-1 block w-full py-2 px-3 border-2 border-gray-600 bg-opacity-70 bg-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-holic-blue focus:border-holic-blue text-gray-300"
              />
              <ValidationError
                prefix="Salary"
                field="salary"
                errors={state.errors}
                className="text-red-600 text-sm mt-1"
              />
            </div>
            <div>
              <label
                htmlFor="resume"
                className="block text-sm font-medium text-gray-300"
              >
                Resume (PDF)
              </label>
              <input
                required
                type="file"
                accept="application/pdf"
                value={formData.resume}
                onChange={handleChange}
                name="resume"
                id="resume"
                className="mt-1 block w-full py-2 px-3 border-2 border-gray-600 bg-opacity-70 bg-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-holic-blue focus:border-holic-blue text-gray-300"
              />
              <ValidationError
                prefix="Resume"
                field="resume"
                errors={state.errors}
                className="text-red-600 text-sm mt-1"
              />
            </div>
            <div>
              <label
                htmlFor="letter"
                className="block text-sm font-medium text-gray-300"
              >
                Cover Letter (optional)
              </label>
              <textarea
                type="text"
                name="letter"
                id="letter"
                value={formData.letter}
                onChange={handleChange}
                rows="5"
                className="mt-1 block w-full py-2 px-3 border-2 border-gray-600 bg-opacity-70 bg-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-holic-blue focus:border-holic-blue text-gray-300"
              ></textarea>
              <ValidationError
                prefix="Cover Letter"
                field="letter"
                errors={state.errors}
                className="text-red-600 text-sm mt-1"
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
                href="/terms/career"
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
                href="/policy/career"
                target="_blank"
                className="text-red-400 hover:text-red-500"
              >
                View Policy
              </a>
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-holic-blue to-holic-blue-dark hover:from-holic-blue-light hover:to-holic-blue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-holic-blue"
              disabled={state.submitting}
            >
              {state.submitting ? (
                <span>Submitting...</span>
              ) : (
                <span>Submit Application</span>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OpenPositionForm;
