import React from "react";
import ReactDOM from "react-dom/client";
import CounterClass from "./components/CounterClass.jsx";
import CounterFunctional from "./components/CounterFunctional.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CounterClass />
    <CounterFunctional />
  </React.StrictMode>
);
