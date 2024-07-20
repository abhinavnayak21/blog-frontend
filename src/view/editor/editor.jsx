import React, { useState, useEffect } from "react";
import "./editor.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { writeNewBlog, updateBlog } from "../../api/profile";
import Cookies from "js-cookie";
import { fetchSingleBlog } from "../../api/blog";
import { useParams } from "react-router-dom";

function Editor() {
  const [h1, setH1] = useState("");
  const [h2, setH2] = useState("");
  const [h3, setH3] = useState("");
  const [p1, setP1] = useState("");
  const [p2, setP2] = useState("");
  const [p3, setP3] = useState("");
  const [blogImage, setBlogImage] = useState(null);
  const [blogImageLink, setBlogImageLink] = useState("");
  const [blogData, setBlogData] = useState({});

  const params = useParams();
  useEffect(() => {
    if (params.id !== undefined) {
      fetchSingleBlog(params.id, toast, setBlogData);
    }
  }, [params]);

  useEffect(() => {
    if (Object.keys(blogData).length > 0) {
      setH1(blogData.h1);
      setP1(blogData.p1);
      setP2(blogData.p2);
      setP3(blogData.p3);
      setBlogImageLink(blogData.blogImage);
      setH2(blogData.h2);
      setH3(blogData.h3);
    }
  }, [blogData]);

  function handleBlogImage(event) {
    console.log(event.target.files);
    setBlogImage(event.target.files[0]);
  }

  function submit(event) {
    event.preventDefault();
    const token = Cookies.get("token");
    const userid = Cookies.get("userid");
    if (params.id !== undefined) {
      updateBlog(
        toast,
        token,
        h1,
        h2,
        h3,
        p1,
        p2,
        p3,
        blogImage,
        userid,
        params.id
      );
    } else {
      writeNewBlog(toast, token, h1, h2, h3, p1, p2, p3, blogImage, userid);
    }
  }

  return (
    <div className="editor">
      <ToastContainer />
      <div className="formWrapper">
        <div className="editorHeader">
          <hr />
          <h1>Publish New Blog Here</h1>
          <hr />
        </div>
        {blogImageLink.length > 0 ? (
          <img alt="blog_image_link" src={blogImageLink} />
        ) : (
          <p></p>
        )}
        <form onSubmit={submit}>
          <input type="file" onChange={handleBlogImage} />
          <input
            onChange={(event) => {
              setH1(event.target.value);
            }}
            value={h1}
            placeholder="Blog Title Come Here..."
          />
          <textarea
            onChange={(event) => {
              setP1(event.target.value);
            }}
            value={p1}
            rows={50}
            cols={50}
          ></textarea>
          <input
            onChange={(event) => {
              setH2(event.target.value);
            }}
            value={h2}
            placeholder="Blog Title Come Here..."
          />{" "}
          <textarea
            onChange={(event) => {
              setP2(event.target.value);
            }}
            value={p2}
            rows={50}
            cols={50}
          ></textarea>
          <input
            onChange={(event) => {
              setH3(event.target.value);
            }}
            value={h3}
            placeholder="Blog Title Come Here..."
          />{" "}
          <textarea
            onChange={(event) => {
              setP3(event.target.value);
            }}
            value={p3}
            rows={50}
            cols={50}
          ></textarea>
          <button type="submit">Publish</button>
        </form>
      </div>
    </div>
  );
}

export default Editor;
