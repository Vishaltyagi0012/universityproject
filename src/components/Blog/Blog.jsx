import React from "react";
import Navbar from "../Navbar/Navbar";
import "../Blog/Blog.css"
import Footer from "../Footer/Footer";

const Blog = () => {
    return (
        <>
            <Navbar />
            <div className="blog">
                <h1>OUR BLOG</h1>
            </div>
            <Footer />
        </>
    )
}


export default Blog