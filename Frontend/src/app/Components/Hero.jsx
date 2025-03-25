"use client"
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa";

const SliderImage = () => {
  return (
    <>
      <div
        className="w-full  bg-cover bg-center h-[500px] lg:h-[650px] relative"
        style={{ backgroundImage: "url('/images/image-2.jpg')" }}
      >
        <div className="images-hero relative w-full h-[600px] overflow-hidden">

          <div className="absolute top-[30%] left-0 move-up-down">
            <Image src="/images/cow2.png" width={200} height={200} />
          </div>


          <div className="hidden lg:block absolute top-[20%] right-28 move-up-down-reverse">
            <Image src="/images/milk.png" width={400} height={500} />
          </div>
        </div>
        <div className="hero-content text-white w-[90%] lg:w-1/2 absolute left-[6%] lg:left-[15%] top-[15%] lg:top-[30%]">
          <p className="text-3xl lg:text-6xl font-semibold">We Provide You With All Natural Milk.</p>
          <p className="text-lg font-semibold mt-5">
            Nulla efficitur nulla in enim suscipit, pellentesque aliquam odio efficitur. In in aliquet nulla. Cras eu ex eget neque varius rutrum vitae id lacus. Pellentesque quis.
          </p>
          <div className="hero-buttons flex gap-10 mt-6">
            <Link
              href="/contact-1"
              className="site-button btn-animate-one mr-2 bg-[#61371f] text-white font-bold text-[16px]    leading-[28px] border-0 m-0 px-5 py-3 tracking-wide flex items-center transition-all duration-300 hover:bg-opacity-80"
            >
              Discover More
              <FaAngleRight className="ml-3" />
            </Link>

          </div>
        </div>
      </div>


      <section className="aon-about-area relative">
        <div className="site-top-line"></div>
      </section>
    </>
  );
};

export default SliderImage;
