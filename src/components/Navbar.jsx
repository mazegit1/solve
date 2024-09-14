import React, { useState } from 'react';
import { HiMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const hoverEffect = {
    whileHover: { scale: 1.1, color: '#000', borderBottom: '2px solid #000' },
    transition: { duration: 0.3 }
  };

  const menuVariants = {
    hidden: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: -100, transition: { duration: 0.5 } }
  };

  return (
    <>
      <motion.div
        className="header bg-transparent backdrop-blur-md py-8 justify-between fixed px-4 md:px-36 text-2xl md:text-4xl text-white font-light w-full items-center flex z-20"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="header-left"
        >
          <a href='/home' className='text-[#ffcc00]'>LOOKBOOK</a>
        </motion.div>
        <motion.div
          className="header-middle hidden md:block"
        >
          <a href='home' className='text-2xl text-[#ffcc00]  md:text-4xl font-medium'>Solve</a>
        </motion.div>
        <motion.div
          className="header-right hidden md:flex items-center gap-8"
        >
          <motion.div className="wrapper">
            <a href='shop' className='text-[#ffcc00]'>SHOP</a>
          </motion.div>
          <motion.div className="wrapper flex items-center gap-1">
            <a href='shop' className='text-[#ffcc00]'>CART</a>
            <h1 className='bg-[#ffcc00] text-white w-8 pt-[2px] text-center h-10 rounded-full'>0</h1>
          </motion.div>
          <motion.div className="wrapper cursor-pointer" onClick={toggleMenu}>
            {isMenuOpen ? <IoClose size={40} className='text-[#ffcc00]'/> : <HiMenuAlt3 size={40} className='text-[#ffcc00]'/>}
          </motion.div>
        </motion.div>
        <motion.div
          className="md:hidden flex items-center cursor-pointer"
          onClick={toggleMenu}
        >
          00
          {isMenuOpen ? <IoClose size={40} className='text-[#ffcc00]'/> : <HiMenuAlt3 size={40} className='text-[#ffcc00]'/>}
        </motion.div>
      </motion.div>

      {isMenuOpen && (
        <motion.div
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={menuVariants}
          className="menu bg-[#ffffff25] backdrop-blur-xl text-white flex flex-col justify-center gap-12 items-center py-20 fixed top-0 left-0 w-full h-screen z-10"
        >
          <motion.a href='/' className="text-5xl xl:text-7xl font-medium text-[#ffcc00]" {...hoverEffect}>
            Home
          </motion.a>
          <motion.a href='oslo' className="text-5xl xl:text-7xl font-medium text-[#ffcc00]" {...hoverEffect}>
            Oslo
          </motion.a>
          <motion.a href='lisbon' className="text-5xl xl:text-7xl font-medium text-[#ffcc00]" {...hoverEffect}>
            Lisbon
          </motion.a>
          <motion.a href='berlin' className="text-5xl xl:text-7xl font-medium text-[#ffcc00]" {...hoverEffect}>
            Berlin
          </motion.a>
          <motion.a href='madrid' className="text-5xl xl:text-7xl font-medium text-[#ffcc00]" {...hoverEffect}>
            Madrid
          </motion.a>
        </motion.div>
      )}
    </>
  );
};

export default Navbar;
