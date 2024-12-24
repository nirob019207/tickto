export default function HowItWork() {
  return (
    <div className="min-h-screen bg-[#0a0a2e] py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-white text-4xl font-bold text-center mb-16">
          HOW IS IT WORK
          <div className="w-48 h-0.5 bg-white mx-auto mt-2"></div>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* First Row */}
          <div className="bg-white p-6 text-center h-[140px] flex flex-col shadow-lg rounded-xl items-center justify-center relative">
            <h2 className="font-black text-2xl mb-2 font-mono">STEP 1</h2>
            <p className="font-medium">Register Yourself</p>
            <div className="hidden md:block absolute -right-8 top-1/2 transform -translate-y-1/2">
              <div className="w-8 h-[2px] bg-[#0066ff]"></div>
              <div className="w-2 h-[2px] bg-[#0066ff] absolute right-0 top-0 rotate-45 origin-right"></div>
              <div className="w-2 h-[2px] bg-[#0066ff] absolute right-0 bottom-0 -rotate-45 origin-right"></div>
            </div>
          </div>

          <div className="bg-white p-6 text-center h-[140px] shadow-lg rounded-xl  flex flex-col items-center justify-center relative">
            <h2 className="font-black text-2xl mb-2 font-mono">STEP 2</h2>
            <p className="font-medium">Select Your Event</p>
            <div className="hidden md:block absolute -right-8 top-1/2 transform -translate-y-1/2">
              <div className="w-8 h-[2px] bg-[#0066ff]"></div>
              <div className="w-2 h-[2px] bg-[#0066ff] absolute right-0 top-0 rotate-45 origin-right"></div>
              <div className="w-2 h-[2px] bg-[#0066ff] absolute right-0 bottom-0 -rotate-45 origin-right"></div>
            </div>
          </div>

          <div className="bg-white p-6 text-center h-[140px] shadow-lg rounded-xl  flex flex-col items-center justify-center relative">
            <h2 className="font-black text-2xl mb-2 font-mono">STEP 3</h2>
            <p className="font-medium">Choose Ticket Category</p>
            <div className="hidden md:block absolute -right-8 top-1/2 transform -translate-y-1/2">
              <div className="w-8 h-[2px] bg-[#0066ff]"></div>
              <div className="w-2 h-[2px] bg-[#0066ff] absolute right-0 top-0 rotate-45 origin-right"></div>
              <div className="w-2 h-[2px] bg-[#0066ff] absolute right-0 bottom-0 -rotate-45 origin-right"></div>
            </div>
          </div>

          <div className="bg-white p-6 text-center h-[140px] shadow-lg rounded-xl  flex flex-col items-center justify-center relative">
            <h2 className="font-black text-2xl mb-2 font-mono">STEP 4</h2>
            <p className="font-medium">Fill Given Form</p>
            <div className="hidden md:block absolute bottom-0 right-1/2 transform translate-x-1/2 rotate-45 origin-bottom-right h-16 w-[2px] bg-white"></div>
          </div>
        </div>

        {/* Second Row with offset */}
        <div className="grid grid-cols-1 md:grid-cols-3 shadow-lg rounded-xl  gap-8 md:ml-[25%]">
          <div className="bg-white p-6 text-center h-[140px] flex flex-col shadow-lg rounded-xl items-center justify-center relative order-3 md:order-1">
            <h2 className="font-black text-2xl mb-2 font-mono">STEP 7</h2>
            <p className="font-medium">ALL Done<br />You are Ready to<br />Recieve Your Ticket</p>
          </div>

          <div className="bg-white p-6 text-center h-[140px] shadow-lg rounded-xl  flex flex-col items-center justify-center relative order-2">
            <h2 className="font-black text-2xl mb-2 font-mono">STEP 6</h2>
            <p className="font-medium">Make Payment</p>
            <div className="hidden md:block absolute -left-8 top-1/2 transform -translate-y-1/2">
              <div className="w-8 h-[2px] bg-white"></div>
              <div className="w-2 h-[2px] bg-white absolute left-0 top-0 -rotate-45 origin-left"></div>
              <div className="w-2 h-[2px] bg-white absolute left-0 bottom-0 rotate-45 origin-left"></div>
            </div>
          </div>

          <div className="bg-white p-6 text-center h-[140px] shadow-lg rounded-xl  flex flex-col items-center justify-center relative order-1 md:order-3">
            <h2 className="font-black text-2xl mb-2 font-mono">STEP 5</h2>
            <p className="font-medium">Select Payment Method</p>
            <div className="hidden md:block absolute -left-8 top-1/2 transform -translate-y-1/2">
              <div className="w-8 h-[2px] bg-white"></div>
              <div className="w-2 h-[2px] bg-white absolute left-0 top-0 -rotate-45 origin-left"></div>
              <div className="w-2 h-[2px] bg-white absolute left-0 bottom-0 rotate-45 origin-left"></div>
            </div>
          </div>
        </div>

        {/* Adding arrow between Step 4 and Step 5 */}
        <div className="hidden md:block absolute top-1/2 shadow-lg rounded-xl  left-[50%] transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-8 h-[2px] bg-[#0066ff]"></div>
          <div className="w-2 h-[2px] bg-[#0066ff] absolute left-0 top-0 rotate-45 origin-left"></div>
          <div className="w-2 h-[2px] bg-[#0066ff] absolute left-0 bottom-0 -rotate-45 origin-left"></div>
        </div>
      </div>
    </div>
  );
}
