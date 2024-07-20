import React, { useEffect, useState } from "react";
import "./profile.css";
import { fetchUserSpecificBlogs } from "../../api/profile";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate, useParams } from "react-router-dom";
import BlogCard from "../../component/blogCard/blogCard";
import Cookies from "js-cookie";

function Profile() {
  const params = useParams();
  const [blogData, setBlogData] = useState([]);
  const [isSameUserId, setIsSameUserId] = useState(false);

  useEffect(() => {
    const token = Cookies.get("token");
    const userid = Cookies.get("userid");

    if (userid === params.id) {
      setIsSameUserId(true);
    }
    fetchUserSpecificBlogs(toast, params.id, token, setBlogData);
  }, [params.id]);

  const navigate = useNavigate();
  function navigateToWritePage() {
    navigate("/write");
  }

  return (
    <div>
      <div className="profileHeader">
        <h1>Welcome to the Profile</h1>
        {isSameUserId === true ? (
          <button onClick={navigateToWritePage}>Write New Blog</button>
        ) : (
          <p></p>
        )}
      </div>
      <ToastContainer />
      <div className="blogParent">
        {blogData.map((blog) => {
          return (
            <BlogCard
              image={blog.blogImage}
              date={blog.uploadDate}
              h1={blog.h1}
              userid={blog.userId}
              setBlogData={setBlogData}
              showTheseButton={isSameUserId}
              p1={blog.p1}
              id={blog._id}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Profile;
