import React from "react";
import "../../Courses/EnrollNow/EnrollNow11.css";
import Navbar from "../../Navbar/Navbar";
import { Link } from 'react-router-dom';


const EnrollNow11 = () => {

    const EnrollNow = [
        {
            title: "Introduction Data Science",
            date: "August 10,2025",
            duration: "5 weeks",
            seats: 35,
        }
    ];
    return (
        <>
            <Navbar />
            <div className="enrollnow1">

                <div className="enrollnow2" >
                    {
                        EnrollNow.map((EnrollNow, index) => (
                            <>
                                <div className="enrollnow3" key={index}>
                                    <div className="enrollnows-content">
                                        <h1>{EnrollNow.title}</h1>
                                        &nbsp; &nbsp;
                                        <button><p className="date">Start Date:{EnrollNow.date}</p></button>
                                        &nbsp; &nbsp;  &nbsp; &nbsp;
                                        <button><p><strong>Duration:</strong>{EnrollNow.duration}</p></button>
                                        &nbsp; &nbsp; &nbsp; &nbsp;
                                        <button><p><strong>Available Seats:</strong>{EnrollNow.seats}</p></button>
                                        <div className="aboutcourses">
                                            <h2>About the Courses</h2>
                                            <p>An introduction courses on data science concepts, including python ,data analysis, and visualization</p>
                                        </div>
                                        <div className="coursesrequire">
                                            <h2>Courses Requirements</h2>
                                            <ul TYPE="FILLROUND">
                                                <li>Basic Knowladge of programming </li>
                                                <li>High school diploma</li>
                                                <li>Access to a laptop or pc</li>
                                            </ul>
                                        </div>
                                        <div className="professional">
                                            <h2>Professional Experience</h2>
                                            <p>The course is designed to equip student with the knowlege and skill needed for a career in engineering.You'll gain hands on Experience and havae the opportunity to work with real world projects</p>
                                        </div>
                                        <div className="coursefeature">
                                            <h2>Course Features</h2>
                                            <p>Language:<span>English</span></p>
                                            <p>Duration:<span>4 weeks</span></p>
                                            <p>Location:<span>On-Campus</span></p>
                                            <Link to="/enrollnow2"><button>Enroll Now</button></Link>
                                        </div>
                                    </div>
                                </div>
                            </>
                        ))
                    }
                </div>
            </div>

        </>
    )
}


export default EnrollNow11