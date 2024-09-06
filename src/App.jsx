import React from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import Navbar from './components/Navbar';
import background from '../src/images/herobackgorund.png';
import featurecard from './images/card.png'
import featurecard2 from './images/card2.png'
import featurecard3 from './images/card3.png'
import solve from '../src/images/solve.png'
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import room1 from '../src/images/room1.png'
import room2 from '../src/images/room2.png'
import room3 from '../src/images/room3.png'
import store1 from '../src/images/store1.png'
import store2 from '../src/images/store2.png'
import Footer from './components/Footer';
const App = () => {
  
  return (
    <>
      <Navbar />
      <div
        className="hero py-[150px] md:py-[250px] h-[100vh] flex flex-col justify-center items-center bg-cover bg-center"
        style={{ backgroundImage: `url(${background})` }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="text-center text-[140px] md:text-[250px] leading-[120px] md:leading-[220px] text-white"
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
            href='/'
            className='text-2xl shadow-2xl md:text-4xl rounded-[50px] px-8 md:px-12 text-center border-white border py-3 md:py-4 text-white transition hover:bg-white hover:text-black'
          >
            SHOP NOW
          </a>
        </motion.div>
      </div>
      <div className="featured bg-[#cbcbcb] py-20 px-20 flex flex-col items-center gap-20">
        <div className="featured-top text-9xl text-center ">
          Featured
        </div>
        <div className="feature-bottom md:flex-row xl:flex-row flex-col gap-14 justify-center items-center flex">
        <div className="card">
          <h1 className='w-24 h-24 bg-gray-600 rounded-full text-center flex items-center flex-col text-white text-4xl absolute xl:ml-[45px] x-10 pt-[30px]'>NEW</h1>
          <img src={featurecard} className='rounded-[250px] overflow-hidden' />
          <h1 className='text-center pt-6 text-4xl'>Modern Chair</h1>
          <p className='text-gray-700 text-center text-2xl'>$199.00 USD</p>
        </div>
        <div className="card">
          <img src={featurecard2} className='rounded-[250px] overflow-hidden' />
          <h1 className='text-center pt-6 text-4xl'>Elegant Lamp</h1>
          <p className='text-gray-700 text-center text-2xl'>$199.00 USD</p>
        </div>
        <div className="card">
          <img src={featurecard3} className='rounded-[250px] overflow-hidden' />
          <h1 className='text-center pt-6 text-4xl'>Black Chair</h1>
          <p className='text-gray-700 text-center text-2xl'>$199.00 USD</p>
        </div>
        </div>
      </div>
      <div className="info xl:flex-row md:flex-row flex-col flex md:px-6 h-fit xl:px-56 items-center justify-between px-56 py-20 bg-gray-200">
        <div className="info-left  xl:text-[300px] text-[100px] leading-[80px] xl:leading-[250px] md:text-[200px] md:leading-[160px] ">Lorem <br />Ipsum</div>
        <div className="info-right flex flex-col gap-12">
          <p className='w-[400px] text-2xl text-medium pt-14 text-gray-700'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum saepe earum sint, quo id esse, error excepturi ex deleniti itaque dolorum similique. <br /> <br /> Sunt animi perspiciatis officia repellat at molestiae aut minus dicta doloribus adipisci vel voluptatum fugiat ipsa mollitia quaerat, reiciendis facere assumenda possimus ipsam accusantium nesciunt velit! Deserunt sapiente harum dignissimos eos architecto ipsa <br /><br /> dicta ipsum totam optio tempore, aperiam doloremque nesciunt accusantium asperiores? Voluptas ipsum laboriosam illum sint corporis veritatis sit, ullam, ea corrupti soluta aliquam hic quidem quibusdam. Laboriosam commodi ea eligendi facilis laudantium. At voluptate, necessitatibus facere suscipit distinctio assumenda mollitia, eaque, ipsum officia architecto autem?</p>
           <a href="/" className='xl:text-3xl md:text-3xl text-4xl w-full font-light px-8 hover:bg-gray-700 xl:text-start md:text-start md:w-fit xl:w-fit text-center hover:text-white transition-all ease-in-out duration-200 py-4 border-gray-700 border rounded-3xl'>SHOP NOW</a>
        </div>
      </div>
      <div className="solve">
      <img src={solve} alt="Solve" className="w-full h-auto object-cover" />
    </div>
    <div className="rooms bg-[#F5F5F5] xl:px-28 xl:py-20 md:py-20 md:px-28 py-20 pl-8 h-fit">
      <div className="rooms-top text-center ">
        <h1 className='xl:text-[250px] xl:leading-[200px] leading-[100px] text-[130px] md:text-[200px] md:leading-[150px]'>Rooms</h1>
        <div className="wrapper text-center justify-center text-yellow-700   text-[50px] leading-[20px] flex items-center gap-1">
          <h2 className='text-center justify-center'>SEE ALL</h2>
          <HiOutlineArrowNarrowRight />
        </div>
      </div>
      <div className="rooms-bottom flex xl:flex-row md:flex-col flex-col items-center justify-center xl:gap-14 gap-4 md:gap-4 mt-8 ">
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
      <div className="stores-top text-center text-3xl font-semibold mb-6 md:text-4xl lg:text-5xl">
        Our Stores
      </div>
      <div className="stores-bottom xl:justify-center flex flex-col md:flex-row gap-6 md:gap-12 lg:gap-16">
        <div className="card flex flex-col md:flex-row rounded-lg overflow-hidden">
          <div className="wrapper w-full md:w-1/2">
            <img src={store1} alt="Store 1" className="w-full h-auto object-cover" />
          </div>
          <div className="wrapper p-4 md:p-6 w-full md:w-1/2 flex flex-col justify-between">
            <div>
              <h1 className="text-xl font-semibold md:text-2xl lg:text-3xl">Hamburg</h1>
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
              <h1 className="text-xl font-semibold md:text-2xl lg:text-3xl">Hamburg</h1>
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
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default App;
