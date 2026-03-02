import { FiMail, FiMapPin } from "react-icons/fi";
import { FaWhatsapp, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

const Footer = () => {
  const { accentColor } = useTheme();
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Blog", href: "#blog" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { name: "GitHub", icon: FaGithub, href: "https://github.com/kingsleychinecheremibeh" },
    { name: "LinkedIn", icon: FaLinkedin, href: "https://www.linkedin.com/in/kingsley-ibeh-930a073a6" },
{ name: "Twitter", icon: FaTwitter, href: "https://twitter.com" },
    { name: "WhatsApp", icon: FaWhatsapp, href: "https://wa.me/2348137511883" },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer 
      className="border-t"
      style={{ 
        backgroundColor: 'var(--bg-primary)',
        borderColor: 'var(--border-color)'
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-bold" style={{ color: accentColor }}>
              Neche<span style={{ color: 'var(--accent)' }}>.</span>
            </h2>
            <p className="mt-4 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              Front-end developer focused on building fast, clean, and scalable web interfaces with modern technologies.
            </p>
            <div className="mt-6 flex items-center gap-2" style={{ color: 'var(--text-secondary)' }}>
              <FiMapPin style={{ color: 'var(--accent)' }} />
              <span>Lagos, Nigeria</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="transition-colors"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>Get in Touch</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:kingsleyibeh363@gmail.com"
                  className="flex items-center gap-2 transition-colors"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  <FiMail /> kingsleyibeh363@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/2348137511883"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 transition-colors"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  <FaWhatsapp /> +234 813 751 1883
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>Follow Me</h3>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-lg transition-all duration-300"
                  style={{ 
                    backgroundColor: 'var(--accent-subtle)', 
                    color: 'var(--accent)'
                  }}
                  aria-label={social.name}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4" style={{ borderColor: 'var(--border-color)' }}>
          <p className="text-sm" style={{ color: 'var(--text-tertiary)' }}>
            © {currentYear} Neche. All rights reserved.
          </p>
          <p className="text-sm" style={{ color: 'var(--text-tertiary)' }}>
            Built with <span style={{ color: 'var(--accent)' }}>React</span> & <span style={{ color: 'var(--accent)' }}>Tailwind</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
