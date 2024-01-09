import React from 'react'
import "./SectionIII.scss";
import  cloud from"/assets/cloud.svg";
import WhiteArrw from '/assets/ArrowWhite.svg';

function SectionIII() {
  return (
    <section className=' Section5'>

        <h3 className='Section5Heading'>Why choose Us?</h3>

        <div className="Reasons">
            <div className="Rone">
                <section >
                    <img className='Ricon' src={cloud} alt="cloud" />
                    <h3 className='Rheading'>Innovative Technology</h3>
                    <li className='Rlist'>Our platform uses state-of-the-art technology to provide the most accurate and detailed insights into forest ecosystems.</li>
                </section>

                <section >
                    <img className='Ricon' src={cloud} alt="cloud"/>
                    <h3 className='Rheading'>Commitment to Sustainability</h3>
                    <li className='Rlist'>Our mission is to aid in the preservation and health of forests, contributing to global environmental sustainability efforts.</li>
                </section>

            </div>


            <div className="Rone">

                       <section >
                            <img className='Ricon' src={cloud} alt="cloud" />
                            <h3 className='Rheading'>Customization</h3>
                            <li className='Rlist'>We understand that each forest is unique. Our services are tailored to meet the specific needs and goals of your forest.</li>
                        </section>

                        <section >
                            <img className='Ricon' src={cloud} alt="cloud"/>
                            <h3 className='Rheading'>Expert Support</h3>
                            <li className='Rlist'>Our team of experts is always available to provide guidance and support, ensuring you make the most of our platform.</li>
                        </section>


            </div>
        </div>

        <button className='GetInTouch'> Get in Touch
        
        <img className='Wicon' src={WhiteArrw} alt="" />

        </button>

      
    </section>
  )
}

export default SectionIII
