import React, { useState } from 'react';
import { HiMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";  // Import framer-motion

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="header bg-transparent backdrop-blur-md py-8 justify-between fixed px-4 md:px-36 text-2xl md:text-4xl text-white font-light w-full items-center flex z-20">
        <div className="header-left">
          <h1>LOOKBOOK</h1>
        </div>
        <div className="header-middle hidden md:block">
          <a href='/' className='text-2xl md:text-4xl font-medium'>Solve</a>
        </div>
        <div className="header-right hidden md:flex items-center gap-8">
          <div className="wrapper">
            <h1 className='text-white'>SHOP</h1>
          </div>
          <div className="wrapper flex items-center gap-1">
            <h1 className='text-white'>CART</h1>
            <h1 className='bg-white text-black w-8 pt-[2px] text-center h-10 rounded-full'>0</h1>
          </div>
          <div className="wrapper cursor-pointer" onClick={toggleMenu}>
            {isMenuOpen ? <IoClose size={40}/> : <HiMenuAlt3 size={40}/>}
          </div>
        </div>
        <div className="md:hidden flex items-center cursor-pointer" onClick={toggleMenu}>
          {isMenuOpen ? <IoClose size={40}/> : <HiMenuAlt3 size={40}/>}
        </div>
      </div>

      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
          className="menu bg-[#ffffff25] backdrop-blur-xl text-white flex flex-col  justify-center gap-12 items-center  py-20 fixed top-0 left-0 w-full h-screen z-10"
        >
          <a href='/' className="text-5xl xl:text-7xl font-medium hover:text-gray-50 hover:border-b hover:border-b-white hover:scale-105 text-black transition">Oslo</a>
          <a href='/' className="text-5xl xl:text-7xl font-medium hover:text-gray-50 hover:border-b hover:border-b-white hover:scale-105 text-black transition">Lisbon</a>
          <a href='/' className="text-5xl xl:text-7xl font-medium hover:text-gray-50 hover:border-b hover:border-b-white hover:scale-105 text-black transition">Berlin</a>
          <a href='/' className="text-5xl xl:text-7xl font-medium hover:text-gray-50 hover:border-b hover:border-b-white hover:scale-105 text-black transition">Madrid</a>
        </motion.div>
      )}
    </>
  );
}

export default Navbar;
