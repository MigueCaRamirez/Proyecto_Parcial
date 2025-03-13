import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";

//Se tomo el mismo modal para agregar producto y se modifico para que sea el de editar producto obviamente los props que se van a usar
function EditarProducto({ show, handleClose, onEditProduct, categorias, producto }) {
    const [nombre, setNombre] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [categoria, setCategoria] = useState("");
    const [precio, setPrecio] = useState("");
    const [imagen, setImagen] = useState("");
    const [errors, setErrors] = useState({});

    useEffect(() => {
        if (show){
            //Los datos del producto se cargan en el modal
            setNombre(producto.title);
            setDescripcion(producto.description);
            setCategoria(producto.category);
            setPrecio(producto.price);
            setImagen(producto.image);
            
        }
    }, [show, producto]);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
        if (file.type.startsWith("image/")) {
            const imagenUrl = URL.createObjectURL(file);
            setImagen(imagenUrl);
            setErrors((prevErrors) => ({ ...prevErrors, imagen: null }));
        } else {
            setImagen("");
            setErrors((prevErrors) => ({
            ...prevErrors,
            imagen: "Formato de imagen no válido",
            }));
        }
        }
    }; 

    const handleSubmit = (e) => {
        e.preventDefault();
    
        // Validaciones
        const errores = {};
        if (!nombre.trim()) errores.nombre = "El nombre es requerido";
        if (!descripcion.trim())
        errores.descripcion = "La descripción es requerida";
        if (!categoria.trim())
        errores.categoria = "La categoría es requerida";
        if (!precio || isNaN(precio))
        errores.precio = "El precio debe ser un número válido";
        if (!imagen) errores.imagen = "La imagen es requerida";
    
        if (Object.keys(errores).length > 0) {
        setErrors(errores);
        return;
        }
    
        // Si la validación es correcta, se modifica el nuevo producto
        const productoEditado = {
        ...producto,
        title: nombre,
        description: descripcion,
        category: categoria,
        price: parseFloat(precio),
        image: imagen,
        };

        if(window.confirm("¿Estás seguro de modificar el producto?")){
            onEditProduct(productoEditado); // Llama a la función onEditProduct para modigicar el producto
            handleClose();
        }
    };

    return (
        //Definimos la forma del 
        <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
            <Modal.Title>Modificar Producto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="nombre" className="form-label">
                Nombre del producto
                </label>
                <input
                type="text"
                className="form-control"
                id="nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                />
                {errors.nombre && (
                <small className="text-danger">{errors.nombre}</small>
                )}
            </div>
            <div className="mb-3">
                <label htmlFor="descripcion" className="form-label">
                Descripción
                </label>
                <input
                type="text"
                className="form-control"
                id="descripcion"
                value={descripcion}
                onChange={(e) => setDescripcion(e.target.value)}
                />
                {errors.descripcion && (
                <small className="text-danger">{errors.descripcion}</small>
                )}
            </div>
            <div className="mb-3">
                <label htmlFor="categoria" className="form-label">
                Categoría
                </label>
                <select className="form-select" 
                id ="categoria"
                value ={categoria}
                onChange ={(e) => setCategoria(e.target.value)}  
                > 
                    //Mapear las categorias
                <option value="">Seleccionar categoría</option>
                {categorias.map((categoria, index) => (
                    <option key = {index} value={categoria}> {categoria}</option>
                ))}
                </select>
                {errors.categoria && (
                <small className="text-danger">{errors.categoria}</small>
                )}
            </div>
            <div className="mb-3">
                <label htmlFor="precio" className="form-label">
                Precio
                </label>
                <input
                type="number"
                className="form-control"
                id="precio"
                value={precio}
                onChange={(e) => setPrecio(e.target.value)}
                />
                {errors.precio && (
                <small className="text-danger">{errors.precio}</small>
                )}
            </div>
            <div className="mb-3">
                <label htmlFor="imagen" className="form-label">
                Imagen
                </label>
                <input
                type="file"
                accept="image/*"
                className="form-control"
                id="imagen"
                onChange={handleImageChange}
                />
                {errors.imagen && (
                <small className="text-danger">{errors.imagen}</small>
                )}
            </div>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                Cerrar
                </Button>
                <Button variant="primary" type="submit">
                Modificar
                </Button>
            </Modal.Footer>
            </form>
        </Modal.Body>
        </Modal>
    );
}

export default EditarProducto;
