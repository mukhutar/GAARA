import React from 'react'
import icon from '/assets/GaaraLogo.png'
import Arrow from '/assets/WhiteArrow.svg'
import DropDown from "/assets/greenDrop.svg";
import { Link } from 'react-router-dom';
import './page2hero.scss';
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

function Page2hero() {


  return (
    <section className='Page2Hero'>

        <div className="heropage2">
                <header className='nav'>
                <Link className='listItem' to='/'>
                  <img className='Hero_logo' src={icon} alt="comapany's logo" srcset="" />
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
                                    <Link className='listItem' to='/product/Carbon foresty leasing' >Carbon foresty leasing </Link>
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
                    <Link className='activeLink' href="#">About Us</Link>
                </li>

                <li>
                    <Link href="#"><button>Estimate Income <img src={Arrow} alt="arrow svg" srcset="" /></button></Link>
                </li>
                </ul>
            </header>

        </div>

       <div className="hero_body">
            <div className="page2texts">
                <motion.h2 variants={AnimeHead } initial="hidden" animate="show" className="head_text">Trees Loan</motion.h2>
                <h2 className="head_paragraph">Simply Empowering Digital Finance as the Key to <br /> Growth for Africa's Sustainable Farmers.</h2>
            </div>

            <div className="words">
                <span className='word1'>Who</span>
                <span className='word2'>How</span>
                <span className='word3'>Why</span>
                <span className='word4'>Matters?</span>
            </div>


       </div>
      
    </section>
  )
}

export default Page2hero
