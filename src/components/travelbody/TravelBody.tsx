import React from 'react';
import TravelCard from '../travelCard/TravelCard';
import { Testimonial } from '../home/testimonial/Testimonial';
import TestimonialCard from '../home/testimonial/TestimonialCard';
import { searchResults } from '@/constants/searchResults';



const TravelBody = () => {
  return (
    <div className="container mt-20 px-4 sm:px-6 lg:px-8">
      <div className="w-12 h-2 bg-[#0872BA] mx-auto lg:mx-0"></div>
      <div className="font-sans text-5xl font-semibold mt-2 text-[#1D2939]">
        <h1>Some of our verified members</h1>
        <p className="font-sans text-xl font-medium mt-4 text-[#344054]">
        you&apos;re not just finding a housemate - you&apos;re building a support system. The women you meet here share your passion for exploring new cultures, experiencing life abroad, and making the most of every opportunity. Plus, by teaming up with someone on the same journey, you&apos;ll find a sense of safety, security, and camaraderie that helps you stay motivated and focused on your goals.
</p>
      </div>

      <div className="mx-auto p-4">
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {searchResults.map((result) => (
            <TravelCard key={result.id} {...result} />
          ))}
        </div>
      </div>
      <div className=" mx-auto mt-[78px] text-center">
        <div className="inline-block bg-[#0872BA4D] text-black px-4 py-2 -rotate-6 rounded-full text-sm mb-6 font-sans">
          Testimonial
        </div>
        <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 font-sans">
        Feelings of our traveler
        </h1>
        <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto font-sans">
  Find the perfect room to share with travelers heading to the same destination.
        </p>   
        <TestimonialCard/>
      </div>
    </div>
  );
};

export default TravelBody;
