import React from 'react'
import background from "../images/herobackgorund.png";  
import featurecard from "../images/card.png";
import featurecard2 from "../images/card2.png";
import featurecard3 from '../images/card3.png';
import solve from '../images/solve.png'
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import room1 from '../images/room1.png'
import room2 from '../images/room2.png'
import room3 from '../images/room3.png'
import store1 from '../images/store1.png'
import store2 from '../images/store2.png'
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <>
     <div
        className="hero py-[100px] md:py-[150px] lg:py-[250px] h-[100vh] flex flex-col justify-center items-center bg-cover bg-center"
        style={{ backgroundImage: `url(${background})` }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="text-center text-[80px] md:text-[140px] lg:text-[200px] leading-[80px] md:leading-[120px] lg:leading-[180px] text-white"
        >
          DESIGN <br /> FURNITURE
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-center pt-8 md:pt-14"
        >
          <a
            href='shop'
            className='text-xl md:text-3xl lg:text-4xl rounded-full px-6 md:px-12 lg:px-16 text-center border-white border py-2 md:py-3 lg:py-4 text-white transition hover:bg-white hover:text-black'
          >
            SHOP NOW
          </a>
        </motion.div>
      </div>
      
      <div className="featured bg-[#cbcbcb] py-16 px-8 md:px-20 flex flex-col items-center gap-10 md:gap-20">
        <div className="featured-top text-6xl md:text-8xl lg:text-9xl text-center">
          Featured
        </div>
        <div className="feature-bottom flex flex-col md:flex-row xl:flex-row gap-8 md:gap-14 justify-center items-center">
          <div className="card relative">
            <h1 className='w-20 h-20 md:w-24 md:h-24 bg-gray-600 rounded-full text-center flex items-center justify-center text-white text-3xl md:text-4xl absolute top-5 left-5'>NEW</h1>
            <img src={featurecard} className='rounded-[150px] md:rounded-[250px] overflow-hidden' />
            <h1 className='text-center pt-6 text-3xl md:text-4xl'>Modern Chair</h1>
            <p className='text-gray-700 text-center text-xl md:text-2xl'>$199.00 USD</p>
          </div>
          <div className="card">
            <img src={featurecard2} className='rounded-[150px] md:rounded-[250px] overflow-hidden' />
            <h1 className='text-center pt-6 text-3xl md:text-4xl'>Elegant Lamp</h1>
            <p className='text-gray-700 text-center text-xl md:text-2xl'>$199.00 USD</p>
          </div>
          <div className="card">
            <img src={featurecard3} className='rounded-[150px] md:rounded-[250px] overflow-hidden' />
            <h1 className='text-center pt-6 text-3xl md:text-4xl'>Black Chair</h1>
            <p className='text-gray-700 text-center text-xl md:text-2xl'>$199.00 USD</p>
          </div>
        </div>
      </div>

      <div className="info flex flex-col md:flex-row xl:flex-row items-center justify-between px-8 md:px-16 xl:px-56 py-20 bg-gray-200">
        <div className="info-left text-[70px] md:text-[120px] lg:text-[200px] leading-[60px] md:leading-[100px] lg:leading-[180px]">
          Lorem <br /> Ipsum
        </div>
        <div className="info-right flex flex-col gap-8 md:gap-12 w-full md:w-1/2">
          <p className='text-lg md:text-2xl text-gray-700'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum saepe earum sint, quo id esse, error excepturi ex deleniti itaque dolorum similique.
          </p>
          <a href="shop" className='text-xl md:text-2xl lg:text-3xl w-full md:w-fit font-light px-6 md:px-8 py-3 md:py-4 border border-gray-700 rounded-3xl hover:bg-gray-700 hover:text-white transition-all ease-in-out duration-200'>
            SHOP NOW
          </a>
        </div>
      </div>

      <div className="solve">
        <img src={solve} alt="Solve" className="w-full h-auto object-cover" />
      </div>

      <div className="rooms bg-[#F5F5F5] py-16 xl:py-20 px-8 md:px-20 flex flex-col items-center">
        <div className="rooms-top text-center">
          <h1 className='text-[100px] md:text-[180px] lg:text-[250px] leading-[100px] md:leading-[150px] lg:leading-[200px]'>
            Rooms
          </h1>
          <div className="wrapper text-center text-yellow-700 text-[40px] md:text-[50px] flex items-center gap-1 justify-center">
            <h2>SEE ALL</h2>
            <HiOutlineArrowNarrowRight />
          </div>
        </div>
        <div className="rooms-bottom flex flex-col md:flex-row gap-6 xl:gap-14 justify-center items-center mt-8">
          <div className="card">
            <img src={room1} className='rounded-full overflow-hidden' alt="" />
          </div>
          <div className="card">
            <img src={room2} className='rounded-full overflow-hidden' alt="" />
          </div>
          <div className="card">
            <img src={room3} className='rounded-full overflow-hidden' alt="" />
          </div>
        </div>
      </div>

      <div className="stores bg-[#e8e8e8] py-8 px-4 md:px-8 lg:px-16">
        <div className="stores-top text-center text-2xl md:text-4xl lg:text-5xl font-semibold mb-6">
          Our Stores
        </div>
        <div className="stores-bottom flex flex-col md:flex-row gap-6 md:gap-12 lg:gap-16 justify-center">
          <div className="card flex flex-col md:flex-row rounded-lg overflow-hidden">
            <div className="wrapper w-full md:w-1/2">
              <img src={store1} alt="Store 1" className="w-full h-auto object-cover" />
            </div>
            <div className="wrapper p-4 md:p-6 w-full md:w-1/2 flex flex-col justify-between">
              <div>
                <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold">Hamburg</h1>
                <p className="text-md md:text-lg lg:text-xl">Solve Store</p>
                <p className="text-sm md:text-md lg:text-lg text-gray-600">22765 Hamburg</p>
              </div>
              <hr className="my-4 border-gray-300" />
              <div className="flex items-center justify-between">
                <h1 className="text-md md:text-lg lg:text-xl">Get Directions</h1>
                <HiOutlineArrowNarrowRight className="text-xl md:text-2xl lg:text-3xl" />
              </div>
            </div>
          </div>
          <div className="card flex flex-col md:flex-row rounded-lg overflow-hidden">
            <div className="wrapper w-full md:w-1/2">
              <img src={store2} alt="Store 2" className="w-full h-auto object-cover" />
            </div>
            <div className="wrapper p-4 md:p-6 w-full md:w-1/2 flex flex-col justify-between">
              <div>
                <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold">Berlin</h1>
                <p className="text-md md:text-lg lg:text-xl">Solve Store</p>
                <p className="text-sm md:text-md lg:text-lg text-gray-600">10961 Berlin</p>
              </div>
              <hr className="my-4 border-gray-300" />
              <div className="flex items-center justify-between">
                <h1 className="text-md md:text-lg lg:text-xl">Get Directions</h1>
                <HiOutlineArrowNarrowRight className="text-xl md:text-2xl lg:text-3xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
