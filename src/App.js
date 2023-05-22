import "./App.css";

import Navbar from "./Componenets/Navbar";
import Footer from "./Componenets/Footer";
import Home from "./Componenets/Home";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="" element={<Home q="All" />} />
          <Route path="/All" element={<Home q="All" />} />
          <Route path="/Politics" element={<Home q="Politics" />} />
          <Route path="/Crime" element={<Home q="Crime" />} />
          <Route path="/Education" element={<Home q="Education" />} />
          <Route path="/Science" element={<Home q="Science" />} />
          <Route path="Technology" element={<Home q="Technology" />} />
          <Route path="/Games" element={<Home q="Games" />} />
          <Route path="/Cricket" element={<Home q="Cricket" />} />
          <Route path="/FIFA" element={<Home q="FIFA" />} />
          <Route path="/World" element={<Home q="World" />} />
          <Route path="/India" element={<Home q="India" />} />
          <Route path="/Jokes" element={<Home q="Jokes" />} />
          <Route path="Covid" element={<Home q="Covid" />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
