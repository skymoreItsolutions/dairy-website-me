"use client";
import { useState, useEffect } from "react";
import { FiHeart, FiShoppingCart } from "react-icons/fi";
import ProductCard from "../Components/ProductCard";

export default function page() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("popularity");
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cart, setCart] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showCart, setShowCart] = useState(false);

  const categories = [
    {
      id: "all",
      name: "All Products",
      image: "https://images.unsplash.com/photo-1550583724-b2692b85b150",
    },
    {
      id: "milk",
      name: "Milk",
      image: "https://images.unsplash.com/photo-1628088062854-d1870b4553da",
    },
    {
      id: "ghee",
      name: "Ghee",
      image: "https://images.unsplash.com/photo-1631149750107-3c3ecc2b0333",
    },
    {
      id: "paneer",
      name: "Paneer",
      image: "https://images.unsplash.com/photo-1631151223524-c8535bf95b91",
    },
    {
      id: "honey",
      name: "Honey",
      image: "https://images.unsplash.com/photo-1579301153922-6ec13e8e13b6",
    },
    {
      id: "other",
      name: "Other Dairy",
      image: "https://images.unsplash.com/photo-1553787499-6f5f32b05732",
    },
  ];

  const healthyProducts = [
    {
      // img: "https://crm.swadeshivip.com/public/storage/product-variant/1727955027product-4020241003170027.webp",
      img: "/images/banner/Gaualla3.webp",
      title: "Fresh Milk",
      quantity: "1L",
      description: "Pure and organic farm-fresh milk for a healthy start.",
      price: "₹50",
      rating: 4.55,
    },
    {
      img: "/images/banner/Gaualla4.webp",
      title: "Organic Cheese",
      quantity: "250g",
      description: "Rich and creamy cheese, made from pure cow milk.",
      price: "₹120",
      rating: 5.55,

    },
    {
      img: "/images/banner/Gaualla4.webp",
      title: "Natural Yogurt",
      quantity: "500g",
      description: "Delicious probiotic-rich yogurt for gut health.",
      price: "₹80",
      rating: 5.55,

    },
    {
      img: "/images/banner/Gaualla4.webp",
      title: "Pure Butter",
      quantity: "200g",
      description: "Homemade-style butter, rich in flavor and nutrition.",
      price: "₹150",
      rating: 5.55,

    },
    {
      // img: "https://crm.swadeshivip.com/public/storage/product-variant/1727955027product-4020241003170027.webp",
      img: "/images/banner/Gaualla4.webp",

      title: "Fresh Paneer",
      quantity: "500g",
      description: "Soft and fresh paneer, perfect for your favorite dishes.",
      price: "₹200",
      rating: 5.55,

    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % categories.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [categories.length]);

  const filteredProducts = healthyProducts.filter((product) =>
    selectedCategory === "all" ? true : product.category === selectedCategory
  );

  const sortProducts = (products) => {
    switch (sortBy) {
      case "price-low":
        return [...products].sort((a, b) => a.price - b.price);
      case "price-high":
        return [...products].sort((a, b) => b.price - b.price);
      case "newest":
        return [...products].sort((a, b) =>
          a.isNew === b.isNew ? 0 : a.isNew ? -1 : 1
        );
      default:
        return products;
    }
  };

  const sortedProducts = sortProducts(filteredProducts);

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  const QuickViewModal = ({ product, onClose }) => {
    if (!product) return null;
    return (
      <div className="px-5 lg:px-28 fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white p-6 rounded-lg max-w-2xl w-full mx-4 transform transition-all scale-95 hover:scale-100">
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-2xl font-semibold">{product.name}</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              ×
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-64 object-cover rounded-lg"
            />
            <div>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <p className="text-2xl font-semibold mb-4">
                ₹{product.price}{" "}
                <span className="text-sm line-through text-gray-500">
                  ₹{product.originalPrice}
                </span>
              </p>
              <button
                onClick={() => addToCart(product)}
                className="bg-[#8B4513] text-white px-6 py-2 rounded-lg hover:bg-[#D2B48C] transition duration-300"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const CartPage = () => (
    <div className=" px-5 lg:px-28 fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg max-w-2xl w-full mx-4">
        <div className="flex justify-between mb-4">
          <h2 className="text-2xl font-semibold">Your Cart ({cart.length})</h2>
          <button
            onClick={() => setShowCart(false)}
            className="text-gray-500 hover:text-gray-700"
          >
            ×
          </button>
        </div>
        {cart.length === 0 ? (
          <p className="text-gray-600">Your cart is empty</p>
        ) : (
          <div>
            {cart.map((item, index) => (
              <div
                key={index}
                className="flex justify-between items-center mb-4 border-b pb-2"
              >
                <div>
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-gray-600">₹{item.price}</p>
                </div>
                <button
                  className="text-red-500"
                  onClick={() => setCart(cart.filter((_, i) => i !== index))}
                >
                  Remove
                </button>
              </div>
            ))}
            <p className="text-xl font-semibold">
              Total: ₹{cart.reduce((sum, item) => sum + item.price, 0)}
            </p>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white">

      <div
        className="relative w-full h-[250px] lg:h-[350px] bg-cover bg-center"
        style={{ backgroundImage: "url('/images/aboutus.webp')" }}
      >

        <div className="absolute inset-0 bg-black bg-opacity-50"></div>


        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-white text-3xl md:text-5xl font-bold">Product</h2>
        </div>
      </div>





      <div className="container mx-auto py-8 px-5 lg:px-28  ">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-xl lg:text-2xl font-semibold text-[#8B4513]">
            {categories.find((cat) => cat.id === selectedCategory)?.name}
          </h2>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-white border border-[#D2B48C] rounded-lg px-4 py-2 text-[#8B4513]"
          >
            <option value="popularity">Popularity</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="newest">Newest Arrivals</option>
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {
            healthyProducts.map((data, ind) => {
              return (<>

                <ProductCard product={data} />

              </>)
            })
          }
        </div>
      </div>

      {isQuickViewOpen && (
        <QuickViewModal
          product={selectedProduct}
          onClose={() => {
            setIsQuickViewOpen(false);
            setSelectedProduct(null);
          }}
        />
      )}
      {showCart && <CartPage />}
    </div>
  );
}
