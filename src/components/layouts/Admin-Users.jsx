

import React, { useEffect, useState } from 'react'
import "../../components/layouts/AdminCommon.css";


const AdminUsers = () => {
  
  const[users, setUsers] = useState([]);
  const [isLoading, setIsLoading]= useState(true);

  const getAllUsersData = async()=>{
    try {
      setIsLoading(true);
        const user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;
        const response = await fetch("http://localhost:5000/users",{
          method:"GET",
          headers:{
             'content-type': 'application/json',
             'x-user-role': user ? String(user.role) : ''
          },
        });
        const data = await response.json();
        console.log(data);
      if (response.ok) {
        setUsers(data.users); 
        setIsLoading(false);   
      } else{
        setIsLoading(false);
      }
    } catch (error) {
        console.log(error);
    }
  };

  // delete he user
  const deleteUser = async (id)=>{
    try {
       const user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;
       const response = await fetch(`http://localhost:5000/users/delete/${id}`,{
          method:"DELETE",
          headers:{
            'content-type': 'application/json',
            'x-user-role': user ? String(user.role) : ''
          },
        });
        const data = await response.json();
        console.log(`users After Delete${data}`);

        if(response.ok){
          getAllUsersData();
        }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(()=>{
    getAllUsersData();
  },[]);

  return (
    <>
      <section>
        <div>
          <h1>Admin Users Data</h1>
        </div>
        <div>
          <table className='common'>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {users.map((curUser, index)=>{
                return (
                  <tr key={curUser._id || index}>
                    <td>{curUser.name}</td>
                    <td>{curUser.email}</td>
                    <td><button onClick={()=> deleteUser(curUser._id)}>Delete</button></td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>  
    </>
  );
};

export default AdminUsers;
