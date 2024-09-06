import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Oslo from './pages/Oslo';
import Lisbon from './pages/Lisbon';
import Berlin from './pages/Berlin';
import Madrid from './pages/Madrid';
import Lookbook from './pages/Lookbook';
import Help from './pages/Help';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/oslo" element={<Oslo />} />
        <Route path="/lisbon" element={<Lisbon />} />
        <Route path="/berlin" element={<Berlin />} />
        <Route path="/madrid" element={<Madrid />} />
        <Route path="/lookbook" element={<Lookbook />} />
        <Route path="/help" element={<Help />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
