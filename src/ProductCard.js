<<<<<<< Updated upstream
import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import ProductModal from "./ProductModal";

function ProductCard({ producto }) {
const [modalShow, setModalShow] = useState(false);
=======
import React, { useState, useContext } from "react";
import { Card, Button, Dropdown } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { ProductModal } from "./ProductModal";
import { CarritoContext } from "./CarritoContext";

function ProductCard({ producto, onEliminar, onEditar }) {
    const [modalShow, setModalShow] = useState(false);
    const { agregarAlCarrito } = useContext(CarritoContext);
>>>>>>> Stashed changes

return (
<>
    <Card style={{ width: "18rem" }} className="m-3">
    <Card.Img variant="top" src={producto.image} style={{ height: "200px", objectFit: "contain" }} />
    <Card.Body>
        <Card.Title>{producto.title}</Card.Title>
<<<<<<< Updated upstream
        <Card.Text>💲{producto.price}</Card.Text>
        <Button variant="primary" onClick={() => setModalShow(true)}>
        Ver más
        </Button>
    </Card.Body>
=======
    <Card.Text className="flex-grow-1">💲 {producto.price}</Card.Text>
        <div className="mt-auto d-flex justify-content-between">
            <Button variant="primary" onClick={() => setModalShow(true)}>
            Ver más
            </Button>
            <button variant="agregar" onClick={() => agregarAlCarrito(producto)} /*className="botonCarrito"*/>
            🛒Agregar
            </button>
        </div>
        </Card.Body>
>>>>>>> Stashed changes
    </Card>

    {/* Modal que se muestra al hacer clic en "Ver más" */}
    <ProductModal show={modalShow} handleClose={() => setModalShow(false)} product={producto} />
</>
);
}

export default ProductCard;
