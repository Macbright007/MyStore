import React from "react";
import { items } from "./Data";
import Product from "./Product";

const Products = () => {
  return (
      <div className="grid grid-cols-1 mx-8 mt-10 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4" id="items">
        {items.map((item) => (
            <Product name={item.name} imge={item.imge} price={item.price} />
        ))}
      </div>
  );
};

export default Products;
