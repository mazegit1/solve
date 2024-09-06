import React from 'react';
import { motion } from 'framer-motion';
import lookbook from '../images/lookbook.png';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const LookBook = () => {
  return (
    <>
    <Navbar/>
      <div className="lookbook py-16 flex flex-col lg:flex-row items-center lg:justify-between gap-12 px-6 lg:px-12">
        <motion.div 
          className="lookbook-left w-full lg:w-1/2" 
          initial={{ opacity: 0, x: -50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8 }}
        >
          <img src={lookbook} className="rounded-xl w-full" alt="Lookbook" />
        </motion.div>

        <motion.div 
          className="lookbook-right flex flex-col gap-16 w-full lg:w-1/2 text-start" 
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="wrapper border-b border-b-gray-500 pb-8"
            initial={{ opacity: 0, x: 50 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-6xl">Details</h1>
            <p className="text-gray-600 text-xl md:text-2xl mt-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus veniam nulla, distinctio debitis nesciunt tempore voluptates esse eveniet velit necessitatibus facere provident, quaerat odit cumque nobis eum culpa odio quae.
            </p>
            <ul className="mt-4">
              <li className="text-xl md:text-2xl text-gray-600">Proin fermentum leo vel orci porta non pulvinar</li>
              <li className="text-xl md:text-2xl text-gray-600">Diam phasellus vestibulum</li>
              <li className="text-xl md:text-2xl text-gray-600">Quisque egestas diam in arcu cursus</li>
            </ul>
          </motion.div>

          <motion.div 
            className="wrapper border-b border-b-gray-500 pb-8"
            initial={{ opacity: 0, x: 50 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h1 className="text-4xl md:text-6xl">Delivery</h1>
            <p className="text-gray-600 text-xl md:text-2xl mt-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus veniam nulla, distinctio debitis nesciunt tempore voluptates esse eveniet velit necessitatibus facere provident, quaerat odit cumque nobis eum culpa odio quae.
            </p>
          </motion.div>

          <motion.div 
            className="wrapper"
            initial={{ opacity: 0, x: 50 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl">Returns</h1>
            <p className="text-gray-600 text-xl md:text-2xl mt-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus veniam nulla, distinctio debitis nesciunt tempore voluptates esse eveniet velit necessitatibus facere provident, quaerat odit cumque nobis eum culpa odio quae.
            </p>
          </motion.div>
        </motion.div>
      </div>
      <Footer/>
    </>
  );
};

export default LookBook;
