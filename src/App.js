import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./styles/global.scss";

import Routes from "./routes/index";

function App() {
  return (
    <div className="app d-flex flex-column">
      <Router>
        <Routes />
        <ToastContainer />
      </Router>
    </div>
  );
}

export default App;
