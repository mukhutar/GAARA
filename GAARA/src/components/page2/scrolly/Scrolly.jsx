import React from 'react'
import "./scrolly.scss"
import leaf from "/assets/leaf.png"
import leafright from "/assets/leafright.png"
import leaftree from "/assets/leaftree.png"
function Scrolly() {
  return (
    <section className='scrolly_section'>
      <div className='items'>

        <div className="img_container"> 
        
         
        </div>

        <img className='item_img' src={leaf} alt="" />

        <h2 className='item_text'>How?</h2>
        <p className='item_description'>
        Farmers can swiftly secure loans for tree planting through a simple USSD code, with our Eco Forest app and Green Agents making the process seamless and straightforward.
        </p>

        <div className="img_container">
        </div>   
        
               <img className='item_img' src={leaf} alt="" />



      </div>


      <div className='middle_items'>
        <hr className='scrolly_line' /> <br />
        
        <img className='item_icon' src={leaftree} alt="" />
        <span className='borderShape'></span>

        <hr className='scrolly_line' />

        <img className='item_icon' src={leaftree} alt="" />
        <span className='borderShape'></span>

        <hr className='scrolly_line' />

        <img className='item_icon' src={leaftree} alt="" />
        <span className='borderShape'></span>

      </div>


      <div className='items'>

            <h2 className='item_righttext'>For Whom</h2>

            <p className='item_descriptionn'>
               Smallholder farmers with land to spare, seize this chance to contribute to a sustainable future. Apply now, plant trees, and enjoy the benefits of ecological responsibility.


            </p>
            
            <div className="img_containerr">

             </div>            
             
               <img className='item_imgr' src={leafright} alt="" />



            <h2 className='item_righttext'>Why?</h2>

            <p className='item_descriptionn'>
               We're committed to reversing the trend where only 4.3% of loans are allocated to agriculture in Africa, empowering the 69% of Rwanda's population who farm, to invest in sustainable and profitable agroforestry.

            </p>
      </div>
    </section>
  )
}

export default Scrolly
