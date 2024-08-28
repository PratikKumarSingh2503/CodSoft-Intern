import React from "react";
import Topbar from "./components/Topbar/topbar";
import Home from "./pages/Home/home";
import News from "./pages/News/new";
import Politics from "./pages/Politics/politics";
import Techinfo from "./pages/TechInfo/techinfo";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/login";
import Signup from "./pages/Signup/signup";

import Sidebar from "./components/Sidebar/sidebar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Topbar />
        <Routes>
          <Route path="/" element ={<Home/>}>Home</Route>
          <Route path="/news" element ={<News/>}>News</Route>
          <Route path="/politics" element ={<Politics/>}>Politics</Route>
          <Route path="/techinfo" element ={<Techinfo/>}>Techinfo</Route>
          <Route path="/login" element ={<Login/>}>Login</Route>
          <Route path="/signup" element ={<Signup/>}>Signup</Route>
        </Routes>
      </BrowserRouter>

      <Sidebar />

    </div>
  );
}

export default App;
