import React, { useEffect, useRef, useState } from 'react';
import "./SectionTwo.scss";
import cloud from "/assets/cloud.svg";
import newIcon1 from "/assets/newIcon1.svg";
import newIcon2 from "/assets/newIcon2.svg";
import newIcon3 from "/assets/newIcon3.svg";
import { motion , useAnimation} from "framer-motion";


function SectionTwo() {

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
    <section className='SectionTwo'>


        <div className="pg4par">
            <section className="F_words">
              <p> <span className="bold1">Boost your forest's earning potential as your trees grow.</span> <br />
              Our customized <span className="bold">leasing</span> solutions provide annual <span className="bold">earnings </span>for forests that are both <span className="bold">harvest-ready</span> and those intended for <span className="bold">conservation.</span></p>
            </section>

            <div className="dail">
                <h5 className='dail_text'>JOIN US </h5> <br /> <br />
                <span className="USSD">
                    Dail *801*11#
                </span>
            </div> 
        </div>

        <div className="cds">
            <h3 className="cdsH">
            Why Carbon Forestry Lease Could Benefit You
            </h3>

            <motion.div className="cads">

                <motion.div className="cad"

     
                    ref={ref}
                    animate={controls}
                    initial="hidden"
                    variants={{
                        visible: { opacity: 1, scale: 1, transition: { duration: 0.5 , delay:0.1 } },
                        hidden: { opacity: 0, scale: 0.8 }
                      }}

                
                
                >
                    <img className="New" src={newIcon1} alt="cloudIMG" srcset="" /> <br /> <br />

                    <span className="cdH">
                    Forward-Thinking
                    </span>

                    <li className="li">
                    You're exploring innovative income opportunities from your existing forest.
                    </li>
                </motion.div>

                <motion.div className="cad"
                
                     
                    ref={ref}
                    animate={controls}
                    initial="hidden"
                    variants={{
                        visible: { opacity: 1, scale: 1, transition: { duration: 0.5 , delay:0.3 } },
                        hidden: { opacity: 0, scale: 0.8 }
                      }}
                >
                    <img className="NewIcon" src={newIcon2} alt="cloudImg" srcset="" /> <br /> <br />

                    <span className="cdH">Visionary investor</span>
                    
                    <li className="li">
                    You're strategizing for future generations and building your retirement nest egg.
                    </li>
                </motion.div>

                <motion.div className="cad"
                
                     
                    ref={ref}
                    animate={controls}
                    initial="hidden"
                    variants={{
                        visible: { opacity: 1, scale: 1, transition: { duration: 0.5 , delay:0.5 } },
                        hidden: { opacity: 0, scale: 0.8 }
                      }}
                >
                    <img className="NewIcon" src={newIcon3} alt="cloudImg " srcset="" /> <br />

                    <span className="cdH">Improve Your Monthly income</span>
                    
                    <li className="li">Aim to cut down debt and dodge market ups and downs? Opt for a steadier, more dependable income stream</li>
                </motion.div>

            </motion.div>
        </div>
      
    </section>
  )
}

export default SectionTwo
