import { homeFeature } from "@/types/homeFeature";
import image1 from '@/assets/feature/feature1.jpg';
import image2 from '@/assets/feature/feature2.jpg';
import image3 from '@/assets/feature/feature3.jpg';


const getHomeFeatures: homeFeature[] = [
  {
    img: image1, // Use the imported image variable
    title: "150+ Countries",
    description: "Empowering women to explore destinations globally.",
  },
  {
    img: image2, // Use the imported image variable
    title: "Connect & Travel",
    description: "A trusted community of verified members.",
  },
  {
    img: image3, // Use the imported image variable
    title: "Find Your Tribe",
    description: "Find like-minded housemates faster and easier.",
  },
];

export { getHomeFeatures };
