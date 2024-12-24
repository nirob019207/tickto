'use client';

import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Clock, MapPin } from 'lucide-react';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import image1 from '@/assets/concert/Hero0img 1.png';
import image2 from '@/assets/concert/Hero1img 1(1).png';
import bac from '@/assets/Bg-ty.png';

const categories = ['Concert', 'Seminar', 'Exhibition', 'Bootcamp', 'Fest', 'Others'];

const events = [
  {
    id: 1,
    title: 'MAGICAL EVENING WITH ALITA',
    type: 'SOLO CONCERT',
    image: image2,
    date: { month: 'DEC', day: '24', year: '2024' },
    time: 'TUE, 7:00PM',
    location: 'ALOKI, Gulshan 1',
    segment: 'CONCERT',
    host: 'Techyie Communications Ltd.',
  },
  {
    id: 2,
    title: 'SUNSHINE FESTIVAL',
    type: 'LIVE EVENT',
    image: image1,
    date: { month: 'DEC', day: '24', year: '2024' },
    time: 'TUE, 7:00PM',
    location: 'ALOKI, Gulshan 1',
    segment: 'FEST',
    host: 'Club Name',
  },
];

export default function PastEvent() {
  const [activeCategory, setActiveCategory] = useState('Concert');

  return (
    <div className="relative">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${bac.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.7)',
        }}
      ></div>

      {/* Content Section */}
      <div className="relative z-10">
        <div className="bg-white bg-opacity-90 shadow-lg rounded-lg">
          <div className='container py-16'>
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-black">
                OUR Past EVENTS
                <div className="w-48 h-1 bg-black mx-auto mt-2"></div>
              </h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Left Section */}
              <div className="space-y-8">
                <h2 className="text-2xl font-bold text-black">Checkout Past Events</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mx-auto">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setActiveCategory(category)}
                      className={`py-3 px-6 rounded-lg text-white font-medium transition-colors ${
                        activeCategory === category
                          ? 'bg-blue-600 shadow-lg'
                          : 'bg-gray-700 hover:bg-blue-600/80'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
                {/* <div className="flex justify-center items-center w-full mt-4">
                  <Stepindicator currentStep={1} totalSteps={5} />
                </div> */}
              </div>

              {/* Right Section */}
              <div className="relative flex flex-col items-center w-full max-w-[400px] mx-auto">
                <Swiper
                  loop={true}
                  autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                  }}
                  navigation={{
                    nextEl: '#next-slide',
                    prevEl: '#prev-slide',
                  }}
                  pagination={{
                    el: '.custom-pagination',
                    clickable: true,
                    renderBullet: function (index, className) {
                      return '<span class="' + className + '"></span>';
                    },
                  }}
                  slidesPerView={1}
                  centeredSlides={true}
                  speed={1000}
                  modules={[Autoplay, Navigation, Pagination]}
                  className="banner-swiper overflow-visible w-full"
                >
                  {events.map((event) => (
                    <SwiperSlide key={event.id}>
                      <div className="bg-black h-[400px] sm:h-[500px] shadow-sm rounded-2xl w-full max-w-[400px] relative mx-auto">
                        <div className="absolute bg-black rounded-xl shadow-md w-full max-w-[400px] h-[260px] sm:h-[330px]">
                          <div className="p-2 sm:p-4 flex flex-col sm:flex-row gap-2 sm:gap-4">
                            <div className="flex-1 text-white space-y-2 pt-2">
                              <p className="px-3 py-1 text-[20px] border-b-2 pb-2">{event.title}</p>
                              <p className="px-3 text-sm">{event.type}</p>
                              <p className="text-xs text-center">{event.host}</p>
                            </div>
                            <div className="w-full h-[140px] sm:w-[200px] sm:h-[280px] relative overflow-hidden rounded-xl">
                              <Image
                                src={event.image}
                                alt={event.title}
                                fill
                                className="object-cover"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-6 text-white">
                          <h3 className="text-lg sm:text-2xl font-bold mb-2 sm:mb-4">
                            {event.title}:<br />
                            {event.type}
                          </h3>
                          <div className="flex items-center gap-3 sm:gap-6">
                            <div className="text-center">
                              <p className="text-xs sm:text-sm">{event.date.month}</p>
                              <p className="text-xl sm:text-2xl font-bold">{event.date.day}</p>
                              <p className="text-xs sm:text-sm">{event.date.year}</p>
                            </div>
                            <div className="space-y-1 sm:space-y-2">
                              <div className="flex items-center gap-2">
                                <Clock size={16} />
                                <span className="text-sm">{event.time}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <MapPin size={16} />
                                <span className="text-sm">{event.location}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>

                {/* Custom Pagination */}
                <div className="custom-pagination flex justify-center items-center mt-6 space-x-2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom styles for pagination bullets */}
      <style jsx global>{`
        .custom-pagination {
          position: absolute;
          width: 100%;
          bottom: -30px;
        }
        .custom-pagination .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background: #ccc;
          opacity: 1;
          transition: all 0.3s ease;
        }
        .custom-pagination .swiper-pagination-bullet-active {
          background: #3b82f6;
          width: 16px;
          border-radius: 4px;
        }
        @media (min-width: 640px) {
          .custom-pagination {
            bottom: -40px;
          }
          .custom-pagination .swiper-pagination-bullet {
            width: 12px;
            height: 12px;
          }
          .custom-pagination .swiper-pagination-bullet-active {
            width: 24px;
            border-radius: 6px;
          }
        }
      `}</style>
    </div>
  );
}

