import React from 'react'
import './hero.scss';
import icon from '/assets/GaaraGreen.webp'
import Arrow from '/assets/Arrow.svg'
import parIcon1 from '/assets/partn1.webp';
import parIcon2 from '/assets/partn2.webp';
import parIcon3 from '/assets/partner3.webp';
import parIcon4 from '/assets/partn4.webp';
import DropDown from "/assets/DropIcon.svg";
import { Link } from 'react-router-dom';
import {motion} from "framer-motion"

const AnimeHead = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 1,
        delay:0.4,
        ease:"linear",
        duration: 2,
        x: { duration: 1 }
      }
    }
  }


function Hero() {


  return (
   <section className='section'>
      <div className='Hero_section '>
          <motion.header className='nav'>
       
          <Link className='listItem' to='/'>
                  <img className='Hero_logo' src={icon} alt="comapany's logo" srcset="" />
            </Link>
        <motion.ul>

            <li >
                <Link className='activeLink' to='/'>Home</Link>
            </li>

            <li >
                <Link  className='productDrop' >Products <img src={DropDown} alt="Dro" srcset="" />
                
                 <div className="productList">
                        <ul>
                            <li>
                                <Link className='listItem' to='/product/tree loan'>Tree loan</Link>
                            </li>
                            <li>
                                <Link className='listItem' to='/product/Carbon Program' > Carbon Program</Link>
                            </li>
                            <li>
                                <Link className='listItem' to= '/product/Carbon foresty leasing' >Carbon foresty leasing </Link>
                            </li>
                            <li>
                                <Link className='listItem' to= '/product/Famers digital monital' >Farmer's Digital monital</Link>
                            </li>

                            <li>
                                <Link className='listItem' to='/product/agribussiness consulting' >Agribussiness Consulting </Link>
                            </li>
                         </ul>

                     </div>
                </Link>
            </li>

           

            <li>
                <Link className='activeLink' to='/about us'>About Us</Link>
            </li>

            <li>
                <Link href="#"><button>Estimate Income <img src={Arrow} alt="arrow svg" srcset="" /></button></Link>
            </li>
        </motion.ul>

        
        
        
      </motion.header>

      <motion.h1 variants={AnimeHead} initial="hidden" animate="show" >Digital Trees Loans</motion.h1> <br />
      <h4>The new root of Rewarding for <span>African farmers.</span></h4>

      <button className='changed' >  <Link className='productLink' to='/product'> Products <img src={Arrow} alt="arrow svg" srcset="" /> </Link> </button>   <hr /> 
      <div className="hero_footer"> 
        <h4>In Partnership With</h4>  <br /> 
         <div className="partnership">
            <img src={parIcon1} alt="parnicon" srcset="" />
            <img src={parIcon2} alt="parnicon" srcset="" />
            <img src={parIcon3} alt="parnicon" srcset="" />
            <img src={parIcon4} alt="parnicon" srcset="" />
         </div>
      </div>
     </div>
    
   </section>
  )
}

export default Hero
