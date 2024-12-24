import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image"; // Import the Image component

interface SearchResultCardProps {
  name: string;
  age: number;
  businessType: string;
  travelType: string;
  travelBegins: string;
  destinationCountry: string;
  accommodation: string;
  imageUrl: string;
}

export default function SearchResultCard({
  name,
  age,
  businessType,
  travelType,
  travelBegins,
  destinationCountry,
  accommodation,
  imageUrl,
}: SearchResultCardProps) {
  return (
    <div className="flex flex-col md:flex-row gap-7 rounded-2xl max-w-w-[752px] bg-white px-4 py-5 mb-6 shadow-sm">
      <div className="relative h-[200px] md:h-[257px] w-full md:w-[342px] flex-shrink-0">
        <Image
          src={imageUrl}
          alt={`${name}'s profile`}
          layout="fill" // Set layout to fill to cover the parent div area
          objectFit="cover" // Ensure the image covers the area without stretching
          className="rounded-2xl" // Tailwind class to round the corners
        />
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-2 top-2 h-8 w-8 rounded-full bg-white/90 hover:bg-white/75"
        >
          <Heart className="h-4 w-4 fill-red-500 stroke-red-500" />
        </Button>
      </div>

      <div className="flex flex-1 flex-col justify-between">
        <div className="">
          <div className="flex items-center justify-between">
            <h3 className="text-lg md:text-xl font-bold font-sans text-[#263238]">
              {name}
            </h3>
            <p className="font-sans font-medium text-[14px] md:text-[16px] text-[#263238]">
              Age : <span className="font-sans font-normal">{age}y</span>
            </p>
          </div>

          <div className="text-sm text-gray-600">
            <p className="font-sans mt-2 md:mt-4 font-normal text-[14px] md:text-[16px] text-[#263238]">
              <span className="font-sans font-medium">Business type: </span>
              {businessType}
            </p>
            <p className="font-sans mt-2 md:mt-3 font-normal text-[14px] md:text-[16px] text-[#263238]">
              <span className="font-sans font-medium">Travel type: </span>
              {travelType}
            </p>
            <p className="font-sans mt-2 md:mt-3 font-normal text-[14px] md:text-[16px] text-[#263238]">
              <span className="font-sans font-medium">Travel begins: </span>
              {travelBegins}
            </p>
            <p className="font-sans mt-2 md:mt-3 font-normal text-[14px] md:text-[16px] text-[#263238]">
              <span className="font-sans font-medium">
                Destination Country:{" "}
              </span>
              {destinationCountry}
            </p>
            <p className="font-sans mt-2 md:mt-3 font-normal text-[14px] md:text-[16px] text-[#263238]">
              <span className="font-sans font-medium">Accommodation: </span>
              {accommodation}
            </p>
          </div>
        </div>

        <Button
          variant="outline"
          className="mt-4 w-full border border-solid font-sans text-[14px] md:text-[16px] font-medium text-primary border-primary"
        >
          See profile details
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="ml-2 h-4 w-4"
          >
            <path d="M4 12h16m0 0l-4-4m4 4l-4 4" />
          </svg>
        </Button>
      </div>
    </div>
  );
}
