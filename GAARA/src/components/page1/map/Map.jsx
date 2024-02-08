import React, { useState , useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; 
import "./map.scss";
import FormOne from "./formOne/formOne";
import map from "/assets/map.webp";
import Arrow from '/assets/whiteArrow.svg';

function Map() {
  const [showPopup, setShowPopup] = useState(false);
   const [blurBackground, setBlurBackground] = useState(false);

 
   useEffect(() => {
    const handleKeyDown = (e) => {
      // here i am  Preventing  scrolling using arrow keys when popup is open
      if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
        e.preventDefault();
      }
    };

    //  i am adding  event listener for keydown when popup is open to prevent scrolling using arrow keys
    if (showPopup) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = 'hidden'; 
    } else {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = ''; 
    }

    // Cleanup function
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = ''; 
    };
  }, [showPopup]);

  const openPopup = (e) => {
    e.preventDefault()
    
    setShowPopup(true);
    setBlurBackground(true);
  }

  const closePopup = () => {
    setShowPopup(false);
    setBlurBackground(false);
  }

  return (
    <section className='MapContainer'>
      {/* and this animation tooo */}
      <AnimatePresence>
        {showPopup && (
          <motion.div 
            className="popup-container"
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }} 
            transition={{ duration: 0.3 }} 
          >
            <motion.div 
              className="popup"
              initial={{ scale: 0.5 }} 
              animate={{ scale: 1 }} 
              exit={{ scale: 0.5 }} 
              transition={{ type: 'spring', stiffness: 300, damping: 25 }} 
            >
              <button className="close-btn" onClick={closePopup}>X</button>
              <FormOne />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    

    <div className={`MapContaine ${blurBackground ? 'blur' : ''}`}>
    <div className="map">
        <h2>Partner <br /> with <br /> Us</h2>
        <img src={map} alt="african map" />
      </div>

      <div className="map_texts">
        <p>
          <h2>
            <span>We Cultivate The Change.</span>
            <span className="spn">Digital Loans  <br />  Connect Farmers to Carbon Market Profits <br /></span>
            <br />  <br />
            <span className='pargraph'>
              Join GAARA’s forces to revolutionize the agricultural forestry for African smallholder farmers. Our digital tree loan program doesn't just boost harvest volumes it connects farmers to the burgeoning carbon market.
            </span>
          </h2>
          <br /> <br />
          <div className="btn">
            <button onClick={openPopup}>Let's get started  <img src={Arrow} alt="arrow svg" srcSet="" /></button>
          </div>
        </p>
      </div>
    </div>

      
    </section>
  );
}

export default Map;
