import React from 'react';
import Link from 'next/link';
export default function PhoneFixCall() {
  return (
    <div className="fixed right-0 bottom-16 z-[5555] flex flex-col  gap-y-8 items-end lg:hidden">
        <Link href="tel:+918378000052" className=' flex justify-end'>

        
      <img 
        src="/images/phonefixIcons/telephone.png" 
        alt="Phone" 
        className="phone-icon phone-telephone w-[50px]" 
      />
      </Link>
      <Link href="tel:+918378000052" className=' flex justify-end'>

      <img 
        src="/images/phonefixIcons/whatsapp.png" 
        alt="WhatsApp" 
        className="phone-icon phone-whatsapp w-[50px]" 
      />
      </Link>
    </div>
  );
}
