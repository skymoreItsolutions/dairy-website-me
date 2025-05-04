
'use client'
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const BlogCard = ({ post }) => {
  return (
    <div className="transform hover:scale-102 transition-all duration-300 bg-white rounded-xl shadow-lg hover:shadow-xl overflow-hidden">
      <img
        src={post.imageUrl}
        alt={post.title}
        className="w-full h-48 object-cover rounded-t-xl"
        loading="lazy"
      />
      <div className="p-6 bg-[#8B4513] bg-opacity-5">
        <h2 className="text-xl font-bold text-[#3E2723] hover:text-[#2E1C1A] mb-3">
          {post.title}
        </h2>
        <p className="text-base font-medium text-[#5D4037] line-clamp-2 mb-4">
          {post.description}
        </p>
        <button
          aria-label="Read more"
          className="flex items-center gap-2 px-4 py-2 bg-[#A0522D] text-white rounded-md hover:bg-[#8B4513] transform hover:scale-105 transition-all duration-300"
        >
          Read More <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

const BlogCardGrid = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Art of Coffee Brewing",
      description: "Discover the secrets behind brewing the perfect cup of coffee, from bean selection to pour-over techniques.",
      imageUrl: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085",
      readMoreLink: "#"
    },
    {
      id: 2,
      title: "Cozy Home Decor Ideas",
      description: "Transform your living space into a warm and inviting sanctuary with these rustic decor tips.",
      imageUrl: "https://images.unsplash.com/photo-1513694203232-719a280e022f",
      readMoreLink: "#"
    },
    {
      id: 3,
      title: "Artisanal Chocolate Making",
      description: "Learn the craft of creating handmade chocolates using traditional methods and premium ingredients.",
      imageUrl: "https://images.unsplash.com/photo-1481391319762-47dff72954d9",
      readMoreLink: "#"
    }
  ];

  return (
    <div className="container mx-auto  px-10 lg:px-28 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default BlogCardGrid;