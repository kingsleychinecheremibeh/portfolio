// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const projects = [
  {
    title: "Tax Calculator",
    desc: "Nigerian tax calculator built with React.js and Tailwind, focused on clean UI and accurate calculations.",
    stack: ["React.js", "Tailwind CSS","JavaScript"],
    live: "https://nigerian-paye-tax-calculator.vercel.app",
    github: "https://github.com/kingsleychinecheremibeh/Nigerian-PAYE-Tax-Calculator"
  },
  {
    title: "Mixzed Cakes",
    desc: "A bakery website built with React.js and Tailwind CSS, with PWA, showcasing products with a clean and responsive design.",
    stack: ["React.js", "Tailwind CSS","JavaScript"],
    live: "https://mixzed-cake.vercel.app",
    github: "https://github.com/kingsleychinecheremibeh/Mixzed-cake"
  },
  {
    title: "CRM Dashboard",
    desc: "A CRM dashboard template built with React.js and Tailwind CSS, featuring responsive design and interactive components.",
    stack: ["React.js", "Tailwind CSS","JavaScript"],
    live: "https://crm-pi-woad.vercel.app",
    github: "https://github.com/kingsleychinecheremibeh/crm"
  },
  {
    title: "E-commerce Product Page",
    desc: "A responsive e-commerce product page built with React.js and Tailwind CSS, focusing on user experience and clean design.",
    stack: ["CSS","JavaScript"],
    live: "https://grocery-store-xi-swart.vercel.app",
    github: "https://github.com/kingsleychinecheremibeh/grocery-store"
  },
  {
    title: "Static e-commerce Site",
    desc: "A static e-commerce website built with HTML and CSS, showcasing products with a clean and user-friendly design.",
    stack: ["HTML","Bootstrap","CSS"],
    live: "https://destiny-essence-and-bliss.vercel.app",
    github: "https://github.com/kingsleychinecheremibeh/destiny-essence-and-bliss"
  },

];

const Project = () => {
  return (
    <section id='project' className='px-6 md:px-16 py-20 bg-950'>
      <motion.h2
        className='text-3xl font-bold text-white mb-12'
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0}}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Projects<span className='text-orange-500'>.</span>
      </motion.h2>  

      <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            className='bg-black border border-gray-800 rounded-xl p-6 hover:border-orange-500 transition cursor-pointer'
            initial={{ opacity: 0, y: 30}}
            whileInView={{ opacity: 1, y: 0}}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            onClick={() => window.open(project.live, "_blank")}
          >
            <h3 className='text-xl font-semibold text-white mb-2'>
              {project.title}
            </h3>
            <p className='text-gray-400 text-sm leading-relaxed mb-4'>
              {project.desc}
            </p>
            <div className='flex flex-wrap gap-2 mb-5'>
              {project.stack.map((tech) => (
                <span key={tech} className='text-xs px-3 py-1 rounded-full border border-orange-500/30 text-orange-400 bg-orange-500/5'>{tech}</span>
              ))}
            </div>
            <div className='flex gap-4 text-sm'>
              <a href={project.live} target='_blank' rel='noopener noreferrer' onClick={(e) => e.stopPropagation()}className='text-orange-500 font-medium hover:underline'>
                Live Demo &gt;
              </a>  
              <a href={project.github} target='_blank' rel='noopener noreferrer' onClick={(e) => e.stopPropagation()} className='text-gray-400 font-medium hover:text-orange-500'>
                GitHub &gt;
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
};

export default Project;