/* eslint-disable no-unused-vars */
import { useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiArrowRight, FiArrowLeft, FiDownload, FiSend, FiChevronRight, FiCalendar, FiUser } from "react-icons/fi";
import { FaGithub, FaExternalLinkAlt, FaQuoteLeft, FaReact, FaJs, FaHtml5, FaCss3, FaGitAlt, FaFigma, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { SiTailwindcss, SiVite, SiFramer, SiNextdotjs } from "react-icons/si";
import profile from "../assets/profile.webp";

// Skills data
const skills = [
  { name: "Next.Js", icon: SiNextdotjs, color: "text-white" },
  { name: "React", icon: FaReact, color: "text-blue-400" },
  { name: "JavaScript", icon: FaJs, color: "text-yellow-400" },
  { name: "HTML5", icon: FaHtml5, color: "text-orange-500" },
  { name: "CSS3", icon: FaCss3, color: "text-blue-500" },
  { name: "Tailwind", icon: SiTailwindcss, color: "text-cyan-400" },
  { name: "Vite", icon: SiVite, color: "text-[#646CFF]" },
  { name: "Framer Motion", icon: SiFramer, color: "text-pink-400" },
  { name: "Git", icon: FaGitAlt, color: "text-orange-600" },
  { name: "Figma", icon: FaFigma, color: "text-purple-500" },
];

// Projects data
const projects = [
  {
    title: "Queue Flow",
    desc: "A real-time virtual queuing application for managing customer flow and reducing wait time.",
    stack: ["Next.js", "Tailwind CSS", "JavaScript"],
    live: "https://queue-flow-seven.vercel.app/",
    github: "https://github.com/kingsleychinecheremibeh/Queue-Flow",
    image: "https://i.postimg.cc/kMVYXHwg/queueflow.png"
  },
  {
    title: "Cine Mate",
    desc: "A dynamic movie discovery platform and personal library that fetches real-time cinema data via API.",
    stack: ["Next.js", "Tailwind CSS", "JavaScript"],
    live: "https://cinevault-topaz.vercel.app/",
    github: "https://github.com/kingsleychinecheremibeh/cinevault",
    image: "https://i.postimg.cc/02MTFQhm/cinemate.png"
  },
  {
    title: "Tax Calculator",
    desc: "Nigerian tax calculator built with React.js and Tailwind, focused on clean UI and accurate calculations.",
    stack: ["React.js", "Tailwind CSS", "JavaScript"],
    live: "https://nigerian-paye-tax-calculator.vercel.app",
    github: "https://github.com/kingsleychinecheremibeh/Nigerian-PAYE-Tax-Calculator",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop"
  },
  {
    title: "Mixzed Cakes",
    desc: "A bakery website built with React.js and Tailwind CSS, with PWA, showcasing products with a clean and responsive design.",
    stack: ["React.js", "Tailwind CSS", "PWA"],
    live: "https://mixzed-cake.vercel.app",
    github: "https://github.com/kingsleychinecheremibeh/Mixzed-cake",
    image: "https://i.pinimg.com/736x/df/c4/4f/dfc44fd4e5a8ad0e3d6f3d612bd833c9.jpg"
  },
  {
    title: "CRM Dashboard",
    desc: "A CRM dashboard template built with React.js and Tailwind CSS, featuring responsive design and interactive components.",
    stack: ["React.js", "Tailwind CSS", "Charts"],
    live: "https://crm-pi-woad.vercel.app",
    github: "https://github.com/kingsleychinecheremibeh/crm",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop"
  },
  {
    title: "E-commerce Product Page",
    desc: "A responsive e-commerce product page built with React.js and Tailwind CSS, focusing on user experience.",
    stack: ["React.js", "CSS", "JavaScript"],
    live: "https://grocery-store-xi-swart.vercel.app",
    github: "https://github.com/kingsleychinecheremibeh/grocery-store",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=600&h=400&fit=crop"
  },
  {
    title: "Static e-commerce Site",
    desc: "A static e-commerce website built with HTML and CSS, showcasing products with a clean and user-friendly design.",
    stack: ["HTML", "Bootstrap", "CSS"],
    live: "https://destiny-essence-and-bliss.vercel.app",
    github: "https://github.com/kingsleychinecheremibeh/destiny-essence-and-bliss",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop"
  },
  {
    title: "Weather App",
    desc: "A weather application that provides real-time weather data with beautiful UI and smooth animations.",
    stack: ["React.js", "API", "Tailwind"],
    live: "https://weather-app-neche.vercel.app",
    github: "https://github.com/kingsleychinecheremibeh/weather-app",
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop"
  },
];

// Testimonials data
const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart",
    text: "Neche delivered an exceptional website that exceeded our expectations. His attention to detail and ability to translate our vision into reality was impressive.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
  },
  {
    name: "Michael Chen",
    role: "Product Manager, InnovateCo",
    text: "Working with Neche was a great experience. He understood our requirements perfectly and delivered a responsive, user-friendly application on time.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
  },
  {
    name: "Emily Davis",
    role: "Founder, DesignHub",
    text: "Neche's expertise in React and Tailwind helped us create a stunning web application. His professionalism and communication skills made the project smooth.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
  },
  {
    name: "David Wilson",
    role: "CTO, StartupX",
    text: "The quality of work Neche provides is outstanding. He consistently delivers clean, performant code and is a pleasure to collaborate with.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop"
  },
];

// Blog posts data
const blogPosts = [
  {
    title: "Building Performant React Applications",
    excerpt: "Learn the best practices for optimizing React apps for better performance and user experience.",
    date: "Dec 15, 2024",
    author: "Neche",
    category: "React",
    readTime: "5 min read"
  },
  {
    title: "Mastering Tailwind CSS: Tips & Tricks",
    excerpt: "Discover advanced Tailwind CSS techniques to speed up your workflow and create beautiful UIs.",
    date: "Dec 8, 2024",
    author: "Neche",
    category: "CSS",
    readTime: "7 min read"
  },
  {
    title: "The Future of Frontend Development",
    excerpt: "Exploring upcoming trends and technologies that will shape the future of web development.",
    date: "Nov 28, 2024",
    author: "Neche",
    category: "Web Dev",
    readTime: "6 min read"
  },
];

// Helper component for accent-colored elements
const AccentText = ({ children, className = "" }) => (
  <span className={className} style={{ color: 'var(--accent)' }}>{children}</span>
);

const AccentBg = ({ children, className = "" }) => (
  <span className={className} style={{ backgroundColor: 'var(--accent)' }}>{children}</span>
);

const Home = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [contactForm, setContactForm] = useState({ name: "", email: "", message: "" });
  const [formStatus, setFormStatus] = useState("");

  const skillsRef = useRef(null);

  // Get unique tech stacks for filter
  const allStacks = ["All", ...new Set(projects.flatMap(p => p.stack))];

  // Filter projects
  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(p => p.stack.includes(activeFilter));

  const scrollSkills = (direction) => {
    if (skillsRef.current) {
      const scrollAmount = 300;
      skillsRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      });
    }
  };

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setFormStatus("sending");
    // Simulate form submission
    setTimeout(() => {
      setFormStatus("success");
      setContactForm({ name: "", email: "", message: "" });
      setTimeout(() => setFormStatus(""), 3000);
    }, 1500);
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div style={{ backgroundColor: 'var(--bg-primary)' }} className="min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center px-6 md:px-16 pt-20 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 -left-40 w-80 h-80 rounded-full blur-3xl" style={{ backgroundColor: 'var(--accent)', opacity: 0.2 }}></div>
          <div className="absolute bottom-1/4 -right-40 w-80 h-80 rounded-full blur-3xl" style={{ backgroundColor: 'var(--accent)', opacity: 0.1 }}></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full max-w-7xl mx-auto relative z-10">
          <motion.div
            className="text-center md:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.p 
              className="font-medium mb-4"
              style={{ color: 'var(--accent)' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <AccentBg className="px-3 py-1 rounded-full text-black text-sm font-bold">
                Welcome to my portfolio
              </AccentBg>
            </motion.p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight" style={{ color: 'var(--text-primary)' }}>
              Hi, I'm <AccentText>Neche</AccentText>
            </h1>
            <p className="text-lg md:text-xl mb-6 max-w-lg mx-auto md:mx-0 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              A front-end developer specializing in building clean, scalable, and performance-optimized web applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a 
                href="#projects" 
                onClick={(e) => handleNavClick(e, "#projects")}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105"
                style={{ backgroundColor: 'var(--accent)', color: 'black' }}
              >
                View Projects <FiArrowRight />
              </a>
              <a 
                href="#contact" 
                onClick={(e) => handleNavClick(e, "#contact")}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border rounded-lg font-semibold transition-all"
                style={{ borderColor: 'var(--accent)', color: 'var(--accent)' }}
              >
                Contact Me
              </a>
            </div>
            
            {/* Resume Download */}
            <div className="mt-8">
              <a 
                href="/resume.pdf" 
                download
                className="inline-flex items-center gap-2 transition-colors"
                style={{ color: 'var(--text-tertiary)' }}
              >
                <FiDownload /> Download Resume
              </a>
            </div>
          </motion.div>
          
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-full blur-3xl" style={{ backgroundColor: 'var(--accent)', opacity: 0.2 }}></div>
              <img 
                src={profile} 
                alt='Neche-profile' 
                className='relative w-64 h-64 md:w-80 md:h-80 object-cover rounded-full shadow-2xl border-4' 
                style={{ borderColor: 'var(--accent)' }}
                loading='lazy'
              />
              {/* Floating badges */}
              <motion.div 
                className="absolute -bottom-4 -left-4 backdrop-blur px-4 py-2 rounded-lg border"
                style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)' }}
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
              >
                <span className="font-semibold" style={{ color: 'var(--accent)' }}>Next.Js</span>
              </motion.div>
              <motion.div 
                className="absolute -top-4 -right-4 backdrop-blur px-4 py-2 rounded-lg border"
                style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)' }}
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 3, delay: 1 }}
              >
                <span className="font-semibold" style={{ color: 'var(--accent)' }}>Tailwind</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="px-6 md:px-16 py-20" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
              About <AccentText>Me</AccentText>
            </h2>
            <div className="w-20 h-1 mx-auto" style={{ backgroundColor: 'var(--accent)' }}></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-semibold mb-6" style={{ color: 'var(--text-primary)' }}>
                Passionate Front-end Developer
              </h3>
              <p className="mb-4 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                I'm a front-end developer focused on building fast, accessible, and scalable web interfaces. I work primarily with React and modern CSS frameworks to turn designs into responsive, production-ready applications.
              </p>
              <p className="mb-6 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                My approach prioritizes clean architecture, performance, and maintainability. I'm comfortable collaborating in team environments, consuming APIs, and translating requirements into intuitive user experiences.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-lg border" style={{ backgroundColor: 'var(--bg-tertiary)', borderColor: 'var(--border-color)' }}>
                  <h4 className="text-2xl font-bold" style={{ color: 'var(--accent)' }}>15+</h4>
                  <p className="text-sm" style={{ color: 'var(--text-tertiary)' }}>Projects Completed</p>
                </div>
                <div className="p-4 rounded-lg border" style={{ backgroundColor: 'var(--bg-tertiary)', borderColor: 'var(--border-color)' }}>
                  <h4 className="text-2xl font-bold" style={{ color: 'var(--accent)' }}>2+</h4>
                  <p className="text-sm" style={{ color: 'var(--text-tertiary)' }}>Years Experience</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="rounded-2xl p-8 border"
              style={{ backgroundColor: 'var(--bg-tertiary)', borderColor: 'var(--border-color)' }}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-xl font-semibold mb-6" style={{ color: 'var(--text-primary)' }}>
                Skills & Tools
              </h3>
              <div className="space-y-6">
                <div>
                  <p className="mb-3" style={{ color: 'var(--text-secondary)' }}>Frontend</p>
                  <div className="flex flex-wrap gap-2">
                    {["React", "JavaScript", "HTML5", "CSS3", "TypeScript"].map(skill => (
                      <span key={skill} className="px-4 py-2 rounded-full text-sm font-medium" style={{ backgroundColor: 'var(--accent-subtle)', borderColor: 'var(--border-color)', border: '1px solid', color: 'var(--accent)' }}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="mb-3" style={{ color: 'var(--text-secondary)' }}>Styling & Frameworks</p>
                  <div className="flex flex-wrap gap-2">
                    {["Tailwind CSS", "Next.Js", "Framer Motion", "Responsive Design"].map(skill => (
                      <span key={skill} className="px-4 py-2 rounded-full text-sm font-medium" style={{ backgroundColor: 'var(--accent-subtle)', borderColor: 'var(--border-color)', border: '1px solid', color: 'var(--accent)' }}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="mb-3" style={{ color: 'var(--text-secondary)' }}>Tools & Others</p>
                  <div className="flex flex-wrap gap-2">
                    {["Git", "GitHub",  "Figma", "Vercel"].map(skill => (
                      <span key={skill} className="px-4 py-2 rounded-full text-sm font-medium" style={{ backgroundColor: 'var(--accent-subtle)', borderColor: 'var(--border-color)', border: '1px solid', color: 'var(--accent)' }}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section with Carousel */}
      <section id="skills" className="px-6 md:px-16 py-20 relative overflow-hidden" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
              My <AccentText>Skills</AccentText>
            </h2>
            <div className="w-20 h-1 mx-auto" style={{ backgroundColor: 'var(--accent)' }}></div>
            <p className="mt-4 max-w-2xl mx-auto" style={{ color: 'var(--text-tertiary)' }}>
              Technologies and tools I work with to bring ideas to life
            </p>
          </motion.div>

          {/* Skills Carousel */}
          <div className="relative">
            <button 
              onClick={() => scrollSkills("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 backdrop-blur rounded-full flex items-center justify-center transition-all"
              style={{ backgroundColor: 'var(--bg-secondary)', color: 'var(--accent)' }}
            >
              <FiArrowLeft size={20} />
            </button>
            
            <div 
              ref={skillsRef}
              className="flex gap-6 overflow-x-auto scrollbar-hide py-4 px-8"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="shrink-0 w-40 h-40 border rounded-2xl p-6 flex flex-col items-center justify-center gap-3 transition-all cursor-pointer"
                  style={{ backgroundColor: 'var(--bg-tertiary)', borderColor: 'var(--border-color)' }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <skill.icon className={`text-4xl ${skill.color}`} />
                  <span className="font-medium" style={{ color: 'var(--text-primary)' }}>{skill.name}</span>
                </motion.div>
              ))}
            </div>

            <button 
              onClick={() => scrollSkills("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 backdrop-blur rounded-full flex items-center justify-center transition-all"
              style={{ backgroundColor: 'var(--bg-secondary)', color: 'var(--accent)' }}
            >
              <FiArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Projects Section with Filter & Sliding Cards */}
      <section id="projects" className="px-6 md:px-16 py-20" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
              My <AccentText>Projects</AccentText>
            </h2>
            <div className="w-20 h-1 mx-auto" style={{ backgroundColor: 'var(--accent)' }}></div>
            <p className="mt-4 max-w-2xl mx-auto" style={{ color: 'var(--text-tertiary)' }}>
              A showcase of my recent work and side projects
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {allStacks.map((stack) => (
              <button
                key={stack}
                onClick={() => setActiveFilter(stack)}
                className="px-5 py-2 rounded-full font-medium transition-all"
                style={{ 
                  backgroundColor: activeFilter === stack ? 'var(--accent)' : 'var(--bg-tertiary)',
                  color: activeFilter === stack ? 'black' : 'var(--text-secondary)'
                }}
              >
                {stack}
              </button>
            ))}
          </div>

          {/* Projects Carousel */}
          <div className="relative">
            <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 px-4"
                 style={{ scrollbarWidth: 'none' }}>
              <AnimatePresence mode="sync">
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.title}
                    className="shrink-0 w-full md:w-100 border rounded-2xl overflow-hidden transition-all snap-center"
                    style={{ backgroundColor: 'var(--bg-tertiary)', borderColor: 'var(--border-color)' }}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                        {project.title}
                      </h3>
                      <p className="text-sm mb-4 line-clamp-2" style={{ color: 'var(--text-tertiary)' }}>
                        {project.desc}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.stack.map((tech) => (
                          <span key={tech} className="text-xs px-3 py-1 rounded-full" style={{ backgroundColor: 'var(--accent-subtle)', borderColor: 'var(--border-color)', border: '1px solid', color: 'var(--accent)' }}>
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-4">
                        <a 
                          href={project.live} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-sm font-medium"
                          style={{ color: 'var(--accent)' }}
                        >
                          <FaExternalLinkAlt /> Live Demo
                        </a>
                        <a 
                          href={project.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-sm font-medium transition-colors"
                          style={{ color: 'var(--text-tertiary)' }}
                        >
                          <FaGithub /> Code
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="px-6 md:px-16 py-20" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
              Client <AccentText>Testimonials</AccentText>
            </h2>
            <div className="w-20 h-1 mx-auto" style={{ backgroundColor: 'var(--accent)' }}></div>
            <p className="mt-4 max-w-2xl mx-auto" style={{ color: 'var(--text-tertiary)' }}>
              What people say about working with me
            </p>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                className="border rounded-2xl p-8 md:p-12"
                style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border-color)' }}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
              >
                <FaQuoteLeft className="text-4xl mb-4" style={{ color: 'var(--accent)', opacity: 0.3 }} />
                <p className="text-lg md:text-xl mb-8 leading-relaxed" style={{ color: 'var(--text-primary)' }}>
                  "{testimonials[currentTestimonial].text}"
                </p>
                <div className="flex items-center gap-4">
                  <img 
                    src={testimonials[currentTestimonial].image}
                    alt={testimonials[currentTestimonial].name}
                    className="w-14 h-14 rounded-full object-cover border-2"
                    style={{ borderColor: 'var(--border-color)' }}
                  />
                  <div>
                    <h4 className="font-semibold" style={{ color: 'var(--text-primary)' }}>
                      {testimonials[currentTestimonial].name}
                    </h4>
                    <p className="text-sm" style={{ color: 'var(--text-tertiary)' }}>
                      {testimonials[currentTestimonial].role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex justify-center gap-4 mt-8">
              <button 
                onClick={prevTestimonial}
                className="w-12 h-12 rounded-full border flex items-center justify-center transition-all"
                style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border-color)', color: 'var(--accent)' }}
              >
                <FiArrowLeft />
              </button>
              <div className="flex items-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className="h-2 rounded-full transition-all"
                    style={{ 
                      width: index === currentTestimonial ? '32px' : '8px',
                      backgroundColor: index === currentTestimonial ? 'var(--accent)' : 'var(--text-tertiary)'
                    }}
                  />
                ))}
              </div>
              <button 
                onClick={nextTestimonial}
                className="w-12 h-12 rounded-full border flex items-center justify-center transition-all"
                style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border-color)', color: 'var(--accent)' }}
              >
                <FiArrowRight />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="px-6 md:px-16 py-20" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
              Latest <AccentText>Blog Posts</AccentText>
            </h2>
            <div className="w-20 h-1 mx-auto" style={{ backgroundColor: 'var(--accent)' }}></div>
            <p className="mt-4 max-w-2xl mx-auto" style={{ color: 'var(--text-tertiary)' }}>
              Thoughts on web development, design, and technology
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.title}
                className="border rounded-xl overflow-hidden transition-all group cursor-pointer"
                style={{ backgroundColor: 'var(--bg-tertiary)', borderColor: 'var(--border-color)' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="h-40 flex items-center justify-center" style={{ background: `linear-gradient(to bottom right, var(--accent-subtle), var(--bg-primary))` }}>
                  <span className="text-4xl font-bold opacity-30" style={{ color: 'var(--accent)' }}>B</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-xs mb-3" style={{ color: 'var(--text-tertiary)' }}>
                    <span className="flex items-center gap-1">
                      <FiCalendar /> {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <FiUser /> {post.author}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 group-hover:transition-colors" style={{ color: 'var(--text-primary)' }}>
                    {post.title}
                  </h3>
                  <p className="text-sm mb-4 line-clamp-2" style={{ color: 'var(--text-tertiary)' }}>
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs px-3 py-1 rounded-full" style={{ backgroundColor: 'var(--accent-subtle)', color: 'var(--accent)' }}>
                      {post.category}
                    </span>
                    <span className="text-sm flex items-center gap-1 transition-all group-hover:gap-2" style={{ color: 'var(--accent)' }}>
                      Read more <FiChevronRight />
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="px-6 py-3 border rounded-lg font-medium transition-all inline-flex items-center gap-2" style={{ borderColor: 'var(--accent)', color: 'var(--accent)' }}>
              View All Posts <FiArrowRight />
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section with Form */}
      <section id="contact" className="px-6 md:px-16 py-20" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
              Get In <AccentText>Touch</AccentText>
            </h2>
            <div className="w-20 h-1 mx-auto" style={{ backgroundColor: 'var(--accent)' }}></div>
            <p className="mt-4 max-w-2xl mx-auto" style={{ color: 'var(--text-tertiary)' }}>
              Have a project in mind? Let's talk about it
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-semibold mb-6" style={{ color: 'var(--text-primary)' }}>
                Let's work together
              </h3>
              <p className="mb-8 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                I'm currently available for freelance projects and full-time opportunities. 
                If you have a project that needs some creative touch, feel free to reach out.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'var(--accent-subtle)', color: 'var(--accent)' }}>
                    <FiSend size={20} />
                  </div>
                  <div>
                    <p className="text-sm" style={{ color: 'var(--text-tertiary)' }}>Email</p>
                    <a href="mailto:kingsleyibeh363@gmail.com" className="transition-colors" style={{ color: 'var(--text-primary)' }}>
                      kingsleyibeh363@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'var(--accent-subtle)', color: 'var(--accent)' }}>
                    <FaWhatsapp size={20} />
                  </div>
                  <div>
                    <p className="text-sm" style={{ color: 'var(--text-tertiary)' }}>WhatsApp</p>
                    <a href="https://wa.me/2348137511883" className="transition-colors" style={{ color: 'var(--text-primary)' }}>
                      +234 813 751 1883
                    </a>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8">
                <p className="mb-4" style={{ color: 'var(--text-tertiary)' }}>Follow me on</p>
                <div className="flex gap-4">
                  <a href="https://github.com/kingsleychinecheremibeh" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg flex items-center justify-center transition-all" style={{ backgroundColor: 'var(--accent-subtle)', color: 'var(--accent)' }}>
                    <FaGithub />
                  </a>
                  <a href="https://www.linkedin.com/in/kingsley-ibeh-930a073a6" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg flex items-center justify-center transition-all" style={{ backgroundColor: 'var(--accent-subtle)', color: 'var(--accent)' }}>
                    <FaLinkedin />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <form onSubmit={handleContactSubmit} className="border rounded-2xl p-8" style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border-color)' }}>
                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block mb-2 text-sm" style={{ color: 'var(--text-tertiary)' }}>Name</label>
                    <input 
                      id="name"
                      type="text" 
                      name="name"
                      autoComplete="name"
                      value={contactForm.name}
                      onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg focus:outline-none transition-colors"
                      style={{ backgroundColor: 'var(--bg-tertiary)', border: '1px solid var(--border-color)', color: 'var(--text-primary)' }}
                      placeholder="Your name"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm" style={{ color: 'var(--text-tertiary)' }}>Email</label>
                    <input 
                      type="email" 
                      name="email"
                      autoComplete="email"
                      id="email"
                      value={contactForm.email}
                      onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg focus:outline-none transition-colors"
                      style={{ backgroundColor: 'var(--bg-tertiary)', border: '1px solid var(--border-color)', color: 'var(--text-primary)' }}
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block mb-2 text-sm" style={{ color: 'var(--text-tertiary)' }}>Message</label>
                    <textarea 
                      id="message"
                      name="message"
                      autoComplete="message"
                      value={contactForm.message}
                      onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg focus:outline-none transition-colors h-32 resize-none"
                      style={{ backgroundColor: 'var(--bg-tertiary)', border: '1px solid var(--border-color)', color: 'var(--text-primary)' }}
                      placeholder="Tell me about your project..."
                      required
                    ></textarea>
                  </div>

                  <button 
                    type="submit"
                    disabled={formStatus === "sending" || formStatus === "success"}
                    className={`w-full py-4 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 ${
                      formStatus === "success" ? "text-white" : ""
                    }`}
                    style={{ 
                      backgroundColor: formStatus === "success" ? "#22c55e" : 'var(--accent)',
                      color: formStatus === "success" ? 'white' : 'black'
                    }}
                  >
                    {formStatus === "sending" ? (
                      <>Sending...</>
                    ) : formStatus === "success" ? (
                      <>Message Sent! ✓</>
                    ) : (
                      <>Send Message <FiSend /></>
                    )}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
