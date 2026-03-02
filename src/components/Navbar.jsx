import { useState, useEffect, useRef } from "react";
import { FiSun, FiMoon, FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [colorDropdownOpen, setColorDropdownOpen] = useState(false);
  const colorDropdownRef = useRef(null);
  
  const { darkMode, toggleTheme, accentColor, setAccentColor, accentColors } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (colorDropdownRef.current && !colorDropdownRef.current.contains(event.target)) {
        setColorDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Blog", href: "#blog" },
    { name: "Contact", href: "#contact" },
    { name: "Resume", href: "/resume.pdf", target: "_blank" },
  ];

  const handleNavClick = (e, href) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsOpen(false);
  };

  const handleColorChange = (color) => {
    setAccentColor(color);
    setColorDropdownOpen(false);
  };

  // Get current accent color
  const currentAccent = accentColors.find(c => c.name === accentColor);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/95 backdrop-blur-md border-b border-(--accent)]/20 py-3"
          : "bg-transparent py-5"
      }`}
      style={{ borderColor: 'var(--border-color)' }}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="text-2xl font-bold text-white">
          Neche<span style={{ color: 'var(--accent)' }}>.</span>
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center space-x-1">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                target={link.target}
                rel={link.target === "_blank" ? "noopener noreferrer" : ""}
                className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200 rounded-lg hover:bg-(--accent)]/5"
                style={{ 
                  color: 'var(--text-secondary)',
                  transition: 'color 0.2s, background-color 0.2s'
                }}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Theme Toggle + Color Selector + CTA */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Color Picker */}
          <div className="relative" ref={colorDropdownRef}>
            <button
              onClick={() => setColorDropdownOpen(!colorDropdownOpen)}
              className="p-2 rounded-lg flex items-center gap-2 transition-colors"
              style={{ 
                backgroundColor: 'var(--accent-subtle)', 
                color: 'var(--accent)' 
              }}
              aria-label="Select color"
            >
              <div 
                className="w-4 h-4 rounded-full border-2 border-white/30"
                style={{ backgroundColor: currentAccent?.color }}
              />
              <FiChevronDown size={16} />
            </button>
            
            {/* Color Dropdown */}
            {colorDropdownOpen && (
              <div 
                className="absolute right-0 mt-2 py-2 w-40 rounded-lg shadow-xl z-50"
                style={{ 
                  backgroundColor: 'var(--bg-secondary)',
                  border: '1px solid var(--border-color)'
                }}
              >
                {accentColors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => handleColorChange(color.name)}
                    className="w-full px-4 py-2 flex items-center gap-3 text-left hover:bg-(--accent-subtle)] transition-colors"
                    style={{ 
                      color: accentColor === color.name ? 'var(--accent)' : 'var(--text-secondary)'
                    }}
                  >
                    <div 
                      className="w-4 h-4 rounded-full border-2"
                      style={{ 
                        backgroundColor: color.color,
                        borderColor: accentColor === color.color ? 'white' : color.color
                      }}
                    />
                    <span className="capitalize text-sm">{color.name}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg transition-colors"
            style={{ 
              backgroundColor: 'var(--accent-subtle)', 
              color: 'var(--accent)' 
            }}
            aria-label="Toggle theme"
          >
            {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
          </button>

          {/* CTA Button */}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            className="px-5 py-2.5 font-semibold rounded-lg transition-colors"
            style={{ 
              backgroundColor: 'var(--accent)', 
              color: 'black'
            }}
          >
            Let's Talk
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="lg:hidden p-2 text-white"
          aria-label="Toggle menu"
        >
          {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 w-full transition-all duration-300 ${
          isOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-5 pointer-events-none"
        }`}
        style={{ 
          backgroundColor: 'var(--bg-primary)',
          borderColor: 'var(--border-color)'
        }}
      >
        <ul className="flex flex-col py-6 px-6 space-y-2">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                target={link.target}
                rel={link.target === "_blank" ? "noopener noreferrer" : ""}
                className="block px-4 py-3 rounded-lg transition-colors"
                style={{ 
                  color: 'var(--text-secondary)',
                  backgroundColor: 'transparent'
                }}
              >
                {link.name}
              </a>
            </li>
          ))}
          <li className="pt-4 flex flex-col gap-3">
            {/* Mobile Color Picker */}
            <div className="grid grid-cols-2 gap-2">
              {accentColors.map((color) => (
                <button
                  key={color.name}
                  onClick={() => handleColorChange(color.name)}
                  className="p-3 rounded-lg flex items-center justify-center gap-2 transition-colors"
                  style={{ 
                    backgroundColor: accentColor === color.name ? 'var(--accent)' : 'var(--accent-subtle)',
                    color: accentColor === color.name ? 'black' : 'var(--accent)'
                  }}
                >
                  <div 
                    className="w-4 h-4 rounded-full border-2 border-white/30"
                    style={{ backgroundColor: color.color }}
                  />
                  <span className="capitalize text-sm">{color.name}</span>
                </button>
              ))}
            </div>
            
            <div className="flex gap-3">
              <button
                onClick={toggleTheme}
                className="flex-1 p-3 rounded-lg flex items-center justify-center gap-2 transition-colors"
                style={{ 
                  backgroundColor: 'var(--accent-subtle)', 
                  color: 'var(--accent)' 
                }}
              >
                {darkMode ? <><FiSun size={20} /> Light</> : <><FiMoon size={20} /> Dark</>}
              </button>
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                className="flex-1 p-3 font-semibold rounded-lg text-center transition-colors"
                style={{ 
                  backgroundColor: 'var(--accent)', 
                  color: 'black'
                }}
              >
                Let's Talk
              </a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
