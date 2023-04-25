import React, { useState } from "react";

function Item({ name, category }) {
  const[addToCart,setAddToCart]= useState('')
function handleCart(e){
setAddToCart(!addToCart)
console.log(addToCart);
addToCart
  ? (e.target.textContent = "Add to cart")
  : (e.target.textContent = "Remove from cart"); 
}
console.log(addToCart);
  const itemClass = addToCart ? "in-cart" : null;
  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleCart}>
        Add to Cart
      </button>
    </li>
  );
}

export default Item;
