import React, { useState, useEffect } from "react";
import "./singleBlog.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useParams } from "react-router-dom";
import { fetchSingleBlog } from "../../api/blog";
import ShareTray from "../../component/shareTray/shareTray";
import CommentCard from "../../component/commentCard/CommentCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { showBlogDate } from "../../common/dateToShow";
import { fetchBlogComments, createNewComment } from "../../api/comment";
import Cookies from "js-cookie";

function SingleBlog() {
  const [blogData, setBlogData] = useState({});
  const [blogComments, setBlogComments] = useState([]);

  const [commentContent, setCommentContent] = useState("");

  const params = useParams();
  console.log(params);
  useEffect(() => {
    fetchSingleBlog(params.id, toast, setBlogData);
    fetchBlogComments(params.id, toast, setBlogComments);
  }, [params.id]);

  function handleNewComment(event) {
    setCommentContent(event.target.value);
  }

  function submit(event) {
    event.preventDefault();
    const token = Cookies.get("token");
    const userid = Cookies.get("userid");
    const username = Cookies.get("username");

    if (token !== undefined && userid !== undefined && username !== undefined) {
      createNewComment(
        username,
        commentContent,
        userid,
        params.id,
        toast,
        token,
        setBlogComments,
        setCommentContent
      );
    } else {
      toast("Login First to comment.");
    }
  }

  return (
    <div>
      <ToastContainer />
      <div className="blogContent">
        <div className="metaContent jamjuree-font">
          <FontAwesomeIcon className="user_icon" icon={faUser} />
          <a href={`/profile/${blogData.userId}`}>Writer</a>
          <p>{showBlogDate(blogData.uploadDate)}</p>
        </div>
        <h1 className="montserrat-font">{blogData.h1}</h1>
        <img alt="blog_image" src={blogData.blogImage} />
        <p className="montserrat-font">{blogData.p1}</p>
        <h1 className="montserrat-font">{blogData.h2}</h1>
        <p className="montserrat-font">{blogData.p2}</p>
        <h1 className="montserrat-font">{blogData.h3}</h1>
        <p className="montserrat-font">{blogData.p3}</p>

        <div className="commentWrapper jamjuree-font">
          <hr />
          <div className="commentHeader">
            <h3>Comments</h3>
            <ShareTray blogId={params.id} />
          </div>
          <hr />

          <form onSubmit={submit}>
            <input
              placeholder="Comment..."
              value={commentContent}
              onChange={handleNewComment}
            />
            <button type="submit">Publish</button>
          </form>
          <div>
            {blogComments.map((comment) => {
              return (
                <CommentCard
                  date={comment.commentTime}
                  content={comment.commentContent}
                  username={comment.commentUserName}
                  id={comment._id}
                  setBlogComments={setBlogComments}
                  blogId={params.id}
                  replyDate={comment.replyTime}
                  replyContent={comment.replyContent}
                  replyUsername={comment.replyUserName}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleBlog;
