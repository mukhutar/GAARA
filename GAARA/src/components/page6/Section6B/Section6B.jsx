import React from 'react'
import "./Section6B.scss";
import cloud from "/assets/cloud.svg";
function Section6B() {
  return (
    <section className=' Section6B'>
        <h3 className='page6Head'>How We Cultivate Success <br /> Together.</h3>

       <section className='sectionCards'>
              <div className="P5Cards">
                    <div className="card">
                        <img src={cloud} alt="" />
                        <h3>Initial Assessment</h3>
                        <li>We begin with an in-depth analysis of your land, local climate, and soil conditions to identify the most suitable fruit tree varieties for your farm.</li>
                    </div>

                    <div className="card">
                       <img src={cloud} alt="" />
                        <h3>Implementation Support</h3>
                        <li>Our team guides you through the implementation of the plan, ensuring best practices in tree planting, care, and maintenance.</li>
                    </div>
                </div>

                <div className="P5Cards">
                    <div className="card">
                        <img src={cloud} alt="" />
                        <h3>Customized Planning</h3>
                        <li>Based on the assessment, we develop a detailed cultivation plan, including tree spacing, irrigation strategies, and integrated pest management.</li>
                    </div>

                    <div className="card">
                       <img src={cloud} alt="" />
                        <h3>Ongoing Assistance</h3>
                        <li>We offer continuous support and advice to help you navigate challenges and optimize your orchard's performance.</li>
                    </div>
                </div>

       </section>
                      <div className='horizontalline'></div>

    </section>
  )
}

export default Section6B
