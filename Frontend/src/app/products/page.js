"use client";
import { useState, useEffect } from "react";
import { FiHeart, FiShoppingCart } from "react-icons/fi";

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

  const products = [
    {
      id: 1,
      name: "A2 Desi Cow Milk",
      category: "milk",
      price: 80,
      originalPrice: 100,
      description: "Pure and fresh A2 milk from indigenous cows",
      image: "/images/cowmilk.jpeg",
      isNew: true,
      isBestOffer: true,
    },
    {
      id: 2,
      name: "A2 Buffalo Milk",
      category: "milk",
      price: 90,
      originalPrice: 110,
      description: "Rich and creamy buffalo milk",
      image: "/images/bufalomilk.jpeg",
      isNew: true,
      isBestOffer: false,
    },
    {
      id: 3,
      name: "Pure Cow Ghee",
      category: "ghee",
      price: 850,
      originalPrice: 1000,
      description: "Traditional hand-churned ghee",
      image: "/images/ghee1.png",
      isNew: false,
      isBestOffer: true,
    },
    {
      id: 4,
      name: "Fresh Paneer",
      category: "paneer",
      price: 320,
      originalPrice: 400,
      description: "Soft and fresh cottage cheese",
      image: "/images/paneer.png",
      isNew: false,
      isBestOffer: false,
    },
    {
      id: 5,
      name: "Wild Honey",
      category: "honey",
      price: 450,
      originalPrice: 500,
      description: "100% natural wild honey",
      image: "/images/honey-1.png",
      isNew: true,
      isBestOffer: true,
    },
    // {
    //   id: 6,
    //   name: "Curd",
    //   category: "other",
    //   price: 60,
    //   originalPrice: 80,
    //   description: "Fresh homemade curd",
    //   image: "https://images.unsplash.com/photo-1553787499-6f5f32b05732",
    //   isNew: false,
    //   isBestOffer: false,
    // },
    // {
    //   id: 7,
    //   name: "Flavored Milk",
    //   category: "milk",
    //   price: 50,
    //   originalPrice: 70,
    //   description: "Delicious flavored milk",
    //   image: "https://images.unsplash.com/photo-1563636626-507789b2530a",
    //   isNew: true,
    //   isBestOffer: false,
    // },
    // {
    //   id: 8,
    //   name: "Organic Ghee",
    //   category: "ghee",
    //   price: 900,
    //   originalPrice: 1100,
    //   description: "Organic hand-churned ghee",
    //   image: "https://images.unsplash.com/photo-1631149750107-3c3ecc2b0333",
    //   isNew: false,
    //   isBestOffer: true,
    // },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % categories.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [categories.length]);

  const filteredProducts = products.filter((product) =>
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
    <div className="px-5 lg:px-28 min-h-screen bg-white">
      {/* <nav className="bg-[#D2B48C] p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-[#8B4513]">
            Dairy Products
          </h1>
          <div className="flex items-center space-x-4">
            <button className="text-[#8B4513]">
              <FiHeart size={24} />
            </button>
            <button
              onClick={() => setShowCart(true)}
              className="text-[#8B4513] relative"
            >
              <FiShoppingCart size={24} />
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {cart.length}
                </span>
              )}
            </button>
          </div>
        </div>
      </nav> */}

      <div className="container mx-auto px-4 py-8">
        {/* Enhanced Category Selector */}
        {/* <div className="mb-8 overflow-x-auto whitespace-nowrap pb-4 flex gap-4">
          {categories.map((category, index) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`relative flex-shrink-0 w-32 h-40 rounded-lg overflow-hidden transition-all duration-300 ${
                selectedCategory === category.id
                  ? "ring-4 ring-[#8B4513] scale-105 shadow-lg"
                  : "opacity-75 hover:opacity-100 hover:scale-102"
              }`}
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                <span className="text-white font-semibold text-lg drop-shadow-lg">
                  {category.name}
                </span>
              </div>
            </button>
          ))}
        </div> */}

        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-semibold text-[#8B4513]">
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
          {sortedProducts.map((product) => (
            <div
              key={product.id}
              className="bg-[#F2F4F7] h-[300px] rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 relative " // Increased height
            >
              <div className="w-full flex items-center justify-center">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-32 "
                />
              </div>

              {product.isNew && (
                <span className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-sm">
                  NEW
                </span>
              )}
              {product.isBestOffer && (
                <span className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 rounded-full text-sm">
                  BEST OFFER
                </span>
              )}
              <div className="p-6 flex flex-col justify-between h-[190px]">
                {" "}
     
                <div>
                  <h3 className="text-lg font-semibold text-[#8B4513] mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {product.description}
                  </p>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <span className="text-xl font-semibold text-[#8B4513]">
                        ₹{product.price}
                      </span>
                      <span className="text-sm line-through text-gray-500 ml-2">
                        ₹{product.originalPrice}
                      </span>
                    </div>
                   
                  </div>
                  <button
                    onClick={() => addToCart(product)}
                    className="w-full bg-[#8B4513] text-white px-4 py-2 rounded-lg hover:bg-[#D2B48C] transition duration-300 flex items-center justify-center gap-2"
                  >
                    <FiShoppingCart /> Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
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
