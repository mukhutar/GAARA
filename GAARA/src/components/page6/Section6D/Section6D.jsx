import React from 'react'
import "./Section6D.scss";
import fruitTree from "/assets/fruitTreee.png"
import cardFruit from "/assets/cardTree.png"
import whiteArrw from "/assets/ArrowWhite.svg"
function Section6D() {
  return (
    <section className=' Section6D'>
        <div className="first">
            <h3> <span>Ready to Grow? </span> <br />
                Let's Plant the Seeds of Success Together!
            </h3>

            <img src={fruitTree} alt="" />
        </div>

        <div className="sec">
            <img src={cardFruit} alt="" />
            <button>
            Schedule consultancy
            <img src={whiteArrw} alt="" />
            </button>
        </div>
      
    </section>
  )
}

export default Section6D
