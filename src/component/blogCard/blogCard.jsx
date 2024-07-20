import React from "react";
import "./blogCard.css";
import { useNavigate } from "react-router-dom";
import { deleteBlog } from "../../api/profile";
import ShareTray from "../shareTray/shareTray";
import { showBlogDate } from "../../common/dateToShow";
import { toast } from "react-toastify";
import Cookies from "js-cookie";

function BlogCard(props) {
  const initialPara =
    props.p1.length < 100 ? props.p1 : props.p1.substring(0, 100) + "...";

  const navigate = useNavigate();

  function takeToSingleBlog() {
    navigate(`/blog/${props.id}`);
  }

  function takeToUpdatePage() {
    navigate(`/update/${props.id}`);
  }

  function deleteTheBlog() {
    const token = Cookies.get("token");
    deleteBlog(props.id, toast, token, props.userid, props.setBlogData);
  }

  return (
    <div className="blogCard">
      <img onClick={takeToSingleBlog} alt="blog_image" src={props.image} />
      <div className="cardContent">
        <p className="jamjuree-font">{showBlogDate(props.date)}</p>
        <h1 className="montserrat-font">{props.h1}</h1>
        <p className="montserrat-font">{initialPara}</p>
      </div>
      <hr />
      <ShareTray blogId={props.id} />

      {props.showTheseButton === true ? (
        <div className="actionButtonWrapper">
          <button onClick={takeToUpdatePage} className="updateBtn">
            Update
          </button>
          <button onClick={deleteTheBlog} className="deleteBtn">
            Delete
          </button>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default BlogCard;
