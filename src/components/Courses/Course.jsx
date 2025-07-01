import React from "react";
import "../Courses/Course.css"
import image4 from "../../assets/image4.jpg"
import image5 from "../../assets/image5.jpg"
import image6 from "../../assets/image6.jpg"
import { Link } from 'react-router-dom';



const Course = () => {
    return (

        <div className="course">
            <h1>Let's Check Our <span>Courses</span></h1>
            <p>It is a long established fact that a button will be distracted by the content of a page when looking at its layout</p>
            <div className="courses">
                {
                    <>
                        <div className="course1">
                            <div className="coursesimage">
                                <img src={image4} />
                            </div>
                            <div className="course-content">
                                <p className="date">Start Date:July 1,2025</p>
                                <h2>Title:Web Development Basics</h2>
                                <p>Description:Learn the fundamentals of web development including HTML,CSS,And JavaScript.</p>
                                <p>Duration:8 weeks</p>
                                <p>Available Seats:26</p>
                                <Link to="/enrollnow"><button>Enroll Now</button></Link>
                            </div>
                        </div>
                        <div className="course1">
                            <div className="coursesimage">
                                <img src={image5} />
                            </div>
                            <div className="course-content">
                                <p className="date">Start Date:August 10,2025</p>
                                <h2>Title:Introduction Data Science</h2>
                                <p>Description:An introductory course on data science concepts,including python,data analysis,Andvisualization</p>
                                <p>Duration:5 weeks</p>
                                <p>Available Seats:35</p>
                                <Link to="/enrollnow11"><button>Enroll Now</button></Link>
                            </div>
                        </div>
                        <div className="course1">
                            <div className="coursesimage">
                                <img src={image6} />
                            </div>
                            <div className="course-content">
                                <p className="date">Start Date:July 23,2025</p>
                                <h2>Title:Introduction JavaScript</h2>
                                <p>Description:Dive deep into JavaScript concepts and frameworks to enhance yuor development skills</p>
                                <p>Duration:12 weeks</p>
                                <p>Available Seats:40</p>
                                <Link to="/enrollnow12"><button>Enroll Now</button></Link>
                            </div>
                        </div>
                    </>
                }
            </div>
        </div>
    )
}


export default Course
