import React, { useState, useEffect } from 'react'

export default function ProductionCounter() {
  const [productSale, setProductSale] = useState(0);
  const [happyCustomer, setHappyCustomer] = useState(0);
  const [companySupport, setCompanySupport] = useState(0);
  const [customerRating, setCustomerRating] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (productSale <+ 14) setProductSale(prev => prev + 1);
      if (happyCustomer <+ 10) setHappyCustomer(prev => prev + 1);
      if (companySupport < 421) setCompanySupport(prev => prev + 1);
      if (customerRating < 4.7) setCustomerRating(prev => prev + 0.1); 
    }, 5); 

    return () => clearInterval(interval);
  }, [productSale, happyCustomer, companySupport, customerRating]);

  return (
    <div className='px-5 md:px-12 xl:px-32 relative pt-4 z-10 -mb-12  md:-mb-8 '>
      <div className='grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 bg-white  shadow-2xl rounded-xl py-5 md:py-10'>
        <div className='flex flex-col items-center'>
          <h3 className='text-2xl md:text-3xl xl:text-5xl font-bold text-green-700'>
            {productSale} K+
          </h3>
          <p className=''>Product Sale</p>
        </div>
        <div className='flex flex-col items-center'>
          <h3 className='text-2xl md:text-3xl xl:text-5xl font-bold text-green-700'>
            {happyCustomer} K+
          </h3>
          <p className=''> Happy Customers</p>
        </div>
        <div className='flex flex-col items-center'>
          <h3 className='text-2xl md:text-3xl xl:text-5xl font-bold text-green-700'>
            {companySupport}+
          </h3>
          <p>Company Support</p>
        </div>
        <div className='flex flex-col items-center'>
          <h3 className='text-2xl md:text-3xl xl:text-5xl font-bold text-green-700'>
            {customerRating.toFixed(1)}
          </h3>
          <p>Customer Rating</p>
        </div>
      </div>
    </div>
  )
}
