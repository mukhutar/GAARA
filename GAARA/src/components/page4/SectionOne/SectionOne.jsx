import React from 'react'
import "./SectionOne.scss"
import icon from '/assets/GaaraLogo.png'
import Arrow from '/assets/WhiteArrow.svg'
import DropDown from "/assets/greenDrop.svg";
import { Link } from 'react-router-dom';

function SectionOne() {
  return (
    <section className='SectionOne' >
        <div className="mainSct">
        <header className='nav'>
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
                                    <Link className='listItem' to= '/product/Carbon foresty leasing'  >Carbon foresty leasing </Link>
                                </li>
                                <li>
                                    <Link className='listItem' >Farmer's Digital monital</Link>
                                </li>

                                <li>
                                    <Link className='listItem' >Agribussiness Consulting </Link>
                                </li>
                            </ul>

                        </div>
                    </Link>
                </li>

                <li>
                    <Link className='activeLink' to='#'>How it works</Link>
                </li>

                <li>
                    <Link className='activeLink' to='#'>About Us</Link>
                </li>

                <li>
                    <Link to='#'><button>Estimate Income <img src={Arrow} alt="arrow svg" srcset="" /></button></Link>
                </li>
                </ul>
            </header>
        </div>
      
    </section >
  )
}

export default SectionOne
