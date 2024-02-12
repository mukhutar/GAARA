import React, { useState } from 'react';
import "./Section6D.scss";
import fruitTree from "/assets/las.svg"
import whiteArrw from "/assets/ArrowWhite.svg"
import FormTwo from "../Section6D/formTwo/formTwo"
import {motion , AnimatePresence } from "framer-motion"

function Section6D() {

  const [showPopup, setShowPopup] = useState(false);

  const openPopup = (e) => {
    e.preventDefault()
    
    setShowPopup(true);
  }

  const closePopup = () => {
    setShowPopup(false);
  }

  return (
    <section className=' Section6D'>
        <div className="first">
            <h3> <span>Ready to Grow? </span> <br />
                Let's Plant the Seeds of Success Together!
            </h3>

          
        </div>

        <AnimatePresence>
        {showPopup && (
          <motion.div 
            className="popup2-container"
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }} 
            transition={{ duration: 0.3 }} 
          >
            <motion.div 
              className="popup2"
              initial={{ scale: 0.5 }} 
              animate={{ scale: 1 }} 
              exit={{ scale: 0.5 }} 
              transition={{ type: 'spring', stiffness: 300, damping: 25 }} 
            >
              <button className="close-btn" onClick={closePopup}>X</button>
              <FormTwo />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

        <div className="sec"> 
        <img src={fruitTree} alt="" />
            <button onClick={openPopup}>
            Schedule consultancy
            <img src={whiteArrw} alt="" />
            </button>
        </div>
      
    </section>
  )
}

export default Section6D
