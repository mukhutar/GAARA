import React from 'react'
import "./Last.scss"
import otherOne from"/assets/otherOne.png"

function Last() {
  return (
    <div className='Last'>
        <div className="Last_paragraph">
            <p>
            <span className="boldest">GAARA</span> derived from the <span className="Lbold">Kinyarwanda</span> term meaning <span className="Sbold">"expand,"</span> Gaara Fund is a green initiative born in Rwanda for the African smallholder farmers to have access to financial resources enabling them to invest in tree planting while counteracting climate change. 
            The primary objective is to restore the <span className="Sland">African lands</span> that have been the lifeblood of its people and to make a tangible contribution to global climate resilience efforts.
             Through the Gaara fund, farmers get tree seedlings, fertilizers, and pesticides on flexible loans as fast as dialing a <span className="Sbold">USSD code. </span> <br /> <br />

            <span className='boldest'>Mission </span>
             Equipping African smallholder farmers with essential financial tools to lead the change against climate change and soil degradation." <br /> <br />

            <span className="boldest">Vision </span>
            We envision a continent where every smallholder farmer thrives economically through sustainable practices and is recognized for their vital role in global climate resilience.

            </p>
        </div>


        <div className="Last_img">
            <img src={otherOne} alt="" />
        </div>
      
    </div>
  )
}
 
export default Last
