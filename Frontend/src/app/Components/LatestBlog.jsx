"use client"
import axios from 'axios';
import React, { useState ,useEffect} from 'react';
import { baseurl, imgurl } from './common/app';

export default function LatestBlog() {


  const [allBlog,setAllblog]=useState()

  const fetchetblog= async()=>{
    const response = await axios.get(`${baseurl}/randomblog`)
    setAllblog(response.data)
  }
  
  useEffect(()=>{
  fetchetblog()
  },[])


  

  return (
    <div className="latestBlogs relative lg:mt-20 bg-[#997c64] text-white">
      <div className="relative z-10 px-5 md:px-12 xl:px-32 py-5 md:py-10">
        <div className="text-center w-full lg:w-[70%] mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl italic font-bold">
            Our Latest Blogs
          </h2>
          <p className="text-base md:text-lg mt-2">
            Stay updated with our latest insights, tips, and stories about the world of dairy, healthy living, and more. Our blogs bring you informative and engaging content directly from experts.
          </p>
        </div>

        <div className="mt-5 md:mt-12 grid grid-cols-1 md:grid-cols-2 gap-y-8 md:gap-8 lg:gap-5 lg:grid-cols-3 relative">
          {allBlog?.map((elm, index) => (
            <div key={index} className="relative h-[400px] bg-white rounded-lg overflow-hidden shadow-lg transform transition-all hover:scale-105 duration-300">
              <img
                src={`${imgurl}/${elm.thumbnail}`}
                alt="blog"
                className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-110"
              />
              <div className="absolute bottom-0 p-6 bg-gradient-to-t from-black to-transparent w-full text-white">
                <p className="text-sm mb-2">{elm.date}</p>
                <h4 className="font-bold text-xl md:text-2xl">{elm.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Background image */}
      <img src="/images/blogs/bg.webp" alt="" className="absolute right-0 bottom-0  object-cover opacity-30" />
    </div>
  );
}
