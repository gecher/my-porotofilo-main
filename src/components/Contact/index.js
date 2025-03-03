import { useState } from "react";
import emailjs from "emailjs-com";
import EmailIcon from "@mui/icons-material/Email";

export default function Contact() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", { message: "Test" }, "YOUR_PUBLIC_KEY")
      .then(() => setLoading(false))
      .catch(() => setLoading(false));
  };

  return (
    <section id="contact" className="min-h-screen bg-gray-900 text-white flex flex-col items-center px-4 sm:px-8 lg:px-16 py-12">
      <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-center">Contact</h2>

      <form 
        onSubmit={handleSubmit} 
        className="bg-gray-800 p-6 sm:p-8 rounded-lg shadow-lg w-full max-w-md sm:max-w-lg lg:max-w-xl flex flex-col"
      >
        <input 
          type="text" 
          placeholder="Name" 
          required 
          className="w-full p-3 mb-4 rounded bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input 
          type="email" 
          placeholder="Email" 
          required 
          className="w-full p-3 mb-4 rounded bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <textarea 
          placeholder="Message" 
          rows="4" 
          required 
          className="w-full p-3 mb-4 rounded bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>

        <button 
          type="submit" 
          className="w-full flex items-center justify-center bg-blue-600 hover:bg-blue-700 p-3 mt-4 rounded transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={loading}
        >
          {loading ? "Sending..." : <><EmailIcon className="mr-2" /> Send Message</>}
        </button>
      </form>
    </section>
  );
}
