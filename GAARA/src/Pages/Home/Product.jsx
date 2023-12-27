import React from 'react'
import Page2hero from '../../components/page2/Page2Hero/Page2hero'
import Scrolly from '../../components/page2/scrolly/Scrolly'
import ImgSection from '../../components/page2/ImgSection/ImgSection'
import FinalSection from '../../components/page2/FinalSection/FinalSection'
import Footer from "../../components/page1/footer/Footer"

const Product = () => {
  return (
    <div>
      <Page2hero/>
      <Scrolly/>
      <ImgSection/>
      <FinalSection/>
      <Footer/>
    </div>
  )
}

export default Product
