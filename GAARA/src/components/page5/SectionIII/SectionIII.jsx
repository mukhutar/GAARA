import React, { useEffect, useRef, useState } from 'react'
import { motion ,  AnimatePresence, useAnimation} from "framer-motion";
import FormOne from "../../page1/map/formOne/formOne";
import "./SectionIII.scss";
import iconNew1 from "/assets/IconNew1.svg"
import IconNew2 from "/assets/IconNew2.svg";
import IconNew3  from  "/assets/IconNew3.svg";
import IconNew4 from "/assets/IconNew4.svg";
import WhiteArrw from '/assets/ArrowWhite.svg';

function SectionIII() {

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

    const controls = useAnimation();
    const ref = useRef();
    const [visible, setVisible] = useState(false);
    
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisible(true);
            controls.start("visible");
          } else {
            setVisible(false);
          }
        },
        {
          root: null,
          rootMargin: '0px',
          threshold: 0.1,
        }
      );
    
      if (ref.current) {
        observer.observe(ref.current);
      }
    
      return () => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      };
    }, [controls, ref]);

  return (
    <section className=' Section5'>

        <h3 className='Section5Heading'>Why choose Us?</h3>

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

        <motion.div className={`Reasons ${ blurBackground ? 'blur' : ''}`}>
            <motion.div className="Rone">
                <motion.section 
                
                    ref={ref}
                    animate={controls}
                    initial="hidden"
                    variants={{
                        visible: { opacity: 1, scale: 1, transition: { duration: 0.5 , delay:0.1 } },
                        hidden: { opacity: 0, scale: 0.8 }
                      }}

                >
                    <img className='Ricon' src={iconNew1} alt="cloud" />
                    <h3 className='Rheading'>Innovative Technology</h3>
                    <li className='Rlist'> <span className="textlist">Our platform uses state-of-the-art technology to provide the</span> most accurate and detailed insights into forest ecosystems.</li>
                </motion.section>

                <motion.section 
                
                    ref={ref}
                    animate={controls}
                    initial="hidden"
                    variants={{
                        visible: { opacity: 1, scale: 1, transition: { duration: 0.5 , delay:0.3 } },
                        hidden: { opacity: 0, scale: 0.8 }
                      }}

                >
                    <img className='Riconn' src={IconNew3} alt="cloud"/>
                    <h3 className='Rheading'>Commitment to Sustainability</h3>
                    <li className='Rlist'><span className="textlist">Our mission is to aid in the preservation and health of forests,</span> contributing to global environmental sustainability efforts.</li>
                </motion.section>

            </motion.div>


            <motion.div className="Rone">

                       <motion.section 
                       
                           ref={ref}
                    animate={controls}
                    initial="hidden"
                    variants={{
                        visible: { opacity: 1, scale: 1, transition: { duration: 0.5 , delay:0.5 } },
                        hidden: { opacity: 0, scale: 0.8 }
                      }}

                       >
                            <img className='Ricon' src={IconNew2} alt="cloud" />
                            <h3 className='Rheading'>Customization</h3>
                            <li className='Rlist'><span className="textlist">We understand that each forest is unique. Our services are</span> tailored to meet the specific needs and goals of your forest.</li>
                        </motion.section>

                        <motion.section 
                        
                            ref={ref}
                    animate={controls}
                    initial="hidden"
                    variants={{
                        visible: { opacity: 1, scale: 1, transition: { duration: 0.5 , delay:0.7 } },
                        hidden: { opacity: 0, scale: 0.8 }
                      }}

                        >
                            <img className='Ricon' src={IconNew4} alt="cloud"/>
                            <h3 className='Rheading'>Expert Support</h3>
                            <li className='Rlist'><span className="textlist">Our team of experts is always available to provide guidance</span> and support, ensuring you make the most of our platform.</li>
                        </motion.section>


            </motion.div>
        </motion.div>

        <button className='GetInTouch' onClick={openPopup}> Get in Touch
        
        <img className='Wicon' src={WhiteArrw} alt="" />

        </button>

      
    </section>
  )
}

export default SectionIII
