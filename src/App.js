import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Posts from "./components/Posts";
import Projects from "./components/Projects.js";
import SinglePost from "./components/SinglePost";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import "./components/components.css";
function App() {
  return (
    <>
      <div className="body">
        <BrowserRouter>
          <Nav></Nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/posts/:slug" element={<SinglePost />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
          <Footer></Footer>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
