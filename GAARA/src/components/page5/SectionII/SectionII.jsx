import React from 'react'
import "./SectionII.scss";
import leaftree from "/assets/leaftree.png";
import imgNew from "/assets/imgNew1.webp";
import imgNew2 from "/assets/imgNew2.webp";
function SectionII() {
  return (
    <section className='Page5II'>

        <div className="sideOne">          
          <img className='Limage' src={imgNew} alt="" srcset="" /> <br /> <br />


          <div className="textcontainer">
            <h3> Impact API for Forest Owners</h3>
           <p>
           <li> Seamless Integration:</li> Effortlessly connect our Impact API with your digitals for easy data management.
           <li> Real-Time Data Access:</li> Instantly monitor diverse forest metrics like tree health.
            <li>Customizable Metrics:</li> Tailor your tracking to meet specific forest management goals.

           </p>

          </div>

        </div>

        <div className="mddle">
            <img src={leaftree} alt="" /> 
            <span  className='treeBlock'></span>
        </div>


        <div className="sideOne">

              <div className="textcontainerr">
                  <h3>Virtual Forest Experience</h3>
                    <p>
                       <li>Immersive Visualization:</li> Experience your forest virtually with detailed satellite imagery.
                        <li>Real-Time Monitoring:</li> Keep track of forest health and environmental changes with instant data updates."

                    </p>

               </div>

          <img className='Rimage' src={imgNew2} alt="" srcset="" />
        </div>
      
    </section>
  )
}

export default SectionII
