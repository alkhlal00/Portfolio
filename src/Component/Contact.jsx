import { useState } from "react";
import emailjs from "emailjs-com";
import { toast, Toaster } from "react-hot-toast"; // <-- NEW

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, message } = formData;

    if (!name || !email || !message) {
      toast.error("Please fill out all fields.");
      return;
    }

    emailjs
      .send(
        "service_cdqrhiw",
        "template_7zo8ece",
        {
          from_name: name,
          from_email: email,
          message: message,
        },
        "Qw0ZWEvD_uE-llnH7"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error(error.text);
          toast.error("Failed to send the message. Please try again.");
        }
      );
  };

  return (
    <section  className="py-20 bg-gradient-to-b from-black via-gray-900 to-black">
      <Toaster position="top-right" reverseOrder={false} /> {/* NEW */}
      <div className="max-w-7xl mx-auto px-6"  id="contact">
        <h2 className="text-5xl font-extrabold text-center text-white mb-16">
          Let's Connect
        </h2>

        <div className="flex flex-col md:flex-row gap-10">
          {/* Contact Form */}
          <form 
            onSubmit={handleSubmit} 
            className="bg-white/10 backdrop-blur-lg p-10 rounded-2xl shadow-2xl w-full md:w-2/3 space-y-6 flex flex-col justify-between"
          >
            <div className="space-y-6">
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-300" htmlFor="name">
                  Name
                </label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  required 
                  className="w-full px-4 py-3 bg-black/30 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-300" htmlFor="email">
                  Email
                </label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  required 
                  className="w-full px-4 py-3 bg-black/30 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-300" htmlFor="message">
                  Message
                </label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="5" 
                  value={formData.message} 
                  onChange={handleChange} 
                  required 
                  className="w-full px-4 py-3 bg-black/30 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                ></textarea>
              </div>
            </div>

            <button 
              type="submit" 
              className="w-full py-3 px-6 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 text-white rounded-full font-semibold transition duration-300 ease-in-out transform hover:scale-105 mt-6"
            >
              Send Message
            </button>
          </form>

          {/* Personal Info Card */}
          <div className="w-full md:w-1/3">
            <div className="h-full flex flex-col items-center justify-center bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl text-center text-white space-y-6 hover:-translate-y-2 transform transition">
              <img 
                src="profil.jpg" 
                alt="Profile" 
                className="w-24 h-24 rounded-full object-cover border-4 border-purple-500"
              />
              <h3 className="text-2xl font-bold">Abderrazaq Moustaoui</h3>
              <p className="text-purple-400 font-medium">Full Stack Developer</p>

              <div className="space-y-2 text-sm text-gray-300">
                <div>📍 Settat, Morocco</div>
                <div>✉️ abderrazaqmoustaoui@outlook.com</div>
                <div>☎️ +212 713 119 767</div>
              </div>

              {/* Buttons */}
              <div className="flex flex-col gap-4 w-full pt-6">
                <a 
                  href="https://www.linkedin.com/in/abderrazaq-moustaoui/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full py-3 bg-blue-600 hover:bg-blue-700 rounded-full font-semibold text-white transition text-center"
                >
                  Connect on LinkedIn
                </a>
                <a 
                  href="https://wa.link/8ough5" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full py-3 bg-green-500 hover:bg-green-600 rounded-full font-semibold text-white transition text-center"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
