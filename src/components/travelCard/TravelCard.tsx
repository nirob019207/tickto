import React from 'react';
import { Card, CardContent } from '../ui/card';
import Image from 'next/image';
import { Button } from '../ui/button';
import { Heart } from 'lucide-react';

interface TravelCardProps {
  id: string;
  name: string;
  age: number;
  travelType: string;
  travelDate: string;
  destination: string;
  imageUrl: string;
}

const TravelCard: React.FC<TravelCardProps> = ({
  id,
  name,
  age,
  travelType,
  travelDate,
  destination,
  imageUrl,
}) => {
  return (
    <Card key={id} className="overflow-hidden shadow-lg rounded-lg">
      <CardContent className="p-4">
        <div className="relative">
          <Image
            src={imageUrl}
            alt={name}
            width={355.994}
            height={263.971}
            className="object-cover rounded-md w-full h-[200px] sm:h-[250px] lg:h-[263px]"
          />
          <Button
            size="icon"
            variant="ghost"
            className="absolute right-2 top-2 h-8 w-8 rounded-full bg-white/80 hover:bg-white/90"
          >
            <Heart className="h-5 w-5 text-red-500" />
          </Button>
        </div>
        <div className="mt-5">
          <div className="flex flex-col sm:flex-row sm:items-center mb-4 justify-between">
            <h3 className="font-semibold text-lg sm:text-xl">{name}</h3>
            <span className="text-sm text-gray-600 mt-2 sm:mt-0">
              Age: {age}y
            </span>
          </div>
          <div className="space-y-2 text-sm text-gray-600">
            <p>
              <span className="font-medium">Travel type:</span> {travelType}
            </p>
            <p>
              <span className="font-medium">Travel date:</span> {travelDate}
            </p>
            <p>
              <span className="font-medium">Destination:</span> {destination}
            </p>
          </div>
          <Button
            variant="ghost"
            className="w-full mt-6 sm:mt-8 border border-solid border-[#0872BA] justify-center text-[#0872BA] hover:text-blue-700 text-[15.011px] font-medium"
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
      </CardContent>
    </Card>
  );
};

export default TravelCard;
