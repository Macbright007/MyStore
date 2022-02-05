import React, { useState, useContext } from "react";
import Product from "./Product";
import { ItemContext } from "./ItemContext";

const Products = () => {
  const [cart, setCart] = useState([]);

  //use context code 
  const {state: { items }} = useContext(ItemContext);

  return (
      <div className="grid grid-cols-1 mx-8 mt-4 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4" id="items">
        {items.map((item) => (
            <Product name={item.name} imge={item.imge} price={item.price} cart={cart} setCart={setCart} item={item} />
        ))}
      </div>
  );
};

export default Products;
