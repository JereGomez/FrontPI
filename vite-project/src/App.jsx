import React from "react";
import MainRouter from "./routes/MainRouter";
import "./App.css";
import Footer from "./components/Footer";
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
  return (
    <div className="App">
      <MainRouter /> 
      <Footer/>
    </div>
  );
}

export default App;
