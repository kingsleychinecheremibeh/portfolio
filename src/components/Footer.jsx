import { FiMail } from "react-icons/fi";
import { FaWhatsapp, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-6 md:px-16 py-10">

      
        <div className="flex flex-col md:flex-row justify-between gap-8">

          <div>
            <h2 className="text-white font-bold text-lg">
              Neche<span className="text-orange-500">.</span>
            </h2>
            <p className="text-sm text-gray-400 mt-2 max-w-sm">
              Front-end developer focused on building fast, clean and scalable web interfaces.
            </p>
          </div>
          <div className="flex gap-12 text-sm">
            <div className="space-y-2">
              <p className="text-white font-medium">Navigation</p>
              <a href="#home" className="block text-gray-400 hover:text-orange-500 transition">Home</a>
              <a href="#project" className="block text-gray-400 hover:text-orange-500 transition">Projects</a>
              <a href="#about" className="block text-gray-400 hover:text-orange-500 transition">About</a>
              <a href="#contact" className="block text-gray-400 hover:text-orange-500 transition">Contact</a>
            </div>

            <div className="space-y-2">
              <p className="text-white font-medium">Connect</p>

              <a
                href="mailto:kingsleyibeh363@gmail.com"
                className="flex items-center gap-2 text-gray-400 hover:text-orange-500 transition"
              >
                <FiMail /> Email
              </a>

              <a
                href=" https://wa.me/2348137511883"
                target="_blank"
                className="flex items-center gap-2 text-gray-400 hover:text-orange-500 transition"
              >
                <FaWhatsapp /> WhatsApp
              </a>

              <a
                href="https://github.com/kingsleychinecheremibeh"
                target="_blank"
                className="flex items-center gap-2 text-gray-400 hover:text-orange-500 transition"
              >
                <FaGithub /> GitHub
              </a>

              <a
                href="https://linkedin.com/in/kingsley-ibeh-930a073a6"
                target="_blank"
                className="flex items-center gap-2 text-gray-400 hover:text-orange-500 transition"
              >
                <FaLinkedin /> LinkedIn
              </a>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-gray-800 pt-4 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} Neche. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;
