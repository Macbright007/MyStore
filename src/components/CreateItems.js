import React, { useState, useContext } from 'react'
import { ItemContext } from './ItemContext'


const CreateItems = () => {

    const [productName, setProductName] = useState('')
    const [productPrice, setProductPrice] = useState(0)
    const [productImg, setProductImg] = useState('')
    const [items, setItems] = useContext(ItemContext);

    //function to add item
    const addItem = (e) => {
      e.preventDefault();
      setItems(prevItems => [...prevItems, {name: productName, price: productPrice, imge: productImg}])
    }

    return (
        <div className="w-full max-w-xl max-h-full m-auto rounded py-10 px-5 mt-20">
      {/* form section */}
      <form onSubmit={addItem}>
        <div>
          <label
            className="block mb-2 text-indigo-500 font-bold"
            htmlFor="product-name"
          >
            Product Name
          </label>
          <input
            className="w-full p-2 mb-8 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300"
            type="text"
            id="product-name"
            onChange={(e) => setProductName(e.target.value)}
          />
        </div>
        <div>
          <label
            className="block mb-2 text-indigo-500 font-bold"
            htmlFor="product-price"
          >
            Product Price
          </label>
          <input
            className="w-full p-2 mb-8 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300"
            type="number"
            id="product-price"
            onChange={(e) => setProductPrice(e.target.value)}
          />
        </div>
        <div>
          <input
            className="w-full p-2 mb-8 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300"
            type="file"
            onChange={(e) => setProductImg(e.target.value)}
          />
        </div>
        <div>
          <input
            className="w-full bg-indigo-700 hover:bg-blue-700 text-white font-bold py-2 px-4 mb-6 rounded"
            type="submit"
          />
        </div>
      </form>
      {/* footer section */}
      {/* <footer>
        <a className="text-indigo-700 hover:text-indigo-400 font-bold text-sm float-right">
          <Link to="/signin">Already have Account?</Link>
        </a>
      </footer> */}
    </div>
    )
}

export default CreateItems
