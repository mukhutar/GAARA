import React, { useEffect, useRef, useState } from 'react'
import { motion , useAnimation} from "framer-motion";
import "./SectionIII.scss";
import  cloud from"/assets/cloud.svg";
import WhiteArrw from '/assets/ArrowWhite.svg';

function SectionIII() {

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

        <motion.div className="Reasons">
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
                    <img className='Ricon' src={cloud} alt="cloud" />
                    <h3 className='Rheading'>Innovative Technology</h3>
                    <li className='Rlist'>Our platform uses state-of-the-art technology to provide the most accurate and detailed insights into forest ecosystems.</li>
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
                    <img className='Ricon' src={cloud} alt="cloud"/>
                    <h3 className='Rheading'>Commitment to Sustainability</h3>
                    <li className='Rlist'>Our mission is to aid in the preservation and health of forests, contributing to global environmental sustainability efforts.</li>
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
                            <img className='Ricon' src={cloud} alt="cloud" />
                            <h3 className='Rheading'>Customization</h3>
                            <li className='Rlist'>We understand that each forest is unique. Our services are tailored to meet the specific needs and goals of your forest.</li>
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
                            <img className='Ricon' src={cloud} alt="cloud"/>
                            <h3 className='Rheading'>Expert Support</h3>
                            <li className='Rlist'>Our team of experts is always available to provide guidance and support, ensuring you make the most of our platform.</li>
                        </motion.section>


            </motion.div>
        </motion.div>

        <button className='GetInTouch'> Get in Touch
        
        <img className='Wicon' src={WhiteArrw} alt="" />

        </button>

      
    </section>
  )
}

export default SectionIII