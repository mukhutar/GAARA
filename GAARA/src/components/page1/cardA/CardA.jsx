import React from 'react'
import './card.scss';
import { motion , useScroll } from 'framer-motion';
import tree from '/assets/tree.svg';
import aniImg from '/assets/anime.gif'

const variants = {
    initial:{
        x:-500,
        y:100,

    },
    animate:{
        x:0,
        y:0,
        opacity:1,
        transition:{
            duration:1.5,
            straggerChildren:0.1,
        }
    }
}

const variantsb = {
    initial:{
        y:-500,
        x:100,

    },
    animate:{
        x:0,
        y:0,
        opacity:1,
        transition:{
            duration:2,
            straggerChildren:0.1,
        }
    }
}
function CardA() {
  return (
    <section className='CardContainer' >
        <motion.div className="card" variants = {variants} initial = "initial" animate = "animate">
            <img src={tree} alt="tree pic" srcset="" />
            <h2>Afforestation</h2>
            <p>
            Boost your income with carbon credits through our afforestation program. Utilize our USSD code for a flexible tree loan and let our green agents track your trees via our mobile app. Start reaping the rewards from your new plantings in just a few years
            </p>
        </motion.div>


        <div className="text">
            <img className='icon' src={aniImg} alt="anime gif" />
            <h2> <span>Carbon</span> rewarding <br /> to <span>African</span> <br /> smallholder <br />
             <span>farmers.</span></h2>
        </div>


        <motion.div className="card" variants = {variantsb} initial = "initial" animate = "animate">
            <img src={tree} alt="tree pic" srcset="" />
            <h2>Carbon forestry leasing <br />  model</h2>
            <p>Partner with us to transform your existing forest into a carbon revenue source, offering competitive returns to traditional timber profits, all through tailored management and leasing plans.</p>
        </motion.div>
      
    </section>
  )
}

export default CardA




// import React, { useEffect, useRef } from 'react';
// import lottie from 'lottie-web';
// import animationData from './data.json';
//  import './card.scss';


// const  CardA = () => {
//   const animationContainer = useRef(null);

//   useEffect(() => {
//     if (animationContainer.current) {
//       const anim = lottie.loadAnimation({
//         container: animationContainer.current,
//         renderer: 'svg',
//         loop: true,
//         autoplay: true,
//         animationData: animationData, 
//       });

//       return () => anim.destroy();
//     }
//   }, [animationData]); 

//   return (
//     <div className='africa' ref={animationContainer} style={{ width: '100%', height: '100%' }}>
//     </div>
//   );
// }; 

// export default CardA;



