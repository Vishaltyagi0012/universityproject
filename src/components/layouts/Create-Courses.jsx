import React, { useState } from "react";
import "../layouts/Create-Courses.css";

const CreateCourses = () => {
  const [courses, setCourses] = useState([]);
  const [formData, setFormData] = useState({
    image: "",
    startDate: "",
    title: "",
    description: "",
    duration: "",
    availableSeats: ""
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setErrors({
      ...errors,
      [e.target.name]: ""
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.image) newErrors.image = "Image URL is required";
    if (!formData.startDate) newErrors.startDate = "Start Date is required";
    if (!formData.title) newErrors.title = "Title is required";
    if (!formData.description) newErrors.description = "Description is required";
    if (!formData.duration) newErrors.duration = "Duration is required";
    if (!formData.availableSeats) newErrors.availableSeats = "Available Seats is required";
    else if (isNaN(formData.availableSeats) || Number(formData.availableSeats) <= 0) {
      newErrors.availableSeats = "Available Seats must be a positive number";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      const response = await fetch("http://localhost:5000/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        const newCourse = await response.json();
        setCourses([...courses, newCourse]);
        setFormData({
          image: "",
          startDate: "",
          title: "",
          description: "",
          duration: "",
          availableSeats: ""
        });
        setErrors({});
      } else {
        console.log("Failed to add course");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <section>
        <h1>Add New Course</h1>
        <form onSubmit={handleSubmit} noValidate>
          <table className="common">
            <thead>
              <tr>
                <th>Image</th>
                <th>StartDate</th>
                <th>Title</th>
                <th>Description</th>
                <th>Duration</th>
                <th>AvailableSeats</th>
                <th>Submit</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input
                    name="image"
                    value={formData.image}
                    onChange={handleChange}
                    placeholder="Image URL"
                    required
                  />
                  {errors.image && <p style={{color:"red"}}>{errors.image}</p>}
                </td>
                <td>
                  <input
                    name="startDate"
                    type="date"
                    value={formData.startDate}
                    onChange={handleChange}
                    required
                  />
                  {errors.startDate && <p style={{color:"red"}}>{errors.startDate}</p>}
                </td>
                <td>
                  <input
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    placeholder="Title"
                    required
                  />
                  {errors.title && <p style={{color:"red"}}>{errors.title}</p>}
                </td>
                <td>
                  <input
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Description"
                    required
                  />
                  {errors.description && <p style={{color:"red"}}>{errors.description}</p>}
                </td>
                <td>
                  <input
                    name="duration"
                    value={formData.duration}
                    onChange={handleChange}
                    placeholder="Duration"
                    required
                  />
                  {errors.duration && <p style={{color:"red"}}>{errors.duration}</p>}
                </td>
                <td>
                  <input
                    name="availableSeats"
                    type="number"
                    value={formData.availableSeats}
                    onChange={handleChange}
                    placeholder="Available Seats"
                    required
                  />
                  {errors.availableSeats && <p style={{color:"red"}}>{errors.availableSeats}</p>}
                </td>
                <td>
                  <button type="submit">Submit</button>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </section>
    </>
  );
};

export default CreateCourses;
