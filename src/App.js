import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { client } from "./lib/apollo";

import "./styles/global.scss";

import Routes from "./routes/index";
import { ApolloProvider } from "@apollo/client";

function App() {
  return (
    <div className="app d-flex flex-column">
      <ApolloProvider client={client}>
        <Router>
          <Routes />
          <ToastContainer />
        </Router>
      </ApolloProvider>
    </div>
  );
}

export default App;
