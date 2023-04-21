import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import "./assets/styles.module.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
// const dropdown = document.querySelector(".dropdown");
// const dropdownMenu = document.querySelector(".dropdown-menu");
// if (dropdown) {
//   dropdown.addEventListener("mouseenter", function () {
//     dropdownMenu.style.display = "block";
//   });

//   dropdown.addEventListener("mouseleave", function () {
//     return (dropdownMenu.style.display = "none");
//   });
// }
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
