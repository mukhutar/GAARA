import React from 'react'
import personImg from '/assets/person.webp'
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
                    Before the GAARA Fund, I couldn’t get a loan to finance new plantings. Now, I've expanded my farm, and the USSD code system makes it simple to manage my loan.
                    </p> 

                    <h3 >Donath MUKASHAYA <span>Farmer, Rwanda</span></h3>
                </div>
            </div>

            <div className="card" >
                <img src={personImg} alt="personImg" />
                <div className="info">
                    <span><BsQuote className='quote_icon'/></span>
                    <p>
                    Before the GAARA Fund, I couldn’t get a loan to finance new plantings. Now, I've expanded my farm, and the USSD code system makes it simple to manage my loan.
                    </p>

                    <h3 >Donath MUKASHAYA <span>Farmer, Rwanda</span></h3>
                </div>
            </div>

            <div className="card" >
                <img src={personImg} alt="personImg" />
                <div className="info">
                    <span><BsQuote className='quote_icon'/></span>
                    <p>
                    Before the GAARA Fund, I couldn’t get a loan to finance new plantings. Now, I've expanded my farm, and the USSD code system makes it simple to manage my loan.
                    </p>

                    <h3 >Donath MUKASHAYA <span>Farmer, Rwanda</span></h3>
                </div>
            </div>


            <div className="cardII">
                <img src={personImg} alt="personImg" />
                <div className="info">
                    <span><BsQuote className='quote_icon'/></span>
                    <p>
                    Before the GAARA Fund, I couldn’t get a loan to finance new plantings. Now, I've expanded my farm, and the USSD code system makes it simple to manage my loan.
                    </p>

                    <h3 >Donath MUKASHAYA <span>Farmer, Rwanda</span></h3>
                </div>
            </div>


            <div className="card">
                <img src={personImg} alt="personImg" />
                <div className="info">
                    <span><BsQuote className='quote_icon'/></span>
                    <p>
                    Before the GAARA Fund, I couldn’t get a loan to finance new plantings. Now, I've expanded my farm, and the USSD code system makes it simple to manage my loan.
                    </p>

                    <h3 >Donath MUKASHAYA <span>Farmer, Rwanda</span></h3>
                </div>
            </div>


            <div className="cardII">
                <img src={personImg} alt="personImg" />
                <div className="info">
                    <span><BsQuote className='quote_icon'/></span>
                    <p>
                    Before the GAARA Fund, I couldn’t get a loan to finance new plantings. Now, I've expanded my farm, and the USSD code system makes it simple to manage my loan.
                    </p>

                    <h3 >Donath MUKASHAYA <span>Farmer, Rwanda</span></h3>
                </div>
            </div>


            <div className="cardI">
                <img src={personImg} alt="personImg" />
                <div className="info">
                    <span><BsQuote className='quote_icon'/></span>
                    <p>
                    Before the GAARA Fund, I couldn’t get a loan to finance new plantings. Now, I've expanded my farm, and the USSD code system makes it simple to manage my loan.
                    </p>

                    <h3 >Donath MUKASHAYA <span>Farmer, Rwanda</span></h3>
                </div>
            </div>

            <div className="cardII">
                <img src={personImg} alt="personImg" />
                <div className="info">
                    <span><BsQuote className='quote_icon'/></span>
                    <p>
                    Before the GAARA Fund, I couldn’t get a loan to finance new plantings. Now, I've expanded my farm, and the USSD code system makes it simple to manage my loan.
                    </p>

                    <h3 >Donath MUKASHAYA <span>Farmer, Rwanda</span></h3>
                </div>
            </div>
</section>
    </div>
  )
}

export default Cards
