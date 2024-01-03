import React from 'react'
import icon from '/assets/GaaraLogo.png'
import Arrow from '/assets/WhiteArrow.svg'
import DropDown from "/assets/greenDrop.svg";
import { Link } from 'react-router-dom';
import "./SectionI.scss"
import bg from "/assets/pg5Bbg.png";

function SectionI() {
  return (
    <section className='Page5Hero'>

        <div className="heropage5">
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
                                    <Link className='listItem'  to='/product/agribussiness consulting' >Agribussiness Consulting </Link>
                                </li>
                            </ul>

                        </div>
                    </Link>
                </li>

                <li>
                    <Link className='activeLink' href="#">How it works</Link>
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

        <div className="imgSection">
              <img src={bg} alt="" srcset="" />
        </div> 

        <div className="page5texts">
            <h3 className='page5H'>Virtual Forest & Impact Analytics</h3>

            <p className='page5P'>Latest digital technology  to revolutionize how we interact with and understand our forests. Our innovative platform is designed for forest owners, environmental agencies, and nature enthusiasts who are committed to preserving and enhancing the health of forest.</p>
        </div>
      
    </section>
  )
}

export default SectionI
