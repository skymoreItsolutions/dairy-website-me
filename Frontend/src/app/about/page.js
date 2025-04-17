
'use client'
import Image from 'next/image';
import OurObjective from '../Components/OurObjective';

const AboutUs = () => {
  const products = [

    { name: "A2 Ghee", img: "/images/cowmilk.jpeg", desc: "Pure A2 ghee made from desi cow milk, rich in nutrients and essential fatty acids." },
    { name: "A2 Binola Ghee", img: "/images/ghee1.png", desc: "Premium A2 binola ghee, enhancing taste and promoting better digestion and overall health." },
    { name: "A2 Desi Cow Milk", img: "/images/bufalomilk.jpeg", desc: "Fresh organic A2 desi cow milk, rich in calcium and essential vitamins for strong bones." },
    { name: "Standard Milk", img: "/images/cowmilk.jpeg", desc: "Nutritious, high-quality standard milk, ensuring essential protein and energy for daily consumption." },
    { name: "A2 Paneer", img: "/images/a2-paneer.png", desc: "Soft, fresh A2 paneer, packed with protein and made from pure, organic A2 milk." },
    { name: "Natural Raw Honey", img: "/images/honey-1.png", desc: "Pure, unprocessed natural raw honey, rich in antioxidants and natural enzymes for better health." },


  ]
  return (


    <div>

      <div
        className="relative w-full h-[250px] lg:h-[350px] bg-cover bg-center"
        style={{ backgroundImage: "url('/images/aboutus.webp')" }}
      >

        <div className="absolute inset-0 bg-black bg-opacity-50"></div>


        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-white text-3xl md:text-5xl font-bold">About Us</h2>
        </div>
      </div>

      <div className="w-full mt-5 gap-3 grid grid-cols-1 md:grid-cols-2 px-5 md:px-12 xl:px-32 p-5">
        {/* Image Section */}
        <div className="w-full h-[400px] md:h-[650px] relative p-5   flex items-center justify-center">
          <img className="w-full h-[400px] object-cover rounded-lg shadow-lg" src="/images/about_img.png" alt="About Gaualla Milk" />
        </div>

        {/* Text Content */}
        <div className="w-full h-auto md:h-[650px] flex flex-col justify-center  lg:p-5 text-[#777]">
          <h2 className="text-2xl text-center lg:text-left  md:text-4xl text-black font-bold my-4">
            Welcome to Gaualla Milk
          </h2>

          <p className="text-base md:text-lg leading-relaxed">
            At <span className="font-semibold">Gaualla Milk</span>, we are committed to bringing you the purest and most nutritious A2-certified Desi Cow milk straight from our ethically raised indigenous cows. Our mission is to promote a healthier lifestyle by providing antibiotic-free, chemical-free, and adulteration-free dairy products.
          </p>

          <p className="text-base md:text-lg leading-relaxed mt-4">
            Our cows are nurtured with natural green fodder and wholesome diets, ensuring they produce milk that is rich in nutrients and full of goodness. We take pride in maintaining the traditional dairy farming culture, where purity and freshness are our top priorities.
          </p>

          <p className="text-base md:text-lg leading-relaxed mt-4">
            At Gaualla Milk, we believe in sustainable farming. We enrich our soil using desi cow manure and use holy cow urine for natural pest control, ensuring that our dairy products remain 100% organic, fresh, and free from harmful chemicals.
          </p>

         
        </div>
      </div>







      <div className="w-full mt-10 py-16 px-5 md:px-12 xl:px-32 bg-green-50">
        <div className=" grid grid-cols-1 md:grid-cols-2 items-center gap-10">


          <div className="relative w-full h-[400px] overflow-hidden rounded-lg shadow-lg">
            <img
              src="/images/mission.png"
              alt="Our Mission"
              layout="fill"
              objectFit="cover"
              className="hover:scale-105 transition-transform duration-500"
            />
          </div>


          <div className="text-gray-800">
            <h2 className="text-4xl font-bold mb-4">Our Mission</h2>
            <p className="text-lg leading-relaxed">
              At <span className="font-semibold">Gaualla Milk</span>, our mission is to deliver pure, organic, and A2-certified Desi Cow milk straight from our farms to your home.
              We aim to promote sustainable and ethical dairy farming while preserving our traditional Vedic farming methods.
            </p>
            <p className="text-lg leading-relaxed mt-4">
              Through responsible farming practices and eco-friendly solutions, we ensure that our cows are nurtured with 100% natural fodder and ethical care, providing
              you with the freshest and healthiest milk.
            </p>
          </div>

        </div>
      </div>

      <div className="w-full py-16  px-5 md:px-12 xl:px-32 bg-blue-50">
        <div className=" grid grid-cols-1 md:grid-cols-2 items-center gap-10">


          <div className="text-gray-800">
            <h2 className="text-4xl font-bold mb-4">Our Vision</h2>
            <p className="text-lg leading-relaxed">
              Our vision at <span className="font-semibold">Gaualla Milk</span> is to revive the purity of Desi Cow dairy farming and bring back the ancient, unadulterated taste of milk.
              We believe in sustainable living, protecting indigenous cow breeds, and promoting organic dairy consumption as a way of life.
            </p>
            <p className="text-lg leading-relaxed mt-4">
              By integrating modern technology with traditional farming methods, we strive to create a world where health, sustainability, and ethical dairy farming go hand in hand.
            </p>
          </div>


          <div className="relative w-full h-[400px] overflow-hidden rounded-lg shadow-lg">
            <img
              src="/images/mission.png"
              alt="Our Vision"
              layout="fill"
              objectFit="cover"
              className="hover:scale-105 transition-transform duration-500"
            />
          </div>

        </div>
      </div>

      <OurObjective/>









    </div>




  );
};

export default AboutUs;