import React from 'react';
import background from "../images/herobackgorund.png";
import featurecard from "../images/card.png";
import featurecard2 from "../images/card2.png";
import featurecard3 from '../images/card3.png';
import solve from '../images/solve.png';
import room1 from '../images/room1.png';
import room2 from '../images/room2.png';
import room3 from '../images/room3.png';
import store1 from '../images/store1.png';
import store2 from '../images/store2.png';
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Home = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const slideUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut' } }
  };

  return (
    <>
      <Navbar />

      <motion.div
        className="hero py-[100px] md:py-[150px] lg:py-[250px] h-[100vh] flex flex-col justify-center items-center bg-cover bg-center"
        style={{ backgroundImage: `url(${background})` }}
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <motion.div
          className="text-center text-[80px] md:text-[140px] lg:text-[200px] leading-[80px] md:leading-[120px] lg:leading-[180px] text-white"
          variants={fadeInUp}
        >
          DESIGN <br /> FURNITURE
        </motion.div>
        <motion.div
          className="text-center pt-8 md:pt-14"
          variants={slideUp}
        >
          <a
            href='shop'
            className='text-xl md:text-3xl lg:text-4xl rounded-full px-6 md:px-12 lg:px-16 text-center border-white border py-2 md:py-3 lg:py-4 text-white transition hover:bg-white hover:text-black'
          >
            SHOP NOW
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        className="featured bg-[#cbcbcb] py-16 px-8 md:px-20 flex flex-col items-center gap-10 md:gap-20"
        initial="hidden"
        whileInView="visible"
        variants={staggerContainer}
        viewport={{ once: true }}
      >
        <motion.div className="featured-top text-6xl md:text-8xl lg:text-9xl text-center" variants={fadeInUp}>
          Featured
        </motion.div>
        <motion.div
          className="feature-bottom flex flex-col md:flex-row xl:flex-row gap-8 md:gap-14 justify-center items-center"
        >
          {[featurecard, featurecard2, featurecard3].map((card, index) => (
            <motion.div
              className="card relative"
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <img src={card} className='rounded-[150px] md:rounded-[250px] overflow-hidden' />
              <h1 className='text-center pt-6 text-3xl md:text-4xl'>Product {index + 1}</h1>
              <p className='text-gray-700 text-center text-xl md:text-2xl'>$199.00 USD</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        className="info flex flex-col md:flex-row xl:flex-row items-center justify-between px-8 md:px-16 xl:px-56 py-20 bg-gray-200"
        initial="hidden"
        whileInView="visible"
        variants={staggerContainer}
        viewport={{ once: true }}
      >
        <motion.div className="info-left text-[70px] md:text-[120px] lg:text-[200px]" variants={fadeInUp}>
          Lorem <br /> Ipsum
        </motion.div>
        <motion.div className="info-right flex flex-col gap-8 w-full md:w-1/2" variants={slideUp}>
          <p className='text-lg md:text-2xl text-gray-700'>

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur amet at veniam fugiat vel, nulla, soluta accusantium magni, sunt accusamus itaque sit repellendus illum a nostrum. Totam nulla officiis quod ipsa vitae alias. Error nisi, culpa quaerat fuga, modi porro minus perferendis corporis ratione asperiores excepturi est, eos enim quos alias officiis quod nihil qui facere cum doloremque. Dolor error ratione saepe nemo, doloremque, enim temporibus quas ullam magni quia alias fugit aspernatur deleniti omnis sint corporis quae similique tempora. Architecto vel rerum autem quo eligendi aut quos accusantium mollitia!          </p>
          <a href="shop" className='text-xl md:text-2xl lg:text-3xl w-full md:w-fit font-light px-6 py-3 border border-gray-700 rounded-3xl hover:bg-gray-700 hover:text-white'>
            SHOP NOW
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        className="rooms bg-[#F5F5F5] py-16 xl:py-20 px-8 md:px-20 flex flex-col items-center"
        initial="hidden"
        whileInView="visible"
        variants={staggerContainer}
        viewport={{ once: true }}
      >
        <motion.h1 className='text-[100px] md:text-[180px] lg:text-[250px] leading-[100px] md:leading-[150px]' variants={fadeInUp}>
          Rooms
        </motion.h1>
        <motion.a href='shop' className="wrapper flex items-center gap-2 text-center text-yellow-700 text-[40px] md:text-[50px]" variants={fadeInUp}>
          <h2>SEE ALL</h2>
          <HiOutlineArrowNarrowRight />
        </motion.a>

        <motion.div
          className="rooms-bottom flex flex-col md:flex-row gap-6 xl:gap-14 justify-center items-center mt-8"
        >
          {[room1, room2, room3].map((room, index) => (
            <motion.a
            href='shop'
              className="card"
              key={index}
              initial={{ opacity: 0, x: 100 * (index % 2 === 0 ? 1 : -1) }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <img src={room} className='rounded-full overflow-hidden' alt="" />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        className="stores bg-[#e8e8e8] py-8 px-4 md:px-8 lg:px-16"
        initial="hidden"
        whileInView="visible"
        variants={staggerContainer}
        viewport={{ once: true }}
      >
        <motion.div className="stores-top text-center text-2xl md:text-4xl lg:text-5xl font-semibold mb-6" variants={fadeInUp}>
          Our Stores
        </motion.div>
        <motion.div className="stores-bottom flex flex-col md:flex-row gap-6 justify-center" variants={staggerContainer}>
          {[store1, store2].map((store, index) => (
            <motion.div
              className="card flex flex-col md:flex-row rounded-lg overflow-hidden"
              key={index}
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <img src={store} className="w-full md:w-1/2 object-cover" alt={`Store ${index + 1}`} />
              <div className="wrapper p-4 md:p-6 w-full md:w-1/2">
                <h1 className="text-xl md:text-2xl lg:text-3xl">Store Location</h1>
                <p className="text-md md:text-lg lg:text-xl">Location Details</p>
                <div className="flex items-center justify-between">
                  <h1 className="text-md md:text-lg lg:text-xl">Get Directions</h1>
                  <HiOutlineArrowNarrowRight className="text-xl md:text-2xl lg:text-3xl" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <Footer />
    </>
  );
};

export default Home;
