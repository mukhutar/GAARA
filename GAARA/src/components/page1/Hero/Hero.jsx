import React from 'react'
import './hero.scss';
import icon from '/assets/GaaraFundWhitePNG1.png'
import Arrow from '/assets/Arrow.svg'
import parIcon1 from '/assets/partn1.png';
import parIcon2 from '/assets/partn2.png';
import parIcon3 from '/assets/partner3.png';
import parIcon4 from '/assets/partn4.png';
import { Link } from 'react-router-dom';
function Hero() {

  return (
   <section className='section'>
      <div className='Hero_section '>
          <header className='nav'>
         <img src={icon} alt="comapany's logo" srcset="" />
        <ul>

            <li>
                <Link to='/'>Home</Link>
            </li>

            <li>
                <Link to='/product'>Products</Link>
            </li>

            <li>
                <a href="#">How it works</a>
            </li>

            <li>
                <a href="#">About Us</a>
            </li>

            <li>
                <a href="#"><button>Estimate Income <img src={Arrow} alt="arrow svg" srcset="" /></button></a>
            </li>
        </ul>
      </header>

      <h1>Digital Trees Loans</h1> <br />
      <h4>The new root of Rewarding for <span>African farmers.</span></h4>

      <button>  <Link className='productLink' to='/product'> Products <img src={Arrow} alt="arrow svg" srcset="" /> </Link> </button>   <hr /> 
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
