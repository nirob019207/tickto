import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import { homeComunityItem } from "@/constants/homeComunityItem";

export const HomeComuntiy = () => {
  return (
    <div className="container mx-auto  lg:mt-[310px] mt-[100px]">
      <div className="bg-white rounded-lg p-6">
        {homeComunityItem.map((data, index) => (
          <div key={index} className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center justify-center">
            {/* Image Section */}
            <div className="flex justify-center items-center p-4">
              <div className="">
              <Image
                                  src={data.img}
                                  alt={data.title}
                                  className="lg:h-[400px] lg:w-full "
                                />
              </div>
            </div>

            {/* Text Section */}
            <div className="flex flex-col gap-4 text-center lg:text-left">
              <div className="space-y-2">
                <div className="w-12 h-2 bg-[#0872BA] mx-auto lg:mx-0" ></div>
                <h1 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-5xl text-[#1a2b49] font-sans">
                  {data.title}
                </h1>
              </div>
              <p className="text-gray-600 md:text-lg text-[16px] font-sans">
                {data.description}
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center lg:justify-start font-sans">
                <Button className="bg-[#0872BA]  text-white">
                  Become a Member
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
