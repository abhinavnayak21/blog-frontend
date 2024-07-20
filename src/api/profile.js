async function fetchUserSpecificBlogs(toast, userid, token, setBlogData) {
    const apiURL = `https://blog-restaurant.onrender.com/blog/userSpecificBlogs?id=${userid}`;
  
    async function handleResponse(data) {
      console.log(data);
      if (data.ok === true) {
        const response = await data.json();
        console.log("response", response);
        setBlogData(response.blogData);
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
        Authorization: `Bearer ${token}`,
      },
    })
      .then(handleResponse)
      .catch((error) => {
        console.log(error);
      });
  }
  
  async function writeNewBlog(
    toast,
    token,
    h1,
    h2,
    h3,
    p1,
    p2,
    p3,
    blogImage,
    userId
  ) {
    const apiURL = "https://blog-restaurant.onrender.com/blog/newBlog";
  
    const blogInformation = new FormData();
    const currentDate = new Date();
    blogInformation.append("h1", h1);
    blogInformation.append("h2", h2);
    blogInformation.append("h3", h3);
    blogInformation.append("p1", p1);
    blogInformation.append("p2", p2);
    blogInformation.append("p3", p3);
    blogInformation.append("uploadDate", currentDate);
    blogInformation.append("blogImage", blogImage);
    blogInformation.append("userId", userId);
  
    async function handleResponse(data) {
      if (data.ok === true) {
        const response = await data.json();
        console.log("response", response);
        toast(response.message);
      } else {
        const response = await data.json();
        console.log("response", response);
        toast(response.message);
      }
    }
    await fetch(apiURL, {
      method: "POST",
      body: blogInformation,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(handleResponse)
      .catch((error) => {
        console.log(error);
      });
  }
  
  async function updateBlog(
    toast,
    token,
    h1,
    h2,
    h3,
    p1,
    p2,
    p3,
    blogImage,
    userId,
    blogId
  ) {
    const apiURL = `https://blog-restaurant.onrender.com/blog/updateBlog?id=${blogId}`;
  
    const blogInformation = new FormData();
    const currentDate = new Date();
    blogInformation.append("h1", h1);
    blogInformation.append("h2", h2);
    blogInformation.append("h3", h3);
    blogInformation.append("p1", p1);
    blogInformation.append("p2", p2);
    blogInformation.append("p3", p3);
    blogInformation.append("uploadDate", currentDate);
  
    blogInformation.append("userId", userId);
    if (blogImage !== null) {
      blogInformation.append("blogImage", blogImage);
    }
  
    async function handleResponse(data) {
      if (data.ok === true) {
        const response = await data.json();
        console.log("response", response);
        toast(response.message);
      } else {
        const response = await data.json();
        console.log("response", response);
        toast(response.message);
      }
    }
    await fetch(apiURL, {
      method: "PUT",
      body: blogInformation,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(handleResponse)
      .catch((error) => {
        console.log(error);
      });
  }
  
  async function deleteBlog(blogId, toast, token, userid, setBlogData) {
    const apiURL = `https://blog-restaurant.onrender.com/blog/deleteBlog?id=${blogId}`;
  
    async function handleResponse(data) {
      console.log(data);
      if (data.ok === true) {
        const response = await data.json();
        console.log("response", response);
        fetchUserSpecificBlogs(toast, userid, token, setBlogData);
        toast(response.message);
      } else {
        const response = await data.json();
        console.log("response", response);
        toast(response.message);
      }
    }
  
    await fetch(apiURL, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(handleResponse)
      .catch((error) => {
        console.log(error);
      });
  }
  
  export { fetchUserSpecificBlogs, writeNewBlog, updateBlog, deleteBlog };