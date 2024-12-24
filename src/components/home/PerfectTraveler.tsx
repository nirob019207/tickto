"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";  // Correctly importing StaticImageData
import image from '@/assets/home/perfectTraveler.png';

interface PerfectTraveler {
  img: StaticImageData;
}

// Create an array of PerfectTraveler objects
const getHomeFeatures: PerfectTraveler[] = [
  {
    img: image,
  },
];

export const PerfectTraveler = () => {
  return (
    <div>
      <div className="container relative mt-[100px] ">
        <div className="bg-white shadow lg:p-[40px] p-4">
        <div className=" mx-auto text-center">
      <div className="w-16 h-1 bg-blue-600 mx-auto mb-4" />
      <h2 className="lg:text-5xl font-bold tracking-tight text-slate-900 text-3xl pb-10 font-sans">
        Perfect for every type of traveler
      </h2>
    </div>
          {getHomeFeatures.map((feature, index) => (
            <div key={index} className="flex justify-center items-center">
              <Image
                src={feature.img}
                alt="Perfect Traveler"
                className="object-cover w-full h-[412px]"
                priority
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
