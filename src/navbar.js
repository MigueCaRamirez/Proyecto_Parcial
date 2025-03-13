import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { useCart } from "./CartContext";
import CartModal from "./CartModal"; // Importar la ventana modal

function Navbar({ onSearch, onSelectCategory, onAddProduct }) {
    const [searchTerm, setSearchTerm] = useState("");
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("all");
    const categorias = ["all", "electronics", "jewelery", "men's clothing", "women's clothing"];
    const { cart } = useCart();
    const [modalShow, setModalShow] = useState(false); // Estado para mostrar el modal

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(searchTerm);
    };

    const handleCategoryChange = (e) => {
        const nuevaCategoria = e.target.value;
        setCategoriaSeleccionada(nuevaCategoria);
        onSelectCategory(nuevaCategoria);
    };

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <a className="navbar-brand" href="#">🛒 Mi Tienda</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <form className="d-flex ms-auto" onSubmit={handleSubmit}>
                            <input
                                className="form-control me-2"
                                type="search"
                                placeholder="Buscar Productos..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <button className="btn btn-outline-success" type="submit">Buscar</button>
                        </form>

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

                        {/* Botón para abrir el carrito */}
                        <button type="button" className="btn btn-outline-warning ms-3" onClick={() => setModalShow(true)}>
                            🛒 Ver Carrito ({cart.length})
                        </button>
                    </div>
                </div>
            </nav>

            {/* Modal del carrito */}
            <CartModal show={modalShow} handleClose={() => setModalShow(false)} />
        </>
    );
}

export default Navbar;