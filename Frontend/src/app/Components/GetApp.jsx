import React from 'react';

export default function GetApp() {
  return (
<div className='relative bg-[url("/images/app/bg.webp")]'>
<div className=' relative z-10   px-5 md:px-12 xl:px-32 py-8 md:py-10 xl:py-16 flex flex-col lg:flex-row gap-y-10 lg:gap-y-0 lg:gap-x-10'>
      {/* Left Section */}
      <div className='w-full  lg:w-[30%]'>
        <img 
          className='w-full mx-auto lg:mx-0 md:w-[50%] lg:w-full' 
          src="https://placehold.co/600x400" 
          alt="Gaualla App Preview " 
        />
        <h6 className='text-white text-xl mt-4 font-semibold'>Get The Gaualla App</h6>
        <div className='flex gap-x-4 mt-4'>
          <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
            <img 
              className='rounded-md w-32' 
              src="https://swadeshivip.com/assets/img/google_play.png" 
              alt="Google Play"
            />
          </a>
          <a href="https://apps.apple.com/in/app/swadeshivip/id1600525461" target="_blank" rel="noopener noreferrer">
            <img 
              className='rounded-md w-32' 
              src="https://swadeshivip.com/assets/img/apple_store.png" 
              alt="Apple Store"
            />
          </a>
        </div>
      </div>

      {/* Right Section */}
      <div className='w-full lg:w-3/4'>
        <div className='space-y-4'>
          <h6 className='text-white text-2xl md:text-3xl lg:text-4xl font-semibold'>Manage your Orders Effortlessly with Gaualla!</h6>
          <p className='text-white'>
            Download the Gaualla app, track your orders in real-time, and enjoy a premium experience at your fingertips.
            Hassle-free and convenient, all with a single click.
          </p>
          <p className='text-white'>
            Fresh and high-quality desi cow milk, delivered right to your doorstep with Gaualla!
          </p>
        </div>

        {/* Steps Section */}
        <div className='border flex flex-col md:flex-row gap-x-5 items-baseline p-5 rounded-md border-dotted border-white mt-6 pt-6 space-y-6'>
          <div className='flex items-start gap-x-4'>
            <h5 className='text-white text-lg lg:text-2xl font-bold'>01</h5>
            <div>
              <h6 className='text-white text-2xl lg:text-2xl font-semibold'>Install  App</h6>
              <p className='text-white'>Get real-time delivery updates and more!</p>
            </div>
          </div>
          <div className='flex items-start gap-x-4'>
            <h5 className='text-white text-lg lg:text-2xl font-bold'>02</h5>
            <div>
              <h6 className='text-white text-2xl lg:text-2xl font-semibold'>Add Amount to Wallet</h6>
              <p className='text-white'>Seamlessly top up your wallet for easy payments</p>
            </div>
          </div>
          <div className='flex items-start gap-x-4'>
            <h5 className='text-white text-lg lg:text-2xl font-bold'>03</h5>
            <div>
              <h6 className='text-white text-2xl lg:text-2xl font-semibold'>Place Your Order</h6>
              <p className='text-white'>Experience fast and reliable deliveries</p>
            </div>
          </div>
        </div>
      </div>

   

    </div>
    <div className=' absolute bg-[#62361f67] opacity-80  inset-0 object-cover object-center ' />
</div>
  );
}
