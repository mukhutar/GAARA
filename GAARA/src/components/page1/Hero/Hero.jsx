import React from 'react'
import './hero.scss';
import icon from '/assets/GaaraFundWhitePNG1.png'
import Arrow from '/assets/Arrow.svg'
import parIcon1 from '/assets/partn1.png';
import parIcon2 from '/assets/partn2.png';
import parIcon3 from '/assets/partner3.png';
import parIcon4 from '/assets/partn4.png';
import DropDown from "/assets/DropIcon.svg";
import { Link } from 'react-router-dom';
import {motion} from "framer-motion"


function Hero() {


  return (
   <section className='section'>
      <div className='Hero_section '>
          <motion.header className='nav'>
         <img src={icon} alt="comapany's logo" srcset="" />
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
                <Link className='activeLink' href="#">About Us</Link>
            </li>

            <li>
                <Link href="#"><button>Estimate Income <img src={Arrow} alt="arrow svg" srcset="" /></button></Link>
            </li>
        </motion.ul>

        
        
        
      </motion.header>

      <h1>Digital Trees Loans</h1> <br />
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
