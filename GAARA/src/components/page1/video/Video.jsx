import React from 'react'
import './Video.scss';
import {DefaultPlayer as Video} from 'react-html5video'
import 'react-html5video/dist/styles.css';
import Introvideo from "/assets/introoo.mp4";
import thumb from '/assets/thumb.webp';

function Videosction() {
  return (
    <section className=' VideoContainer'>
        <div className="video">
        <video controls width="100%" poster={thumb} height="auto">
          <source src={Introvideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        </div>

      
    </section>
  )
}

export default Videosction
