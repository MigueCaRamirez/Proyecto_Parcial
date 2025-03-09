import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function Navbar({onSearch, onSelectCategory, onAddProduct}) {
    const [searchTerm, setSearchTerm] = useState("");
    const categorias = ["all", "electronics", "jewelery", "men's clothing", "women's clothing"];

    const hanleSubmit = (e) => {
        e.preventDefault();
        onSearch(searchTerm)
    };

    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <a className="navbar-brand" href="#">🛒 Mi Tienda</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <form className="d-flex ms-auto" onSubmit={hanleSubmit}>
                        <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Buscar Productos..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <button className="btn btn-outline-succes" type="submit">Buscar</button>
                    </form>
                    <div className="d-flex ms-3"> 
                        {categorias.map((categoria, index) =>(
                            <div key={index} className="form-check form-check-inline">
                                <input type="checkbox" className="form-check-input" id={`categoria-${index}`}
                                onChange={() => onSelectCategory(categoria)}
                                />
                                <label className="form-check-label text-white" htmlFor={`categoria-${index}`}>
                                    {categoria === "all" ? "Todos" : categoria}
                                </label>
                            </div>
                        ))}
                    </div>
                    <button type="button" className="btn btn-outline-success" onClick={onAddProduct}>Agregar producto</button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
