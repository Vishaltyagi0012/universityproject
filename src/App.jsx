import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from './components/Navbar/home/Home';
import Academics from "./components/Academics/Academics";
import Blog from "./components/Blog/Blog";
import Admission from "./components/Admission/Admission";
import Contact from "./components/Contact/Contact";
import Send from "./components/Contact/Contact";
import Login from "./components/loginsignup/login";
import Login2 from "./components/loginsignup/login/login1";
import Login3 from "./components/loginsignup/login";
import Password from "./components/loginsignup/login/password";
import Sign from "./components/loginsignup/sign";
import Signup1 from "./components/loginsignup/sign";
import Register from "./components/loginsignup/register";
import EnrollNow from "./components/Courses/EnrollNow/EnrollNow";
import Logout from "./components/loginsignup/logout";

// nested  Admin routes
import AdminLayout from "/src/components/layouts/Admin-Layout.jsx";
import AdminUsers from '/src/components/layouts/Admin-Users.jsx';
import AdminContacts from '/src/components/layouts/Admin-Contact.jsx';
import AdminCourses from '/src/components/layouts/Admin-Courses.jsx';




function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/admission" element={<Admission />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/enrollnow" element={<EnrollNow />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/sign" element={<Sign />} />
          <Route path="/password" element={<Password />} />
          <Route path="/signup" element={<Signup1 />} />
          <Route path="/login2" element={<Login2 />} />
          <Route path="/login3" element={<Login3 />} />
          <Route path="/register" element={<Register />} />
          <Route path="/send" element={<Send />} />
          <Route path="/admin" element={<AdminLayout/>} >
            <Route path="users" element={<AdminUsers/>}/>
            <Route path="contacts" element={<AdminContacts/>}/>
            <Route path="courses" element={<AdminCourses/>}/>
            
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
