import './Anime.scss';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ScrollTrigger from 'react-scroll-trigger';
import CountUp from 'react-countup';
import image from '/assets/image5.png';
import img2 from "/assets/grown.png";
import img3 from "/assets/comp.png";
import img4 from "/assets/USSD.png";
import image2 from '/assets/iphone.png'
import plant from '/assets/plant.png'
import ParagraphSection from './ParagraphSection';
function Anime() {

    // state for countup animation

    const [counterOn , setCountOn] = useState(false)

    const sections = [
      {
        title: 'Green Agent',
        paragraph:
          'With Eco Forest app transforms the way trees are managed, detailed tracking of each tree. Agent oversees tree health, facilitate replacements. Harvest data is easily logged.',
        image: img2,
      },
      {
        title: 'Mobile App',
        paragraph:
          'Provides detailed analytics for tracking tree growth, health, and potential risks, enabling proactive management. Enables field agents to input real-time metrics directly, allowing for immediate organizational response and action.',
        image: img4,
      },
      {
        title: 'USSD Code',
        paragraph:
          'Our system includes USSD codes for farmers without smartphones, ensuring wide accessibility and enhanced data collection and accessible loan.',
        image: image,
      },

      {
        title: 'WEB APP',
        paragraph:
        'A dynamic hub for visualizing and analyzing data from satellites, mobile, and USSD sources, featuring an impactful API dashboard for enhanced decision-making.',    
        image: img3
      },

    ]
    const [currentIndex, setCurrentIndex] = useState(0);
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % sections.length);
      }, 5000); 
  
      return () => clearInterval(intervalId); 
    }, [sections.length]);
  
  return (
   <section className='hell'>
      <motion.div className="rotating-words-container">
         <motion.div className="img"
          initial={{ rotate: 0, originX: 0.5, originY: 0.5 }}
          animate={{ rotate: 50, originX: 0.5, originY: 0.5 }}
          transition={{
            duration: 20,
            repeat: Infinity,
            // repeatDelay: 1,
           
          }}
           >
          <img className='rotate_Img' src={sections[currentIndex].image} alt="animeImg" srcSet="" />
         </motion.div>
       
      <motion.span
         className="rotating-word"
          initial={{ opacity: 0, translateY: -50 }}
          animate={{ opacity: 1, translateY: 0 }}
          exit={{ opacity: 0, translateY: 50 }}
          transition={{ ease: 'ease', duration: 10 ,  repeatDelay:2 }}
         >
          <ParagraphSection title={sections[currentIndex].title} paragraph={sections[currentIndex].paragraph} />
       
          {/* {paragraphs[currentIndex]} */}
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
