import ProductDetail from '@/app/Components/ProductDetail'
import React from 'react'
const healthyProducts = [
  {
    img:"/images/banner/Gaualla3.webp",
    imgList:["/images/banner/Gaualla3.webp","/images/banner/Gaualla3.webp","/images/banner/Gaualla3.webp"],
    title: "Fresh Milk",
    quantity: "1L",
    description: "Pure and organic farm-fresh milk for a healthy start.",
    price: "₹50",
    rating: 4.55,
  },
  {
    img:"/images/banner/Gaualla3.webp",
    imgList:["/images/banner/Gaualla3.webp","/images/banner/Gaualla3.webp","/images/banner/Gaualla3.webp"],

    title: "Organic Cheese",
    quantity: "250g",
    description: "Rich and creamy cheese, made from pure cow milk.",
    price: "₹120",
    rating: 5.55,
  },
  {
    img:"/images/banner/Gaualla3.webp",
    imgList:["/images/banner/Gaualla3.webp","/images/banner/Gaualla3.webp","/images/banner/Gaualla3.webp"],

    title: "Natural Yogurt",
    quantity: "500g",
    description: "Delicious probiotic-rich yogurt for gut health.",
    price: "₹80",
    rating: 5.55,
  },
  {
    img:"/images/banner/Gaualla3.webp",
    imgList:["/images/banner/Gaualla3.webp","/images/banner/Gaualla3.webp","/images/banner/Gaualla3.webp"],

    title: "Pure Butter",
    quantity: "200g",
    description: "Homemade-style butter, rich in flavor and nutrition.",
    price: "₹150",
    rating: 5.55,
  },
  {
    img:"/images/banner/Gaualla3.webp",
    imgList:["/images/banner/Gaualla3.webp","/images/banner/Gaualla3.webp","/images/banner/Gaualla3.webp"],

    title: "Fresh Paneer",
    quantity: "500g",
    description: "Soft and fresh paneer, perfect for your favorite dishes.",
    price: "₹200",
    rating: 5.55,
  },
];






export async function generateStaticParams() {
  return healthyProducts.map((item) => ({
    slug: item.title.split(" ").join("-").toLowerCase(), 
  }));
}



export default function page({params:{slug}}) {

  const slugProduct=healthyProducts.find((elm)=>elm.title.split(" ").join("-").toLowerCase()==slug)

  console.log(slugProduct,"slugprd")

  return (
    <div>
      <ProductDetail product={slugProduct} />
    </div>
  )
}
