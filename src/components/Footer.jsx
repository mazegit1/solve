import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.div
      className="footer flex flex-col items-center px-4 py-8 text-start gap-14 border-t border-t-gray-500"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="footer-top  uppercase flex  items-top justify-center  gap-12 lg:gap-24 items-start w-full"
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="card flex flex-col gap-2 text-xl md:text-2xl text-gray-600"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <h1 className='text-black text-3xl md:text-4xl'>Solve</h1>
          <a href="/">HOME</a>
          <a href="/">ROOMS</a>
          <a href="/">JOURNAL</a>
          <a href="/">CONTACT</a>
        </motion.div>
        <motion.div
          className="card flex flex-col gap-2 text-xl md:text-2xl text-gray-600"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <h1 className='text-black text-3xl md:text-4xl'>Shop</h1>
          <a href="/">Home</a>
          <a href="/">Rooms</a>
          <a href="/">LOOKBOOK</a>
          <a href="/">FAQ</a>
        </motion.div>
        <motion.div
          className="card flex flex-col gap-2 text-xl md:text-2xl text-gray-600"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <h1 className='text-black text-3xl md:text-4xl'>WebFlow</h1>
          <a href="/">StyleGuide</a>
          <a href="/">Licensing</a>
          <a href="/">Changelog</a>
        </motion.div>
        <motion.div
          className="card flex flex-col gap-2 text-xl md:text-2xl text-gray-600"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <h1 className='text-black text-3xl md:text-4xl'>Social</h1>
          <a href="/">Instagram</a>
          <a href="/">Github</a>
          <a href="/">Telegram</a>
        </motion.div>
      </motion.div>
      <motion.div
        className="footer-bottom text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className='text-xl md:text-2xl lg:text-3xl'>© 2022 Made by Pawel Gola. Powered by Webflow.</h1>
      </motion.div>
    </motion.div>
  );
};

export default Footer;
