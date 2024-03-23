import React from "react";
import ReactDOM from "react-dom/client";
import "./css/style.css";
import Header from "./layout/Header";

import Footer from "./layout/Footer";
import MainBody from "./MainBody";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <div className="" style={{ backgroundColor: "black", color: "grey" }}>
    <Header />
    <div className="px-4">
      <MainBody />
    </div>
    <Footer />
  </div>
);
