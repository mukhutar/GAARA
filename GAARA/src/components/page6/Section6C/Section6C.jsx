import React, { useEffect, useRef, useState } from 'react'
import "./Section6C.scss";
import Leaficon from "/assets/leaf-icon.svg"
import { motion , useAnimation} from "framer-motion";

const Section6C = () => {



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
    <motion.section className=' Section6C' ref={ref}>

        <h3 className='page6Heading'>Why Your Orchard Will <br /> Thrive with Us</h3>

      

        <div className="Section6Sides">
           <div className="Side">

           <motion.div className="section_text3"
                  
                  
                  ref={ref}
                  animate={controls}
                  initial="hidden"
                  variants={{
                      visible: { opacity: 1, scale: 1, transition: { duration: 0.5 , delay:0.4 } },
                      hidden: { opacity: 0, scale: 0.8 }
                    }}
                  
                  >

                    <h3>Expertise That Shines</h3>
                    <p><img src={Leaficon} alt="leaf" /> Dive into our knowledge pool brimming <br /> with cutting-edge agricultural insights.</p>

                  </motion.div>
               

                <motion.div className="section_text1"
                
                
                ref={ref}
                animate={controls}
                initial="hidden"
                variants={{
                    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 , delay:0.8 } },
                    hidden: { opacity: 0, scale: 0.8 }
                  }}
                
                >

                    <h3>  Innovative, Eco-Friendly <br /> Techniques</h3>
                    <p><img src={Leaficon} alt="leaf" />Embrace practices that love the <br /> earth as much as they love profits.</p>

                </motion.div>

                <motion.div className="section_text2"
                
                
                ref={ref}
                animate={controls}
                initial="hidden"
                variants={{
                    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 , delay:1.2 } },
                    hidden: { opacity: 0, scale: 0.8 }
                  }}
                
                >
                    <h3>Personalized, Hands-On <br /> Guidance</h3>
                    <p> <img src={Leaficon} alt="leaf" /> Your goals, our mission. We walk the <br /> orchard path with you, step by step.</p>
                    
                </motion.div>

              
           </div>


           <div className="Side">

                 

                 


                    

                    <motion.div className="section_text4"
                    
                    
                    ref={ref}
                    animate={controls}
                    initial="hidden"
                    variants={{
                        visible: { opacity: 1, scale: 1, transition: { duration: 0.5 , delay:1.6 } },
                        hidden: { opacity: 0, scale: 0.8 }
                      }}
                    
                    >
                        <h3>Results That Speak Volumes</h3>
                        <p> <img src={Leaficon} alt="leaf" /> Our legacy? Orchards thriving across <br /> regions, testimonials blooming with <br /> success.</p>

                    </motion.div>

           </div>


        </div>
      
    </motion.section >
  )
}

export default Section6C
