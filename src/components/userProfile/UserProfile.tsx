'use client'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Heart, PencilIcon } from "lucide-react";
import Image from "next/image";
import logo from "@/assets/profile/tabler_edit.png";
import age from "@/assets/profile/fi_5670747.png";
import zodiac from "@/assets/profile/fi_5796707.png";
import Link from "next/link";
import { categories } from "@/constants/categories";
import { useRef, useState } from "react";

export default function UserProfile() {
   const [avatarSrc, setAvatarSrc] = useState(
     "https://i.ibb.co.com/nskVT9Z/348s.jpg"
   );
   const fileInputRef = useRef<HTMLInputElement>(null);

   const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
     const file = event.target.files?.[0];
     if (file) {
       const reader = new FileReader();
       reader.onload = (e) => {
         setAvatarSrc(e.target?.result as string);
       };
       reader.readAsDataURL(file);
     }
   };

   const triggerFileInput = () => {
     fileInputRef.current?.click();
   };
  return (
    <div className="container mx-auto mt-[130px] md:mt-[180px]">
      {/* Profile Header */}
      <div className="flex flex-col md:flex-row items-start justify-between p-4 md:p-6 gap-4 bg-white">
        <div className="flex flex-col md:flex-row gap-8 items-center w-full md:w-auto">
          <div className="relative w-32 h-32 md:w-[133px] md:h-[133px] bg-red-500 rounded-full">
            <Avatar className="w-[133px] h-[133px]">
              <AvatarImage src={avatarSrc} alt="Profile picture" />
              <AvatarFallback>MJ</AvatarFallback>
            </Avatar>

            <div
              onClick={triggerFileInput}
              className="absolute border flex cursor-pointer justify-center items-center border-gray-400 bg-white top-20 z-30 left-[107px] rounded-full w-[30.575px] h-[30.575px]"
            >
              <Image src={logo} alt="" />
            </div>
          </div>

          <input
            type="file"
            ref={fileInputRef}
            onChange={handleImageUpload}
            className="hidden"
            accept="image/*"
          />

          <div className="text-center md:text-left">
            <h1 className="text-xl md:text-2xl lg:text-[32px] text-[#263238] font-sans font-bold">
              Marry Tale Juliana
            </h1>

            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <div className="text-sm text-muted-foreground">
                <p className="block text-lg md:text-[18px] font-semibold font-sans">
                  Country:{" "}
                  <span className="text-base md:text-[16px] font-medium">
                    USA
                  </span>
                </p>
                <div className="flex justify-center gap-4 mt-4">
                  <div className="flex items-center gap-2">
                    <Image src={age} alt="" />
                    <p className="text-[#1D2939] text-sm md:text-base font-semibold">
                      22 y
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Image src={zodiac} alt="" />
                    <p className="text-[#1D2939] text-sm md:text-base font-semibold">
                      Aries
                    </p>
                  </div>
                </div>
              </div>

              <div className="text-sm flex flex-col justify-between text-muted-foreground">
                <p className="text-lg md:text-[18px] font-semibold font-sans">
                  State:{" "}
                  <span className="text-base md:text-[16px] font-medium">
                    California
                  </span>
                </p>
                <p className="text-lg md:text-[18px] font-semibold font-sans">
                  Accommodation:{" "}
                  <span className="text-base md:text-[16px] font-medium">
                    Yes
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-6 md:gap-[84px] w-full md:w-auto">
          <button className="flex items-center gap-2 px-4 py-2 md:px-3 md:py-1 bg-[#CECECE] rounded-xl text-[#000] text-sm md:text-base font-normal font-sans">
            <Heart className="w-4 h-4 stroke-none fill-red-500" />
            Save profile
          </button>
          <p className="text-primary underline text-lg md:text-xl font-semibold">
            Send message
          </p>
        </div>
      </div>

      {/* Request References */}
      <div className="">
        <h2 className="text-lg md:text-xl font-sans font-bold mt-10 md:mt-[65px]">
          Request References
        </h2>
        <p className="text-base md:text-[18px] font-normal font-sans mt-5 text-[#475467]">
          Add another dimension of trust to your profile. You can request
          references from your personal network, and the references will appear
          publicly on your{" "}
          <span className="text-base md:text-[18px] font-medium font-sans text-[#1D2939]">
            Expat global girls
          </span>{" "}
          profile to help other members get to know you. You should only request
          references from people who know you well.
        </p>
        <button className="mt-7 bg-primary flex items-center justify-center md:justify-start px-4 md:px-6 py-2 md:py-3 gap-2 md:gap-3 rounded-xl text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 28 28"
            fill="none"
          >
            <g clipPath="url(#clip0_543_4997)">
              <path
                d="M28 14C28 20.988 22.8802 26.7799 16.1875 27.8299V18.0469H19.4496L20.0703 14H16.1875V11.3739C16.1875 10.2665 16.73 9.1875 18.4691 9.1875H20.2344V5.74219C20.2344 5.74219 18.632 5.46875 17.1002 5.46875C13.9027 5.46875 11.8125 7.40687 11.8125 10.9156V14H8.25781V18.0469H11.8125V27.8299C5.11984 26.7799 0 20.988 0 14C0 6.26828 6.26828 0 14 0C21.7317 0 28 6.26828 28 14Z"
                fill="#1877F2"
              />
              <path
                d="M19.4496 18.0469L20.0703 14H16.1875V11.3739C16.1875 10.2667 16.7299 9.1875 18.469 9.1875H20.2344V5.74219C20.2344 5.74219 18.6323 5.46875 17.1005 5.46875C13.9026 5.46875 11.8125 7.40688 11.8125 10.9156V14H8.25781V18.0469H11.8125V27.8299C12.5253 27.9417 13.2558 28 14 28C14.7442 28 15.4747 27.9417 16.1875 27.8299V18.0469H19.4496Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_543_4997">
                <rect width="28" height="28" fill="white" />
              </clipPath>
            </defs>
          </svg>
          Request a Reference
        </button>
      </div>

      <section>
        <h2 className="text-xl font-semibold mb-4 mt-[68px] text-center md:text-left">
          My Destinations
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {[1, 2, 3].map((option) => (
            <div
              key={option}
              className="max-w-full sm:max-w-[383px] border border-solid border-gray-300 rounded-xl p-[14px]"
            >
              <div className="flex items-center justify-between">
                <div className="text-[#1D2939] font-semibold font-sans text-[16px] sm:text-[18px]">
                  <h2># Option {option}</h2>
                </div>
                <div>
                  <button className="flex items-center justify-center gap-2 px-2 py-1 border border-solid border-gray-300 rounded-lg">
                    <Image src={logo} alt="Update icon" />
                    Update
                  </button>
                </div>
              </div>
              <hr className="bg-gray-300 mt-3" />
              <div>
                <p className="font-sans text-[#344054] font-medium text-[16px] sm:text-[18px] mt-4">
                  My travel type:{" "}
                  <span className="text-[#475467] font-normal">
                    Scouting Trip (1-8 wks)
                  </span>
                </p>
                <p className="font-sans text-[#344054] font-medium text-[16px] sm:text-[18px] mt-4">
                  My travel begins:{" "}
                  <span className="text-[#475467] font-normal">May 2024</span>
                </p>
                <p className="font-sans text-[#344054] font-medium text-[16px] sm:text-[18px] mt-4">
                  Destination country:{" "}
                  <span className="text-[#475467] font-normal">Australia</span>
                </p>
                <p className="font-sans text-[#344054] font-medium text-[16px] sm:text-[18px] mt-4">
                  Destination city:{" "}
                  <span className="text-[#475467] font-normal">Sydney</span>
                </p>
                <p className="font-sans text-[#344054] font-medium text-[16px] sm:text-[18px] mt-4">
                  Have room:{" "}
                  <span className="text-[#475467] font-normal">Yes</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Lifestyle Section */}
      <section className="mt-16">
        <h2 className="text-xl font-semibold mb-6">Lifestyle</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
          <div className="col-span-1">
            <h3 className="text-[#344054] font-sans font-semibold text-[18px] leading-[22.32px] mb-1">
              Max Monthly Rent
            </h3>
            <p className="text-[#475467] font-sans text-[18px] font-normal leading-[30px]">
              $23
            </p>
          </div>
          <div className="col-span-1">
            <h3 className="text-[#344054] font-sans font-semibold text-[18px] leading-[22.32px] mb-1">
              Marital Status
            </h3>
            <p className="text-[#475467] font-sans text-[18px] font-normal leading-[30px]">
              Unmarried
            </p>
          </div>
          <div className="col-span-1">
            <h3 className="text-[#344054] font-sans font-semibold text-[18px] leading-[22.32px] mb-1">
              Ethnicity
            </h3>
            <p className="text-[#475467] font-sans text-[18px] font-normal leading-[30px]">
              Chinese
            </p>
          </div>
          <div className="col-span-1">
            <h3 className="text-[#344054] font-sans font-semibold text-[18px] leading-[22.32px] mb-1">
              Religion/Spirituality
            </h3>
            <p className="text-[#475467] font-sans text-[18px] font-normal leading-[30px]">
              Christianity
            </p>
          </div>
          <div className="col-span-1">
            <h3 className="text-[#344054] font-sans font-semibold text-[18px] leading-[22.32px] mb-1">
              Children
            </h3>
            <p className="text-[#475467] font-sans text-[18px] font-normal leading-[30px]">
              No
            </p>
          </div>
          <div className="col-span-1">
            <h3 className="text-[#344054] font-sans font-semibold text-[18px] leading-[22.32px] mb-1">
              Pets
            </h3>
            <p className="text-[#475467] font-sans text-[18px] font-normal leading-[30px]">
              No
            </p>
          </div>
          <div className="col-span-1">
            <h3 className="text-[#344054] font-sans font-semibold text-[18px] leading-[22.32px] mb-1">
              Employment Status
            </h3>
            <p className="text-[#475467] font-sans text-[18px] font-normal leading-[30px]">
              Unmarried
            </p>
          </div>
          <div className="col-span-1">
            <h3 className="text-[#344054] font-sans font-semibold text-[18px] leading-[22.32px] mb-1">
              Education
            </h3>
            <p className="text-[#475467] font-sans text-[18px] font-normal leading-[30px]">
              No
            </p>
          </div>
        </div>
      </section>
      <section className="mt-16">
        <h2 className="text-xl font-semibold mb-6">My Business</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
          <div className="col-span-1">
            <h3 className="text-[#344054] font-sans font-semibold text-[18px] leading-[22.32px] mb-1">
              Industry
            </h3>
            <p className="text-[#475467] font-sans text-[18px] font-normal leading-[30px]">
              IT
            </p>
          </div>
          <div className="col-span-1">
            <h3 className="text-[#344054] font-sans font-semibold text-[18px] leading-[22.32px] mb-1">
              Company Name
            </h3>
            <p className="text-[#475467] font-sans text-[18px] font-normal leading-[30px]">
              IT meta solution
            </p>
          </div>
        </div>
      </section>
      <section className="mt-16">
        <h2 className="text-xl font-semibold mb-6">Description of Services</h2>
        <textarea
          placeholder="Please share here.."
          className="w-full min-h-[120px] p-3 bg-gray-100 border border-gray-300 rounded-lg text-[#475467] font-sans text-[16px] resize-none focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </section>
      <section className="mt-16">
        <h2 className="text-[18px] font-semibold mb-3 font-sans">
          Visit us online
        </h2>
        <div className="flex flex-col">
          <div>
            <Link
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="mr-[55px] cursor-pointer underline text-primary font-sans font-medium text-[18px]">
                Facebook
              </span>
            </Link>
            <Link
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="mr-[55px] cursor-pointer underline text-primary font-sans font-medium text-[18px]">
                Youtube
              </span>
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="mr-[55px] cursor-pointer underline text-primary font-sans font-medium text-[18px]">
                Linkedin
              </span>
            </Link>
          </div>
          <div className="mt-6">
            <Link
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="mr-[55px] cursor-pointer underline text-primary font-sans font-medium text-[18px]">
                Instagram
              </span>
            </Link>
            <Link
              href="https://yourwebsite.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="mr-[55px] cursor-pointer underline text-primary font-sans font-medium text-[18px]">
                Website
              </span>
            </Link>
          </div>
        </div>
      </section>

      <section>
        <div className="mt-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6 text-center md:text-left">
            My Top 3&apos;s
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
            {categories.map((category, index) => (
              <div
                key={index}
                className="border border-gray-300 rounded-lg p-4 bg-white shadow-sm"
              >
                <h3 className="text-[18px] sm:text-[20px] md:text-[22px] font-sans font-semibold mb-2">
                  {category.title}
                </h3>
                <ul className="flex justify-between text-gray-600">
                  {category.items.map((item, idx) => (
                    <li
                      key={idx}
                      className="text-[16px] sm:text-[18px] md:text-[18px] text-[#475467] font-normal font-sans"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mt-16">
          <h2 className="font-sans text-xl sm:text-2xl md:text-3xl font-bold text-[#1D2939] text-center md:text-left">
            Talking points
          </h2>

          <div className="flex flex-col md:flex-row justify-between mt-7 text-gray-800">
            <div className="mb-6 md:mb-0 md:w-1/2">
              {[
                {
                  question: "How would you rate your level of cleanliness?",
                  answer: "My space is consistently immaculate",
                },
                {
                  question: "How would you describe your approach to cooking?",
                  answer: "I prefer to order food or dine out",
                },
                {
                  question:
                    "How would you describe your relationship with a housemate?",
                  answer: "We'll become close friends",
                },
                {
                  question: "How often do you host friends or gatherings?",
                  answer: "My door is always open",
                },
                {
                  question: "What's your sleep schedule?",
                  answer: "I go to bed early and wake up early",
                },
                {
                  question: "How often do you use tobacco or vaping products?",
                  answer: "I don't use tobacco or vape",
                },
              ].map((item, index) => (
                <div key={index}>
                  <h3 className="font-semibold text-[18px] sm:text-[20px] md:text-[18px] mb-3 text-[#344054]">
                    {item.question}
                  </h3>
                  <p className="text-[18px] sm:text-[20px] md:text-[18px] text-[#475467] font-normal mb-7">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>

            <div className="md:w-1/2">
              {[
                {
                  question: "How would you describe your financial habits?",
                  answer: "I'm very disciplined and always stick to a budget",
                },
                {
                  question:
                    "How would you describe your style of communication?",
                  answer:
                    "I'm clear and direct, always getting straight to the point",
                },
                {
                  question: "Are you pet friendly?",
                  answer: "I welcome pets and am pet friendly.",
                },
                {
                  question: "What's your typical work routine?",
                  answer: "It's demanding; I'm often at work",
                },
                {
                  question: "How often do you consume alcohol?",
                  answer: "I don't drink at all",
                },
                {
                  question: "How would you describe your use of drugs?",
                  answer: "I don't use any drugs",
                },
              ].map((item, index) => (
                <div key={index}>
                  <h3 className="font-semibold text-[18px] sm:text-[20px] md:text-[18px] mb-3 text-[#344054]">
                    {item.question}
                  </h3>
                  <p className="text-[18px] sm:text-[20px] md:text-[18px] text-[#475467] font-normal mb-7">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mt-12">
        <div>
          <div className="mb-6">
            <h3 className="font-semibold text-[16px] sm:text-[18px] mb-3 text-[#344054]">
              Are you willing to provide/exchange screening reports to a
              potential housemate? (e.g., Background check, Credit check, Tenant
              history)
            </h3>
            <p className="text-[16px] sm:text-[18px] text-[#475467] font-normal mb-7">
              Yes
            </p>
          </div>

          <div className="mb-6">
            <h3 className="font-semibold text-[16px] sm:text-[18px] mb-3 text-[#344054]">
              Are you open to having conversations regarding health matters
              (physical, mental)?
            </h3>
            <p className="text-[16px] sm:text-[18px] text-[#475467] font-normal">
              Yes
            </p>
          </div>
        </div>

        <div>
          <div className="mb-6">
            <label className="block text-gray-800 font-semibold mb-2 text-[16px] sm:text-[18px]">
              How would you describe your Religious/Spiritual beliefs and
              practices?
            </label>
            <textarea
              placeholder="Please share here..."
              className="w-full min-h-[120px] p-3 bg-gray-100 border placeholder:text-[#98A2B3] placeholder:text-xl placeholder:font-normal border-gray-300 rounded-lg text-[#475467] text-[16px] resize-none focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-800 font-semibold mb-2 text-[16px] sm:text-[18px]">
              Do you have any allergies? If so, please list them here: Ex.,
              Airborne allergens, Foods, Nuts, Latex, Pets/Animals, Insects,
              etc.
            </label>
            <textarea
              placeholder="Please share here..."
              className="w-full min-h-[120px] p-3 bg-gray-100 border border-gray-300 rounded-lg text-[#475467] text-[16px] resize-none focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label className="block text-gray-800 font-semibold mb-2 text-[16px] sm:text-[18px]">
              Anything Else?
            </label>
            <textarea
              placeholder="Feel free to share any additional information about yourself, including any: must-haves, deal-breakers, etc."
              className="w-full min-h-[120px] p-3 bg-white border placeholder:text-[#98A2B3] border-gray-300 rounded-lg text-[#475467] text-[16px] resize-none focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
