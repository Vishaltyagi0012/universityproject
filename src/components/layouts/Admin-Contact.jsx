

import React, { useState, useEffect } from 'react'
import {toast} from "react-toastify";

const AdminContact = () => {

  const [contacts, setContacts] = useState([]);

  const getAllContactData = async()=>{
    try {
        const response = await fetch("http://localhost:5000/contacts",{
          method:"GET",
          headers:{
            'content-type': 'application/json'
          },
        });
        const data = await response.json();
        console.log(`contacts ${data}`);
        setContacts(data);
         if(response.ok){
          getAllContactData();
        }
    } catch (error) {
      console.log(error);
    }
  };
   
   const deleteContact = async (id)=>{
    try {
       const response = await fetch(`http://localhost:5000/contacts/delete/${id}`,{
          method:"DELETE",
          headers:{
            'content-type': 'application/json'
          },
        });
       
        if(response.ok){
          getAllContactData();
          toast.success("delete successfully");
        }else{
          toast.error("Not updated");
        }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(()=>{
    getAllContactData();
  },[]);
  return (
    <>
      <section>
        <div>
          <h1>Admin Contacts Data</h1>
        </div>
        <div>
          <table className='common'>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>City</th>
                <th>subject</th>
                <th>Address</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((curContacts, index)=>{
                return (
                  <tr key={index}>
                    <td>{curContacts.name}</td>
                    <td>{curContacts.email}</td>
                    <td>{curContacts.city}</td>
                    <td>{curContacts.subject}</td>
                    <td>{curContacts.address}</td>
                    <td>
                      <button onClick={()=> deleteContact(curContacts._id)}>
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

export default AdminContact;