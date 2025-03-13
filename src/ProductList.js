import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import Navbar from "./navbar";
import { AgregarProducto } from "./AddProduct";
import EditarProducto from "./EditarProducto";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function ProductList() {
const [productos, setProductos] = useState([]);
const [filtrarProductos, setfiltrarProductos] = useState([]);
const [selectedCategory, setSelectedCategory] = useState(["all"]);
const [modalShow, setModalShow] = useState(false);
const [productoEditado, setProductoEditado] = useState(null);
const [editarModalShow, setEditarModalShow] = useState(false);
const categorias = ["electronics", "jewelery", "men's clothing", "women's clothing"]; //categorias que se envia al formulario de agregar producto

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


// el de arriba solo guarda el de la api, este guarda los productos que se agregan, o cada ves que se cmbia algun producto
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
    setSelectedCategory([categoria]);
    if (categoria === "all") {
        setfiltrarProductos(productos);
    } else {
        const Filtrar = productos.filter((producto) => 
        producto.category === categoria
    );
    setfiltrarProductos(Filtrar);
    }
};


//Recibe el nuevo producto que se tomo y valido en el modal de agregar producto y lo guarda junto con los demas productos
const handleAgregarProducto = (nuevoProducto) => {
    const actualizarProductos = [...productos, nuevoProducto];
    setProductos(actualizarProductos);
    setfiltrarProductos(actualizarProductos);
};


//Funcion para eliminar un producto
const handleEliminar = (id) => {
    const eliminarProducto = productos.filter((producto) => producto.id !== id);
    setProductos(eliminarProducto);
    setfiltrarProductos(eliminarProducto);
};

//Funcion para editar un producto
const handleEditarProducto = (productoEditado) => {
    const actualizarProductos = productos.map((producto) =>
        producto.id === productoEditado.id ? productoEditado : producto
    );
    setProductos(actualizarProductos);
    setfiltrarProductos(actualizarProductos);
};

const handleEditar = (producto) => {
    setProductoEditado(producto); 
    setEditarModalShow(true);
}

 //en AgregarProducto se maneja cuando se cierra el modal
return (
<div>
    <Navbar onSearch={handleSearch} onSelectCategory={handleCategorySelect} onAddProduct={() => setModalShow(true)} />
    <AgregarProducto show={modalShow} handleClose={() => setModalShow(false)} onAddProduct={handleAgregarProducto} categorias={categorias}/>
    {productoEditado && (
                <EditarProducto show={editarModalShow} handleClose={() => setEditarModalShow(false)} producto={productoEditado} onEditProduct={handleEditarProducto} categorias={categorias} />
            )}

    <div className="container mt-4">
    <h2 className="text-center mb-4">Lista de Productos</h2>
    <div className="row">
        {filtrarProductos.length > 0 ? (
        filtrarProductos.map((producto) => (
            <ProductCard key={producto.id} producto={producto} onEliminar={handleEliminar} onEditar={handleEditar}/>
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