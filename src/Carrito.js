import React, {useContext} from "react";
import {CarritoContext} from "./CarritoContext";
import { Modal, Button } from "react-bootstrap";

const Carrito = ({ show, handleClose }) => {
    const {carrito, eliminarDelCarrito} = useContext(CarritoContext);
    
    const total = carrito.reduce((acc, item) => acc + item.price * item.cantidad, 0);

    return(
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Carrito de Compras</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {carrito.length === 0 ? (
                    <p>El carrito esta vacío</p>
                ) : (
                    carrito.map((item,index) => (
                    /*   <div key={index}>
                            <p>{item.Title} x {item.cantidad} = ${item.price * item.cantidad}</p>
                            <Button variant="danger" onClick={() => eliminarDelCarrito(item.id)}>Eliminar</Button>
                        </div>
                    */
                        <div key={index} className="d-flex align-items-center mb-3">
                            <img src={item.image} alt={item.title} style={{ width: "50px", height: "50px", objectFit: "cover", marginRight: "10px" }} />
                            <div className="flex-grow-1">
                                <p className="mb-1">{item.title}</p>
                                <p className="mb-1">Cantidad: {item.cantidad}</p>
                                <p className="mb-1">Precio: ${item.price}</p>
                                <p className="mb-1">Subtotal: ${item.price * item.cantidad}</p>
                            </div>
                            <Button variant="danger" onClick={() => eliminarDelCarrito(item.id)}>Eliminar</Button>
                        </div>
                    ))
                )}
                <h3>Total: ${total}</h3> 
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cerrar
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default Carrito;