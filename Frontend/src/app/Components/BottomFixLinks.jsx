import React from 'react';
import { IoHomeSharp, IoGridOutline, IoCartSharp } from 'react-icons/io5';
import { AiOutlineAlignRight } from 'react-icons/ai';

export default function BottomFixLinks() {
  const linklist = [
    {
      icon: <IoHomeSharp />,
      label: "Home",
    },
    {
      icon: <IoGridOutline />,
      label: "Category",
    },
    {
      icon: <IoCartSharp />,
      label: "Cart",
    },
   
    {
      icon: <AiOutlineAlignRight />,
      label: "Account",
    },
  ];

  return (
    <div className='flex justify-between py-2 lg:hidden px-10 fixed bottom-0 inset-x-0 bg-white z-50' >
      {linklist.map((link, index) => (
        <div key={index} className='text-center flex flex-col items-center'>
          <div className='text-2xl md:text-3xl '>{link.icon}</div>
          <span>{link.label}</span>
        </div>
      ))}
    </div>
  );
}
