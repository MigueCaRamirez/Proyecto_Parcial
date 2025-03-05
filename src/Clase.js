import { use, useEffect, useState } from "react";
import bootstrap from "bootstrap/dist/css/bootstrap.min.css"; 
function Api() {

    const [productos,setProductos] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then((res) => res.json())
        .then(data => {
            setProductos(data)  
            localStorage.setItem('products', data); 
        })
        .catch((error) => console.error('Error consultado:', error))
    },[])

    return(
        <>
            <ul>
                {productos.map((producto) => (
                    <li>
                        <div className="img-fluit">
                        <div className="card" style={{width: "18rem"}}>
                        <img src={producto.image} className="card-img-top" alt="producto.title"/>
                        <div className="card-body">
                            <h5 className="card-title">{producto.title}</h5>
                            <p className="card-text">{producto.description}.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                        </div>

                    </li>
                ))}
            </ul>
        </>

    ); 
}

export default Api;
