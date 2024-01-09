import React from 'react'
import "./Section6C.scss";
import leaf from "/assets/leaf.png";
import rightLeaf from "/assets/leafright.png";
import svg from "/assets/nnn.png";

const Section6C = () => {
  return (
    <section className=' Section6C' >

        <h3 className='page6Heading'>Why Your Orchard Will <br /> Thrive with Us</h3>

       <img className='svg' src={svg} alt="" />
        <div className="Section6Sides">
           <div className="Side">
               <div className="img_container">
                    <div className="border1"></div>
                    <img className='img1' src={leaf} alt="" />
                </div>

                <div className="section_text1">

                    <h3>Innovative, Eco-Friendly <br /> Techniques</h3>
                    <p>Embrace practices that love the <br /> earth as much as they love profits.</p>

                </div>

                <div className="section_text2">
                    <h3>Personalized, Hands-On <br /> Guidance</h3>
                    <p>Your goals, our mission. We walk the <br /> orchard path with you, step by step.</p>
                    
                </div>

                <div className="img_container">
                    <div className="border2"></div>
                    <img  className='img2' src={rightLeaf} alt="" />
                </div>
           </div>


           <div className="Side">

                  <div className="section_text3">

                    <h3>Expertise That Shines</h3>
                    <p>Dive into our knowledge pool brimming <br /> with cutting-edge agricultural insights.</p>

                  </div>

                  <div className="img_container">
                    <div className="border3"></div>
                    <img  className='img3' src={leaf} alt="" />
                  </div>


                    <div className="img_container">
                        <div className="border4"></div>
                        <img  className='img4' src={rightLeaf} alt="" />
                        <div className="borderN"></div>
                    </div>

                    <div className="section_text4">
                        <h3>Results That Speak Volumes</h3>
                        <p>Our legacy? Orchards thriving across <br /> regions, testimonials blooming with <br /> success.</p>

                    </div>

           </div>


        </div>
      
    </section >
  )
}

export default Section6C
