import React from "react";
import "./shareTray.css";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TelegramShareButton,
  TwitterShareButton,
} from "react-share";
import {
  FacebookIcon,
  LinkedinIcon,
  TelegramIcon,
  TwitterIcon,
} from "react-share";

function ShareTray(props) {
  return (
    <ul className="shareIcons">
      <li>
        <FacebookShareButton
          url={`https://abhijain-dailyblog.netlify.app/blog/${props.blogId}`}
        >
          <FacebookIcon size={20} round={true} />
        </FacebookShareButton>
      </li>
      <li>
        <TelegramShareButton
          url={`https://abhijain-dailyblog.netlify.app/blog/${props.blogId}`}
        >
          <TelegramIcon size={20} round={true} />
        </TelegramShareButton>
      </li>
      <li>
        <LinkedinShareButton
          url={`https://abhijain-dailyblog.netlify.app/blog/${props.blogId}`}
        >
          <LinkedinIcon size={20} round={true} />
        </LinkedinShareButton>
      </li>{" "}
      <li>
        <TwitterShareButton
          url={`https://abhijain-dailyblog.netlify.app/blog/${props.blogId}`}
        >
          <TwitterIcon size={20} round={true} />
        </TwitterShareButton>
      </li>
    </ul>
  );
}

export default ShareTray;
