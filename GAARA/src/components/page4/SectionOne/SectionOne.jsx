import React from 'react'
import icon from '/assets/GaaraLogo.png'
import Arrow from '/assets/WhiteArrow.svg'
import DropDown from "/assets/greenDrop.svg";
import { Link } from 'react-router-dom';
// import {motion} from "framer-motion"
import "./SectionOne.scss";

function SectionOne() {
  return (
    <section className='Page4Hero'>

          <div className="heropage4">
                <header className='nav5'>
                <img src={icon} alt="comapany's logo" srcset="" />
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
                    <Link className='activeLink' to="">About Us</Link>
                </li>

                <li>
                    <Link to=""><button>Estimate Income <img src={Arrow} alt="arrow svg" srcset="" /></button></Link>
                </li>
                </ul>
            </header>

        </div>

        <div className="pg4Hero">
          <section className="hero_dms">
            <h2 className="hd">Carbon Forestry Leasing Model</h2>

            <span className="spang4p">
            Sustain and Earn Keep Your Forests Standing and Profit with Innovative Carbon Forestry Models.
            </span>
          </section>

     
        </div>


      
      
    </section>
  )
}

export default SectionOne
