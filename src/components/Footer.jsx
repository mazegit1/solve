import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.div
      className="footer bg-[#e3e3e3] flex flex-col items-center px-4 py-8 text-start gap-14 border-t border-t-gray-500"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="footer-top  uppercase grid gap-56 md:grid-cols-3 grid-cols-2 grid-rows-2 justify-center  xl:grid-cols-3  items-center "
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="card flex flex-col gap-2 text-xl md:text-2xl text-gray-600"
          transition={{ duration: 0.3 }}
        >
          <h1 className='text-black text-3xl md:text-4xl'>Solve</h1>
          <a href="/" className='hover:scale-105 transition-all ease-in-out duration-200 hover:underline hover:text-black'>HOME</a>
          <a href="/" className='hover:scale-105 transition-all ease-in-out duration-200 hover:underline hover:text-black'>ROOMS</a>
          <a href="/" className='hover:scale-105 transition-all ease-in-out duration-200 hover:underline hover:text-black'>JOURNAL</a>
          <a href="contact" className='hover:scale-105 transition-all ease-in-out duration-200 hover:underline hover:text-black'>CONTACT</a>
        </motion.div>
        <motion.div
          className="card flex flex-col gap-2 text-xl md:text-2xl text-gray-600"
          transition={{ duration: 0.3 }}
        >
          <h1 className='text-black text-3xl md:text-4xl'>Shop</h1>
          <a href="/" className='hover:scale-105 transition-all ease-in-out duration-200 hover:underline hover:text-black'>Home</a>
          <a href="/" className='hover:scale-105 transition-all ease-in-out duration-200 hover:underline hover:text-black'>Rooms</a>
          <a href="/" className='hover:scale-105 transition-all ease-in-out duration-200 hover:underline hover:text-black'>LOOKBOOK</a>
          <a href="/" className='hover:scale-105 transition-all ease-in-out duration-200 hover:underline hover:text-black'>FAQ</a>
        </motion.div>

        <motion.div
          className="card flex flex-col gap-2 text-xl md:text-2xl text-gray-600"
          transition={{ duration: 0.3 }}
        >
          <h1 className='text-black text-3xl md:text-4xl'>Social</h1>
          <a href="https://www.instagram.com/xelil_ovw/" className='hover:scale-105 transition-all ease-in-out duration-200 hover:underline hover:text-black'>Instagram</a>
          <a href="https://github.com/mazegit1" className='hover:scale-105 transition-all ease-in-out duration-200 hover:underline hover:text-black'>Github</a>
          <a href="https://t.me/mazegit" className='hover:scale-105 transition-all ease-in-out duration-200 hover:underline hover:text-black'>Telegram</a>
        </motion.div>
      </motion.div>
      <motion.div
        className="footer-bottom text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className='text-xl md:text-2xl lg:text-3xl'>© 2024 Made by Huseyn Khalil. Powered by JetAcademy.</h1>
      </motion.div>
    </motion.div>
  );
};

export default Footer;
