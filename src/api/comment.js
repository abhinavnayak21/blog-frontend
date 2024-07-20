async function fetchBlogComments(blogId, toast, setBlogComments) {
    const apiURL = `https://blog-restaurant.onrender.com/comment/getBlogSpecificComments?blogId=${blogId}`;
  
    async function handleResponse(data) {
      console.log(data);
      if (data.ok === true) {
        const response = await data.json();
        console.log("response", response);
        setBlogComments(response.data);
      } else {
        const response = await data.json();
        console.log("response", response);
        toast(response.message);
      }
    }
  
    await fetch(apiURL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(handleResponse)
      .catch((error) => {
        console.log(error);
      });
  }
  
  async function createNewComment(
    commentUserName,
    commentContent,
    commentUserId,
    blogId,
    toast,
    token,
    setBlogComments,
    setCommentContent
  ) {
    const apiURL = `https://blog-restaurant.onrender.com/comment/newComment?blogId=${blogId}`;
    const commentInformation = {
      commentContent: commentContent,
      commentUserName: commentUserName,
      commentUserId: commentUserId,
      commentTime: new Date(),
      replyContent: "",
      replyUserName: "",
      replyUserId: "",
      replyTime: "",
    };
  
    async function handleResponse(data) {
      if (data.ok === true) {
        const response = await data.json();
        console.log("response", response);
        setCommentContent("");
        fetchBlogComments(blogId, toast, setBlogComments);
        toast(response.message);
      } else {
        const response = await data.json();
        console.log("response", response);
        toast(response.message);
      }
    }
    await fetch(apiURL, {
      method: "POST",
      body: JSON.stringify(commentInformation),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then(handleResponse)
      .catch((error) => {
        console.log(error);
      });
  }
  
  async function replyToComment(
    replyContent,
    replyUserName,
    replyUserId,
    commentId,
    toast,
    token,
    setReplyContent,
    setBlogComments,
    blogId,
    hideField
  ) {
    const apiURL = `https://blog-restaurant.onrender.com/comment/replyComment?commentId=${commentId}`;
    const commentInformation = {
      replyContent: replyContent,
      replyUserName: replyUserName,
      replyUserId: replyUserId,
      replyTime: new Date(),
    };
  
    async function handleResponse(data) {
      if (data.ok === true) {
        const response = await data.json();
        console.log("response", response);
        setReplyContent("");
        hideField();
        fetchBlogComments(blogId, toast, setBlogComments);
        toast(response.message);
      } else {
        const response = await data.json();
        console.log("response", response);
        toast(response.message);
      }
    }
    await fetch(apiURL, {
      method: "PUT",
      body: JSON.stringify(commentInformation),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then(handleResponse)
      .catch((error) => {
        console.log(error);
      });
  }
  
  export { fetchBlogComments, createNewComment, replyToComment };