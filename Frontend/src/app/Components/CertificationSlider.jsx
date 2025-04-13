

import React,{useState,useEffect} from 'react'


export const CertificationSlider = (props) => {

    const images = [
        "https://placehold.co/400",
        "https://placehold.co/400",
        "https://placehold.co/400",
        "https://placehold.co/400",
        "https://placehold.co/400",
        "https://placehold.co/200",
        "https://placehold.co/200",
        "https://placehold.co/200",
        "https://placehold.co/200",
        "https://placehold.co/300",
        "https://placehold.co/300",
        "https://placehold.co/200",
    
      ];

    const [current, setCurrent] = useState(0);
    const visibleCount = 6;
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrent((prev) => (prev + visibleCount) % images.length);
      }, 1000);
      return () => clearInterval(interval);
    }, []);
  
    // Handle wrap-around slicing
    const getVisibleImages = () => {
      if (current + visibleCount <= images.length) {
        return images.slice(current, current + visibleCount);
      } else {
        return [
          ...images.slice(current),
          ...images.slice(0, (current + visibleCount) % images.length),
        ];
      }
    };


  return(
   <>
  <div className="w-full bg-white py-10">
      <h2 className="text-center text-3xl font-bold mb-8">Our Certifications</h2>
      <div className="flex justify-center gap-5">
        {getVisibleImages().map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`cert-${index}`}
            className="w-[150px] h-[150px] object-cover rounded-full shadow-md transition duration-500"
          />
        ))}
      </div>
    </div>
   </>
   )
  }
