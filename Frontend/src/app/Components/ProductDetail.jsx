"use client";

import React, { useState } from "react";
import { IoMdCart } from "react-icons/io";
import { FaPlus, FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { IoArrowBack } from "react-icons/io5";
import { IoArrowForward } from "react-icons/io5";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaMinus } from "react-icons/fa6";
import { FiHeart, FiShare2, FiMinus, FiPlus } from "react-icons/fi";
import { AiFillStar } from "react-icons/ai";
import Link from "next/link";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import ProductCard from "./ProductCard";
import { imgurl } from "./common/app";

export default function ProductDetail({product}) {

  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const [selectedPackaging, setSelectedPackaging] = useState("Tetra Pack");

  const [selectedVolume, setSelectedVolume] = useState("1L");


  // const product = {
  //   name: "Farm Fresh Organic Whole Milk",
  //   price: 4.99,
  //   description: "Experience the rich, creamy taste of our premium organic whole milk. Sourced from grass-fed cows on local farms, this milk is packed with essential nutrients including calcium, vitamin D, and protein. Our careful pasteurization process ensures safety while maintaining the natural, farm-fresh taste.",
  //   packaging: ["Tetra Pack", "Glass Bottle", "Plastic Bottle", "Eco-Pack"],
  //   volumes: ["500ml", "1L", "2L", "4L"],
  //   images: [
  //     "https://images.unsplash.com/photo-1563636619-e9143da7973b",
  //     "https://images.unsplash.com/photo-1550583724-b2692b85b150",
  //     "https://images.unsplash.com/photo-1621478374422-35206faeddfb",
  //     "https://images.unsplash.com/photo-1628088062854-d1870b4553da"
  //   ],
  //   specifications: [
  //     { label: "Fat Content", value: "3.25%" },
  //     { label: "Source", value: "Grass-fed Cows" },
  //     { label: "Pasteurization", value: "HTST Process" },
  //     { label: "Shelf Life", value: "14 days" },
  //     { label: "Storage", value: "2-4°C" },
  //     { label: "Certification", value: "Organic" }
  //   ],
  //   nutritionalInfo: [
  //     { label: "Calories", value: "150 per 240ml" },
  //     { label: "Protein", value: "8g" },
  //     { label: "Calcium", value: "30% DV" },
  //     { label: "Vitamin D", value: "25% DV" }
  //   ],
  //   reviews: [
  //     {
  //       id: 1,
  //       user: "Maria L.",
  //       rating: 5,
  //       comment: "The freshest milk I've ever tasted! Love that it's from local farms."
  //     },
  //     {
  //       id: 2,
  //       user: "Robert K.",
  //       rating: 4,
  //       comment: "Great quality milk, my kids love it. The glass bottle option is eco-friendly."
  //     }
  //   ]
  // };

  // No changes made to this section
  const handleQuantityChange = (type) => {
    if (type === "increment") {
      setQuantity(prev => prev + 1);
    } else if (type === "decrement" && quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  return (
    <div className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-cream-50">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* No changes made to Image Gallery section */}
        <div className="space-y-4">
          <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-white shadow-lg">
            <img
              src={`${imgurl}/${product.images}`}
              alt={product.name}
              className="h-full w-full object-cover object-center hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
            
          </div>
        </div>

        {/* Updated: Modified Product Information section for dairy */}
        <div className="space-y-6 bg-white p-6 rounded-lg shadow-sm">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 capitalize ">{product.name}</h1>
            <div className="flex items-center mt-2">
              <span className="text-2xl text-gray-900">₹{product.price}</span>
              <span className="ml-2 text-gray-600">per unit</span>
            </div>
          </div>

          <div className="prose prose-sm">
            <p className="text-gray-700 leading-relaxed">
            Experience the rich, creamy taste of our premium organic whole milk. Sourced from grass-fed cows on local farms, this milk is packed with essential nutrients including calcium, vitamin D, and protein. Our careful pasteurization process ensures safety while maintaining the natural, farm-fresh taste.
            </p>
          </div>

          <div className="prose prose-sm">
            <p className="text-gray-700 leading-relaxed">
            Experience the rich, creamy taste of our premium organic whole milk. Sourced from grass-fed cows on local farms, this milk is packed with essential nutrients including calcium, vitamin D, and protein. Our careful pasteurization process ensures safety while maintaining the natural, farm-fresh taste.
            </p>
          </div>

          <div className="prose prose-sm">
            <p className="text-gray-700 leading-relaxed">
            Experience the rich, creamy taste of our premium organic whole milk. Sourced from grass-fed cows on local farms, this milk is packed with essential nutrients including calcium, vitamin D, and protein. Our careful pasteurization process ensures safety while maintaining the natural, farm-fresh taste.
            </p>
          </div>



          {/* Updated: Changed Color Selection to Packaging Selection */}
          {/* <div>
            <h3 className="text-sm font-medium text-gray-900">Packaging Type</h3>
            <div className="mt-2 flex flex-wrap gap-2">
              {product.packaging.map((pack) => (
                <button
                  key={pack}
                  onClick={() => setSelectedPackaging(pack)}
                  className={`px-4 py-2 rounded-full ${selectedPackaging === pack ? "bg-blue-100 text-blue-800 border-blue-500" : "bg-gray-100 text-gray-800 border-gray-300"} border`}
                >
                  {pack}
                </button>
              ))}
            </div>
          </div> */}

          {/* Updated: Changed Size Selection to Volume Selection */}
          {/* <div>
            <h3 className="text-sm font-medium text-gray-900">Volume</h3>
            <div className="mt-2 flex flex-wrap gap-2">
              {product.volumes.map((volume) => (
                <button
                  key={volume}
                  onClick={() => setSelectedVolume(volume)}
                  className={`px-4 py-2 rounded-full ${selectedVolume === volume ? "bg-blue-100 text-blue-800 border-blue-500" : "bg-gray-100 text-gray-800 border-gray-300"} border`}
                >
                  {volume}
                </button>
              ))}
            </div>
          </div> */}

          {/* Added: Nutritional Information section */}
          {/* <div className="border-t pt-4">
            <h3 className="text-lg font-medium text-gray-900">Nutritional Information</h3>
            <dl className="mt-4 grid grid-cols-2 gap-4">
              {product.nutritionalInfo.map((info) => (
                <div key={info.label} className="bg-gray-50 p-3 rounded-lg">
                  <dt className="text-sm text-gray-600">{info.label}</dt>
                  <dd className="text-lg font-medium text-gray-900">{info.value}</dd>
                </div>
              ))}
            </dl>
          </div> */}

          {/* No changes made to Quantity Selector */}

          {/* Updated: Modified Action Buttons */}
          <div className="flex space-x-4">
            <button className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors">
              Add to Cart
            </button>
            <button className="p-3 border rounded-md hover:bg-gray-50">
              <FiHeart className="h-6 w-6 text-red-500" />
            </button>
            <button className="p-3 border rounded-md hover:bg-gray-50">
              <FiShare2 className="h-6 w-6 text-blue-500" />
            </button>
          </div>

          {/* No changes made to Specifications and Reviews sections */}
        </div>
      </div>
    </div>
  );
 
}
