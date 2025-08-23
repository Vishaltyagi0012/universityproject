import React ,{useState , useEffect}from 'react'
import {toast} from "react-toastify";


const AdminCourses = () => {

    const [courses, setCourses] = useState([]);
  
    const getAllCoursesData = async()=>{
      try {
          const response = await fetch("http://localhost:5000/courses",{
            method:"GET",
            headers:{
              'content-type': 'application/json'
            },
          });
          const data = await response.json();
          console.log(`courses ${data}`);
          setCourses(data);
           if(response.ok){
           getAllCoursesData();
          }
      } catch (error) {
        console.log(error);
      }
    };

    const deleteCourse = async (id)=>{
        try {
           const response = await fetch(`http://localhost:5000/courses/delete/${id}`,{
              method:"DELETE",
              headers:{
                'content-type': 'application/json'
              },
            });
           
            if(response.ok){
              getAllCoursesData();
              toast.success("delete successfully");
            }else{
              toast.error("Not updated");
            }
        } catch (error) {
          console.log(error);
        }
      };
     
    useEffect(()=>{
      getAllCoursesData();
    },[]);
  return (
     <>
      <section>
        <div>
          <h1>Admin Courses Data</h1>
        </div>
        <div>
          <table className='common'>
            <thead>
              <tr>
                <th>Image</th>
                <th>StartDate</th>
                <th>Title</th>
                <th>Description</th>
                <th>Duration</th>
                <th>AvailableSeats</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {courses.map((curCourses, index)=>{
                return (
                  <tr key={index}>
                    <td>{curCourses.image}</td>
                    <td>{curCourses.startDate}</td>
                    <td>{curCourses.title}</td>
                    <td>{curCourses.description}</td>
                    <td>{curCourses.duration}</td>
                    <td>{curCourses.availableSeats}</td>
                    <td>
                      <button onClick={()=> deleteCourse(curCourses._id)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>  
    </>
  )
}

export default AdminCourses;





