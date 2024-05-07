import React from "react";
import MainRouter from "./routes/MainRouter";
import "./App.css";
import Footer from "./utils/Footer";

function App() {
  return (
    <div className="App">
      <MainRouter /> 
      <Footer/>
    </div>
  );
}

export default App;
