import React from 'react'
import icon from '/assets/GaaraLogo.png'
import Arrow from '/assets/WhiteArrow.svg'
import DropDown from "/assets/greenDrop.svg";
import { Link } from 'react-router-dom';
import "./NavBar.scss";

function NavBar() {
  return (
    <div>
          <div className="AboutUs">
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
                    <Link className='activeLink' to = "/about us">About Us</Link>
                </li>

                <li>
                    <Link href="#"><button>Estimate Income <img src={Arrow} alt="arrow svg" srcset="" /></button></Link>
                </li>
                </ul>
            </header>

        </div>
      
      
    </div>
  )
}

export default NavBar
