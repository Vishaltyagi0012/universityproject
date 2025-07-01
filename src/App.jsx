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
import EnrollNow11 from "./components/Courses/EnrollNow/EnrollNow11";
import EnrollNow12 from "./components/Courses/EnrollNow/EnrollNow12";
import EnrollNow1 from "./components/Courses/EnrollNow/EnrollNow1/EnrollNow1";
import EnrollNow2 from "./components/Courses/EnrollNow/EnrollNow1/EnrollNow2";
import EnrollNow3 from "./components/Courses/EnrollNow/EnrollNow1/EnrollNow3";
import PrivateComponent from "./components/PrivateComponent";
import Logout from "./components/loginsignup/logout";

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
          <Route path="/enrollnow11" element={<EnrollNow11 />} />
          <Route path="/enrollnow12" element={<EnrollNow12 />} />
          <Route path="/enrollnow1" element={<EnrollNow1 />} />
          <Route path="/enrollnow2" element={<EnrollNow2 />} />
          <Route path="/enrollnow3" element={<EnrollNow3 />} />


          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/sign" element={<Sign />} />
          <Route path="/password" element={<Password />} />
          <Route path="/signup" element={<Signup1 />} />
          <Route path="/login2" element={<Login2 />} />
          <Route path="/login3" element={<Login3 />} />
          <Route path="/register" element={<Register />} />
          <Route path="/send" element={<Send />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
