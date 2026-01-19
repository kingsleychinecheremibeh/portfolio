//eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id='about' className='min-h-screen px-6 md:px-16 py-20 flex items-center bg-black text-gray-300'>
      <div className='max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-start'>
        <motion.div
          initial={{ opacity: 0, y: 30}}
          whileInView={{ opacity:1, y: 0}}
          transition={{ duration: 0.6}}
          viewport={{ once: true}}
        >
          <h2 className='text-3xl md:text-4xl font-bold text-white mb-6'>
            About Me
          </h2>
          <p className='mb-4 leading-relaxed'>
            I'm a front-end developer focused on building fast, accessible, and scalable web interfaces.
          </p>
          <p className='mb-4 leading-relaxed'>
            I work primarily with React and modern CSS frameworks to turn designs into responsive, production-ready applications. My approach prioritizes clean architecture, performance, and maintainability.
          </p>
          <p className='mb-4 leading-relaxed'>
            I’m comfortable collaborating in team environments, consuming APIs, and translating requirements into intuitive user experiences.
          </p>
        </motion.div>  
        <motion.div
          className='border border-orange-500/30 rounded-xl p-8'
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h3 className='text-lg font-semibold text-white mb-6'>
            Skills & Tools
          </h3>
          <div className='space-y-6 text-sm'>
            <div>
              <p className='text-gray-400 mb-2'>Frontend</p>
              <div className='flex flex-wrap gap-2'>
                {["React", "Javascript", "HTML5", "CSS3"].map(skill => (
                  <span key={skill} className='px-3 py-1 rounded-full border border-orange-500/30 text-orange-400'>{skill}</span>
                ))}
              </div>
            </div>
            <div>
              <p className='text-gray-400 mb-2'>Styling</p>
              <div className='flex flex-wrap gap-2'>
                {["Tailwind CSS", "Responsive Design"].map(skill => (
                  <span key={skill} className='px-3 py-1 rounded-full border border-orange-500/30 text-orange-400'>{skill}</span>
                ))}
              </div>
            </div>
            <div>
              <p className='text-gray-400 mb-2'>Tools</p>
              <div className='flex flex-wrap gap-2'>
                {["GIT", "GitHub", "Vite", "Framer Motion"].map(skill => (
                  <span key={skill} className='px-3 py-1 rounded-full border border-orange-500/30 text-orange-400'>{skill}</span>
                ))}
              </div>
            </div>
          </div>
          </motion.div>  
      </div>
    </section>
  )
}

export default About;