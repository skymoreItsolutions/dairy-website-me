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
import HealtySection from "./Components/HealtySection";
import HeartSays from "./Components/HeartSays";
import Testmonials from "./Components/Testmonials";
import WhyCoose from "./Components/WhyCoose";
import GalleryInfo from "./Components/GalleryInfo";
import LatestBlog from "./Components/LatestBlog";
import ProductionCounter from "./Components/ProductionCounter";
import GetApp from "./Components/GetApp";
import { CertificationSlider } from "./Components/CertificationSlider";

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

        <MainHeroSection/>
        <HeroSection/>
        <FarmFreshProducts/>
        <Offers/>
        <CertificationSlider/>
        <HealtySection/>
        <HeartSays/>
        <LatestBlog/>
        <Testmonials/>
        <WhyCoose/>
        {/* <GetApp/> */}
        <ProductionCounter/>

      
    </>
  );
};

export default page;
