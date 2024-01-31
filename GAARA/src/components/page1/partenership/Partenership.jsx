import React from 'react'
import "./Partnership.scss"
import  bBClogo from '/assets/BBC-logo.webp';
import download from "/assets/download.webp";
import dw from "/assets/DW.webp";
import forbs from "/assets/forbs.webp";
import newTimes from "/assets/newTimes.webp";

function Partenership() {
  return (
    <section className='Part_container'>
        <h2>AS SEEN IN</h2>

        <div className="content">
            <div className="location">
                <h3 className='locaton_text'>Born In Rwanda, For Africa</h3> 
               
            </div> 
            <hr className='horizontal_Line' />

            <div className="partnerships">
                <img src={bBClogo} alt="logo" srcset="" />
                <img src={download} alt="logo" srcset="" />
                <img src={dw} alt="logo" />
                <img src={forbs} alt="logo" />
                <img src={newTimes} alt="logo" />

            </div>

        </div>
      
    </section>
  )
}

export default Partenership
