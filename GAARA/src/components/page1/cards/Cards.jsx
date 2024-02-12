import React from 'react'
import personImg from '/assets/lands.webp'
import personImg2 from '/assets/land.webp'
import "./card.scss"
import { BsQuote} from "react-icons/bs";



function Cards() {
  return (
   
    <div className="card_container">
            <h6 className='card_header'>We are creating the <span>changes</span></h6>
                
            <section className='Wrapper'>
            
            <div className="cardII">
                <img src={personImg} alt="personImg" />
                <div className="info">
                    <span><BsQuote className='quote_icon'/></span>
                    <p>
                    Today’s agriculture requires substantial investment. Gaara Fund made it simple by providing us with flexible loans that help us get capital.                     </p> 

                    <h3 >Donath MUKASHAYA <span>Farmer, Rwanda</span></h3>
                </div>
            </div>

            <div className="card" >
                <img src={personImg} alt="personImg" />
                <div className="info">
                    <span><BsQuote className='quote_icon'/></span>
                    <p>
                    On top of financial support, you gain skills and insightful tips on making more out of agroforestry.                    </p>

                    <h3 >Donath MUKASHAYA <span>Farmer, Rwanda</span></h3>
                </div>
            </div>

            <div className="card" >
                <img src={personImg2} alt="personImg" />
                <div className="info">
                    <span><BsQuote className='quote_icon'/></span>
                    <p>
                    The friendly technology makes everything look easy. I just use the USSD code to monitor and manage my loan.                    </p>

                    <h3 >Donath MUKASHAYA <span>Farmer, Rwanda</span></h3>
                </div>
            </div>


            <div className="cardII">
                <img src={personImg} alt="personImg" />
                <div className="info">
                    <span><BsQuote className='quote_icon'/></span>
                    <p>
                    Before Gaara, it would take longer to get a return from trees we planted but with this initiative, we expect recurring revenues at least every month.                    </p>

                    <h3 >Donath MUKASHAYA <span>Farmer, Rwanda</span></h3>
                </div>
            </div>


            <div className="card">
                <img src={personImg2} alt="personImg" />
                <div className="info">
                    <span><BsQuote className='quote_icon'/></span>
                    <p>
                    One of the interesting aspects of Gaara is its fairness and transparency. They not only help us to plant trees, they help us grow trees.                    </p>

                    <h3 >Donath MUKASHAYA <span>Farmer, Rwanda</span></h3>
                </div>
            </div>


            <div className="cardII">
                <img src={personImg} alt="personImg" />
                <div className="info">
                    <span><BsQuote className='quote_icon'/></span>
                    <p>
                    This initiative accelerates our people’s behavior change. They now understand the importance of planting trees. This increased their commitment to environmental protection                    </p>

                    <h3 >Donath MUKASHAYA <span>Farmer, Rwanda</span></h3>
                </div>
            </div>


            <div className="cardI">
                <img src={personImg} alt="personImg" />
                <div className="info">
                    <span><BsQuote className='quote_icon'/></span>
                    <p>
                    I have been facilitating to get agriculture inputs for over 8 years but it was hard to get a comprehensive solution for farmers to have access to tree planting facilities.                     </p>

                    <h3 >Donath MUKASHAYA <span>Farmer, Rwanda</span></h3>
                </div>
            </div>

            <div className="cardII">
                <img src={personImg2} alt="personImg" />
                <div className="info">
                    <span><BsQuote className='quote_icon'/></span>
                    <p>
                    For me, it’s an opportunity to serve the community while assisting farmers to get and manage their loans.                       </p>

                    <h3 >Donath MUKASHAYA <span>Farmer, Rwanda</span></h3>
                </div>
            </div>
</section>
    </div>
  )
}

export default Cards
