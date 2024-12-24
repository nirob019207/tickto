import Banner from "@/components/home/Banner";
import BannerBottom from "@/components/home/BannerBottom";
import HowItWork from "@/components/home/howItWorks/HowItWork";
import PastEvent from "@/components/home/PastEvernt";
import UpcomingEvents from "@/components/home/UpcomingEvents";


const Home = () => {
  return (
    <>
      <Banner />
     <div className="lg:block hidden">
     <BannerBottom/>
     </div>
      <UpcomingEvents/>
      <HowItWork/>
      <PastEvent/>
    
      
    </>
  );
};

export default Home;
