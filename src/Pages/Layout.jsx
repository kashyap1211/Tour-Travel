import React, { useState } from 'react';  // ✅ Import useState
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Outlet } from 'react-router-dom';
import Popup from '../Components/Popup';

const LayOut = () => {
  const [orderPopup, setOrderPopup] = useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  return (
    <>
      <Navbar handleOrderPopup={handleOrderPopup} />
      <Outlet />
      <Footer />
      <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
    </>
  );
};

export default LayOut;
