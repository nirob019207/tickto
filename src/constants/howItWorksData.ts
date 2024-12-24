import { howWorks } from "@/types/howWorks";
import Plan from '@/assets/home/howitworks/plan.png';
import Explore from '@/assets/home/howitworks/explore.png';

import ConnectBuild from '@/assets/home/howitworks/connect.png';

import Secqure from '@/assets/home/howitworks/secqure.png';


 



const howItWorksData: howWorks[] = [
    {
        icon: Plan, // Use the imported image variable
        title: "step1",
        description:
        "Start by setting your travel dates, destinations, and preferences. This helps you tailor your search for housemates who align with your journey.",   
       },
       {
        icon: Explore, // Use the imported image variable
        title: "step2",
        description:
        "Browse through profiles of like-minded women who are traveling to similar locations. You can filter results based on your travel dates, needs, and values.",
    },
       {
        icon: ConnectBuild, // Use the imported image variable
        title: "Step3",
        description:
        "Send messages, ask questions, and get to know potential housemates before committing. Building rapport ensures a comfortable and trusted connection for your shared journey.",
    },
       {
        icon: Secqure, // Use the imported image variable
        title: "Ste4",
        description:
        "Once you've found the right housemate, finalize your arrangements with confidence. With a trusted companion, you can travel with peace of mind and enjoy every moment.",
    },
     
 
];

export { howItWorksData };
