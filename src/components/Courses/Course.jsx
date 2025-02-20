import React from "react";
import "../Courses/Course.css"
import image4 from "../../assets/image4.jpg"
import image5 from "../../assets/image5.jpg"
import image6 from "../../assets/image6.jpg"
import { Link } from 'react-router-dom';


const Course = () => {
    const course = [
        {
            src: image4,
            alt: "Web Development Basics",
            title: "Web Development Basics",
            date: "february 1,2025",
            duration: "6 weeks",
            seats: 20,
            description: "Learn the fundamentals of web development including HTML,CSS,And JavaScript.",
        },
        {
            src: image5,
            alt: "Data Science Introduction",
            title: "Introduction Data Science",
            date: "february 10,2025",
            duration: "5 weeks",
            seats: 25,
            description: "An introductory course on data science concepts,including python,data analysis,Andvisualization"
        },
        {
            src: image6,
            alt: "JavaScript",
            title: "Introduction JavaScript",
            date: "february 6,2025",
            duration: "12 weeks",
            seats: 23,
            description: "Dive deep into JavaScript concepts and frameworks to enhance yuor development skills",
        }

    ];
    return (
        <div className="course">
            <h1>Let's Check Our <span>Courses</span></h1>
            <p>It is a long established fact that a button will be distracted by the content of a page when looking at its layout</p>
            <div className="courses">
                {
                    course.map((Course, index) => (
                        <>
                            <div className="course1" key={index}>
                                <div className="coursesimage">
                                    <img src={Course.src} />
                                </div>
                                <div className="course-content">
                                    <p className="date">Start Date:{Course.date}</p>
                                    <h2>{Course.title}</h2>
                                    <p>{Course.description}</p>
                                    <p><strong>Duration:</strong>{Course.duration}</p>
                                    <p><strong>Available Seats:</strong>{Course.seats}</p>
                                    <Link to="/enrollnow"><button>Enroll Now</button></Link>
                                </div>
                            </div>

                        </>
                    ))
                }
            </div>
        </div>
    )
}

export default Course