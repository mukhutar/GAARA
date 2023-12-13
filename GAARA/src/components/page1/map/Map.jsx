import React from 'react'
import "./map.scss";
import map from "/assets/map.png"
import Arrow from '/assets/whiteArrow.svg'

function Map() {
  return (
    <section className='MapContainer' >
        <div className="map">
            <h2>Partner <br /> with <br /> Us</h2>
            <img src={map} alt="african map" />
        </div>

        <div className="map_texts">
          <p> <h2> <span>We Cultivate The Change.</span> <span className="spn">Digital Loans 
             Connect Farmers to Carbon Market <br />  Profits <br /> </span> <br /></h2> <br /> 

             <span className='pargraph'>
             Join GAARA’s forces to revolutionize the agricultural forestry for African smallholder farmers. Our digital tree loan program doesn't just boost harvest volumes it connects farmers to the burgeoning carbon market.
             </span>
            </p>
                 
           <div className="btn">
             <button>Let's get started  <img src={Arrow} alt="arrow svg" srcset="" /></button>

           </div>

        </div>
      
    </section >
  )
}

export default Map
