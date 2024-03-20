import React from 'react';
import arrow_btn from '../assets/arrow_btn.png';
import play_icon from '../assets/play_icon.png';
import pause_icon from '../assets/pause_icon.png';
import './Hero.css'

export const Hero = ({ herodata, setCount, herocount, setPlayStatus, playstatus }) => {
  return (
    <div className='hero'>
       <div className='hero-text'>
            <p>{herodata.text1}</p>
            <p>{herodata.text2}</p>
       </div>
       <div className='hero-explore'>
        <p>Explore the Features</p>
        <img src={arrow_btn} alt='' />
       </div>
       <div className='hero-dot-play'>
        <ul className='hero-dots'>
            <li className={herocount===0?"Hero-dot-orange" : "Hero-dot"}></li>
            <li className={herocount===1?"Hero-dot-orange" : "Hero-dot"}></li>
            <li className={herocount===2?"Hero-dot-orange" : "Hero-dot"}></li>
            <li className={herocount===3?"Hero-dot-orange" : "Hero-dot"}></li>
            <li className={herocount===4?"Hero-dot-orange" : "Hero-dot"}></li>
            <li className={herocount===5?"Hero-dot-orange" : "Hero-dot"}></li>
        </ul>
        <div className='hero-play'>
            <img 
              onClick={() => setPlayStatus(!playstatus)} 
              src={playstatus ? pause_icon : play_icon} 
              alt='Play/Pause Icon' 
            />
            <p>See the Video</p>
        </div>
       </div>
    </div>
  );
};
