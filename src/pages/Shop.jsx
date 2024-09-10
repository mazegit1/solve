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
import { useCart } from '../contexts/CartContext';

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
  const { addToCart } = useCart();

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddToCart = (product) => {
    addToCart(product);
  };

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
              placeholder="Search"
              className="bg-white border-none rounded-full py-2 px-6 pr-12 text-gray-700 placeholder-gray-400"
            />
            <FaSearch className="absolute right-4 text-gray-500" />
          </motion.div>
        </div>

        <motion.div
          className="product-cards grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {filteredProducts.map(product => (
            <motion.div
              key={product.id}
              className="card border rounded-lg p-4 bg-white shadow-lg"
              whileHover={{ scale: 1.05 }}
              onClick={() => handleAddToCart(product)}
            >
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4 rounded" />
              <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
              <p className="text-lg text-gray-600">{product.price}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <Footer />
    </>
  );
};

export default Shop;
