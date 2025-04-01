import React from 'react'
import { RxCross1 } from 'react-icons/rx'

export default function ShoppingCart({setCart,cart}) {
    const cartItem=[

    ]
  return (
    <div onClick={()=>setCart(false)} className={`bg-black/20  z-[555555555] hidden lg:block fixed inset-0   to-gray-400 transition-transform duration-100 ${cart?"translate-x-0":"translate-x-full"}` }>
        <div className='lg:w-[30%] absolute right-0 h-full bg-white p-4'>
            <div className='flex items-center justify-between'>
                <h5 className='font-semibold text-lg'>Shopping Cart</h5>
                <button onClick={()=>setCart(false)}><RxCross1 /></button>
            </div>
            {cartItem.length<1 ?(
                    <div>
                    <img src='https://swadeshivip.com/_next/image?url=%2Fassets%2Fimg%2Fno-cart-item.png&w=828&q=75'/>
                    <button className='px-4 py-2 bg-[#2A8E23]  hover:bg-green-800 rounded-md mx-auto block text-white font-bold capitalize'>shop Now</button>
                    </div>
            ):(
                <div>
                    cart prodcuts
                </div>
            )}

            <hr className='absolute w-full bottom-8 ' />
        </div>
    </div>
  )
}
