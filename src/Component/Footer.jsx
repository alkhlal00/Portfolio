import { handleDownload } from "./script";

export const Footer = () => {
    return (
      <footer className="bg-black text-gray-400 py-8">
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center px-6 space-y-8 md:space-y-0">
  
          <div className="flex flex-col items-center md:items-start space-y-4 text-center md:text-left">
            <p className="text-lg text-gray-500 font-medium">
              Thank you for visiting! ✨
            </p>
            <a
              href="/resume.pdf" 
              download
              onClick={handleDownload}
              className="inline-block bg-purple-600 hover:bg-purple-700  text-white font-semibold py-2 px-6 rounded-full transition"
            >
              Download Resume
            </a>
          </div>
  
          <div className="flex flex-col items-center md:items-end space-y-4 text-center md:text-right">
            <h2 className="text-white text-2xl font-bold">Abderrazaq Moustaoui</h2>
            <div className="flex gap-6">
              <a
                href="https://www.linkedin.com/in/abderrazaq-moustaoui/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-3 rounded-full hover:scale-105 transition "
              >
                <img
                  src="linkedin.png" 
                  alt="LinkedIn"
                  className="w-6 h-6"
                />
              </a>
              <a
                href="https://wa.link/8ough5" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-3 rounded-full hover:scale-105 transition"
              >
                <img
                  src="whatsapp.png" 
                  alt="WhatsApp"
                  className="w-6 h-6"
                />
              </a>
            </div>
          </div>
  
        </div>
      </footer>
    );
};