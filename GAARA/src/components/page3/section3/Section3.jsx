import React from 'react'
import "./section3.scss";


function Section3() {
  return (
    <section className='Intro'>

      <div className="sides">

            <div className="leftSide">
                <div className="Side_text">
                   <p>
                      <span className="bold_text"> Access to Financing</span> <br />  Digital tree loans can provide the necessary upfront capital for smallholder farmers to <br /> invest in tree planting without the burden of immediate financial strain, enabling them to participate in carbon markets.
                   </p>
                </div>


                <div className="side_Img">
                    <div className="imgContainer"></div>
                </div>


                <div className="Side_text">
                    <p>
                   <span className="bold_text"> Resilience to Climate Change </span> <br /> Tree planting increase biodiversity and can help mitigate the effects of climate change on the farmer's land, safeguarding their agricultural productivity.
                    </p>
                </div> 
            </div>

            <div className="rightSide">
              <div className="side_Img">
                    <div className="imgContainer"></div>
              </div>


              <div className="Side_text">
                <p>
                <span className="bold_text">Steady Income Stream </span> <br />  The sale of carbon credits from the trees planted can offer a regular and additional income source for the family, which can be particularly valuable during off-seasons or poor harvests.
                </p>
              </div> <br />

              
              <div className="side_Img2">
                 <div className="imgContainer"></div>
              </div>

            </div>

      </div>
      
    </section>
  )
}

export default Section3
