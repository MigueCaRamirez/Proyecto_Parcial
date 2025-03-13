import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Api from "./Clase";
import "./styles.css";
import { CartProvider } from "./CartContext"; // Importa el proveedor del carrito

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CartProvider>  {/* Envuelve la aplicación con el CartProvider */}
      <Api />
    </CartProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

