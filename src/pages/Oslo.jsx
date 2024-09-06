import React from 'react';
import { motion } from 'framer-motion';
import oslo from '../images/oslo.png';
import oslo2 from '../images/oslo2.png';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Oslo = () => {
  const textVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };

  const imageVariants = {
    initial: { scale: 0.75, opacity: 0 },
    visible: { scale: 1, opacity: 1 },
    hover: { scale: 0.5 },
  };

  return (
    <>
    <Navbar/>
      <motion.div
        className="oslo bg-[#f5f5f5] pt-32 flex items-start flex-col gap-20"
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.6 }}
      >
        <motion.div className="oslo-top px-6 md:px-12 xl:px-20" variants={textVariants}>
          <motion.h1
            className="text-5xl md:text-8xl xl:text-[200px] text-[#646464] leading-tight xl:leading-[200px]"
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Oslo
          </motion.h1>
          <p className="text-gray-600 text-lg md:text-xl leading-6 md:leading-8 mt-4 md:mt-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A repellendus alias quia nam,
            corrupti eius harum maiores earum sed atque. Obcaecati ad minus dolorem eveniet earum,
            voluptas nihil quis quibusdam?
          </p>
        </motion.div>

        <motion.div className="oslo-bottom w-full flex justify-center" variants={imageVariants}>
          <motion.img
            src={oslo}
            alt="Oslo"
            initial="initial"
            animate="visible"
            whileHover="hover"
            transition={{ duration: 0.5 }}
            className=""
          />
        </motion.div>
      </motion.div>

      <div className="info flex flex-col md:flex-row items-center justify-between px-6 md:px-16 xl:px-32 py-16 bg-gray-200">
        <motion.div
          className="info-left text-5xl md:text-8xl xl:text-[150px] leading-tight md:leading-tight xl:leading-[150px] text-center md:text-left"
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8 }}
        >
          Norwegian <br /> Interior <br /> Design
        </motion.div>
        <motion.div
          className="info-right flex flex-col gap-8 mt-8 md:mt-0"
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-lg md:text-xl leading-6 md:leading-8 text-gray-700 max-w-lg text-center md:text-left">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum saepe earum sint, quo id esse, error excepturi
            ex deleniti itaque dolorum similique. Sunt animi perspiciatis officia repellat at molestiae aut minus.
          </p>
          <a
            href="shop"
            className="xl:text-3xl md:text-2xl text-xl w-full font-light px-8 hover:bg-gray-700 xl:text-start md:text-start md:w-fit xl:w-fit text-center hover:text-white transition-all ease-in-out duration-200 py-4 border-gray-700 border rounded-3xl"
          >
            SHOP NOW
          </a>
        </motion.div>
      </div>

      <motion.a
        href="lisbon"
        className="next flex py-14 bg-[#E5E7EB] flex-col items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <motion.a
          href="lisbon"
          className="text-6xl md:text-8xl xl:text-9xl absolute text-white z-50"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
        >
          NEXT
        </motion.a>
        <motion.img
          src={oslo2}
          className="rounded-full transition-all ease-in-out duration-300 scale-75 hover:scale-50"
          alt="Oslo Next"
          whileHover={{ scale: 0.5 }}
        />
      </motion.a>
      <Footer/>
    </>
  );
};

export default Oslo;
