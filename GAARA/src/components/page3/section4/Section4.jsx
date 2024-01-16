import React, { useEffect, useRef, useState } from 'react'
import { motion , useAnimation} from "framer-motion";
import "./section4.scss"

function Section4() {


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
    <section className='reason'>
      <div className="reasonText">
        <h1 className='Rtext'>
          Why working <br /> with Us
        </h1>
      </div>

      <div className="reasons">
       
       <motion.div className="one"
       
         
                    ref={ref}
                    animate={controls}
                    initial="hidden"
                    variants={{
                        visible: { opacity: 1, scale: 1, transition: { duration: 0.5 , delay:0.1 } },
                        hidden: { opacity: 0, scale: 0.8 }
                      }}
       
       >
         <p>
            <span>JOIN FOR FREE</span> <br />
            Let us take on the expense of land analysis. <br /> Begin earning from carbon credits just  by <br /> planting and caring for your forest. <br /> No hidden costs, just growth.
          </p>
       </motion.div> <br /> <br />

       <motion.div className="two"
       
         
                    ref={ref}
                    animate={controls}
                    initial="hidden"
                    variants={{
                        visible: { opacity: 1, scale: 1, transition: { duration: 0.5 , delay:0.4 } },
                        hidden: { opacity: 0, scale: 0.8 }
                      }}
       
       >
        <p>
            <span>Secure steady profits <br /> swiftly.</span> <br />
            Unlock the potential of carbon revenue today. Say farewell to the long years of anticipation <br /> for returns from your tree planting.
          </p>
       </motion.div> <br /> <br />

       <motion.div className="one"
       
         
                    ref={ref}
                    animate={controls}
                    initial="hidden"
                    variants={{
                    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 , delay:0.7 } },
                   hidden: { opacity: 0, scale: 0.8 }
                      }}
       
       >
        <p>
            <span>Our earnings are tied to your success.</span> <br />
            We receive our fee only when your forest  begins to produce carbon revenue.
          </p>
       </motion.div>
      </div>


      
    </section>
  )
}

export default Section4
