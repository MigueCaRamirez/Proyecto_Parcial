import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import Navbar from "./navbar";
import Categories from "./Categories";

function ProductList() {
const [productos, setProductos] = useState([]);
const [filteredProducts, setFilteredProducts] = useState([]);
const [selectedCategory, setSelectedCategory] = useState("all");

useEffect(() => {
fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((data) => {
    setProductos(data);
    setFilteredProducts(data); // Inicialmente mostramos todo
    })
    .catch((error) => console.error("Error consultando:", error));
}, []);

<<<<<<< Updated upstream
const handleSearch = (searchTerm) => {
const filtered = productos.filter((producto) =>
    producto.title.toLowerCase().includes(searchTerm.toLowerCase())
=======

// el de arriba solo guarda el de la api, este guarda los productos que se agregan, o cada ves que se cambia algun producto
useEffect(() => {
    if(productos.length > 0) {
        localStorage.setItem("productos", JSON.stringify(productos));
    } 
}, [productos]);

const handleSearch = (Buscar) => {
const filtrar = productos.filter((producto) =>
    producto.title.toLowerCase().includes(Buscar.toLowerCase())
>>>>>>> Stashed changes
);
setFilteredProducts(filtered);
};

const handleCategorySelect = (category) => {
setSelectedCategory(category);
if (category === "all") {
    setFilteredProducts(productos);
} else {
    const filtered = productos.filter((producto) => producto.category === category);
    setFilteredProducts(filtered);
}
};

return (
<div>
    <Navbar onSearch={handleSearch} />
    <Categories onSelectCategory={handleCategorySelect} />

    <div className="container mt-4">
    <h2 className="text-center mb-4">Lista de Productos</h2>
    <div className="row">
        {filteredProducts.length > 0 ? (
        filteredProducts.map((producto) => (
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

