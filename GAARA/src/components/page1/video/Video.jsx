import React from 'react'
import './Video.scss';
import {DefaultPlayer as Video} from 'react-html5video'
import 'react-html5video/dist/styles.css';
import Introvideo from "/assets/introo.mp4";
import thumb from '/assets/thumb.jpg';

function Videosction() {
  return (
    <section className=' VideoContainer'>
        <div className="video">
            <Video  loop  poster={thumb}>
                <source src={Introvideo}  type="video/webm"/>

            </Video>
        </div>

      
    </section>
  )
}

export default Videosction
