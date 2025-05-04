'use client'


import axios from "axios";
import { useEffect, useState } from "react";
import { baseurl, imgurl } from "../Components/common/app";

const blogs = [
  { id: 1, title: "Next.js & Tailwind CSS Guide", desc: "Learn how to style Next.js apps with Tailwind CSS.", image: "https://placehold.co/400" },
  { id: 2, title: "Understanding Server Components", desc: "Deep dive into Next.js server components.", image: "https://placehold.co/400" },
  { id: 3, title: "Optimizing Performance in Next.js", desc: "Boost your app speed with these tips.", image: "https://placehold.co/400" },
  { id: 4, title: "SEO Strategies for Next.js", desc: "Improve search rankings with Next.js.", image: "https://placehold.co/400" },
  { id: 5, title: "Deploying Next.js Apps", desc: "Best practices for deployment.", image: "https://placehold.co/400" },


  { id: 6, title: "Next.js & Tailwind CSS Guide", desc: "Learn how to style Next.js apps with Tailwind CSS.", image: "https://placehold.co/400" },
  { id: 7, title: "Understanding Server Components", desc: "Deep dive into Next.js server components.", image: "https://placehold.co/400" },
  { id: 8, title: "Optimizing Performance in Next.js", desc: "Boost your app speed with these tips.", image: "https://placehold.co/400" },
  { id: 9, title: "SEO Strategies for Next.js", desc: "Improve search rankings with Next.js.", image: "https://placehold.co/400" },
  { id: 10, title: "Deploying Next.js Apps", desc: "Best practices for deployment.", image: "https://placehold.co/400" },

  { id: 11, title: "Next.js & Tailwind CSS Guide", desc: "Learn how to style Next.js apps with Tailwind CSS.", image: "https://placehold.co/400" },
  { id: 12, title: "Understanding Server Components", desc: "Deep dive into Next.js server components.", image: "https://placehold.co/400" },
  { id: 13, title: "Optimizing Performance in Next.js", desc: "Boost your app speed with these tips.", image: "https://placehold.co/400" },
  { id: 14, title: "SEO Strategies for Next.js", desc: "Improve search rankings with Next.js.", image: "https://placehold.co/400" },
  { id: 15, title: "Deploying Next.js Apps", desc: "Best practices for deployment.", image: "https://placehold.co/400" },
];

const BlogSection = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 8;

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  const totalPages = Math.ceil(blogs.length / blogsPerPage);
const [allBlog,setAllblog]=useState()

const fetchetblog= async()=>{
  const response = await axios.get(`${baseurl}/allblog`)
  setAllblog(response.data)
}

useEffect(()=>{
fetchetblog()
},[])
console.log(allBlog)
  return (
     <>


     
    <div
    className="relative w-full h-[250px] lg:h-[350px] bg-cover bg-center"
    style={{ backgroundImage: "url('/images/aboutus.webp')" }}
  >

    <div className="absolute inset-0 bg-black bg-opacity-50"></div>


    <div className="absolute inset-0 flex items-center justify-center">
      <h2 className="text-white text-3xl md:text-5xl font-bold">Latest Blogs</h2>
    </div>
  </div>


<div className="p-6 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
        {allBlog?.map((blog) => (
          <div key={blog.id} className="bg-white shadow-lg w-auto h-auto rounded-lg overflow-hidden">
            <img src={`${imgurl}/${blog?.thumbnail}`} alt={blog.title} className="w-full object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{blog?.title}</h3>
              <p className="text-gray-600 mt-2">{blog?.content}</p>
            </div>
          </div>
        ))}
      </div>

      {/* <div className="flex justify-center mt-6">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            className={`px-4 py-2 mx-1 rounded-md ${
              currentPage === index + 1 ? "bg-blue-600 text-white" : "bg-gray-200"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div> */}
    </div>
     
     </>
  );
};

export default BlogSection;
