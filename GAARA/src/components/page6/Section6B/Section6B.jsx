import React, { useEffect, useRef, useState } from 'react';
import "./Section6B.scss";
import cloud from "/assets/cloud.svg";
import { motion , useAnimation} from "framer-motion";
import IconNew4 from "/assets/IconNew4.svg";
import LastIcon1 from "/assets/lastIcon.svg";

function Section6B() {

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
    <section className=' Section6B'>
        <h3 className='page6Head'>How We Cultivate Success <br /> Together.</h3>

       <motion.section className='sectionCards'>
              <div className="P5Cards">
                    <motion.div className="card" 
                    
                    ref={ref}
                    animate={controls}
                    initial="hidden"
                    variants={{
                        visible: { opacity: 1, scale: 1, transition: { duration: 0.5 , delay:0.1 } },
                        hidden: { opacity: 0, scale: 0.8 }
                      }}

                    >
                       <img className='LastIcon' src={LastIcon1} alt="" />
                        <h3>Initial Assessment</h3>
                        <li><span className="textlist">We begin with an in-depth analysis of your land, local </span>climate, and soil conditions to identify the most suitable fruit tree varieties for your farm.</li>
                    </motion.div>

                    <motion.div className="card" 
                    
                    ref={ref}
                    animate={controls}
                    initial="hidden"
                    variants={{
                        visible: { opacity: 1, scale: 1, transition: { duration: 0.5 ,delay:0.3 } },
                        hidden: { opacity: 0, scale: 0.8 }
                      }}
                    

                    >
                       <img className='LastIcon' src={IconNew4} alt="" />
                        <h3>Implementation Support</h3>
                        <li><span className="textlist">Our team guides you through the implementation of the</span> plan, ensuring best practices in tree planting, care, and maintenance.</li>
                    </motion.div>
                </div>

                <div className="P5Cards">
                    <motion.div className="card" 
                    
                    ref={ref}
                    animate={controls}
                    initial="hidden"
                    variants={{
                        visible: { opacity: 1, scale: 1, transition: { duration: 0.5 ,delay:0.5 } },
                        hidden: { opacity: 0, scale: 0.8 }
                      }}
                    

                    >
                        <img className='LastIcon' src={LastIcon1}  alt="" />
                        <h3>Customized Planning</h3>
                        <li><span className="textlist">Based on the assessment, we develop a detailed</span> cultivation plan, including tree spacing, irrigation strategies, and integrated pest management.</li>
                    </motion.div>

                    <motion.div className="card" 
                    
                    ref={ref}
                    animate={controls}
                    initial="hidden"

                    variants={{
                        visible: { opacity: 1, scale: 1, transition: { duration: 0.5 , delay:0.7 } },
                        hidden: { opacity: 0, scale: 0.8 }
                      }}
                    
                    

                    >
                       <img className='LastIcon' src={LastIcon1}  alt="" />
                        <h3>Ongoing Assistance</h3>
                        <li><span className="textlist">We offer continuous support and advice to help you</span> navigate challenges and optimize your orchard's performance.</li>
                    </motion.div>
                </div>

       </motion.section>
                      <div className='horizontalline'></div>

    </section>
  )
}

export default Section6B
