import { use, useEffect, useState } from "react";
import bootstrap from "bootstrap/dist/css/bootstrap.min.css"; 
import './Clase.css'
function Api() {

    const [productos,setProductos] = useState([]);

    useEffect(() => {
            const listaProductos = localStorage.getItem('products');
            if(listaProductos){
                setProductos(JSON.stringify(listaProductos));
            }else{
                fetch('https://fakestoreapi.com/products')
                .then((res) => res.json())
                .then(data => {
                    setProductos(data)  
                    localStorage.setItem('products', data); 
                })
                .catch((error) => console.error('Error consultado:', error))
            }
    },[])

    return(
        <>
            <div className="cards-container">
                {productos.map((producto, index) => (
                    <div key={index} className="card" style={{ width: "18rem" }}>
                        <img
                            src={producto.image}
                            className="card-img-top"
                            alt={producto.title}
                        />
                        <div className="card-body">
                            <h5 className="card-title">{producto.title}</h5>
                            <p className="card-text">{producto.description}.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                ))}
            </div>
        </>

    ); 
}

export default Api;
