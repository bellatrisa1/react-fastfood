import React from "react";
import MenuItem from "./MenuItem";
import menuItems from '../data.json';

// const menuItems = [
//   {
//     category: "Burgers",
//     items: [
//       {
//         image:
//           "https://www.hesburger.com/clients/hesburger/mellow_internal/imagefolder/en//generated/hampurilainen600x600-2018340xs_60.jpg",
//         name: "Classic Burger",
//         price: 250,
//       },
//       {
//         image:
//           "https://www.hesburger.com/clients/hesburger/mellow_internal/imagefolder/en//generated/juustohampurilainen600x600-2018340xs_60.jpg",
//         name: "Cheese Burger",
//         price: 250,
//       },
//       {
//         image:
//           "https://www.hesburger.com/clients/hesburger/mellow_internal/imagefolder/en//generated/kerroshampurilainen600x600-2018340xs_60.jpg",
//         name: "Double Burger",
//         price: 250,
//       },
//       {
//         image:
//           "https://www.hesburger.com/clients/hesburger/mellow_internal/imagefolder/en//generated/megahampurilainen600x600-2018340xs_60.jpg",
//         name: "Mega Burger",
//         price: 250,
//       },
//       {
//         image:
//           "https://www.hesburger.com/clients/hesburger/mellow_internal/imagefolder/en//generated/kana-hampurilainen-2023-600x600px340xs_60.jpg",
//         name: "Chicken Burger",
//         price: 250,
//       },
//       {
//         image:
//           "https://www.hesburger.com/clients/hesburger/mellow_internal/imagefolder/en//generated/jattipekoni-hampurilainen2-010123-600x600px340xs_60.jpg",
//         name: "Giant Bacon Burger",
//         price: 250,
//       },
//     ],
//   },
//   {
//     category: "Fries, nuggets, onion rings, sauces",
//     items: [
//       {
//         image:
//           "https://www.hesburger.com/clients/hesburger/mellow_internal/imagefolder/en//generated/ranskalaiset-norm-2024-600x600px340xs_60.jpg",
//         name: "French Fries",
//         price: 250,
//       },
//       {
//         image:
//           "https://www.hesburger.com/clients/hesburger/mellow_internal/imagefolder/en//generated/ranskalaiset-isot-2024-600x600px340xs_60.jpg",
//         name: "French Fries, large",
//         price: 250,
//       },
//       {
//         image:
//           "https://www.hesburger.com/clients/hesburger/mellow_internal/imagefolder/en//generated/kananugetit_6kpl_chilimajoneesi_600x600px340xs_60.jpg",
//         name: "Chicken Nuggets 6 pcs + sauce",
//         price: 250,
//       },
//       {
//         image:
//           "https://www.hesburger.com/clients/hesburger/mellow_internal/imagefolder/en//generated/kananugetit-15kpl-3dippia-600x600340xs_60.jpg",
//         name: "Chicken Nuggets 15 pcs + sauce",
//         price: 250,
//       },
//       {
//         image:
//           "https://www.hesburger.com/clients/hesburger/mellow_internal/imagefolder/en//generated/sipulirenkaat_dippi_600x600px340xs_60.jpg",
//         name: "Onion Rings + sauce",
//         price: 250,
//       },
//       {
//         image:
//           "https://www.hesburger.com/clients/hesburger/mellow_internal/imagefolder/en//generated/217340xs_60",
//         name: "Paprika sauce",
//         price: 250,
//       },
//       {
//         image:
//           "https://www.hesburger.com/clients/hesburger/mellow_internal/imagefolder/en//generated/cheddarjuusto2023-600x600340xs_60.jpg",
//         name: "Cheddar Cheese Sauce",
//         price: 250,
//       },
//       {
//         image:
//           "https://www.hesburger.com/clients/hesburger/mellow_internal/imagefolder/en//generated/221340xs_60",
//         name: "Sweet sauce",
//         price: 250,
//       },
//       {
//         image:
//           "https://www.hesburger.com/clients/hesburger/mellow_internal/imagefolder/en//generated/205340xs_60",
//         name: "Ketchup",
//         price: 250,
//       },
//     ],
//   },
//   {
//     category: "Drinks",
//     items: [
//       {
//         image:
//           "https://www.hesburger.com/clients/hesburger/mellow_internal/imagefolder/en//generated/cokis-600x600px340xs_60.jpg",
//         name: "Coca-Cola",
//         price: 250,
//       },
//       {
//         image:
//           "https://www.hesburger.com/clients/hesburger/mellow_internal/imagefolder/en//generated/fanta-600x600px340xs_60.jpg",
//         name: "Fanta",
//         price: 250,
//       },
//       {
//         image:
//           "https://www.hesburger.com/clients/hesburger/mellow_internal/imagefolder/en//generated/sprite-sooda-vesi-600x600px340xs_60.jpg",
//         name: "Sprite",
//         price: 250,
//       },
//       {
//         image:
//           "https://www.hesburger.com/clients/hesburger/mellow_internal/imagefolder/en//generated/maitojuoma-600x600px340xs_60.jpg",
//         name: "Milkshake",
//         price: 250,
//       },
//       {
//         image:
//           "https://www.hesburger.com/clients/hesburger/mellow_internal/imagefolder/en//generated/bonaqua-villivadelma-600x600-31072020340xs_60.jpg",
//         name: "Water",
//         price: 250,
//       },
//       {
//         image:
//           "https://www.hesburger.com/clients/hesburger/mellow_internal/imagefolder/en//generated/godmorgon-appelsiinimehu-600x600340xs_60.jpg",
//         name: "Orange Juice",
//         price: 250,
//       },
//       {
//         image:
//           "https://www.hesburger.com/clients/hesburger/mellow_internal/imagefolder/en//generated/godmorgon-smoothie-600x600340xs_60.jpg",
//         name: "Smoothie",
//         price: 250,
//       },
//     ],
//   },
//   {
//     category: "Desserts",
//     items: [
//       {
//         image:
//           "https://www.hesburger.com/clients/hesburger/mellow_internal/imagefolder/en//generated/pehmyt-rocky-road-2024-600x600340xs_60.jpg",
//         name: "Rocky Road",
//         price: 250,
//       },
//       {
//         image:
//           "https://www.hesburger.com/clients/hesburger/mellow_internal/imagefolder/en//generated/pehmyt-tuplamansikka-2024-600x600340xs_60.jpg",
//         name: "Double Strawberry",
//         price: 250,
//       },
//       {
//         image:
//           "https://www.hesburger.com/clients/hesburger/mellow_internal/imagefolder/en//generated/pehmyt-tuplakinuski-2024-600x600340xs_60.jpg",
//         name: "Double Caramel",
//         price: 250,
//       },
//       {
//         image:
//           "https://www.hesburger.com/clients/hesburger/mellow_internal/imagefolder/en//generated/churrot-pehmyt-suklaakastike-2024-600x600px340xs_60.jpg",
//         name: "Churros with Soft Ice Cream",
//         price: 250,
//       },
//       {
//         image:
//           "https://www.hesburger.com/clients/hesburger/mellow_internal/imagefolder/en//generated/pehmyt-2024-600x600340xs_60.jpg",
//         name: "Soft Ice Cream",
//         price: 250,
//       },
//       {
//         image:
//           "https://www.hesburger.com/clients/hesburger/mellow_internal/imagefolder/en//generated/pehmyt-suklaakastike-2024-600x600340xs_60.jpg",
//         name: "Ice Cream & Chocolate",
//         price: 250,
//       },
//     ],
//   },
// ];

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
