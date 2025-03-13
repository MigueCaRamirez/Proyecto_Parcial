import React, {createContext, useState} from "react";

export const CarritoContext = createContext();

export const CarritoProvider = ({children}) => {
    const [carrito, setCarrito] = useState([]);

    const agregarAlCarrito = (producto) => {
        setCarrito((prevCarrito) => {
            const productoExistente = prevCarrito.find(item => item.id === producto.id);
            if (productoExistente) {
                return prevCarrito.map(item => item.id === producto.id ? {...item, cantidad: item.cantidad + 1} : item);
            } else {
                return [...prevCarrito, {...producto, cantidad: 1}];
            }
        });
    };

    const eliminarDelCarrito = (productoId) => {
        setCarrito((prevCarrito) => prevCarrito.filter(item => item.id !== productoId));
    };

    return(
        <CarritoContext.Provider value={{carrito, agregarAlCarrito, eliminarDelCarrito}}>
            {children}
        </CarritoContext.Provider>
    );
};