import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import ProductModal from "./ProductModal";

function ProductCard({ producto }) {
const [modalShow, setModalShow] = useState(false);

return (
<>
    <Card style={{ width: "18rem" }} className="m-3">
    <Card.Img variant="top" src={producto.image} style={{ height: "200px", objectFit: "contain" }} />
    <Card.Body>
        <Card.Title>{producto.title}</Card.Title>
        <Card.Text>💲 {producto.price}</Card.Text>
        <Button variant="primary" onClick={() => setModalShow(true)}>
        Ver más
        </Button>
    </Card.Body>
    </Card>

    {/* Modal que se muestra al hacer clic en "Ver más" */}
    <ProductModal show={modalShow} handleClose={() => setModalShow(false)} product={producto} />
</>
);
}

export default ProductCard;
