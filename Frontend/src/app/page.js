"use client";
import React, { useEffect, useState } from "react";
import PopupForm from "./Components/PopUpForm";
import Herotop from "./Components/HeroTop";
import "./globals.css";
import BlogSection from "./Components/BlogSection";
import Contribution from "./Components/Contibution";

import LatestNews from "./Components/LatestsNews";
import SliderImage from "./Components/Hero";
import BenefitsSection from "./Components/BenefitsSection";
import PopularCategories from "./Components/PopularCategories";
import { BannerSection } from "./Components/BannerSection";
import BlogCardGrid from "./Components/BlogCardGrid";
import HeroSection from "./Components/HeroSection";
import FarmFreshProducts from "./Components/FarmFreshProducts";
import Offers from "./Components/Offers";
import MainHeroSection from "./Components/MainHeroSection";

const page = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPopupOpen(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <>
      {/* <div>
        <PopupForm isOpen={isPopupOpen} closePopup={closePopup} />
      </div> */}
        
        {/* <BannerSection/> */}
        <MainHeroSection/>
        <HeroSection/>
        <FarmFreshProducts/>
        <Offers/>
      {/* <BenefitsSection />
      <PopularCategories />
      <Herotop />
      <BlogSection />
      <Contribution /> */}


      {/* not */}
      {/* <LatestNews /> */} 
      {/* <BlogCardGrid/> */}
    </>
  );
};

export default page;
