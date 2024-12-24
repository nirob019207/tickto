interface SearchResult {
  id: string;
  name: string;
  age: number;
  travelType: string;
  travelDate: string;
  destination: string;
  imageUrl: string;
}

export const searchResults: SearchResult[] = [
  {
    id: "1",
    name: "Sarah Thompson",
    age: 25,
    travelType: "Scouting Trip (1-6 weeks)",
    travelDate: "May 2024",
    destination: "Tanzania",
    imageUrl: "https://i.ibb.co.com/FwhwTLJ/image-2.png",
  },
  {
    id: "2",
    name: "Emily Johnson",
    age: 28,
    travelType: "Volunteer Work (3-6 months)",
    travelDate: "July 2024",
    destination: "India",
    imageUrl: "https://i.ibb.co.com/FwhwTLJ/image-2.png",
  },
  {
    id: "3",
    name: "Jessica Brown",
    age: 30,
    travelType: "Language Immersion (6-12 months)",
    travelDate: "August 2024",
    destination: "Spain",
    imageUrl: "https://i.ibb.co.com/FwhwTLJ/image-2.png",
  },
  {
    id: "4",
    name: "Alice Green",
    age: 22,
    travelType: "Cultural Exchange (1-3 months)",
    travelDate: "June 2024",
    destination: "Japan",
    imageUrl: "https://i.ibb.co.com/FwhwTLJ/image-2.png",
  },
  {
    id: "5",
    name: "Mia White",
    age: 27,
    travelType: "Adventure Trip (1-3 weeks)",
    travelDate: "April 2024",
    destination: "Peru",
    imageUrl: "https://i.ibb.co.com/FwhwTLJ/image-2.png",
  },
  {
    id: "6",
    name: "Olivia Blue",
    age: 24,
    travelType: "Gap Year (6-12 months)",
    travelDate: "September 2024",
    destination: "Australia",
    imageUrl: "https://i.ibb.co.com/FwhwTLJ/image-2.png",
  },
];