import "./App.css";
import Login from "./view/login/login";
import Signup from "./view/signup/signup";
import Home from "./view/home/home";
import Navbar from "./component/navbar/navbar";
import Blog from "./view/blog/blog";
import Footer from "./component/footer/footer";
import SingleBlog from "./view/singleBlog/singleBlog";
import Profile from "./view/profile/profile";
import { Routes, Route } from "react-router-dom";
import Editor from "./view/editor/editor";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/update/:id" element={<Editor />} />
        <Route path="/write" element={<Editor />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/blog/:id" element={<SingleBlog />} />
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;