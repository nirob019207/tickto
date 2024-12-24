'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import Image from 'next/image'
import logo from '@/assets/logo/wTickyto_logo 3.png'

// Import required Swiper styles
import 'swiper/css'
import 'swiper/css/autoplay'

export default function BannerBottom() {
  return (
    <div className='bg-[#0B0B45] py-10'>
         <div className='container'>
        <div className="relative w-full overflow-hidden ]">
      <Swiper
        modules={[Autoplay]}
        loop={true}
        spaceBetween={50}
        slidesPerView={7}
        autoplay={{
          delay: -1, // Keeps the autoplay running continuously without pause
          disableOnInteraction: false, // Ensures autoplay keeps running after interaction
        }}
        speed={1500} // Reduced speed for smoother transitions
        className="!overflow-visible py-4"
      >
    
          <SwiperSlide >
            <Image
              src={logo}
              alt="Tickyto Logo"
              width={120}
              height={40}
              className="h-10 w-auto object-contain"
            />
          </SwiperSlide>
          <SwiperSlide >
            <Image
              src={logo}
              alt="Tickyto Logo"
              width={120}
              height={40}
              className="h-10 w-auto object-contain"
            />
          </SwiperSlide>
          <SwiperSlide >
            <Image
              src={logo}
              alt="Tickyto Logo"
              width={120}
              height={40}
              className="h-10 w-auto object-contain"
            />
          </SwiperSlide>
          <SwiperSlide >
            <Image
              src={logo}
              alt="Tickyto Logo"
              width={120}
              height={40}
              className="h-10 w-auto object-contain"
            />
          </SwiperSlide>
          <SwiperSlide >
            <Image
              src={logo}
              alt="Tickyto Logo"
              width={120}
              height={40}
              className="h-10 w-auto object-contain"
            />
          </SwiperSlide>
          <SwiperSlide >
            <Image
              src={logo}
              alt="Tickyto Logo"
              width={120}
              height={40}
              className="h-10 w-auto object-contain"
            />
          </SwiperSlide>
          <SwiperSlide >
            <Image
              src={logo}
              alt="Tickyto Logo"
              width={120}
              height={40}
              className="h-10 w-auto object-contain"
            />
          </SwiperSlide>
          <SwiperSlide >
            <Image
              src={logo}
              alt="Tickyto Logo"
              width={120}
              height={40}
              className="h-10 w-auto object-contain"
            />
          </SwiperSlide>
      </Swiper>
    </div>
    </div>

    </div>
   
  )
}
