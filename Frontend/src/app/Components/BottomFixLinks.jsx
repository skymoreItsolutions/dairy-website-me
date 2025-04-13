import React from 'react';
import { IoHomeSharp, IoGridOutline, IoCartSharp } from 'react-icons/io5';
import { AiOutlineAlignRight } from 'react-icons/ai';
import Link from 'next/link';
export default function BottomFixLinks() {
  const linklist = [
    {
      link: "/",
      icon: <IoHomeSharp />,
      label: "Home",
    },
    {
      link: "/products",
      icon: <IoGridOutline />,
      label: "Products",
    },
    {
      link: "/cart",
      icon: <IoCartSharp />,
      label: "Cart",
    },
   
    {
       link: "/user/profile",
      icon: <AiOutlineAlignRight />,
      label: "Account",
    },
  ];

  return (
    <div className='flex justify-between py-2 lg:hidden px-10 fixed bottom-0 inset-x-0 bg-white z-50' >
      {linklist.map((link, index) => (
        <div key={index} className='text-center flex flex-col items-center'>
          <Link href={link.link}
           className='text-2xl md:text-3xl '>{link.icon}</Link>
          <span>{link.label}</span>
        </div>
      ))}
    </div>
  );
}
