<<<<<<< Updated upstream
import React, {useState} from "react";
=======
import React, { useState, useContext } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Button } from "react-bootstrap";
import Carrito from "./Carrito";
import { CarritoContext } from "./CarritoContext";
>>>>>>> Stashed changes

function Navbar({ onSearch}){
    const [searchTerm, setSearchTerm] = useState("");
<<<<<<< Updated upstream

    const handleChange = (e) => {
        //e.preventDefault();
        setSearchTerm(e.target.value);
        onSearch(e.target.value)
=======
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("all");
    const [showCarrito, setShowCarrito] = useState(false);
    const categorias = ["all", "electronics", "jewelery", "men's clothing", "women's clothing"];
    const { carrito } = useContext(CarritoContext);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(searchTerm);
>>>>>>> Stashed changes
    };

    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <a className="navbar-brand" href="#">🛒 Mi Tienda</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <form className="d-flex ms-auto">
                        <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Buscar Productos"
                            value={searchTerm}
                            onChange={handleChange}
                        />
                    </form>
<<<<<<< Updated upstream
=======

                    {/* Selector de categorías */}
                    <div className="ms-3">
                        <select className="form-select" value={categoriaSeleccionada} onChange={handleCategoryChange}>
                            {categorias.map((categoria, index) => (
                                <option key={index} value={categoria}>
                                    {categoria === "all" ? "Todos" : categoria}
                                </option>
                            ))}
                        </select>
                    </div>

                    <button type="button" className="btn btn-outline-success ms-3" onClick={onAddProduct}>
                        Agregar producto
                    </button>

                    <Button variant="outline-success ms-3" onClick={() => setShowCarrito(true)}>
                        🛒Carrito ({carrito.length})
                    </Button>
                    <Carrito show={showCarrito} handleClose={() => setShowCarrito(false)} />
>>>>>>> Stashed changes
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
