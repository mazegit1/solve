import React from 'react';
import { motion } from 'framer-motion';

const Loading = () => {
  return (
    <div className="loading bg-gradient-to-r from-[#ffb700] to-[#ff6f00] flex flex-col gap-20 items-center justify-center h-screen relative overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-black opacity-40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 1, repeat: Infinity, repeatType: 'reverse' }}
      />

      <motion.a
        href='home'
        className="relative px-8 py-8 md:px-12 md:py-12 xl:text-8xl md:text-6xl text-4xl text-white border-4 border-white hover:text-[#ffb700] hover:border-[#ffb700] transition-all ease-in-out duration-300 hover:bg-black bg-transparent text-center rounded-full shadow-lg shadow-[#ffb700] hover:shadow-xl"
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.1, rotate: 5, textShadow: '0 0 10px rgba(255, 183, 0, 0.7)' }}
        transition={{ duration: 0.3 }}
      >
        PRESS TO ENTER
      </motion.a>

      <motion.div
        className="absolute bottom-10 flex space-x-3"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 1, repeat: Infinity }}
      >
        <div className="w-6 h-6 bg-white rounded-full animate-pulse"></div>
        <div className="w-6 h-6 bg-white rounded-full animate-pulse"></div>
        <div className="w-6 h-6 bg-white rounded-full animate-pulse"></div>
      </motion.div>
    </div>
  );
};

export default Loading;
