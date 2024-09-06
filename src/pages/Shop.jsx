import React from 'react'
import featurecard from '../images/card.png'
import featurecard2 from '../images/card2.png'
import featurecard3 from '../images/card3.png'
import featurecard4 from '../images/card4.png'
import featurecard5 from '../images/card5.png'
import featurecard6 from '../images/card6.png'
const Shop = () => {
  return (
  <>
  <div className="shop bg-[#cbcbcb] py-44 px-20">
    <div className="shop-top">
      <h1 className='text-[#FFCC00] text-center text-9xl'>SHOP</h1>
    </div>
    <hr className='h-[2px] my-4 bg-white' />
    <div className="wrapper justify-center flex items-center gap-6 text-center text-3xl">
    <h3 className='text-3xl text-gray-600'>SOFA</h3>
    <h3 className='text-3xl text-gray-600'>LAMP</h3>
    <h3 className='text-3xl text-gray-600'>CHAIR</h3>
    </div>
    <hr className='h-[2px] my-4 bg-white'/>
    <div className="shop-bottom bg-[#cbcbcb] py-12  flex flex-col items-center gap-20">
        <div className="feature-bottom grid xl:grid-cols-3 xl:grid-rows-2 md:grid-rows-3 md:grid-cols-2 grid-rows-6   gap-14 justify-center items-center ">
        <div className="card">
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
        <div className="card">
          <img src={featurecard4} className='rounded-[250px] overflow-hidden' />
          <h1 className='text-center pt-6 text-4xl'>LISBON SOFA</h1>
          <p className='text-gray-700 text-center text-2xl'>$699.00 USD</p>
        </div>
        <div className="card">
          <img src={featurecard5} className='rounded-[250px] overflow-hidden' />
          <h1 className='text-center pt-6 text-4xl'>RETRO CHAIR</h1>
          <p className='text-gray-700 text-center text-2xl'>$149.00 USD</p>
        </div>
        <div className="card">
          <img src={featurecard6} className='rounded-[250px] overflow-hidden' />
          <h1 className='text-center pt-6 text-4xl'>BLACK CHAIR</h1>
          <p className='text-gray-700 text-center text-2xl'>$1099.00 USD</p>
        </div>
        </div>
      </div>
   
  </div>
  
  </>
  )
}

export default Shop
