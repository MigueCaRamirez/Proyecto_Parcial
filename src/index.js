import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Api from "./Clase";
import "./styles.css"; // Nuestro CSS personalizad
import bootstrap from "bootstrap/dist/css/bootstrap.min.css"; 




const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Api />
  </React.StrictMode>
);

