// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"
import { FiMail, FiGithub, FiLinkedin, FiMessageCircle, } from "react-icons/fi"

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen px-6 md:px-16 py-20 bg-black text-gray-300 flex items-center">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2 className="text-3xl md:text-4xl font-bold text-white mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Get In Touch<span className="text-orange-500">.</span>
        </motion.h2>  
        <motion.p className="text-gray-400 mb-8 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          I'm currently open to frontend projects and collaborations. Whether you have a question, proposal, or just want to say hi, feel free to reach out.
        </motion.p>
        <motion.a href="mailto:kingsleyibeh363@gmail.com"
          className="inline-flex items-center gap-2 px-8 py-4 bg-orange-600 text-black font-semibold rounded-lg shadow-lg hover:bg-orange-500 transition"
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3 }}
        >
          <FiMail size={20} /> Email Me
        </motion.a>
        <motion.div className="flex justify-center gap-6 mt-12 text-gray-400 text-sm flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <a href="https://wa.me/2348137511883?text=Hi%20Neche,%20I%20would%20like%20to%20discuss%20a%20project."
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-1 hover:text-orange-500 transition">
            <FiMessageCircle size={18} /> WhatsApp
          </a>
          <a href="https://github.com/kingsleychinecheremibeh" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-1 hover:text-orange-500 transition">
            <FiGithub size={18} /> GitHub
          </a>
          <a href="https://www.linkedin.com/in/kingsley-ibeh-930a073a6" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-1 hover:text-orange-500 transition">
            <FiLinkedin size={18} /> LinkedIn
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;