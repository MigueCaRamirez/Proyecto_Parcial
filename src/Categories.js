import React from "react";

function Categories({ onSelectCategory }) {
const categories = ["all", "electronics", "jewelery", "men's clothing", "women's clothing"];

return (
<div className="container text-center my-4">
    <h3>Categorías</h3>
    <div className="btn-group">
    {categories.map((category, index) => (
        <button
        key={index}
        className="btn btn-outline-primary mx-2"
        onClick={() => onSelectCategory(category)}
        >
        {category === "all" ? "Todos" : category}
        </button>
    ))}
    </div>
</div>
);
}

export default Categories;
