import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Oslo from './pages/Oslo';
import Lisbon from './pages/Lisbon';
import Berlin from './pages/Berlin';
import Madrid from './pages/Madrid';
import Lookbook from './pages/LookBook';
import Loading from './pages/Loading';
const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Loading />} />
        <Route path="/home" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/oslo" element={<Oslo />} />
        <Route path="/lisbon" element={<Lisbon />} />
        <Route path="/berlin" element={<Berlin />} />
        <Route path="/madrid" element={<Madrid />} />
        <Route path="/lookbook" element={<Lookbook />
} />
      </Routes>
    </Router>
  );
};

export default App;
