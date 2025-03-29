import React from 'react'

export default function LatestBlog() {
    const blogData = [
        {
          img: "https://el.commonsupport.com/newwp/hankcok/wp-content/uploads/2020/07/news-1.jpg",
          date: "March 29, 2025",
          heading: "Exploring the Benefits of Organic Dairy Products"
        },
        {
          img: "https://el.commonsupport.com/newwp/hankcok/wp-content/uploads/2020/07/news-1.jpg",
          date: "March 28, 2025",
          heading: "How Sattvic Cow Milk Enhances Your Health"
        },
        {
          img: "https://el.commonsupport.com/newwp/hankcok/wp-content/uploads/2020/07/news-1.jpg",
          date: "March 27, 2025",
          heading: "The Importance of Sustainable Dairy Farming Practices"
        },
      ];
      
  return (
    <div className="latestBlogs relative lg:mt-20 bg-[#997c64] text-white ">
    <div className="relative z-10 px-5 md:px-12 xl:px-32  py-5 md:py-10  ">
    <div className="text-center w-full lg:w-[70%] mx-auto">
    <h2 className="text-2xl md:text-3xl lg:text-4xl italic font-bold">
      Our Latest Blogs
    </h2>
    <p className="text-base md:text-lg mt-2">
      Stay updated with our latest insights, tips, and stories about the world of dairy, healthy living, and more. Our blogs bring you informative and engaging content directly from experts,
    </p>
</div>

      <div className="mt-5 md:mt-12   grid grid-cols-1 md:grid-cols-2 gap-y-8 md:gap-8 lg:gap-5 lg:grid-cols-3 relative">

            {blogData.map((elm,index)=>(
                <div key={index} className='relative h-[400px] '>
                        <img src={elm.img} alt="blogs"  className='w-full h-full'/>
                        <div className='absolute bottom-0  p-4'>
                            <p>{elm.date}</p>
                            <h4 className='font-bold text-xl md:text-2xl'>{elm.heading}</h4>
                        </div>
                </div>
            ))}

            


      </div>


    </div>
    <img src="https://el.commonsupport.com/newwp/hankcok/wp-content/uploads/2020/07/sketch-3.jpg" alt="" className='absolute right-0 bottom-0'   />
  </div>
  )
}
