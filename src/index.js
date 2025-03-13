<<<<<<< Updated upstream
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Api from "./Clase";
import "./styles.css"; // Nuestro CSS personalizad
import bootstrap from "bootstrap/dist/css/bootstrap.min.css"; 
=======
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Api from './Clase';
import './styles.css'; 
import { CarritoProvider } from './CarritoContext';
>>>>>>> Stashed changes




const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<<<<<<< Updated upstream
  <React.StrictMode>
    <Api />
  </React.StrictMode>
=======
 // <React.StrictMode>
  <CarritoProvider>

    <Api/>
    
  </CarritoProvider>
    
  // </React.StrictMode>
>>>>>>> Stashed changes
);

