import React , {useState} from 'react'
import './Body.scss'
import { Link } from 'react-router-dom'
import ScrollTrigger from 'react-scroll-trigger';
import CountUp from 'react-countup';
function Body() {   

    const [counterOn , setCountOn] = useState(false)

  return (
    <div className='body'>
        <div className="body_text">
            <p>
                <span className='firstspn'>
                We are crafting new era
                </span>
                “The Pathway to Agenda <br />
                <span className='firstspnn'>
                    2027"
                </span>
            </p>
        </div>
           <ScrollTrigger onEnter= {() => setCountOn(true)} onExit ={() => setCountOn(false)}>
                <div className="body_table">

                    <section>

                        <div className="box">
                            <p className="box_heading">
                            <span className="box_span">{counterOn && <CountUp start={0} end={350420000} duration={0.6} delay={1}/>} +</span> <br /> <br />
                            Tress <br />
                            <span className='box_span2'> {counterOn && <CountUp start={0} end={95} duration={0.6} delay={1}/> }  %</span> <br />
                            Survived <br />
                            <Link className='box_link'  to= "">Learn more</Link>
                            </p>  
                        
                        </div>



                        <div className="box3">
                    
                            <p className="box_heading">
                            <span className="box_span">{counterOn && <CountUp start={0} end={500600} duration={0.6} delay={1}/>} +</span> <br /> <br />
                            Farmers in <br />
                            <span className='box_span2'>{counterOn && <CountUp start={0} end={8} duration={0.8} delay={2}/>}</span> <br />
                            Countries<br />
                            <Link   className='box_link' to= "">Learn more</Link>
                            </p> 

                        </div>



                        <div className="boxx">
                        
                            <p className="box_heading">
                            <span className="box_span">{counterOn && <CountUp start={0} end={10844500} duration={0.6} delay={1}/>}+  <span className="third">Tons</span>  </span> <br /> <br />
                            Carbon removed <br />
                            <span className='box_span2'> {counterOn && <CountUp start={0} end={200000} duration={0.8} delay={2}/>}+</span> <br />
                            Farmer on Carbon Market <br />
                            <Link className='box_link'  to= "">Learn more</Link>
                            </p>
        
                        </div>
                    </section>

                    <section className='unique'>


                        <div className="box">
                        

                            <p className="box_heading">
                            <span className="box_span">{counterOn && <CountUp start={0} end={219012.5} duration={0.6} delay={1}/>} <span className="third">Ha</span>   </span> <br />  <br />
                            Land Restored <br />
                            <span className='box_span2'> {counterOn && <CountUp start={0} end={500000} duration={0.8} delay={2}/>}+</span> <br />
                            Total Job Created<br />
                            <Link className='box_link'  to= "">Learn more</Link>
                            </p> 
                        </div>


                        <div className="box3">
                        

                            <p className="box_heading">
                            <span className="box_span">{counterOn && <CountUp start={0} end={35042} duration={0.6} delay={1}/>}+</span> <br /> <br />
                            Green Agents <br />
                            <span className='box_span2'> {counterOn && <CountUp start={0}end={10000} duration={0.8} delay={2}/> }+</span> <br />
                            Average Trees monitored<br />
                            <Link className='box_link'  to= "">Learn more</Link>
                            </p> 
                        </div>



                        <div className="boxx">
                        <p className="box_heading">
                            <span className="box_span">{counterOn && <CountUp start={0} end={300000} duration={0.6} delay={1}/>} +</span> <br /> <br />
                            Farmers with Loan<br />
                            <span className='box_span2'> ${counterOn && <CountUp start={0} end={70.8} duration={0.8} delay={2}/>}</span> <br />
                            Monthly Income from Carbon credits<br />
                            <Link className='box_link'  to= "">Learn more</Link>
                            </p>
                        </div>
                    </section>
                </div>

        </ScrollTrigger>


      
    </div>
  )
}

export default Body
