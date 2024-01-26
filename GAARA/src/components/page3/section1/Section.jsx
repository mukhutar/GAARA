import React from 'react'
import icon from '/assets/GaaraLogo.png'
import Arrow from '/assets/WhiteArrow.svg'
import bottom from '/assets/Bottom.png'
import DropDown from "/assets/greenDrop.svg";
import { Link } from 'react-router-dom';
import "./section1.scss";

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


function Section() {
  return (
    <section className='FirstSection'>

        <div className="sectionHero">
        <header className='nav'>
                <Link className='listItem' to='/'>
                    <img  className='Hero_logo'  src={icon} alt="comapany's logo" srcset="" />
                </Link>
                <ul>

                <li >
                    <Link className='activeLink' to='/'>Home</Link>
                </li>

                <li  className='productDrop'>
                    <Link className='activeLink' >Products <img src={DropDown} alt="Dro" srcset="" />
                    
                    <div className="productList">
                            <ul>
                                <li>
                                    <Link className='listItem' to='/product/tree loan'>Tree loan</Link>
                                </li>
                                <li>
                                    <Link className='listItem' to='/product/Carbon Program'> Carbon Program</Link>
                                </li>
                                <li>
                                    <Link className='listItem' to= '/product/Carbon foresty leasing'  >Carbon foresty leasing </Link>
                                </li>
                                <li>
                                    <Link className='listItem' to= '/product/Famers digital monital' >Farmer's Digital monital</Link>
                                </li>

                                <li>
                                    <Link className='listItem'  to='/product/agribussiness consulting'  >Agribussiness Consulting </Link>
                                </li>
                            </ul>

                        </div>
                    </Link>
                </li>

               

                <li>
                    <Link className='activeLink' to="/about us">About Us</Link>
                </li>

                <li>
                    <Link to='#'><button>Estimate Income <img src={Arrow} alt="arrow svg" srcset="" /></button></Link>
                </li>
                </ul>
            </header>

           <div className="sectionBody">
                <motion.h1 variants={AnimeHead } initial="hidden" animate="show" className='bodyHeading'>Carbon Program</motion.h1>  <br /> <br /> <br /> <br />
                <p className='sectionParagraph1'>
                Uplifting Farmers, Not Burdens. Our <br /> Tree Loan Introduces African Smallholders to Rewarding <br /> Carbon Markets.
                </p>
                <img src={bottom} alt="bottomImg" />
        
               
            </div>
        </div>

       

      
    </section>
  )
}

export default Section
