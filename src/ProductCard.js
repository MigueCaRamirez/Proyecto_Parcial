import React, { useState } from "react";
import { Card, Button, Dropdown } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { ProductModal } from "./ProductModal";
import { useCart } from "./CartContext";

function ProductCard({ producto, onEliminar, onEditar }) {
    const [modalShow, setModalShow] = useState(false);
    const { addToCart } = useCart();

    return (
        <>
            <Card style={{ width: "18rem", position: "relative" }} className="m-3">
                {/* Menú de opciones (tres puntos) */}
                <Dropdown style={{ position: "absolute", top: "10px", left: "10px" }}>
                    <Dropdown.Toggle variant="light" size="sm" id="dropdown-basic" style={{ border: "none", background: "transparent" }}>
                        ☰
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="#" onClick={() => onEditar(producto)}>Editar</Dropdown.Item>
                        <Dropdown.Item href="#" onClick={() => onEliminar(producto.id)}>Eliminar</Dropdown.Item> 
                    </Dropdown.Menu>
                </Dropdown>

                <Card.Img variant="top" src={producto.image} style={{ height: "200px", objectFit: "contain" }} />
                <Card.Body className="d-flex flex-column">
                    <Card.Title>{producto.title}</Card.Title>
                    <Card.Text className="flex-grow-1">💲 {producto.price}</Card.Text>
                    <div className="mt-auto d-flex justify-content-between">
                        <Button variant="primary" onClick={() => setModalShow(true)}>
                            Ver más
                        </Button>
                        <Button variant="success" onClick={() => addToCart(producto)}>
                            🛒 Agregar
                        </Button>
                    </div>
                </Card.Body>
            </Card>

            {/* Modal que se muestra al hacer clic en "Ver más" */}
            <ProductModal show={modalShow} handleClose={() => setModalShow(false)} product={producto} />
        </>
    );
}

export default ProductCard;

