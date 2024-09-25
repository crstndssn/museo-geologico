"use client";

import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Slider from '../components/Slider'
import MetalPrices from '@/components/MetalPrices';
import BottomSection from '@/components/BottomSection';


import Image from "next/image";
import { useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, FreeMode } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';


export default function Home() {
  const sliderImages = [
    'slider/1.jpg',
    'slider/2.jpg',
    'slider/3.jpg',
    'slider/4.jpg',
    'slider/5.jpg',
    'slider/6.jpg',
    'slider/7.jpg',
  ];

  return (
    <>
      <Nav />
      <Slider images={sliderImages} />
      <MetalPrices/>
      <BottomSection />
      <Footer/>
    </>
  );
}
