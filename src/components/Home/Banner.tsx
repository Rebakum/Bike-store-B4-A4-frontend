import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import img1 from "@/assets/images/hero-image/slider1.jpg";
import img2 from "@/assets/images/hero-image/slider2.jpg";
import img3 from "@/assets/images/hero-image/slider3.jpg";
import img4 from "@/assets/images/hero-image/slider4.jpg";

export default function HeroSlider() {
  return (
    <div className="relative w-full h-56 md:h-96 overflow-hidden rounded-lg">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="h-full"
      >
        {[img1, img2, img3, img4, img5].map((img, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              <img
                src={img}
                alt={`Slide ${index + 1}`}
                className="absolute block w-full h-full object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
