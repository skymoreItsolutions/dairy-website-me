import React from 'react'

export default function WhyCoose() {
    const whyChoose=[
        {
          "image": "https://swadeshivip.com/assets/img/why_chooseus1.png",
          "alt": "why_chooseus1",
          "heading": "Sattvic Cow Milk",
          "description": "Since we follow good hygiene practices, maintain cleanliness at our Gaushala & don't hurt or harm our cows, you will get Sattvic (pure) cow milk."
        },
        {
            "image": "https://swadeshivip.com/assets/img/why_chooseus1.png",
            "alt": "why_chooseus2",
          "heading": "Well-equipped Shed",
          "description": "Our cows are kept in a well-equipped shed, and they receive heaps of love from us, and they return back their love."
        },
        {
            "image": "https://swadeshivip.com/assets/img/why_chooseus1.png",
            "alt": "why_chooseus3",
          "heading": "Organic & Hygienic",
          "description": "Natural milk processing methods retain the hygiene factor, and we say no to chemicals and urea."
        },
        {
            "image": "https://swadeshivip.com/assets/img/why_chooseus1.png",
            "alt": "why_chooseus4",
          "heading": "Regular Quality Testing of Milk",
          "description": "Conduct 90+ quality tests on different parameters to examine the standard of quality at different phases, from milking to packaging."
        },
        {
            "image": "https://swadeshivip.com/assets/img/why_chooseus1.png",
            "alt": "why_chooseus6",
          "heading": "Efficient Packaging & Transportation",
          "description": "Maintain high standards to ensure eco-friendly packaging, safe storage, and convenient transportation."
        },
        {
            "image": "https://swadeshivip.com/assets/img/why_chooseus1.png",
            "alt": "why_chooseus6",
          "heading": "Smooth Daily Order Management",
          "description": "Get your daily orders managed through a user-friendly mobile app."
        }
      ]
  return (
    <div className="Whychoose">
      <div className="px-5 md:px-12 xl:px-32  py-5 md:py-10 lg:py-16">
        <div className="text-center w-full lg:w-[70%] mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl italic  font-bold ">
          Why Choose Gaualla
          </h2>
          <p className="text-base md:text-lg mt-2 ">
          Our carefully nurtured native Indian cows produce pure, uncontaminated milk in a premium, hygienic environment."
          </p>
        </div>
        <div className="mt-5 md:mt-12  grid grid-cols-1  md:grid-cols-2  gap-y-8 md:gap-6 lg:gap-x-6 lg:gap-y-8 lg:grid-cols-3 relative">

            {
                whyChoose.map((elm,index)=>(
                    <div key={index} className="text-center md:text-center rounded-xl  shadow border border-[#7BB471] p-5">
          <img src={elm.image} alt={elm.alt} className=" rounded-lg mb-4 mx-auto" />
          <h4 className="text-xl font-serif font-bold text-gray-800 mb-2">{elm.heading}</h4>
          <p className="text-gray-800 text-base">{elm.description}</p>
        </div>

                ))
            }

        </div>
      </div>
    </div>
  )
}
