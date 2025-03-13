import React from "react";
import { Modal, Button, ListGroup } from "react-bootstrap";
import { useCart } from "./CartContext";

function CartModal({ show, handleClose }) {
    const { cart, removeFromCart, clearCart } = useCart();

    // Calcular el precio total
    const totalPrice = cart.reduce((total, producto) => total + producto.price, 0);

    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>🛒 Carrito de Compras</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {cart.length === 0 ? (
                    <p>Tu carrito está vacío.</p>
                ) : (
                    <>
                        <ListGroup>
                            {cart.map((producto, index) => (
                                <ListGroup.Item key={index} className="d-flex justify-content-between align-items-center">
                                    <img src={producto.image} alt={producto.title} style={{ width: "50px", height: "50px", objectFit: "contain" }} />
                                    <span>{producto.title} - 💲{producto.price}</span>
                                    <Button variant="danger" size="sm" onClick={() => removeFromCart(producto.id)}>❌</Button>
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                        <hr />
                        <h5 className="text-end">Total: 💲{totalPrice.toFixed(2)}</h5>
                    </>
                )}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Cerrar</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default CartModal;
