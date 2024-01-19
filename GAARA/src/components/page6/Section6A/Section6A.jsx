import React from 'react'
import "./Section6A.scss";
import footer5 from "/assets/Footer5.png";
import icon from '/assets/GaaraGreen.png'
import Arrow from '/assets/Arrow.svg'
import DropDown from "/assets/DropIcon.svg";
import { Link } from 'react-router-dom';
import {motion} from "framer-motion"
import whiteArrw from "/assets/ArrowWhite.svg";

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


function Section6A() {
  return (
    <section className='Section6A'>
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
                <Link className='activeLink' href="#">About Us</Link>
            </li>

            <li>
                <Link href="#"><button>Estimate Income <img src={Arrow} alt="arrow svg" srcset="" /></button></Link>
            </li>
        </motion.ul>

        
        
        
      </motion.header>

      <motion.h1 variants={AnimeHead} initial="hidden" animate="show" className="page5Heading">
      Agribusiness Consultancy For <br /> Fruit Tree Farming
      </motion.h1>

      </div>

      <div className="footer5">
        <img src={footer5} alt="" />
      </div>

      <div className="page6Texts">

        <div className="p">
          <p>
          <span>Discover</span> the vibrant world of fruit tree farming with our <span>expert</span> Agribusiness Consultancy. Whether you're dreaming of <span>lush orchards</span> or are a fruit farming veteran, we're here to turn those <span>dreams </span>into <span>bountiful</span> realities.
          </p>
        </div>
        
        <div className="contct">

          <h3>Embark on a Fruitful Journey!</h3>

          <button>
            Contact Us
            <img src={whiteArrw} alt="" />
          </button>

        </div>
      </div>

      
    </section>
  )
}

export default Section6A
