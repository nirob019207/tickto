'use client'

import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectCreative } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/effect-creative'
import image1 from '@/assets/light-2515416_1280.jpg';
import image2 from '@/assets/musician-1658887_1280.jpg';
import image3 from '@/assets/concert/Hero1img 1.png'

export default function BannerCard() {
  return (
    <div className="relative mx-auto px-4 py-12">
      <Swiper
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, EffectCreative]}
        slidesPerView={3}
        pagination={true}
        centeredSlides={true}
        effect={'creative'}
        creativeEffect={{
          prev: {
            translate: ['-100%', 0, -200],
            scale: 0.75,
            opacity: 0.5,
          },
          next: {
            translate: ['100%', 0, -200],
            scale: 0.75,
            opacity: 0.5,
          },
        }}
        speed={1000}
        className="banner-swiper"
      >
        <SwiperSlide>
          <div className="relative h-[500px] w-[240px] overflow-hidden rounded-[40px] bg-black">
            <Image
              src={image1}
              alt="Concert Day 1"
              fill
              className="object-cover"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-[500px] w-[240px] overflow-hidden rounded-[40px] bg-black">
            <Image
              src={image2}
              alt="Concert Day 2"
              fill
              className="object-cover"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-[500px] w-[240px] overflow-hidden rounded-[40px] bg-black">
            <Image
              src={image3}
              alt="Concert Day 3"
              fill
              className="object-cover"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

