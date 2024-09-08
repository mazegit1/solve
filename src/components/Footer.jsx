import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.div
      className="footer bg-[#f2f2f2] flex flex-col items-center px-6 py-16 text-start border-t border-gray-400"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="footer-top grid gap-8 md:grid-cols-3 grid-cols-2 justify-center items-start w-full max-w-7xl"
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="card flex flex-col gap-4 text-lg md:text-xl text-gray-700"
          transition={{ duration: 0.3 }}
        >
          <h1 className='text-black text-3xl md:text-4xl font-semibold'>Solve</h1>
          <a href="/" className='hover:text-[#ffcc00] transition-all ease-in-out duration-300 text-3xl  hover:underline'>HOME</a>
          <a href="/" className='hover:text-[#ffcc00] transition-all ease-in-out duration-300 text-3xl hover:underline'>ROOMS</a>
          <a href="/" className='hover:text-[#ffcc00] transition-all ease-in-out duration-300 text-3xl hover:underline'>JOURNAL</a>
          <a href="contact" className='hover:text-[#ffcc00] transition-all ease-in-out duration-300 text-3xl hover:underline'>CONTACT</a>
        </motion.div>

        <motion.div
          className="card flex flex-col gap-4 text-lg md:text-xl text-gray-700"
          transition={{ duration: 0.3 }}
        >
          <h1 className='text-black text-3xl md:text-4xl font-semibold'>Shop</h1>
          <a href="/" className='hover:text-[#ffcc00] transition-all ease-in-out duration-300 text-3xl hover:underline'>Home</a>
          <a href="/" className='hover:text-[#ffcc00] transition-all ease-in-out duration-300 text-3xl hover:underline'>Rooms</a>
          <a href="/" className='hover:text-[#ffcc00] transition-all ease-in-out duration-300 text-3xl hover:underline'>LOOKBOOK</a>
          <a href="/" className='hover:text-[#ffcc00] transition-all ease-in-out duration-300 text-3xl hover:underline'>FAQ</a>
        </motion.div>

        <motion.div
          className="card flex flex-col gap-4 text-lg md:text-xl text-gray-700"
          transition={{ duration: 0.3 }}
        >
          <h1 className='text-black text-3xl md:text-4xl font-semibold'>Social</h1>
          <a href="https://www.instagram.com/xelil_ovw/" className='hover:text-[#ffcc00] transition-all ease-in-out duration-300 text-3xl hover:underline'>Instagram</a>
          <a href="https://github.com/mazegit1" className='hover:text-[#ffcc00] transition-all ease-in-out duration-300 text-3xl hover:underline'>Github</a>
          <a href="https://t.me/mazegit" className='hover:text-[#ffcc00] transition-all ease-in-out duration-300 text-3xl hover:underline'>Telegram</a>
        </motion.div>
      </motion.div>

      <motion.div
        className="footer-bottom mt-12 text-center text-gray-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className='text-lg md:text-2xl lg:text-3xl'>© 2024 Made by Huseyn Khalil. Powered by JetAcademy.</h1>
      </motion.div>
    </motion.div>
  );
};

export default Footer;
