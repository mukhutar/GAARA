import React, { useState , useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';import'./footer.scss';
import { Link } from 'react-router-dom';
import FormOne from "./formOne/formOne";
import footerEnv from "/assets/Footer.webp";
import tweeter from "/assets/tVector.svg";
import insta from "/assets/iVector.svg";
import facebook from "/assets/fVector.svg";
import linkedin from "/assets/inVector.svg";
import garalog from "/assets/garalog.webp";

function Footer() {
  const [showPopup, setShowPopup] = useState(false);
 

 
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
  }

  const closePopup = () => {
    setShowPopup(false);
  }

  
  return (
    <section className= 'Footer'>
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
        <img src={footerEnv} alt="Env img" />
        <div className= 'main_footer'>
            <div className="footer_img">
             
                <Link className="footer_ancho" to="/">  
                   <img className='footer_logo' src={garalog} alt="" />
                
                 </Link>
            </div>

            <div className="footer-links">
                <h3 className='link_tittle'>COMPANY</h3>
                <ul>
                    <li>
                        <Link className="footer_ancho" to="/">About us </Link>
                    </li>

                    <li>
                        <Link className="footer_ancho" to="/">Career </Link>
                    </li>

                    <li>
                        <Link onClick={openPopup} className="footer_ancho" to="/">Contact Us </Link>
                    </li>
                </ul>
            </div>


            <div className="footer-links">
            <h3 className='link_tittle'>FARMERS</h3>

                <ul>
                    <li>
                        <Link className="footer_ancho" to="/">About us </Link>
                    </li>

                    <li>
                        <Link  className="footer_ancho" to="/">Career </Link>
                    </li>

                    <li>
                        <Link onClick={openPopup} className="footer_ancho" to="/">Contact Us </Link>
                    </li>
                </ul>
            </div>

            <div className="footer_icons">
                <Link to='/'><img src={tweeter} alt="tweeterIcon" /></Link>
               <Link to="https://www.instagram.com/gaarafund?igsh=MWRhMjM1cDRyOTI4Yg=="> <img src={insta} alt="tweeterIcon" /></Link>
               <Link to="/"> <img src={facebook} alt="facebookIcon" /></Link>
               <Link to="/"> <img src={linkedin} alt="LinkedIcon" /></Link>
                
            </div>
            

            
        </div>
        
      
    </section>
  )
}

export default Footer
