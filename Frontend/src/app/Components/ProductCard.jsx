import React from 'react'
import { FaStar } from "react-icons/fa";

export default function ProductCard({product}) {
  return (
    <div
      className="border lg:min-h-[400px] md:min-h-[400px] min-h-[320px] bg-[#fff5f0] 
                 relative shadow-lg rounded-lg text-center overflow-hidden 
                 transition-all duration-300 flex flex-col h-full"
    >
      {/* Discount Badge */}
      <div className="bg-[#89B084] font-bold h-8 md:h-10 flex flex-col  items-center justify-center 
                      text-white w-8 md:w-10 text-[10px] md:text-xs 
                      absolute z-10 left-3 md:left-5 top-3 md:top-4 rounded-full">
       <span> 5% </span><span>off</span>
      </div>

      {/* Image with Hover Effect */}
      <div className="overflow-hidden">
        <img
          src={product.img}
          alt={product.title}
          className="w-full h-auto object-cover rounded-lg mb-2 md:mb-3 
                     transition-transform duration-300 hover:scale-105"
        />
      </div>

      <div className="text-start p-3 md:px-4 md:pt-0 text-black shadow-lg rounded-lg flex-grow flex flex-col justify-between">
        <div>
          <div className="text-sm md:text-lg font-semibold flex justify-between items-center">
            <h3>
              {product.title} <span className="text-xs md:text-sm">{product.quantity}</span>
            </h3>
            <span className="text-green-500 flex items-center text-xs">
              <FaStar /> {product.rating}
            </span>
          </div>
          <p className="font-bold mt-1 md:mt-2 flex items-baseline gap-x-2">
            <span className="text-base text-gray-800 md:text-lg">{product.price}</span>
            <span className="text-[10px] md:text-xs line-through text-gray-700">
              ₹{parseInt(product.price.replace("₹", "")) + 50}
            </span>
          </p>
        </div>

        <button
          className="w-full text-center mt-3 md:mt-4 gap-x-2 bg-[#5C9457] px-5 py-1.5 md:px-8 md:py-2 
                     font-semibold text-sm md:text-lg text-white rounded 
                     group transition-all duration-300 hover:bg-[#4A7D46] 
                     hover:scale-105 hover:shadow-lg"
        >
          Add to Cart
        </button>
      </div>
    </div>
  )
}
