import './Anime.scss';
import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
import ScrollTrigger from 'react-scroll-trigger';
import CountUp from 'react-countup';
import icon1 from "/assets/tree1.svg"
import icon2 from "/assets/tree2.svg"
import icon3 from "/assets/tree3.svg"
import icon4 from "/assets/tree4.svg"
import icon5 from "/assets/tree5.svg"
import NewScreen from "/assets/NewScreen.webp"

function Anime() {


    const [counterOn , setCountOn] = useState(false)

    // const [currentIndex, setCurrentIndex] = useState(0);
  
   
  
  return (
   <section className='hell'>

{/* new section in this place */}

<div className="newSection">
   <img src={NewScreen} alt="" />
</div>


     <ScrollTrigger onEnter= {() => setCountOn(true)} onExit ={() => setCountOn(false)}

     >
        <div className="plants">
           <div className='plant_img'>
             <img src={icon1} alt="plant_img" srcset="" />

             <h1>  
                
                {counterOn &&   <CountUp  className='countUp'  start={0} end= {18763} duration={0.6} delay={1} /> } <br />
                 Trees+
             </h1>
           </div>

           <div className='plant_img'>
             <img src={icon2} alt="plant_img" srcset="" />
             
             <h1>  
                
                {counterOn &&   <CountUp  className='countUp'  start={0} end={211083.75} duration={0.7} delay={1} /> } <br />
                Kg of CO2
             </h1>
           </div>

            <div className='plant_img'>
             <img src={icon3} alt="plant_img" srcset="" />

             <h1>  
                
                {counterOn &&   <CountUp  className='countUp'  start={0} end={11.72} duration={0.8} delay={1} /> } <br />
                Hectares
             </h1>
           </div>

            <div className='plant_img'>
             <img src={icon4} alt="plant_img" srcset="" />

             <h1>  
                
                {counterOn &&   <CountUp className='countUp' start={0} end={10} duration={0.9} delay={1} /> } <br />
                Farmers
             </h1>
           </div>

           <div className='plant_img'>
             <img src={icon5} alt="plant_img" srcset="" />

             <h1>  
                
                {counterOn &&   <CountUp className='countUp' start={0} end={1} duration={1} delay={1} /> } <br />
                Countries
             </h1>
           </div>


        </div>
     </ScrollTrigger>

        
   </section>

   
  )
}

export default Anime
