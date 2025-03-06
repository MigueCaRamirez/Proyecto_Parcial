import React from "react";
import { Modal, Button } from "react-bootstrap";
import bootstrap from "bootstrap/dist/css/bootstrap.min.css"; 

function ProductModal({ show, handleClose, product }) {
if (!product) return null; // Si no hay producto, no renderiza nada

return (
<Modal show={show} onHide={handleClose} centered>
    <Modal.Header closeButton>
    <Modal.Title>{product.title}</Modal.Title>
    </Modal.Header>
    <Modal.Body>
    <img src={product.image} alt={product.title} className="img-fluid mb-3" />
    <p><strong>Descripción:</strong> {product.description}</p>
    <p><strong>Categoría:</strong> {product.category}</p>
    <p><strong>Precio:</strong> ${product.price}</p>
    <p><strong>Calificación:</strong> ⭐ {product.rating.rate} ({product.rating.count} opiniones)</p>
    </Modal.Body>
    <Modal.Footer>
    <Button variant="secondary" onClick={handleClose}>Cerrar</Button>
    </Modal.Footer>
</Modal>
);
}

export default ProductModal;
