import React from 'react'
import "./SectionTwo.scss";
import cloud from "/assets/cloud.svg";

function SectionTwo() {
  return (
    <section className='SectionTwo'>


        <div className="pg4par">
            <section className="F_words">
              <p> <span className="bold1">Boost your forest's earning potential as your trees grow.</span> <br />
              Our customized <span className="bold">leasing</span> solutions provide annual <span className="bold">earnings </span>for forests that are both <span className="bold">harvest-ready</span> and those intended for <span className="bold">conservation.</span></p>
            </section>

            <div className="dail">
                <h5 className='dail_text'>JOIN US </h5> <br /> <br />
                <span className="USSD">
                    Dail *801*11#
                </span>
            </div> 
        </div>

        <div className="cds">
            <h3 className="cdsH">
            Why Carbon Forestry Lease Could Benefit You
            </h3>

            <div className="cads">

                <div className="cad">
                    <img src={cloud} alt="cloudIMG" srcset="" /> <br /> <br />

                    <span className="cdH">
                    Forward-Thinking
                    </span>

                    <li className="li">
                    You're exploring innovative income opportunities from your existing forest.
                    </li>
                </div>

                <div className="cad">
                    <img src={cloud} alt="cloudImg" srcset="" /> <br /> <br />

                    <span className="cdH">Visionary investor</span>
                    
                    <li className="li">
                    You're strategizing for future generations and building your retirement nest egg.
                    </li>
                </div>

                <div className="cad">
                    <img src={cloud} alt="cloudImg " srcset="" /> <br />

                    <span className="cdH">Improve Your Monthly income</span>
                    
                    <li className="li">Aim to cut down debt and dodge market ups and downs? Opt for a steadier, more dependable income stream</li>
                </div>

            </div>
        </div>
      
    </section>
  )
}

export default SectionTwo
