import React,{ useContext } from "react";
import { ItemContext } from "./ItemContext";

const Product = ({imge, name, price, item}) => {
  const {
    state: { cart },
    dispatch,
   } = useContext(ItemContext);

  return (
    <div className="shadow-lg text-center rounded m-10" key={imge}>
      <div className="w-auto">
        <img
          src={imge}
          alt="River"
          className="transform transition duration-500 hover:scale-125"
        />
      </div>
      <br />
      <hr />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="font-bold text-2xl mt-2 mb-2">${price}</p>
        {/* {
          items.some()?()
        } */}
        
        <button
          className="bg-blue-600 py-1 px-4 hover:bg-blue-300 mt-3 rounded text-white text-xl mb-2"
          onClick={() => {
            dispatch({
              type: "ADD_TO_CART",
              payload: item,
            });
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
