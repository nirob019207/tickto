import { Heart, ArrowRight, Trash2 } from "lucide-react";
import Image from "next/image";

interface Profile {
  id: string;
  name: string;
  age: number;
  businessType: string;
  travelType: string;
  travelBegins: string;
  destinationCountry: string;
  accommodation: "yes" | "no";
  image: string;
}

interface ProfileCardProps {
  profile: Profile;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ profile }) => {
  return (
    <div className="bg-white mt-7 rounded-lg shadow-sm border border-gray-100 p-6">
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 items-center">
        {/* Image Section */}
        <div className="relative w-full h-72 sm:h-96 md:h-96 lg:w-[479px] lg:h-[351px]">
          <Image
            src={profile.image}
            alt={profile.name}
            layout="fill"
            objectFit="cover"
            className="rounded-2xl"
          />
          <button
            className="absolute top-2 right-2 p-1.5 bg-white rounded-full shadow-sm"
            aria-label="Like profile"
          >
            <Heart className="w-5 h-5 text-red-500 fill-red-500" />
          </button>
        </div>

        {/* Profile Information Section */}
        <div className="flex-1 w-full">
          <div>
            <h2 className="text-lg sm:text-xl md:text-2xl text-[#263238] font-bold">
              {profile.name}
            </h2>
            <div className="text-sm text-gray-600">
              <div className="flex flex-col md:flex-row md:justify-between md:gap-2">
                <p className="mt-2 md:mt-4 font-normal text-[14px] md:text-[16px] text-[#263238]">
                  <span className="font-medium">Business type: </span>
                  {profile.businessType}
                </p>
                <p className="mt-2 md:mt-4 font-normal text-[14px] md:text-[16px] text-[#263238]">
                  <span className="font-medium">Age: </span>
                  {profile.age}
                </p>
              </div>

              <p className="mt-2 md:mt-3 font-normal text-[14px] md:text-[16px] text-[#263238]">
                <span className="font-medium">Travel type: </span>
                {profile.travelType}
              </p>

              <p className="mt-2 md:mt-3 font-normal text-[14px] md:text-[16px] text-[#263238]">
                <span className="font-medium">Travel begins: </span>
                {profile.travelBegins}
              </p>

              <p className="mt-2 md:mt-3 font-normal text-[14px] md:text-[16px] text-[#263238]">
                <span className="font-medium">Destination Country: </span>
                {profile.destinationCountry}
              </p>

              <p className="mt-2 md:mt-3 font-normal text-[14px] md:text-[16px] text-[#263238]">
                <span className="font-medium">Accommodation: </span>
                {profile.accommodation}
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row mt-8 gap-4">
            <button className="flex items-center justify-center w-full sm:w-auto border border-primary rounded-xl py-3 px-8 text-primary hover:text-blue-700">
              See profile details
              <ArrowRight className="ml-2 w-4 h-4" />
            </button>
            <button className="flex items-center justify-center w-full sm:w-auto border border-red-500 rounded-xl py-3 px-8 text-red-500 hover:text-red-700">
              Remove here
              <Trash2 className="ml-2 w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
