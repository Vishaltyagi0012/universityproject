
import React  from 'react';
import "../../components/layouts/Admin-Layout.css";
import { NavLink, Outlet, Navigate } from 'react-router-dom';
import { LiaUserSolid } from "react-icons/lia";
import { RiContactsBook3Fill } from "react-icons/ri";
import { MdSubject } from "react-icons/md";
import { RxUpdate } from "react-icons/rx";


const AdminLayout = () => {
  const storedUser = localStorage.getItem('user');
  let user = null;
  try {
    user = storedUser ? JSON.parse(storedUser) : null;
  } catch (error) {
    user = null;
    console.error('Error parsing user from localStorage', error);
  }

  if (!user || user.role !== 1) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <header>
        <div className='adminlayout'>
          <h1>ADMIN <span>PANEL</span></h1>
          <nav className='na'>
            <ul>
              <li><NavLink to="/admin/users"><LiaUserSolid/>&nbsp;&nbsp; users</NavLink></li>
              <li><NavLink to="/admin/contacts"><RiContactsBook3Fill/>&nbsp;&nbsp; contacts</NavLink></li>
              <li><NavLink to="/admin/courses"><MdSubject />&nbsp;&nbsp;courses</NavLink></li>
              <li><NavLink to="/admin/update"><RxUpdate />&nbsp;&nbsp;Update</NavLink></li>
            </ul>
          </nav>
        </div>
      </header>
      <Outlet />
    </>
  )
}

export default AdminLayout;