import React from "react";

const CartItem = (item) => {
  return (
    <li>
      <input type="checkbox" id="" />
      <img
        src="https://www.ganni.com/dw/image/v2/AAWT_PRD/on/demandware.static/-/Sites-ganni-master-catalogue/default/dw2194b9cd/images/images/packshots/K1829-554-1.jpg?sh=2000"
        alt="Product"
      />
      <div>
        <p>{item._id}</p>
        <p>{item.title}</p>
        <p>₩{item.price}</p>
        <p>{item.quantity}</p>
        <div>
          <button>-</button>
          <span>count</span>
          <button>+</button>
        </div>
      </div>
      <p>DELETE</p>
    </li>
  )
}

export default CartItem;