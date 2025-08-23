import React, { useEffect, useState } from 'react';
import "../Courses/Course.css"


import { Link } from 'react-router-dom';



const Course = () => {
    const [course, setCourse] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5000/getcourse')
            .then(response => response.json())
            .then(data => setCourse(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    if (!course) return <p>Loading course details...</p>;
    return (

        <div className="course">
            <h1>Let's Check Our <span>Courses</span></h1>
            <p>It is a long established fact that a button will be distracted by the content of a page when looking at its layout</p>
            <div className="courses">
                {
                    <>
                        {course.map(course => (
                            <div key={course._id} className="course1">
                                <div className="coursesimage">
                                    <img src={course.image} alt={`${course.title} banner`} />
                                </div>
                                <div className="course-content">
                                    <p className="date">Start Date: {course.startDate}</p>
                                    <h2>Title: {course.title}</h2>
                                    <p>Description: {course.description}</p>
                                    <p>Duration: {course.duration}</p>
                                    <p>Available Seats: {course.availableSeats}</p>
                                    <Link to="/enrollnow"><button>Enroll Now</button></Link>
                                </div>
                            </div>
                        ))}
                    </>
                }
            </div>
        </div>
    )
}


export default Course
