import React from "react"; // import React package 
import ReactDOM from "react-dom";// // import ReactDOM package
//import App from "./App.js";
import Frame from "./components/Frame"// import our frame component
import "./App.css";// // import our external css file
ReactDOM.render(
  //<App />,
  <Frame/>,
  document.getElementById("root")
);