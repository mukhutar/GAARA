import React, { useState ,useEffect } from 'react';
import "./Section6A.scss";
import footer5 from "/assets/FooterWhite.webp";
import icon from '/assets/GaaraGreen.webp'
import Arrow from '/assets/Arrow.svg'
import DropDown from "/assets/DropIcon.svg";
import { Link } from 'react-router-dom';
import {motion , AnimatePresence } from "framer-motion"
import FormOne from "../../page1/map/formOne/formOne";
import whiteArrw from "/assets/ArrowWhite.svg";

const AnimeHead = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 1,
      delay:0.4,
      ease:"linear",
      duration: 2,
      x: { duration: 1 }
    }
  }
}


function Section6A() {

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
    <section className='Section6A'>
      <div className={`Hero_section  ${ blurBackground ? 'blur' : ''}`}>
          <motion.header className='nav'>
              <Link className='listItem' to='/'>
                <img className='Hero_logo' src={icon} alt="comapany's logo" srcset="" />
            </Link>
        <motion.ul>

            <li >
                <Link className='activeLink' to='/'>Home</Link>
            </li>

            <li >
                <Link  className='productDrop' >Products <img src={DropDown} alt="Dro" srcset="" />
                
                 <div className="productList">
                        <ul>
                            <li>
                                <Link className='listItem' to='/product/tree loan'>Tree loan</Link>
                            </li>
                            <li>
                                <Link className='listItem' to='/product/Carbon Program' > Carbon Program</Link>
                            </li>
                            <li>
                                <Link className='listItem' to= '/product/Carbon foresty leasing' >Carbon foresty leasing </Link>
                            </li>
                            <li>
                                <Link className='listItem' to= '/product/Famers digital monital' >Farmer's Digital monital</Link>
                            </li>

                            <li>
                                <Link className='listItem' to='/product/agribussiness consulting' >Agribussiness Consulting </Link>
                            </li>
                         </ul>

                     </div>
                </Link>
            </li>

           

            <li>
                <Link className='activeLink' to ="/about us">About Us</Link>
            </li>

            <li>
                <Link href="#"><button>Estimate Income <img src={Arrow} alt="arrow svg" srcset="" /></button></Link>
            </li>
        </motion.ul>

        
        
        
      </motion.header>

      <motion.h1 variants={AnimeHead} initial="hidden" animate="show" className="page5Heading">
      Agribusiness Consultancy For <br /> Fruit Tree Farming
      </motion.h1>

      </div>

      <div className="footer5">
        <img src={footer5} alt="" />
      </div>

           
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



      <div className="page6Texts">

        <div className="p">
          <p> 
          <span>Discover </span> the vibrant world of fruit tree farming with our <span>expert</span> Agribusiness Consultancy. Whether you're dreaming of <span>lush orchards</span> or are a fruit farming veteran, we're here to turn those <span>dreams </span>into <span>bountiful</span> realities.
          </p>
        </div>
        
        <div className="contct">

          <h3>Embark on a Fruitful Journey!</h3>

          <button onClick={openPopup}>
            Contact Us
            <img src={whiteArrw} alt="" />
          </button>

        </div>
      </div>     
    </section>
  )
}

export default Section6A
