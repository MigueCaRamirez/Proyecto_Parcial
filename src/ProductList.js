import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import Navbar from "./navbar";
import './styles.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
//import Categorias from "./Categories";

function ProductList() {
const [productos, setProductos] = useState([]);
const [filtrarProductos, setfiltrarProductos] = useState([]);
const [selectedCategory, setSelectedCategory] = useState(["all"]);

useEffect(() => {
fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((data) => {
    setProductos(data);
    setfiltrarProductos(data); // Inicialmente mostramos todo
    })
    .catch((error) => console.error("Error consultando:", error));
}, []);

const handleSearch = (Buscar) => {
const filtrar = productos.filter((producto) =>
    producto.title.toLowerCase().includes(Buscar.toLowerCase())
);
setfiltrarProductos(filtrar);
};

const handleCategorySelect = (categoria) => {
    let categorias;
    if (categoria === "all") {
        categorias = ["all"];
    } else {
        if (selectedCategory.includes(categoria)) {
            categorias = selectedCategory.filter(cat => cat !== categoria);
        } else {
            categorias = [...selectedCategory.filter(cat => cat !== "all"), categoria];
        }
    }
    setSelectedCategory(categorias);

    if (categorias.includes("all") || categorias.length === 0) {
        setfiltrarProductos(productos);
    } else {
        const Filtrar = productos.filter((producto) =>
            categorias.includes(producto.category)
        );
        setfiltrarProductos(Filtrar);
    }
};

return (
<div>
    <Navbar onSearch={handleSearch} onSelectCategory={handleCategorySelect}  />

    <div className="container mt-4">
    <h2 className="text-center mb-4">Lista de Productos</h2>
    <div className="row">
        {filtrarProductos.length > 0 ? (
        filtrarProductos.map((producto) => (
            <ProductCard key={producto.id} producto={producto} />
        ))
        ) : (
        <p className="text-center">No se encontraron productos.</p>
        )}
    </div>
    </div>
</div>
);
}

export default ProductList;

