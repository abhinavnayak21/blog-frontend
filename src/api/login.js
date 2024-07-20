async function loginAPI(email, password, toast, navigate, Cookies) {
    const apiURL = "https://blog-restaurant.onrender.com/user/login";
    const userInformation = {
      email: email,
      password: password,
    };
  
    async function handleResponse(data) {
      if (data.ok === true) {
        const response = await data.json();
        console.log("response", response);
        toast(response.message);
        Cookies.set("token", response.token, { expires: 2 });
        Cookies.set("userid", response.data._id, { expires: 2 });
        Cookies.set("username", response.data.username, { expires: 2 });
        setTimeout(() => {
          navigate("/");
        }, 3000);
      } else {
        const response = await data.json();
        console.log("response", response);
        toast(response.message);
      }
    }
  
    await fetch(apiURL, {
      method: "POST",
      body: JSON.stringify(userInformation),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(handleResponse)
      .catch((error) => {
        console.log(error);
      });
  }
  
  export default loginAPI;