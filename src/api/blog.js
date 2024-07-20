async function getAllBlogs(toast, setBlogData) {
    const apiURL =
      "https://blog-restaurant.onrender.com/blog/getAllBlogs";
  
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
      },
    })
      .then(handleResponse)
      .catch((error) => {
        console.log(error);
      });
  }
  
  async function fetchSingleBlog(blogId, toast, setBlogData) {
    const apiURL = `https://blog-restaurant.onrender.com/blog/fetchSingleBlog?id=${blogId}`;
  
    async function handleResponse(data) {
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
      },
    })
      .then(handleResponse)
      .catch((error) => {
        console.log(error);
      });
  }
  
  export { getAllBlogs, fetchSingleBlog };