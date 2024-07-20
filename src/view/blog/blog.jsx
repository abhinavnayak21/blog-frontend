import React, { useEffect, useState } from "react";
import "./blog.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getAllBlogs } from "../../api/blog";
import BlogCard from "../../component/blogCard/blogCard";

function Blog() {
  const [allBlogs, setAllBlogs] = useState([]);

  useEffect(() => {
    getAllBlogs(toast, setAllBlogs);
  }, []);

  return (
    <div>
      <ToastContainer />
      <div className="blogParent">
        {allBlogs.map((blog) => {
          return (
            <BlogCard
              image={blog.blogImage}
              date={blog.uploadDate}
              h1={blog.h1}
              showTheseButton={false}
              p1={blog.p1}
              id={blog._id}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Blog;
