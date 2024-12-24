import BannerCards from "./BannerCard"
import bac from '@/assets/Bg-ty.png';


export default function Banner() {
  return (
    <div className="relative">
    {/* Background Image */}
    <div
      className="absolute inset-0 z-0"
      style={{
        backgroundImage: `url(${bac.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        filter: 'brightness(0.7)', // Darkens the background for better readability
      }}
    ></div>

    {/* Content Section */}
    <div className="relative z-10">
      <div className="  bg-white bg-opacity-90 shadow-lg rounded-lg ">
        <div className='container py-16 grid grid-cols-2 '>
        <div className="flex flex-col justify-center space-y-6">
          <div className="space-y-2">
            <span className="block text-xl font-medium text-[#2C3E50]" style={{ fontFamily: 'Press Start 2P, monospace' }}>
              Your Reliable
            </span>
            <h1 className="space-y-4">
              <span 
                className="block text-6xl font-bold text-[#2C3E50]" 
                style={{ fontFamily: 'Press Start 2P, monospace' }}
              >
                TICKET
              </span>
              <span 
                className="block text-5xl font-bold text-[#FFD700]" 
                style={{ fontFamily: 'Press Start 2P, monospace' }}
              >
                BOOKING
              </span>
              <span 
                className="block text-5xl font-bold text-[#00CED1]" 
                style={{ fontFamily: 'Press Start 2P, monospace' }}
              >
                PLATFORM
              </span>
            </h1>
          </div>
          <p className="max-w-md text-xl text-[#2C3E50]">
            Lets Book Your Soul Here, Your Desire Ticket Is Like Your Soul. Grab Your Ticket Now.
          </p>
          <button className="w-fit rounded-lg bg-[#2C3E50] px-8 py-4 text-sm font-bold text-white transition-all hover:bg-[#2C3E50]/90 hover:shadow-lg" style={{ fontFamily: 'Press Start 2P, monospace' }}>
            EXPLORE EVENTS
          </button>
        </div>
      <div className="lg:block hidden">
      <div className="flex justify-center ">
          <BannerCards />
        </div>
      </div>
      </div>
    </div>
    </div>
    </div>
  )
}

