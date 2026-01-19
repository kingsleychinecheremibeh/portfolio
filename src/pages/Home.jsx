
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import profile from '../assets/profile.webp'
const Home = () => {
  return (
    <section
      id='home'
      className="min-h-screen flex items-center px-6 md:px-16 bg-gray-950 relative overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full px-4 md:px-8 lg:px-16 justify-items-center md:justify-items-start lg:justify-items-end">
        <motion.div
          className='text-center md:text-left w-full'
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Hi, I'm Neche
          </h1> 
          <p className="text-lg mb-6 max-w-md mx-auto md:mx-0 text-gray-300">
            I'm a front-end developer specializing in building clean, scalable and performance-optimized web applications. Explore my projects below
          </p>
          <a href="/project" className="inline-block px-6 py-3 rounded shadow bg-orange-500 text-black transition">View Projects</a>
          <a href='/contact' className="ml-4 inline-block px-6 py-3 border border-orange-500 text-orange-500 rounded hover:bg-orange-500 hover:text-black transition">Contact Me</a>
        </motion.div>
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <img src={profile} alt='Neche-profile' className='w-64 h-64 md:w-72 md:h-72 object-cover rounded-full shadow-lg' loading='lazy' decoding='async' width={288} height={288} />
        </motion.div>
          
          

      </div>
    </section>
  );
};

export default Home;