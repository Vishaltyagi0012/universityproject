


import React from 'react';
import "../HeroSection/HeroSection.css";
import image from '../../../assets/image.png';

const HeroSection = () => {

    return (
        <div className="box">
            <div className="first">

                <div className='book'>
                    <i className="fa-solid fa-book-open"></i>
                    &nbsp;&nbsp;
                    <p>Welcome to our college</p>
                </div>
                <h1>Start Your <span>Bright</span> Journey With Us</h1>
                <p>There are many varistions of passages available, but the majority have suffered alteration in some from</p>
                <div className='buttons'>
                    <button>ABOUT MORE &nbsp;&nbsp;<i className="fa-solid fa-arrow-right"></i></button>
                    &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;
                    <button>LEARN MORE &nbsp;&nbsp;<i className="fa-solid fa-arrow-right"></i></button>
                </div>

            </div>
            <div className="second">
                <img src={image} />
            </div>
        </div>
    )
}

export default HeroSection