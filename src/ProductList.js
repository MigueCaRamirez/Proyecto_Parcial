import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import Navbar from "./navbar";
import { AgregarProducto } from "./AddProduct";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
//import Categorias from "./Categories";

function ProductList() {
const [productos, setProductos] = useState([]);
const [filtrarProductos, setfiltrarProductos] = useState([]);
const [selectedCategory, setSelectedCategory] = useState(["all"]);
const [modalShow, setModalShow] = useState(false);

//Productos guardados en el local storage
useEffect(() => {
    const productosGuardados = localStorage.getItem("productos");
    if (productosGuardados) {
        const produtosParseados = JSON.parse(productosGuardados);
        setProductos(produtosParseados);
        setfiltrarProductos(produtosParseados);
    }else{
        fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((data) => {
    setProductos(data);
    setfiltrarProductos(data); // Inicialmente mostramos todo
    localStorage.setItem("productos", JSON.stringify(data));
    })
    .catch((error) => console.error("Error consultando:", error));
    }
}, []);


// el de arriba solo guarda el de la api, este guarda los productos que se agregan, o caa ves que se cmbia algun producto
useEffect(() => {
    if(productos.length > 0) {
        localStorage.setItem("productos", JSON.stringify(productos));
    } 
}, [productos]);

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

const handleAgregarProducto = (nuevoProducto) => {
    const actualizarProductos = [...productos, nuevoProducto];
    setProductos(actualizarProductos);
    setfiltrarProductos(actualizarProductos);
};

return (
<div>
    <Navbar onSearch={handleSearch} onSelectCategory={handleCategorySelect} onAddProduct={() => setModalShow(true)} />
    <AgregarProducto show={modalShow} handleClose={() => setModalShow(false)} onAddProduct={handleAgregarProducto} />

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

