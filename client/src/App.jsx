import { useState } from "react";
import axios from "axios";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    website: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await axios.post(
        "http://localhost:5000/api/leads",
        formData
      );

      setSuccess(response.data.message);

      setFormData({
        name: "",
        email: "",
        company: "",
        website: "",
      });
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#050816] text-white overflow-hidden relative">

      {/* Background Glow */}
      <div className="absolute w-[500px] h-[500px] bg-blue-600 opacity-20 blur-3xl rounded-full top-[-100px] left-[-100px]" />

      <div className="absolute w-[400px] h-[400px] bg-indigo-500 opacity-20 blur-3xl rounded-full bottom-[-100px] right-[-100px]" />

      {/* Navbar */}
      <nav className="relative z-10 flex justify-between items-center px-10 py-6">

        <div>
          <h1 className="text-3xl font-bold text-white">
            SimplifIQ
          </h1>

          <p className="text-sm text-blue-300 tracking-widest">
            AI AUTOMATION PLATFORM
          </p>
        </div>

        <div className="hidden md:flex gap-10 text-gray-300 font-medium">
          <a href="#">Home</a>
          <a href="#">Features</a>
          <a href="#">Reports</a>
          <a href="#">About</a>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative z-10 flex flex-col items-center justify-center px-4 py-16">

        <div className="text-center max-w-4xl mb-12">

          <div className="inline-block px-5 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-sm mb-6">
            AI-Powered Lead Intelligence System
          </div>

          <h1 className="text-6xl font-extrabold leading-tight mb-6">

            Generate <span className="text-blue-400">
              AI Business Audits
            </span>

            <br />

            In Seconds
          </h1>

          <p className="text-gray-400 text-xl leading-relaxed">
            Automate lead enrichment, business analysis,
            PDF reporting, and outreach workflows using AI.
          </p>
        </div>

        {/* Form Card */}
        <div className="w-full max-w-2xl backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl shadow-2xl p-10">

          {success && (
            <div className="bg-green-500/20 border border-green-500/20 text-green-200 p-4 rounded-2xl mb-6">
              {success}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">

            <div>
              <label className="block text-gray-300 mb-2">
                Full Name
              </label>

              <input
                type="text"
                name="name"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-[#0f172a] border border-gray-700 rounded-2xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-gray-300 mb-2">
                Work Email
              </label>

              <input
                type="email"
                name="email"
                placeholder="john@company.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-[#0f172a] border border-gray-700 rounded-2xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-gray-300 mb-2">
                Company Name
              </label>

              <input
                type="text"
                name="company"
                placeholder="Vercel"
                value={formData.company}
                onChange={handleChange}
                required
                className="w-full bg-[#0f172a] border border-gray-700 rounded-2xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-gray-300 mb-2">
                Company Website
              </label>

              <input
                type="text"
                name="website"
                placeholder="https://company.com"
                value={formData.website}
                onChange={handleChange}
                required
                className="w-full bg-[#0f172a] border border-gray-700 rounded-2xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 rounded-2xl bg-blue-600 hover:bg-blue-700 transition-all duration-300 text-white text-lg font-semibold shadow-lg shadow-blue-500/30"
            >
              {loading
                ? "Generating AI Audit..."
                : "Generate Business Audit"}
            </button>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;