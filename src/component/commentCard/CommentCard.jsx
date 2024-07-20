import React, { useState } from "react";
import "./commentCard.css";
import { toast } from "react-toastify";
import { replyToComment } from "../../api/comment";
import Cookies from "js-cookie";
import { showBlogDate } from "../../common/dateToShow";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

function CommentCard(props) {
  const toShowReply = props.replyContent.length > 0 ? true : false;

  const [showReplyBox, setShowReplyBox] = useState(false);
  const [replyContent, setReplyContent] = useState("");

  function submit(event) {
    event.preventDefault();
    const token = Cookies.get("token");
    const userid = Cookies.get("userid");
    const username = Cookies.get("username");
    if (token !== undefined && userid !== undefined && username !== undefined) {
      replyToComment(
        replyContent,
        username,
        userid,
        props.id,
        toast,
        token,
        setReplyContent,
        props.setBlogComments,
        props.blogId,
        hideField
      );
    }
  }

  function showField() {
    setShowReplyBox(true);
  }

  function handleNewReply(event) {
    setReplyContent(event.target.value);
  }

  function hideField() {
    setShowReplyBox(false);
  }
  return (
    <div>
      <div className="commentRow">
        <div className="commentContent">
          <div className="metaComment">
            <FontAwesomeIcon icon={faUser} className="user_icon" />
            <div className="aboutAuthor">
              <h3>{props.username}</h3>
              <p>{showBlogDate(props.date)}</p>
            </div>
          </div>
          <p>{props.content}</p>
        </div>

        {toShowReply === true ? (
          <div className="replyContent">
            <div className="metaComment">
              <FontAwesomeIcon icon={faUser} className="user_icon" />
              <div className="aboutAuthor">
                <h3>{props.replyUsername}</h3>
                <p>{showBlogDate(props.replyDate)}</p>
              </div>
            </div>
            <p>{props.replyContent}</p>
          </div>
        ) : (
          <div>
            {showReplyBox === true ? (
              <button onClick={hideField} className="cancelButton">
                Cancel
              </button>
            ) : (
              <button onClick={showField} className="replyButton">
                Reply
              </button>
            )}
          </div>
        )}
      </div>
      {showReplyBox === true ? (
        <form onSubmit={submit}>
          <input
            placeholder="Comment..."
            value={replyContent}
            onChange={handleNewReply}
          />
          <button type="submit">Publish</button>
        </form>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default CommentCard;
