import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaSearch } from 'react-icons/fa';
import featurecard from '../images/card.png';
import featurecard2 from '../images/card2.png';
import featurecard3 from '../images/card3.png';
import featurecard4 from '../images/card4.png';
import featurecard5 from '../images/card5.png';
import featurecard6 from '../images/card6.png';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const products = [
  { id: 1, name: 'Modern Eames Chair', image: featurecard, price: '$199.00 USD' },
  { id: 2, name: 'Elegant Lamp', image: featurecard2, price: '$199.00 USD' },
  { id: 3, name: 'Black Chair', image: featurecard3, price: '$199.00 USD' },
  { id: 4, name: 'Lisbon Sofa', image: featurecard4, price: '$199.00 USD' },
  { id: 5, name: 'Retro Chair', image: featurecard5, price: '$199.00 USD' },
  { id: 6, name: 'Black Wingback', image: featurecard6, price: '$199.00 USD' },
];

const Shop = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Navbar className="navbar-text-black" />
      <div className="shop bg-[#c3c3c3] py-56 px-6 md:px-20">
        <motion.div
          className="shop-top"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-[#000000] text-center text-6xl md:text-9xl font-bold">
            SHOP
          </h1>
        </motion.div>

        <div className="search-bar flex justify-center my-8">
          <motion.div
            className="relative flex items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearch}
              placeholder="Search for products..."
              className="bg-[#000000] text-3xl text-white w-full md:w-[800px] px-8 py-4 rounded-full focus:outline-none focus:ring-2 focus:ring-[#ffffff]"
            />
            <FaSearch className="absolute right-4 text-[#FFD700] text-3xl" />
          </motion.div>
        </div>

        <div className="wrapper py-14 flex justify-center gap-6 text-center text-xl md:text-6xl text-[#000000]">
          <a href='shop' className="hover:text-[#FFf] transition-colors duration-300 text-4xl xl:text-6xl cursor-pointer">
            SOFA
          </a>
          <a href='shop' className="hover:text-[#FFf] transition-colors duration-300 text-4xl xl:text-6xl cursor-pointer">
            LAMP
          </a>
          <a href='shop' className="hover:text-[#FFf] transition-colors duration-300 text-4xl xl:text-6xl cursor-pointer">
            CHAIR
          </a>
        </div>

        <div className="shop-bottom bg-gray-[#C3C3C3] rounded-3xl py-12 flex flex-col items-center gap-20">
          <motion.div
            className="grid xl:grid-cols-3 xl:grid-rows-2 md:grid-rows-3 md:grid-cols-2 grid-rows-6 gap-14 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            {filteredProducts.length > 0 ? (
              filteredProducts.map(product => (
                <motion.div
                  className="card bg-[#1F1F1F] rounded-[30px] p-4"
                  key={product.id}
                  whileHover={{ scale: 1.05 }}
                >
                  <img src={product.image} className="rounded-[250px] overflow-hidden w-full" alt={product.name} />
                  <h1 className="text-center pt-6 text-3xl md:text-4xl text-white hover:text-black">{product.name}</h1>
                  <p className="text-[#868686] text-center text-xl md:text-2xl">{product.price}</p>
                </motion.div>
              ))
            ) : (
              <div className="text-center items-center justify-center text-xl md:text-5xl bg-black rounded-xl px-6 py-3 text-red-600">
                This item is not found
              </div>
            )}
          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Shop;
