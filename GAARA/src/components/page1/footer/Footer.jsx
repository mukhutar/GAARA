import React from 'react'
import'./footer.scss';
import { Link } from 'react-router-dom';

import footerEnv from "/assets/Footer.png";
import tweeter from "/assets/tVector.svg";
import insta from "/assets/iVector.svg";
import facebook from "/assets/fVector.svg";
import linkedin from "/assets/inVector.svg";
import garalog from "/assets/garalog.png";

function Footer() {
  return (
    <section className='Footer'>
        <img src={footerEnv} alt="Env img" />
        <div className="main_footer">
            <div className="footer_img">
                <img className='footer_logo' src={garalog} alt="" />
            </div>

            <div className="footer-links">
                <h3 className='link_tittle'>COMPANY</h3>
                <ul>
                    <li>
                        <Link className="footer_ancho" to="/">About us </Link>
                    </li>

                    <li>
                        <Link className="footer_ancho" to="/">Career </Link>
                    </li>

                    <li>
                        <Link className="footer_ancho" to="/">Contact Us </Link>
                    </li>
                </ul>
            </div>


            <div className="footer-links">
            <h3 className='link_tittle'>FARMERS</h3>

                <ul>
                    <li>
                        <Link className="footer_ancho" to="/">About us </Link>
                    </li>

                    <li>
                        <Link className="footer_ancho" to="/">Career </Link>
                    </li>

                    <li>
                        <Link className="footer_ancho" to="/">Contact Us </Link>
                    </li>
                </ul>
            </div>

            <div className="footer_icons">
                <Link to='/'><img src={tweeter} alt="tweeterIcon" /></Link>
               <Link to="/"> <img src={insta} alt="tweeterIcon" /></Link>
               <Link to="/"> <img src={facebook} alt="facebookIcon" /></Link>
               <Link to="/"> <img src={linkedin} alt="LinkedIcon" /></Link>
                
            </div>
            

            
        </div>
        
      
    </section>
  )
}

export default Footer
