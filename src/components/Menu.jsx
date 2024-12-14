import React from "react";
import MenuItem from "./MenuItem";
import menuItems from '../data.json';

function Menu() {
  return (
    <section id="menu" className="menu">
      <div className="container">
        {menuItems.map((category, index) => (
          <div key={index} className="menu-category">
            <h3>{category.category}</h3>
            <div className="menu-items">
              {category.items.map((item, itemIndex) => (
                <MenuItem
                  key={itemIndex}
                  image={item.image}
                  name={item.name}
                  price={item.price}
                  onAddToCart={() => console.log(`Added ${item.name} to cart`)}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Menu;
