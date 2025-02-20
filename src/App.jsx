import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from './components/Navbar/home/Home';
import Academics from "./components/Academics/Academics";
import Blog from "./components/Blog/Blog";
import Admission from "./components/Admission/Admission";
import Contact from "./components/Contact/Contact";
import EnrollNow from "./components/Courses/EnrollNow/EnrollNow";
import EnrollNow1 from "./components/Courses/EnrollNow/EnrollNow1/EnrollNow1"

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
          <Route path="/enrollnow1" element={<EnrollNow1 />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
