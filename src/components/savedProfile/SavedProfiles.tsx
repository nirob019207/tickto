import ProfileCard from "./ProfileCard";

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

const profiles: Profile[] = [
  {
    id: "1",
    name: "Sarah Thompson",
    age: 25,
    businessType: "Accounting & Finance",
    travelType: "Scouting Trip (1-6 weeks)",
    travelBegins: "May 2024",
    destinationCountry: "Africa",
    accommodation: "yes",
    image: "https://i.ibb.co/FwhwTLJ/image-2.png",
  },
  {
    id: "2",
    name: "Sarah Thompson",
    age: 25,
    businessType: "Accounting & Finance",
    travelType: "Scouting Trip (1-6 weeks)",
    travelBegins: "May 2024",
    destinationCountry: "Africa",
    accommodation: "yes",
    image: "https://i.ibb.co/FwhwTLJ/image-2.png",
  },
  {
    id: "3",
    name: "Sarah Thompson",
    age: 25,
    businessType: "Accounting & Finance",
    travelType: "Scouting Trip (1-6 weeks)",
    travelBegins: "May 2024",
    destinationCountry: "Africa",
    accommodation: "yes",
    image: "https://i.ibb.co/FwhwTLJ/image-2.png",
  },
  // Add more profiles as needed
];

export default function SavedProfiles() {
  return (
    <div className="p-6 mt-[100px] md:mt-[178px] text-[#1D293] container mx-auto">
      <h1 className="font-sans text-3xl md:text-5xl font-semibold text-center md:text-left mb-6">
        All of your <span className="text-primary">saved profiles</span>
      </h1>

      <div className="grid grid-cols-1 gap-6">
        {profiles.map((profile) => (
          <ProfileCard key={profile.id} profile={profile} />
        ))}
      </div>
      <div className="flex items-center justify-center">
        <button className="mt-[68px] text-white hover:text-gray-400 px-[68px] py-4 bg-primary rounded-xl font-sans font-semibold">
          Load more
        </button>
      </div>
    </div>
  );
}
