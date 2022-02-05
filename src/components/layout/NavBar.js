import React, { useContext } from "react";
import { FaShopify } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import { Link } from "react-router-dom";
import { ItemContext } from "../ItemContext";

const NavBar = () => {
  const {
    state: { cart },
  } = useContext(ItemContext);

  return (
    <nav className="bg-blue-900 sticky top-0 z-10 w-full px-4 py-2 flex justify-center border-b-4 border-blue-300">
      <div className="max-w-4xl w-full">
        <div className="flex items-center justify-between text-pink-500 ">
          <div className="flex">
            <FaShopify
              style={{
                marginTop: "12px",
                fontSize: "35px",
                color: "lightblue",
              }}
            />
            <h1 className="text-blue-300 font-bold text-2xl italic font-mono">
              <Link to="/">
                My
                <span style={{ color: "white", fontFamily: "Praise" }}>
                  Store
                </span>
                <span style={{ color: "lightblue", fontSize: "40px" }}>.</span>
              </Link>
            </h1>
          </div>

          {/* code for right navbar */}
          <div className="flex ">
            <button
              type="button"
              className="hidden text-green-100 font-bold font-mono mt-2 mr-6 px-4 py-2 border-2 border-blue-300
             text-xs capitalize hover:text-gray-100 hover:bg-blue-300 md:block lg:block"
            >
              <Link to="/signin">Log in</Link>
            </button>
            <button
              type="button"
              className="hidden text-green-100 font-bold font-mono mt-2 px-4 py-2 border-2 border-blue-300
             text-xs capitalize hover:text-gray-100 hover:bg-blue-300 md:block lg:block"
            >
              <Link to="/signout">Sign up</Link>
            </button>
            
            <div className="relative">
            <TiShoppingCart
              style={{
                marginTop: "10px",
                fontSize: "35px",
                marginLeft: "13px",
                marginRight: "5px",
                color: "white",
                cursor: "pointer",
              }}
              />
              <span className="absolute top-0 right-0 ml-16 mt-2 text-white">{cart.length}</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
