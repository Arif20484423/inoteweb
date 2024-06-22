import React, { useContext } from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Alert from "./Components/Alert";

import Notestate from "./context/Notestate";
function App() {
  return (
    <Notestate>
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Alert />
          <div className="container">
            <Routes>
              <Route index element={<Home />} />
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </Notestate>
  );
}

export default App;
