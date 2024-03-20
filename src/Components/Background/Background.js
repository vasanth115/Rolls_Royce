import React from 'react';
import './Background.css';
import video1 from '../assets/video1.mp4';
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';
import image4 from '../assets/image4.jpg'
import image5 from '../assets/image5.jpg'
import image6 from '../assets/image6.jpg'

export const Background = ({ playstatus, herocount }) => {
  
    if (playstatus) {
        return (
            <video className="background-vedio" autoPlay loop muted>
                <source src={video1} type='video/mp4' />
            </video>
        );
    }
    else if (herocount === 0) {
        return <img src={image1} className='background' alt="Background" />;
    }
    else if (herocount === 1) {
        return <img src={image2} className='background' alt="Background" />;
    }
    else if (herocount === 2) {
        return <img src={image3} className='background' alt="Background" />;
    }
    else if (herocount === 3) {
        return <img src={image4} className='background' alt="Background" />;
    }
    else if (herocount === 4) {
        return <img src={image5} className='background' alt="Background" />;
    }
    else if (herocount === 5) {
        return <img src={image6} className='background' alt="Background" />;
    }
};
