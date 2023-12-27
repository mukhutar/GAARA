import './Anime.scss';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ScrollTrigger from 'react-scroll-trigger';
import CountUp from 'react-countup';
import image from '/assets/image5.png';
import image2 from '/assets/iphone.png'
import plant from '/assets/plant.png'
function Anime() {

    // state for countup animation

    const [counterOn , setCountOn] = useState(false)

    const paragraphs = [
        'With Eco Forest app transforms the way trees are managed, detailed tracking of each tree. Agent oversee tree health, facilitate replacements. Harvest data is easily logged.',
        'When you have some text, how can you choose a typeface? Many people—professional designers included—go through an app’s font menu until we find one we like. But the aim of this Google',
        'Google Fonts makes it easy to bring personality and performance to your websites and products. Our robust catalog of open-source fonts and icons makes it easy to integrate expressive type',
        //i will add more content too
      ];
    const [currentIndex, setCurrentIndex] = useState(0);
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % paragraphs.length);
      }, 5000); 
  
      return () => clearInterval(intervalId); 
    }, [paragraphs.length]);
  
  return (
   <section className='hell'>
      <motion.div className="rotating-words-container">
         <motion.div className="img"
          initial={{ rotate: 0, originX: 0.5, originY: 0.5 }}
          animate={{ rotate: 48, originX: 0.5, originY: 0.5 }}
          transition={{
            duration: 20,
            repeat: 4,
            repeatDelay: 1,
            ease: 'easeInOut', 
          }}
           >
           <img className='rotate_Img' src={image} alt="animeImg" srcset="" />
         </motion.div>
       
      <motion.span
         className="rotating-word"
          initial={{ opacity: 0, translateY: -50 }}
          animate={{ opacity: 1, translateY: 0 }}
          exit={{ opacity: 0, translateY: 50 }}
          transition={{ ease: 'ease', duration: 10 ,  repeatDelay:0 }}
         >
         <h1 className='h1' style={{ margin: 0 }}>Green Agent</h1> <br /> <br />
       
          {paragraphs[currentIndex]}
      </motion.span>

        <div className="anime_img">
          <img src={image2} alt="iphone_img" srcset="" />

        </div>
     </motion.div>


     <ScrollTrigger onEnter= {() => setCountOn(true)} onExit ={() => setCountOn(false)}

     >
        <div className="plants">
           <div className='plant_img'>
             <img src={plant} alt="plant_img" srcset="" />

             <h1>  
                
                {counterOn &&   <CountUp  className='countUp'  start={0} end= {59000977} duration={0.6} delay={1} /> } <br />
                 Trees
             </h1>
           </div>

           <div className='plant_img'>
             <img src={plant} alt="plant_img" srcset="" />
             
             <h1>  
                
                {counterOn &&   <CountUp  className='countUp'  start={0} end={59000977} duration={0.7} delay={1} /> } <br />
                Kg of CO2
             </h1>
           </div>

            <div className='plant_img'>
             <img src={plant} alt="plant_img" srcset="" />

             <h1>  
                
                {counterOn &&   <CountUp  className='countUp'  start={0} end={59000977} duration={0.8} delay={1} /> } <br />
                Hectares
             </h1>
           </div>

            <div className='plant_img'>
             <img src={plant} alt="plant_img" srcset="" />

             <h1>  
                
                {counterOn &&   <CountUp className='countUp' start={0} end={59000977} duration={0.9} delay={1} /> } <br />
                Farmers
             </h1>
           </div>

           <div className='plant_img'>
             <img src={plant} alt="plant_img" srcset="" />

             <h1>  
                
                {counterOn &&   <CountUp className='countUp' start={0} end={59000977} duration={1} delay={1} /> } <br />
                Countries
             </h1>
           </div>


        </div>
     </ScrollTrigger>

        
   </section>

   
  )
}

export default Anime
