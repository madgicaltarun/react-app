import "./App.css";
import Navbar from "../src/components/navbar/navbar";
import Sidebar from "./components/sidebar/sidebar";
import Main from "./components/main/main";
import Footer from "./components/footer/footer";
import { useState } from "react";

function App() {
  const [isClicked,setClicke]=useState("false")
  return (
    <div className="container">
        <Navbar />
      <div className="main">
         {isClicked? <Sidebar isClicked={isClicked} />:""}
          <Main/>
      </div>   
    </div>
  );
}

export default App;
