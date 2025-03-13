import React from "react";

function Categorias({ onSelectCategory }) {
const categorias = ["all", "electronics", "jewelery", "men's clothing", "women's clothing"];

return (
<div className="container text-center my-4">
    <h3>Categorías</h3>
    <div className="row justify-content-center">
        {categorias.map((categoria, index) => (
            <div key={index} className="col-auto form-check">
                <input
                    type="checkbox"
                    className="form-check-input"
                    id={`categoria-${index}`}
                    onChange={() => onSelectCategory(categoria)}
                />
                <label className="form-check-label" htmlFor={`categoria-${index}`}>
                    {categoria === "all" ? "Todos" : categoria}
                </label>
            </div>
        ))}
    </div>
</div>
);
}

export default Categorias;
