import React from 'react'
import icon from '/assets/GaaraLogo.png'
import Arrow from '/assets/WhiteArrow.svg'
import { Link } from 'react-router-dom';
import './page2hero.scss';

function Page2hero() {
  return (
    <section className='Page2Hero'>

        <div className="heropage2">
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

        </div>

       <div className="hero_body">
            <div className="page2texts">
                <h2 className="head_text">Trees Loan</h2>
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
