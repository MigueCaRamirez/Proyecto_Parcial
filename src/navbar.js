import React, {useState} from "react";

function Navbar({ onSearch}){
    const [searchTerm, setSearchTerm] = useState("");

    const handleChange = (e) => {
        //e.preventDefault();
        setSearchTerm(e.target.value);
        onSearch(e.target.value)
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
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
