import { useState } from "react";
import "./App.css";
import Offerings from "./components/Offerings/Offerings";
import Members from "./components/Members/Members";
import Home from "./components/Home/Home";
import Blogs from "./components/Blogs/Blogs";
import UserForm from "./components/Form/UserForm";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Dashboard from "./components/DashBoard/Dashboard";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Dashboard/>
      <Home/>
      <Offerings />
      <Members />
      <Blogs/>
      <UserForm/>
      <Footer/>
    </div>
  );
}

export default App;
