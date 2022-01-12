import React from 'react'

const Product = (props) => {
    return (
        <div className='shadow-lg text-center rounded m-10' key={props.imge} >
            <div className="w-auto">
              <img src={props.imge} alt="River" />
            </div>
            <br />
            <hr />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{props.name}</div>
                <p className='font-bold text-2xl mt-2 mb-2'>{props.price}</p>
                <button className=" bg-blue-600 py-1 px-4 hover:bg-blue-300 mt-3 rounded text-white text-xl mb-2">
                  Add to Cart 
                </button>
              </div>
            </div>
    )
}

export default Product
