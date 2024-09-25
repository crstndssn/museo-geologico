// components/Slider.js
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode, Pagination } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/pagination';

const Slider = ({ images }) => {
  return (
    <Swiper
      slidesPerView={1.5}
      spaceBetween={10}
      freeMode={true}
      pagination={{
        clickable: true,
        renderBullet: (index, className) => (
          `<span class="${className} custom-pagination-bullet"></span>`
        ),
      }}
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      breakpoints={{
        576: {
          slidesPerView: 1.5,
        },
      }}
      modules={[Autoplay, FreeMode, Pagination]}
      className="mySwiper"
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <Image
            unoptimized
            src={image}
            alt={`Slider Image ${index + 1}`}
            className="w-full"
            width={1000}
            height={1000}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
