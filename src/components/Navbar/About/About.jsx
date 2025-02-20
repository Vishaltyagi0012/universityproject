


import React from "react";
import "../About/About.css"
import brainstorming from "../../../assets/brainstorming.png"
import service from "../../../assets/service.png"

const About = () => {
    return (
        <div className="about">
            <div className="aboutfirst">
                <div className="left">
                    <div className="leftbox"></div>
                    <div className="leftbutton">
                        <div className="brainstorming">
                            <img src={brainstorming} />
                        </div>
                        <div className="text">
                            <p>30 Years Of Quality Service</p>
                        </div>
                    </div>
                </div>
                <div className="aboutsecond">
                    <div className="right">
                        <div className="img2"></div>
                    </div>
                    <div className="rightbox">

                    </div>
                </div>
            </div>
            <div className="aboutthird">
                <div className="book1">
                    <i className="fa-solid fa-book-open"></i>
                    &nbsp;&nbsp;
                    <p>ABOUT US</p>

                </div>
                <div className="para">
                    <h1>Empowering Students To <span>Achieve</span> Dreams.</h1>
                    <p>Our university is dedicated to fostering an sducational  environment that promotes personal growth , innovation, and academic excellence.</p>
                </div>
                <div className="service">
                    <div className="imgservice">
                        <img src={service} />
                    </div>
                    &nbsp;&nbsp;
                    <div className="h3">
                        <h3>Academice Excellence</h3>
                    </div>
                </div>
                <div className="para1">
                    <p>Our faculty,resources, and state-of-the-art facilities ensure that students have access to everything they need to succeed and thrive</p>
                </div>
            </div>
        </div>
    )
}


export default About 