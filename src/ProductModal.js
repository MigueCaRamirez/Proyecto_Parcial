import React, { useState, useEffect } from "react";
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

function AgregarProducto({show, handleClose, onAddProduct}){

    const [nombre, setNombre] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [categoria, setCategoria] = useState("");
    const [precio, setPrecio] = useState("");
    const [imagen, setImagen] = useState("");

    // Reinicia todos los campos cuando el modal del nuevo producto se cierra
    useEffect(() => {
        if (!show) {
        setNombre("");
        setDescripcion("");
        setCategoria("");
        setPrecio("");
        setImagen("");
        }
    }, [show]);

    //Para que la imagen que se suba al formualrio se muestre en los produtos
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
        const imagen = URL.createObjectURL(file);
        setImagen(imagen);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const nuevoProducto = {
            id: Date.now(), // Generar un ID único
            title: nombre,
            description: descripcion,
            category: categoria,
            price: parseFloat(precio),
            image: imagen,
            rating: { rate: 0, count: 0 } // Inicializar calificación
        };
        onAddProduct(nuevoProducto);
        handleClose();
    };

    return(
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>Agregar Producto</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="nombre" className="form-label">Nombre del producto</label>
                        <input type="text" className="form-control" id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="descripcion" className="form-label">Descripción</label>
                        <input type="text" className="form-control" id="descripcion" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="categoria" className="form-label">Categoría</label>
                        <input type="text" className="form-control" id="categoria" value={categoria} onChange={(e) => setCategoria(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="precio" className="form-label">Precio</label>
                        <input type="text" className="form-control" id="precio" value={precio} onChange={(e) => setPrecio(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="imagen" className="form-label">URL de la imagen</label>
                        <input type="file" className="form-control" id="imagen" onChange={handleImageChange}/>
                    </div>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>Cerrar</Button>
                        <Button variant="primary" type="submit">Agregar</Button>
                    </Modal.Footer>
                </form>
            </Modal.Body>
        </Modal>
    )

}

export {ProductModal, AgregarProducto};
