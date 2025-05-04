import React from 'react'

export default function Offers() {
    const dailyOffer = [
        {
            // img: "https://pravarshaindustries.com/storage/banners/eWUe5RHroGituig0ey2jDcLylkzE0cg978StbeBA.png"
            img:"/images/banner/Gaualla11.webp"
        },
        {
            // img: "https://pravarshaindustries.com/storage/banners/YaCudRvbfJgObTfYpvTHKTzsa9fan1za46HBfGOx.png"
                   img:"/images/banner/Gaualla10.webp"

        },
        {
            // img: "https://pravarshaindustries.com/storage/banners/IxVUJKpmEkLStKoEjXEgUuEsZet2rC6yJFRgt702.png" // Removed extra "g"
            img:"/images/banner/Gaualla11.webp"

        }
    ];
  
    return (
        <div className="px-5 md:px-12 xl:px-32 py-5 md:py-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">    
                {dailyOffer.map((elm, index) => (
                    <div key={index} className="overflow-hidden rounded-lg shadow-lg">
                        <img 
                            src={elm.img} 
                            alt="offers" 
                            className="w-full h-auto object-cover"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
