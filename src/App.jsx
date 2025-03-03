import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LayOut from "./Pages/Layout";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Blogs from "./Pages/Blogs";
import BlogsDetails from "./Pages/BlogsDetails";
import PlaceRoute from "./Pages/PlaceRoute";
import NoPages from "./Pages/NoPages";
import AOS from "aos";
import "aos/dist/aos.css";
import Bannertwo from "./Components/Bannertwo";

const App = () => {

  useEffect(()=>{
    AOS.init({})
  })
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LayOut />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blogs/:title" element={<BlogsDetails />} />
            <Route path="/places" element={<PlaceRoute />} />
            <Route path="*" element={<NoPages />} />
          </Route>
        </Routes>
      </BrowserRouter>
      
    </>
  );
};

export default App;
