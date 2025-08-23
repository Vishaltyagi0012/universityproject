
import React  from 'react';
import "../../components/layouts/Admin-Layout.css";
import { NavLink, Outlet } from 'react-router-dom';
import { LiaUserSolid } from "react-icons/lia";
import { RiContactsBook3Fill } from "react-icons/ri";
import { MdSubject } from "react-icons/md";
import { IoMdHome } from "react-icons/io";


const AdminLayout = () => {
  
  return (
    <>
      <header>
        <div className='adminlayout'>
          <h1>ADMIN <span>PANEL</span></h1>
          <nav className='na'>
            <ul>
              <li><NavLink to="/admin/users"><LiaUserSolid/> users</NavLink></li>
              <li><NavLink to="/admin/contacts"><RiContactsBook3Fill/> contacts</NavLink></li>
              <li><NavLink to="/admin/courses"><MdSubject />courses</NavLink></li>
            </ul>
          </nav>
        </div>
      </header>
      <Outlet />
    </>
  )
}

export default AdminLayout;