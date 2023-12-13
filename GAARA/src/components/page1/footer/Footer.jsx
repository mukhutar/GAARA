import React from 'react'
import'./footer.scss';
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
                <img src={garalog} alt="" />
            </div>

            <div className="footer-links">
                <h3 className='link_tittle'>COMPANY</h3>
                <ul>
                    <li>
                        <a href="#">About us </a>
                    </li>

                    <li>
                        <a href="#">Career </a>
                    </li>

                    <li>
                        <a href="#">Contact Us </a>
                    </li>
                </ul>
            </div>

            <div className="footer-links">
                <h3 className='link_tittle'>FARMERS</h3>
                <ul>
                    <li>
                        <a href="#">About us </a>
                    </li>

                    <li>
                        <a href="#">Career </a>
                    </li>

                    <li>
                        <a href="#">Contact Us </a>
                    </li>
                </ul>
            </div>


            <div className="footer-links">
            <h3 className='link_tittle'>FARMERS</h3>

                <ul>
                    <li>
                        <a href="#">About us </a>
                    </li>

                    <li>
                        <a href="#">Career </a>
                    </li>

                    <li>
                        <a href="#">Contact Us </a>
                    </li>
                </ul>
            </div>

            <div className="footer_icons">
                <img src={tweeter} alt="tweeterIcon" />
                <img src={insta} alt="tweeterIcon" />
                <img src={facebook} alt="facebookIcon" />
                <img src={linkedin} alt="LinkedIcon" />
                
            </div>
            

            
        </div>
        
      
    </section>
  )
}

export default Footer
