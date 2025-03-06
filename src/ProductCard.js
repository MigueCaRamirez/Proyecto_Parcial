import React from "react";

function ProductCard({ producto }) {
return (
<div className="col-md-4 mb-4">
    <div className="card h-100 shadow-lg">
    <img src={producto.image} className="card-img-top p-3" alt={producto.title} />
    <div className="card-body d-flex flex-column">
        <h5 className="card-title">{producto.title}</h5>
        <p className="card-text text-muted flex-grow-1">
        {producto.description.substring(0, 100)}...
        </p>
        <div className="d-flex justify-content-between align-items-center">
        <span className="fw-bold text-primary">${producto.price}</span>
        <a href="#" className="btn btn-primary">Ver más</a>
        </div>
    </div>
    </div>
</div>
);
}

export default ProductCard;
