import React from "react";

function MenuItem({ image, name, price, onAddToCart }) {
  return (
    <div className="menu-item">
      <img width="150" height="150" src={image} alt={name} />
      <h4>{name}</h4>
      <p>
        ₽{price}{" "}
        <button className="add-to-cart-btn" onClick={onAddToCart}>
          Добавить
        </button>
      </p>
    </div>
  );
}

export default MenuItem;