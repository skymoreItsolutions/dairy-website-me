import React from "react";

export default function HeartSays() {
  const leftCards = [
    {
      img: "https://swadeshivip.com/assets/img/advantage1.png",
      heading: "Antibiotic-free Milk",
      para: "Every glass of purity contains antibiotic-free milk in the natural and original form.",
    },
    {
      img: "https://swadeshivip.com/assets/img/advantage1.png",
      heading: "Antibiotic-free Milk",
      para: "Every glass of purity contains antibiotic-free milk in the natural and original form.",
    },
    {
      img: "https://swadeshivip.com/assets/img/advantage1.png",
      heading: "Antibiotic-free Milk",
      para: "Every glass of purity contains antibiotic-free milk in the natural and original form.",
    },
    {
      img: "https://swadeshivip.com/assets/img/advantage1.png",
      heading: "Antibiotic-free Milk",
      para: "Every glass of purity contains antibiotic-free milk in the natural and original form.",
    },
  ];
  const ReftCards = [
    {
      img: "https://swadeshivip.com/assets/img/advantage1.png",
      heading: "Antibiotic-free Milk",
      para: "Every glass of purity contains antibiotic-free milk in the natural and original form.",
    },
    {
      img: "https://swadeshivip.com/assets/img/advantage1.png",
      heading: "Antibiotic-free Milk",
      para: "Every glass of purity contains antibiotic-free milk in the natural and original form.",
    },
    {
      img: "https://swadeshivip.com/assets/img/advantage1.png",
      heading: "Antibiotic-free Milk",
      para: "Every glass of purity contains antibiotic-free milk in the natural and original form.",
    },
    {
      img: "https://swadeshivip.com/assets/img/advantage1.png",
      heading: "Antibiotic-free Milk",
      para: "Every glass of purity contains antibiotic-free milk in the natural and original form.",
    },
  ];
  return (
    <div className="HeartSays">
      <div className="px-5 md:px-12 xl:px-32  py-5 md:py-10 ">
        <div className="text-center w-full lg:w-[70%] mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl italic  font-bold ">
            Our Heart Says Gaualla
          </h2>
          <p className="text-base md:text-lg mt-2 ">
            Hamara doodh shuddh Bharatiya gaayon se prapt hota hai, jo poshak
            tatvon se bharpoor hai. Yeh prakritik aur tikau kheti paddhatiyon se
            utpaadit hota hai, jo swasthya aur shuddhata ka vaada nibhata hai.
          </p>
        </div>
        <div className="mt-5 md:mt-12  grid grid-cols-1 gap-y-8 lg:gap-y-0 lg:grid-cols-4 relative">
          <div className="lg:col-span-1">
            <div className=" grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-4 lg:grid-cols-1 lg:space-y-4">
              {leftCards.map((card, index) => (
                <div
                  key={index}
                  className="flex  lg:flex-col xl:flex-row items-center gap-4 p-4 rounded-lg shadow-2xl border border-green-500 bg-white"
                >
                  {/* Image Section */}
                  <div className="w-[20%]">
                    <img
                      src={card.img}
                      alt={card.heading}
                      className="w-full h-full object-cover rounded-md"
                    />
                  </div>

                  {/* Content Section */}
                  <div className="flex-1">
                    <h5 className="font-semibold text-lg md:text-xl text-black/90">
                      {card.heading}
                    </h5>
                    <p className="text-black/60 text-sm md:text-sm">
                      {card.para}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-2">
            <div className=" h-full flex items-start lg:items-center xl:items-start">
                <img src="https://crm.swadeshivip.com/storage/images/uploads/image_20241203_115727.png" alt="" className="w-[70%]  md:w-[40%] lg:w-[80%] xl:w-[70%] mx-auto" />
            </div>
          </div>
          <div className="lg:col-span-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-4 lg:grid-cols-1 lg:space-y-4">
              {ReftCards.map((card, index) => (
                <div
                  key={index}
                  className="flex lg:flex-col xl:flex-row items-center gap-4 p-4 rounded-lg shadow-2xl border border-green-500 bg-white"
                >
                  {/* Image Section */}
                  <div className="w-[20%]">
                    <img
                      src={card.img}
                      alt={card.heading}
                      className="w-full h-full object-cover rounded-md"
                    />
                  </div>

                  {/* Content Section */}
                  <div className="flex-1">
                    <h5 className="font-semibold text-lg md:text-xl text-black/90">
                      {card.heading}
                    </h5>
                    <p className="text-black/60 text-sm md:text-sm">
                      {card.para}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

              <img src="https://crm.swadeshivip.com/storage/images/uploads/image_20241203_143029.png" alt=""  className="absolute inset-x-0 -z-20 bottom-0  xl:-bottom-20 h-auto w-full object-cover object-center hidden lg:block" />

                <div className="absolute inset-0 bg-[#f3e9e45e] blur-3xl -z-10">

                </div>
                {/* <div className="absolute inset-0 bg-gradient-to-r from-[#e9c3b18c] to-[#bfedcb36] blur-3xl -z-10"/> */}


        </div>
      </div>
    </div>
  );
}
