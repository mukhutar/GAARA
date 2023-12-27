import React from 'react'
import Hero from "../../components/page1/Hero/Hero.jsx"
import Anime from "../../components/page1/anime/Anime.jsx"
import Videosction from '../../components/page1/video/Video.jsx'
import CardA from '../../components/page1/cardA/CardA.jsx'
import Map from '../../components/page1/map/Map.jsx'
import Cards from '../../components/page1/cards/Cards.jsx'
import Partenership from '../../components/page1/partenership/Partenership.jsx'
import Footer from '../../components/page1/footer/Footer.jsx'



function Home() {
  return (
    <div>
      <Hero />
      <Anime />
      <Videosction/>
      <CardA/>
      <Map/>
      <Cards/>
      <Partenership/>
      <Footer/>
    </div>
  )
}

export default Home
